const express = require('express')

const front = express.Router()
const admin = require('./admin')


front.get('/admin',admin)

module.exports=front;