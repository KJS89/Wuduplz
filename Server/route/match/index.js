const express = require('express')

const match = express.Router();


match.use('/',(req,res)=>{
    res.send('this is matching system')
})


module.exports=match