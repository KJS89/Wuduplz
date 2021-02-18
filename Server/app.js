const express = require('express')
const fs = require('fs')
const Json = require('json')
const app = express()
const cors = require('cors')
const front = require('./route/front-end/front-end')
const match = require('./route/match/index')
const recommend = require('./route/recommendation/index')
//const formidableMiddleware = require('express-formidable');
const path = require('path')

//const datas = require('./data/posts')

const createTable = require('./mysql/actions/createTable')
const crud = require('./mysql/actions/crud')
require('./mysql/actions/connecting')
//createTable()
//require('./mysql/createDatabase')
const action = new crud();
//app.use(cors());

//action.insert({name:'yujian111',address:'china111'},'customers')
app.use(express.static(__dirname +'/public'))
//body-parser middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// app.use(formidableMiddleware({
//     uploadDir: path.join(__dirname, 'public', 'images'),
// 	maxFileSize: 8 * 1024 * 1024,
// 	keepExtensions: true
// }));


//address request from front-end
app.use('/front-end',front)

//address request from User matching system
app.use('/matching',match)

//address request from recommendation system
app.use('/recommendation',recommend)

app.post('/test',async(req,res)=>{
    var params = req.body
    const path = params.path
    console.log(path)
    const reader = fs.createReadStream(path);

    let filepath = "G:\\test\\Server\\public\\images\\sb1.jpeg"
    const upStream = fs.createWriteStream(filepath);  

    reader.pipe(upStream);
    res.send({
        result:'success'
    })
})


//test return data to video page
// app.get('/data', (req,res)=>{
//     //console.log('sending')
//     res.send(datas)
// })

app.listen(3000,()=>{
    console.log('I am listening')
})