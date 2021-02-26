const express = require('express')
const promisify = require('util').promisify
const connection = require('../../../../mysql/actions/connection')
var os = require('os');
var networkInterfaces = os.networkInterfaces();
const router = express.Router()

// userImage: 'https://t1.ea.ltmcdn.com/en/images/1/7/1/20_white_cat_breeds_full_list_3171_orig.jpg',
// username: '@daviddobrik',
// videoId: '1',
// videoDescription: 'here is my white cat!'


router.get('/:userid',async(req,res)=>{
    var userid = req.params.userid
    const Query = await promisify(connection.query.bind(connection))
    
    let sqlRequest = `select RequestImagePath as img, RequestContent as requestMessage,IfRespond as responseCount, RequestId
                      from request
                     where request.UserId = '${userid}'`

    let requests = await Query(sqlRequest)

    
    var baseUri =[]
    if(networkInterfaces['WLAN'][1]['family']=='IPv6'){
       baseUri.push('http://[') 
       baseUri.push(']:3000')
    }else if(networkInterfaces['WLAN'][1]['family']=='IPv4'){
        baseUri.push('http://') 
        baseUri.push(':3000')
    }
    for(var i = 0 ; i<requests.length; i++){
        let sqlResponse = `select user.UserName as username, user.PhotoPath as userImage, video.VideoId as videoId,
                        video.VideoShortDescrtption as videoDescription
                        from user
                        inner join response
                        on user.UserId = response.UserId
                        inner join video 
                        on response.VideoId = video.VideoId
                        inner join request_response_relationship
                        on request_response_relationship.ResponseId = response.ResponseId
                        where request_response_relationship.RequestId= '${requests[i].RequestId}'`
        let responses = await Query(sqlResponse)
        requests[i]['responses'] =responses
        requests[i]['img'] = baseUri[0]+networkInterfaces['WLAN'][1]['address']+baseUri[1]+requests[i]['img'].split('|').join('//')
        requests[i]['responseCount'] = requests[i]['responseCount'] + ' users have responded!'
   
    }
    
    console.log(requests)
    
    res.send(requests)
})


module.exports=router;