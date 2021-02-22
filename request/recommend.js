const express = require('express')
const promisify = require('util').promisify
const connection = require('../../../../mysql/actions/connection')
var os = require('os');
var networkInterfaces = os.networkInterfaces();

const router = express.Router()

router.get('/:userid',async(req,res)=>{

    const Query = await promisify(connection.query.bind(connection))

    var userid = req.params.userid;

    let sqlUser = `select keyword.KeywordId as keywords 
                    from user_keyword_relationship
                    left join keyword
                    on keyword.KeywordId = user_keyword_relationship.KeywordId
                    where user_keyword_relationship.UserId='${userid}'`

    let user = await Query(sqlUser)

    var keywords = []
    for(var i=0; i<user.length;i++){
        keywords.push(user[i].keywords)
    }
    //result[0].keywords = result[0].keywords.split('|')

    var videosId = {}


    
    for(var i = 0; i<keywords.length;i++){
        let sqlVideo = `select keyword.KeywordContent as KeywordContent,video_keyword_relationship.VideoId as VideoId
                        from video_keyword_relationship
                        left join keyword
                        on video_keyword_relationship.KeywordId = keyword.KeywordId
                        where video_keyword_relationship.KeywordId = '${keywords[i]}'
                        `
        let video = await Query(sqlVideo)
        if(video!=[]){
            video.forEach((value,index)=>{
                if(index==0)
                    videosId[value.KeywordContent] = []
                videosId[value.KeywordContent].push(value.VideoId)
            })
        }


    }

    //console.log(videosId)

    let result = {}

    for(var key of Object.keys(videosId)){
        for(var i = 0; i<videosId[key].length; i++){
            let sqlCreator = `select user.UserId as id,user.UserName as username,user.PhotoPath as imageUri
                                from user
                                left join video
                                on user.Userid = video.VideoCreatorId
                                where video.VideoId='${videosId[key][i]}'`

            let users = await Query(sqlCreator)
            
            let sqlVideo = `select video.VideoPath as videoLocation,video.VideoId as video_id,video.VideoShortDescrtption as description
                            from video
                            where video.VideoId ='${videosId[key][i]}' `

            let videos = await Query(sqlVideo)


            let sqlLikes = `select count(*) as likes
                            from thumb
                            where thumb.VideoId='${videosId[key][i]}'`

            
            let likes = await Query(sqlLikes)

            let sqlComments = `select count(*) as comments
                                from comment
                                where comment.VideoId='${videosId[key][i]}'`

            let comments = await Query(sqlComments)

            var video = videos[0]
    

            video['creator'] = users[0]
            video['likes']= likes[0]['likes']
            video['comments']=comments[0]['comments']
            video['videoLocation'] = networkInterfaces['WLAN'][1]['address']+':3000' + video['videoLocation'].split('|').join('//')
            video['creator']['imageUri'] = video['creator']['imageUri'].split('|').join('//')

          

             if(i==0){
                 //console.log(key)
                 result[key] = []
             }
             result[key].push(video)
            // console.log(result)

            //result.push(video)
    }
}

    console.log(Object.keys(result))

    res.send(result)


})

module.exports=router;