const companySchema = require('../model/Company_MakeSchema')

exports.addCompany = async(req,res)=>{

    try{
        if((await companySchema.find({name:req.body.name})).length>0)
        {
            throw new Error("Company Already Exists")
        }
        const company =await companySchema.create(req.body)
       
        res.status(201).json({
            message:"Company Added",
            data:company
        })
    }catch(err)
    {
        console.log(err);
        res.status(400).json({
            error_message:err.message,
            error:err
        })
    }
}