'use strict'
var crypto = require('crypto')
module.exports = {
	random_byte : (count)=>{
		//crypto.pseudoRandomBytes(count)
		var byte = "QWERTYUIOPLKJHGFDSAZXCVBNMqpoiuytrewlkjhgfdsamnbvcxz1234567890"
		var result = ''
		for(var i = 0; i < count; i++){
			var rnd = parseInt(Math.random() * byte.length)
			result += byte[rnd]
		}
		return result
	},
	slug : (arg)=>{
		arg = decodeURI(arg)
		arg = arg.trim()
		arg = arg.replace(/ /g,'-')
		arg = arg.replace(/'/g,'')
		arg = arg.replace(/"/g,'')		
		arg = arg.toLowerCase()
		return arg
	},
	md5 : (arg)=>{
		return crypto.createHash('md5').update(arg).digest('hex')
	},
	statistics : (req)=>{
		var data = []
		data['uri'] = req.uri
		data['date_added'] = new Date(Date.now()).toISOString()
		dbo.collection('statistics').insertOne({ ...data })
	},
	price(arg){
		return String(arg).replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,') + ' ریال '
	},
	strip_html_tags(arg){
		if ((arg === null) || (arg === ''))
			return ''
		else
			arg = arg.toString()
		return arg.replace(/<\/?[^>]+(>|$)/g, '')
	}


	
}