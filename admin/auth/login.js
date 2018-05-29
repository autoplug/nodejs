'use strict'

module.exports = (req, res)=>{
    var data = {}
    data['validate'] = true
    
    res.status(200).send(JSON.stringify(data))
} 