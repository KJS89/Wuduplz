const express = require('express')
const Json = require('json')
const app = express()
const cors = require('cors')
const front = require('./route/front-end/front-end')
const match = require('./route/match/index')
const recommend = require('./route/recommendation/index')

const datas = require('./data/posts')

const createTable = require('./mysql/actions/createTable')
const crud = require('./mysql/actions/crud.js')
require('./mysql/actions/connecting')
//createTable()
//require('./mysql/createDatabase')
const action = new crud();
app.use(cors());


//action.insert({name:'yujian111',address:'china111'},'customers')


//address request from front-end
app.use('/front-end',front)

//address request from User matching system
app.use('/matching',match)

//address request from recommendation system
app.use('recommendation',recommend)


//test return data to video page
app.get('/data', (req,res)=>{
    //console.log('sending')
    res.send(datas)
})

app.listen(3000,()=>{
    console.log('I am listening')
})