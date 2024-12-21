import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
    PhoneID : { type:Number, required:true },
    phoneName : { type:String, required:true },
    phoneBrand : {type:String, required:true},
    phonePrice : { type:Number, required:true },
    phoneCount : { type:Number, required:true }
})

const PhoneModel = mongoose.model("telephon", phoneSchema)

export {PhoneModel}