import { Router } from "express";
import {product_category_controller} from "./product-category.controller.js"


const router = Router()

router.get("/", product_category_controller.getAll.bind(product_category_controller))
router.post("/", product_category_controller.create.bind(product_category_controller))
router.delete("/:id", product_category_controller.delete.bind(product_category_controller))


export {router as product_category_Routes}