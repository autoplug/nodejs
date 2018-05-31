'use strict'
var fs = require('fs')

module.exports = (data, route)=>{
	var output = fs.readFileSync('./view/' + route + '.html','utf8')

	Object.keys(data).forEach(key=>{
		if(typeof data[key] == 'object'){
			var start = output.indexOf( '@{' + key + '@')
			var content = output.slice(start)
			var end = content.indexOf('}')
			content = content.slice(0, end)
			content = content.replace('@{' + key + '@','')
			content = content.replace( '}', '')
			var content_array = ''
			if(!data[key])
				console.log(key)
			data[key].forEach(result=>{
				var statement = content
				Object.keys(result).forEach(key2=>{
					while(statement.indexOf('@' + key2 + '@')>-1)
						statement = statement.replace('@' + key2 + '@', result[key2])
				})
				content_array = content_array + statement
			})
			output = output.slice(0,start) + content_array + output.slice(start + end + 1)
		}
	})

	Object.keys(data).forEach(key=>{
		if(typeof data[key] != 'object'){
			while(output.indexOf('@' + key + '@')>-1)
				output = output.replace('@' + key + '@', data[key])
		}

	})

	return output
}



