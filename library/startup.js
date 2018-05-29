'use strict'

var Mongodb = require('mongodb')
global.ObjectId = Mongodb.ObjectId

global.dbo = ''
Mongodb.MongoClient.connect( 'mongodb://localhost:27017/', function(err, db) {
	if (err) throw err
	dbo = db.db(config.database)
	
	//load config
	dbo.collection('config').find().toArray()
	.then((configs)=>{
		configs.forEach((_config)=>{
			config[_config.name] = _config.value
		})
	})
})

// global.image = require( './image.js')
// global.language = require( './language.js')
// global.helper = require( './helper.js')
// global.view = require( './view.js')



