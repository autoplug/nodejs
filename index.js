'use strict'

var express = require('express')
var app = express()

global.config = require('./config')

var admin = require('./admin/index.js')


app.use('/admin-api/', admin)




app.listen(config.port)