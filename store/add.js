'use strict'
var store = require(config.dir_application + '/model/store')

module.exports = (req, res)=>{
    var new_store = new store({ ...req.body })
    new_store.save((error)=>{
        if(error) throw error

        res.send('successfully add to db')
    })
}