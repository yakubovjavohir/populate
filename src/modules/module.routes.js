import { Router } from "express";
import {phoneRouter} from "./phone/phone.routes.js"
import { appRouter } from "./app/phone.routes.js";
import { phoneAppRoutes } from "./phone-ilova/phone-app.routes.js";
const router = Router()

router.use("/phone", phoneRouter)
router.use("/app", appRouter)
router.use("/phoneApp", phoneAppRoutes)
export {router}