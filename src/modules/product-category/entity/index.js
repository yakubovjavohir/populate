import mongoose from "mongoose";

const productCategorySchema = new mongoose.Schema({
    ProductID: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    CategoryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});  

const Product_Category_Model = mongoose.model("ProductCategory", productCategorySchema)

export {Product_Category_Model}