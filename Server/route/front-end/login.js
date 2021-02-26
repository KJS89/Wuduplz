const express = require('express')
const session = require('cookie-session')
const formidable = require('formidable')
const path = require('path')
const crud = require('../../mysql/actions/crud')
const login = express.Router();
const schema = require('../../mysql/schema')
const action = new crud()
const connection = require('../../mysql/actions/connection')

login.use(session({
    name:'loginSession',
    keys:['huyujian']
}))

//login.use(bodyParser.json())

//receive data {username:String, password:String}
login.post('/index',(req,res)=>{
    //check the user in database, return the result
    console.log('this is login index')
    console.log(req.body)
    var userInfo = {email:'425786225@qq.com',password:'1234456'}

    req.session.userInfo = userInfo

    res.send('Login success')
})

login.get('/status',(req,res)=>{
    console.log('visited')
    if (req.session && req.session.userInfo && req.session.userInfo.role == 'admin') {
        const s = `var isLogin = true; var userId=\"${req.session.userInfo._id}\"`
		res.send(s)
	}else {
		res.send('var isLogin = false')
	}
})

//sign up and create a new account
login.post('/users',(req,res)=>{
   
    var fields = req.body

    let values = [];
    for(const key of Object.keys(fields)){
        if(key == 'PhotoPath'){
            values.push(fields[key].split("\\").join('|'))
        }else{
            values.push(schema.user[key](fields[key]))
        }
    }

    console.log(Object.keys(fields))

    values.forEach((value,key)=>{

        if(typeof(value)=='string'){
        
         values[key] = '\''+ value + '\''
        }
    })
    let value = "(uuid()," + values.join(',') + ")"

    let columns = "( UserId," + Object.keys(fields).join(',') + ")"
    // console.log(value)
    // console.log(columns)

    let sql = `INSERT INTO user ${columns} VALUES ${value}`;
    //console.log(sql)
    connection.query(sql,(err,result)=>{
        if(err){
            res.send(err);
        }else{
            res.send('insert success')
        }
    })
//action.insert(str,'user',res)
   
})

login.post('/upload',(req,res)=>{
    console.log(req.file)
    const form = new formidable.IncomingForm();
    var c = __dirname.split('\\').slice(0,3).join('/')
    form.uploadDir = path.resolve(__dirname,'../../public','images')
    console.log(form.uploadDir)

    form.keepExtensions=true

    
    form.parse(req,(err,fields,files)=>{
        console.log(fields)
        res.send({
            path:files.avatar.path.split('public')[1]
        })
    })
})

login.post('/validate',async(req,res)=>{
    var params = req.body
    params.colName = 'UserName'
    params.colValue= 'yujian'
    var result = await action.findOne(params,'user')
    if(result){
        if(params.Password == result.Password){
                res.send('success!')
            }else{
                res.send('not matched')
            }
    }else{
        res.send('searching error')
    }

})


login.post('/update',async(req,res)=>{
    var param = req.body
    // {UserName:'', Password:'',...}
    var params = {
        colName:[],
        colValue:[],
        upDateIdName:'UserId',
        upDateId:0
    }


    for(key in param){
        if(key != 'UserId'){
            params.colName.push(key)
            params.colValue.push(param[key])
        }
    }

    params.upDateId = param.UserId

    console.log(params)

    let result = await action.upDate(params,'user')

    res.send(param)

    
    
})

login.get('/fetchAll',async (req,res)=>{
    console.log('fetchall')
    let result = await action.findAll('user')
    console.log(result)
    res.send(result)
})

login.get('/fetch/:UserId',async (req,res)=>{
    var UserId = req.params.UserId
    var params = {}
    params.colName = 'UserId'
    params.colValue = UserId
    let result = await action.findOne(params,'user')
    //result = JSON.parse(result)
    console.log(result)
    res.send(result)
})










module.exports=login