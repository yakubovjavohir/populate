import { Router } from "express";
import { phoneController } from "./phone.controller.js";

const router = Router()

router.get("/get-All", phoneController.getAll.bind(phoneController))
router.post("/create", phoneController.create.bind(phoneController))
router.delete("/delete/:id", phoneController.delete.bind(phoneController))


export {router as phoneRouter}