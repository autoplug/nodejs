'use strict'
var mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${config.database}`)
var Schema = mongoose.Schema

var userSchema = new Schema({
    name : String,
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    permission : Array,//access and modify
    date_added : Date,
    date_modified : Date,
    status : Boolean,
})

userSchema.pre('save', function(next){
    var currentDate = new Date()

    this.date_modified = currentDate

    if (!this.date_added)
        this.date_added = currentDate

    next()
})

var user = mongoose.model('user', userSchema)

module.exports = user