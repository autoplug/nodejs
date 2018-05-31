'use strict'
var fs = require('fs')
const sharp = require('sharp')

module.exports = (image_old)=>{
	image_old = image_old || ''
	image_old = decodeURI(image_old)
	var data = []

	data['thumb'] = (_ratio)=>{
		_ratio = _ratio || 1
		return resize( 'thumb', 80 * _ratio, 80)
	}

	data['small'] = (_ratio)=>{
		_ratio = _ratio || 1
		return resize( 'small', 250 * _ratio, 250)
	}

	data['medium'] = (_ratio)=>{
		_ratio = _ratio || 1
		return resize( 'medium', 600 * _ratio, 600)
	}

	data['large'] = (_ratio)=>{
		_ratio = _ratio || 1
		return resize( 'large', 1200 * _ratio, 1200)
	}

	function resize(size, width, height){
		var image_new = image_old.replace('catalog', size)
		image_new = image_new.replace('//','/')
		
		fs.access(config.dir_image + image_old, (error)=>{
			if(error){
				return ''
			}

			try{
				fs.accessSync(config.dir_image + '/' + image_new)
				return //config.site_url + 'image/' + image_new	
			}catch(error){

			}
			
			var path_array = image_new.split('/')
			path_array.pop()

			var create_folder = ''
			path_array.forEach(name=>{
				create_folder += name + '/'
				try{
					fs.accessSync(config.dir_image + create_folder)
					
				}catch(error){
					fs.mkdirSync(config.dir_image + create_folder)
				}
			})
			
			sharp(config.dir_image + image_old)
			.resize( width, height)
			.crop(sharp.strategy.entropy)
			.on('error',(error)=>{
				if(error)
					return console.log(err)
			})
			.toFile(config.dir_image + image_new,(error,info)=>{
				if(error)
					return console.log(error)
			})				
		})

		return config.site_url + 'image/' + encodeURI(image_new).replace(/'/g,"%27").replace(/"/g,"%22")
	}
	
	return data
}