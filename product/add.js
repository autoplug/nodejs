'use strict'

var product = require('../model/product')

module.exports = (req, res)=>{

	var new_product = new product({ ...req.body })
	 new_product.save((error)=>{
	 	if(error) throw error

	 	res.send({ success : true })
	 })
}