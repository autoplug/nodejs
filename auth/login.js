'use strict'
var user = require(config.dir_application + '/model/user')

module.exports = (req, res)=>{
    var data = {}
    data['validate'] = false
    if(req.body.username && req.body.password){
        user.findOne({ username : req.body.username, password : req.body.password })
        .then(user =>{
            if(user){
                data['validate'] = true
                var user_token = helper.random_byte(32)
                res.cookie('user_token', user_token)
                dbo.collection('user').updateOne({ username : req.body.username },{ $set : { user_token } })
                res.send(JSON.stringify(data))
            }else{
                data['error'] = 'there is not user in the db'
                res.send(JSON.stringify(data))
            }
        })
        .catch(error=>{
            data['error'] = 'there was an error'
            res.send(JSON.stringify(data))
        })
    }else{
        data['error'] = 'there is an error'
        res.send(JSON.stringify(data))
    }
}