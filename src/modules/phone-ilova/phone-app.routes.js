import { Router } from "express";
import {phoneAppcontroller} from "./phone-app.controller.js"
import {appRouter} from "../app/phone.routes.js"
import{phoneRouter} from "../phone/phone.routes.js"

const router = Router()

router.get("/get-All", phoneAppcontroller.getAll.bind(phoneAppcontroller))
router.post("/create", phoneAppcontroller.create.bind(phoneAppcontroller))
router.delete("/delete/:id", phoneAppcontroller.delete.bind(phoneAppcontroller))


export {router as phoneAppRoutes}