'use strict'

var express = require('express')
var router = express.Router()

var login = require('./auth/login.js')

router.all('/login', login)

module.exports = router