'use strict'

module.exports = (req, res)=>{
    dbo.collection('store').deleteOne({ _id : ObjectId(req.params._id) })
    .then(store=>{
        res.send(`send response to delete ${req.params._id}`)
    })
}