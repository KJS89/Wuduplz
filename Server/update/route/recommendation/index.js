const express = require('express')

const rec = express.Router();


rec.use('/',(req,res)=>{
    res.send('this is recommendation system')
})

 module.exports=rec;