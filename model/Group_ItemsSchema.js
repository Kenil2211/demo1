const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupItemSchema = new Schema({

    name:{
        type:String,
    },
    items:[
        {
            type:Schema.Types.ObjectId,
            ref:'Items'
        }
    ]  
})

module.exports = mongoose.model('Groups',groupItemSchema)