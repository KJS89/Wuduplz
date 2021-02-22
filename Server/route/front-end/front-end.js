const express = require('express')


const front = express.Router()



front.use('/admin',require('./admin'))

front.use('/login',require('./login'))

front.use('/video',require('./video'))

front.use('/comment',require('./action/comment/comment'))
front.use('/home',require('./action/homepage/home'))
front.use('/like',require('./action/homepage/like'))
front.use('/getRequest',require('./action/request/getRequest'))
front.use('/getComment/:videoId',require('./action/comment/content'))
front.use('/videoRecommendation',require('./action/request/recommend'))

//front.use()


module.exports=front;