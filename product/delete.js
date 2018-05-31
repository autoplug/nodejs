'use strict'
var product = require('../model/product')

module.exports = (req, res)=>{
	product.findOne({ _id : req.params._id })
	.then((_product)=>{
		_product.remove((error)=>{
			if(error)
				console.log(error)
			else
				res.send({ success : true })
		})
	})
    
}