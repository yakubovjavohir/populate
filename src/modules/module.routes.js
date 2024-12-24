import { Router } from "express";
import {productRouter} from "./product/product.routes.js"
import { categoryRouter } from "./category/category.routes.js";
import { product_category_Routes } from "./product-category/product-category.routes.js";
const router = Router()

router.use("/product", productRouter)
router.use("/category", categoryRouter)
router.use("/product-category", product_category_Routes)
export {router}