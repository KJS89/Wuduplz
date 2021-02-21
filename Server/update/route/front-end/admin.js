const express = require('express')

const admin = express.Router()

admin.use('/',(req,res)=>{
    res.send("the null admin")
})

admin.use('/index',(req,res)=>{
    res.send('this is admin')
})

module.exports=admin;