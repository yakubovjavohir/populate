import { Router } from "express";
import {appController} from "./phone.controller.js"

const router = Router()

router.get("/", appController.getAll.bind(appController))
router.post("/", appController.create.bind(appController))
router.delete("/:id", appController.delete.bind(appController))
router.get("/:id", appController.getOne.bind(appController))


export {router as appRouter}