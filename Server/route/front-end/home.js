const express = require('express')

const home = express.Router()


home.get('/index',(req,res)=>{
    res.send('this is home')
})

module.exports=home;