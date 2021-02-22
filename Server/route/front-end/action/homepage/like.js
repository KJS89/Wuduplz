const express = require('express')
const connection = require('../../../../mysql/actions/connection')

const like = express.Router()

like.post('/',async (req,res)=>{
    var params = req.body
    console.log(params)
    var userid = params.UserId
    var videoid = params.VideoId
    var date = new Date();
    var sql = ""
    if(!params.islike){
        sql =`DELETE FROM thumb WHERE UserId='${userid}' AND VideoId='${videoid}'`
        //console.log(sql)
    }else{
        sql = `INSERT INTO thumb VALUES (uuid(),'${videoid}','${userid}',${null})`;
       // console.log(sql)
    }
    connection.query(sql,(err,result)=>{
        res.send(result)
    })
    
})


module.exports = like