const express = require('express')
const promisify = require('util').promisify
const connection = require('../../../../mysql/actions/connection')

const router = express.Router()

router.get('/',async(req,res)=>{
    const Query = await promisify(connection.query.bind(connection))
    
    let sql = `select RequestImagePath as img, RequestContent as user,IfRespond as message from request`

    let result = await Query(sql)

    for(var i = 0 ; i<result.length; i++){
        result[i]['img'] = 'http://192.168.2.94:3000'+result[i]['img'].split('|').join('\\')
        result[i]['message'] = result[i]['message'] + ' users have responded!'
   
    }
    
    
    res.send(result)
})


module.exports=router;