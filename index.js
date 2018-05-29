'use strict'

var express = require('express')
var app = express()

var bodyParser = require('body-parser')

global.config = require('./config')
require( './library/startup.js')

var admin = require('./admin/index.js')
var catalog = require('./catalog/index.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))

app.use('/admin-api/', admin)

app.use('/api/', catalog)


app.listen(config.port)