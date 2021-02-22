const express = require('express')

const message = express.Router()

//get data from database and present them 
message.get('/show',(req,res)=>{

    res.send(data)
})

//get notification from database and return 
message.get('/notification',(req,res)=>{

    res.send(data)
})

//get interactive data from database and return 
message.get('/interactive',(req,res)=>{

    res.send(data)
})