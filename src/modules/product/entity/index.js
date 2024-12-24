import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName : { type:String, required:true },
    productPrice : { type:Number, required:true },
    productCount : { type:Number, required:true }
})

const ProductModel = mongoose.model("Product", productSchema, "products")

export {ProductModel}