'use strict'

var express = require('express')
var app = express()

global.config = require('./config')

var admin = require('./admin/index.js')
var catalog = require('./catalog/index.js')

app.use('/admin-api/', admin)

app.use('/api/', catalog)


app.listen(config.port)