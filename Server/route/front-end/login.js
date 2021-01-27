const express = require('express')
const bodyParser=require('body-parser')
const login = express.Router();

//receive data {username:String, password:String}
login.post('/index',(req,res)=>{
    //check the user in database, return the result
    if(flag){
        res.send('login success')
    }else{
        res.send('fail')
    }
   
})

//sign up and create a new account
login.get('/sign',(req,res)=>{
    res.send('try to sign up')
})