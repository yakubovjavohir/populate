import { Router } from "express";
import {categoryController} from "./category.controller.js"

const router = Router()

router.get("/", categoryController.getAll.bind(categoryController))
router.post("/", categoryController.create.bind(categoryController))
router.delete("/:id", categoryController.delete.bind(categoryController))
router.get("/:id", categoryController.getOne.bind(categoryController))


export {router as categoryRouter}