'use strict'
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var productSchema = new Schema({
    name : { type : String, required : true },
    slug : String,
    description : String,
    image : Array,
    price : Number,
    quantity : Number,
    viewed : Number,
    date_added : Date,
    date_modified : Date,
    status : { type : Boolean, default : false },
})

productSchema.pre('save',function(next){
    
    this.slug = this.slug || this.name
    this.slug = helper.slug(this.slug)

    next()
})

var product = mongoose.model('product', productSchema)

module.exports = product