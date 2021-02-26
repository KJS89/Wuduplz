
const connection = require('../../../../mysql/actions/connection')

module.exports = async ( req , res) => {
        var params = req.body
        console.log(params)
        var sql = `INSERT INTO comment (CommentId,CommentContent,CommentatorId,CommentDate,ThumberNumber,VideoId) 
        VALUES (uuid(),'${params.CommentContent}','${params.CommentatorId}',
        ${params.CommentDate},${params.ThumberNumber},'${params.videoId}')`
        console.log(sql)
        connection.query(sql,(err,result)=>{
                
                res.send(result)
        })
        
}