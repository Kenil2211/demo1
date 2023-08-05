const itemSchema = require('../model/ItemSchema')

exports.addItem = async(req,res)=>{

    const item = (await itemSchema.create(req.body)).save()
    
    res.status(201).json({
        message:"Item Added Successfully",
        data:item
    })

}