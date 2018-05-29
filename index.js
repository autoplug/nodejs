var express = require('express')
var app = express()

var config = require('./config')

app.get('/',(req, res)=>{
    res.send('test')
})

app.listen(config.port)