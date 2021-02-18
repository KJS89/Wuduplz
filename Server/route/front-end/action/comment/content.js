const connection = require('../../../../mysql/actions/connection')
var os = require('os');
var networkInterfaces = os.networkInterfaces();



module.exports = async(req,res)=>{
    var videoId = req.params.videoId
    let sql = `select user.UserName as username, user.PhotoPath as photopath,comment.CommentContent as content,
                comment.CommentDate as commentdate,comment.ThumberNumber as thumbers
                from comment 
                inner join user
                on comment.CommentatorId = user.UserId
                where VideoId = '${videoId}'`
    connection.query(sql,(err,result)=>{
   
        result.forEach((value,index)=>{
           value['BaseUri']=networkInterfaces['WLAN'][1]['address']+':3000'
           if(value['photopath']!=null)
            value['photopath']=value['photopath'].split('|').join('//')
           //     console.log(item)
        })
        console.log(result)
        res.send(result)
    })
    
}