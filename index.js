'use strict'

var express = require('express')
var app = express()

var bodyParser = require('body-parser')
// var cookieParser = require('cookie-parser')
// var session = require('express-session')

global.config = require('./config')
require( './library/startup.js')

var route = require('./common/route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
// app.use(cookieParser())
// app.use(session({ secret : "Your secret key" }))

app.use('/api/', route)

app.use((req, res, next)=>{
    res.status(404).send('404 page custome page');
})

app.listen(config.port)