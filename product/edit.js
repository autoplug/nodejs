'use strict'
var product = require('../model/product')

module.exports = (req, res)=>{
	product.updateOne({ _id : req.params._id },{ $set : { ...req.body } })
	.then((product)=>{
		res.send({ success : true })
	})
}