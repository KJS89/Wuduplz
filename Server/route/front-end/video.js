const express = require('express')
const crud = require('../../mysql/actions/crud')
const fs = require('fs')
const path = require('path')
const url = require('url')
const video = express.Router()
const action = new crud()


//set the video type and store in database
video.get('/getData',(req,res)=>{
       action.findAll('video',res)
        //console.log(result)
        // var result1 = JSON.stringify(result)
        // console.log(result1)
        // res.send(result)
  
})


video.get('/likes/:id/:flag',(req,res)=>{
    var id = req.params.id
    var flag = req.params.flag
    // console.log(flag)
     action.minusById(id,flag,'video','Likes',res)
    // res.json(result)
})


video.get('/select/:id',(req,res)=>{
    var id = req.params.id
    // console.log(flag)
     action.findById(id,'video',res)
    // res.json(result)
})

video.get('/fetch/:path',(req,res)=>{
    
    var pathname = req.params.path;

    //let baseUrl ='G:/test/Server/'
    let realPath = path.resolve(__dirname,'../../videos',pathname)

    console.log(realPath)
    res.render(realPath)
    // fs.readFile(realPath,(err,result)=>{
    //     if(err !=null){
    //         res.send('video loading failed')
    //         return;
    //     }
        
    //     res.send(result);

    // })
    
})

video.post('/uploadVideos',(req,res)=>{
    const form = new formidable.IncomingForm();
    form.uploadDir = path.resolve(__dirname,'../../public','videos')
    form.keepExtensions=true

    console.log(form.uploadDir)

    form.parse(req,(err,fields,file)=>{
        console.log(file.avatar.path)
        res.send({
            path:file.avatar.path.split('\\').slice(3,6).join('|')
        })
    })
})


module.exports=video;