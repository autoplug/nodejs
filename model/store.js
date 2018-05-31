'use strict'
var mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${config.database}`)

var Schema = mongoose.Schema

var storeSchema = new Schema({
    name : { type : String, required : true },
    mobile : { type : String },
    address : String,
    password : String,
    date_added : Date,
    date_modified : Date,
    status : Boolean,
})

storeSchema.pre('save', function(next){
    var currentDate = new Date()

    if(!this.date_added)
        this.date_added = currentDate
    
    this.date_modified = currentDate

    next()
})

var store = mongoose.model('store', storeSchema)

module.exports = store