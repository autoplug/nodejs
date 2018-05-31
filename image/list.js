'use strict'
var fs = require('fs')
var url = require('url')
var path = require('path')

module.exports = (req, res)=>{
	var data = {}
	var directory = req.query['directory'] ? req.query['directory'] : ''

	var base = config.dir_image + 'catalog/'  + directory + '/'
	var extensions = ['.jpg', '.png', '.jpeg']
	var directories = []
	var images = []
	var thumbs = []

	var files = fs.readdirSync(base)
	files.forEach(file => {
		if(fs.lstatSync( base + file ).isDirectory()){
			directories.push(file)
		}else{// if(fs.lstatSync( base + file ).isFile())
			if(extensions.indexOf(path.extname(file).toLowerCase()) > -1){
				images.push(file)
				thumbs.push(image('catalog/' + directory  + '/' + file).thumb() ) 
			}
		}
	})		

	data['images'] = images
	data['directories'] = directories
	data['thumbs'] = thumbs

	res.send(JSON.stringify(data))
}