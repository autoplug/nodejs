'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var customerSchema = new Schema({
    name : String,
    mobile : String,
    address : String,
    date_added : Date,
    status : Boolean,
})

var customer = mongoose.model('customer', customerSchema)

module.exports = customer