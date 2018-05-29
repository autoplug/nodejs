'use strict'

module.exports = (req, res)=>{
    var data = {}
    
    if(req.body.username == 'admin' && req.body.password == '7070'){
        data['validate'] = true
        res.send(JSON.stringify(data))
    }
    else{
        data['validate'] = false
        data['error'] = 'there is an error'
        res.send(JSON.stringify(data))
    }
} 