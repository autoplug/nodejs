'use strict'
var product = require('../model/product')

module.exports = (req, res)=>{
    var page = (parseInt(req.query.page)-1) || 0
    var sort = req.query.sort || '_id'
    var order = parseInt(req.query.order) || 1
    product.find().limit(20).sort({ [sort] : order }).skip( page * 20 )
    .then((_stores)=>{
        res.send({ result : _stores })
    })
}