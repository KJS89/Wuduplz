const express = require('express')

const admin = express.Router()


admin.use('/',(req,res)=>{
    res.send('this is admin')
})

module.exports=admin;