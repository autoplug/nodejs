'use strict'
module.exports = (req, res)=>{
    dbo.collection('store').updateOne({ _id : ObjectId(req.params._id) },{ $set : { ...req.body }})
    .then(store=>{
        res.send('store edited successfully')
    })
}