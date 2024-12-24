import { Router } from "express";
import { productController } from "./product.controller.js";

const router = Router()

router.get("/", productController.getAll.bind(productController))
router.post("/", productController.create.bind(productController))
router.delete("/:id", productController.delete.bind(productController))
router.get("/:id", productController.getOne.bind(productController))



export {router as productRouter}