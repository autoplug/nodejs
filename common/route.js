'use strict'

var express = require('express')
var router = express.Router()

//Image route
var image_list = require('../image/list')
router.all('/image/', image_list)

var image_add = require('../image/add')
router.all('/image/add', image_add)

//Userv Auth route
var login = require('../auth/login')
router.all('/login/', login)

var logout = require('../auth/logout')
router.all('/logout/', logout)

//Store route
var store_list = require('../store/list')
router.all('/store/', store_list)

var store_add = require('../store/add')
router.all('/store/add/', store_add)

var store_edit = require('../store/edit')
router.all('/store/edit/:_id', store_edit)

var store_delete = require('../store/delete')
router.all('/store/delete/:_id', store_delete)

//Product route
var product_list = require('../product/list')
router.all('/product/', product_list)

var product_add = require('../product/add')
router.all('/product/add', product_add)

var product_edit = require('../product/edit')
router.all('/product/edit/:_id', product_edit)

var product_delete = require('../product/delete')
router.all('/product/delete/:_id', product_delete)



module.exports = router