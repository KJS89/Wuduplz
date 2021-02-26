const express = require('express')
const promisify = require('util').promisify
const connection = require('../../../../mysql/actions/connection')
var os = require('os');
var networkInterfaces = os.networkInterfaces();
const home = express.Router()


home.get('/:videoId',async (req,res)=>{
    //console.log('home')
    const Query = await promisify(connection.query.bind(connection))
    var id = req.params.videoId;


    let sqlUser = `SELECT user.UserId as id, user.UserName username,user.PhotoPath as imageUri
                    from user
                    left join video
                    on user.UserId = video.VideoCreatorId
                    where video.VideoId='${id}'`

    var user = await Query(sqlUser)

    let sqlVideo = `select video.VideoId as VideoId,video.VideoPath as videoLocation, video.VideoShortDescrtption as description,video.VideoShares as shares
                    from video
                    where video.VideoId = '${id}'`

    var video = await Query(sqlVideo)

    let sqlLikes = `select count(*) as likes
                    from thumb
                    where thumb.VideoId='${id}'`

    var likes = await Query(sqlLikes)

    let sqlComments = `select count(*) as comments
                        from comment
                        where comment.VideoId='${id}'`

    var comments = await Query(sqlComments)



    var result = video[0]


    result['creator'] = user[0]
    result['likes']= likes[0]['likes']
    result['comments']=comments[0]['comments']
    var baseUri =[]
    if(networkInterfaces['WLAN'][1]['family']=='IPv6'){
       baseUri.push('http://[') 
       baseUri.push(']:3000')
    }else if(networkInterfaces['WLAN'][1]['family']=='IPv4'){
        baseUri.push('http://') 
        baseUri.push(':3000')
    }
    console.log(result)
    result['videoLocation'] = baseUri[0]+networkInterfaces['WLAN'][1]['address']+baseUri[1]+result['videoLocation'].split('|').join('//')
    result['creator']['imageUri'] =baseUri[0]+ networkInterfaces['WLAN'][1]['address']+baseUri[1]+result['creator']['imageUri'].split('|').join('//')
    console.log(result)
    //console.log(result)
    res.send(result)   

    // connection.query(sql,(err,result)=>{
    //         var re =  {
    //                 VideoId:null,
    //                 videoUri:null,
    //                 user:{
    //                     id:null,
    //                     username:null,
    //                     imageUri:null
    //                     },
    //                 Description:null,
    //                 RequestedBy:null,
    //                 likes:null,
    //                 comments:null,
    //                 shares:null,
    //                 RequestId:null
    //             }

    //         for(key in result[0]){
    //             if(key.includes('User')){
    //                 re['user'][key.slice(4,)] = result[0][key]
    //             }else{
    //                 re[key] = result[0][key]
    //             }
    //         }

    //         re['private'] = true
    //         re['user']['imageUri']=re['user']['imageUri'].split('||').join('/')
    //         //console.log(re)

    //         res.send(re)
    //     })

        
})
    






            

module.exports=home;