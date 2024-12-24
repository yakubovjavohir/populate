import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : { type:String, required:true }
})

const CategoryModel = mongoose.model("Category", categorySchema, "categories")

export {CategoryModel}