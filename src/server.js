import express from "express"
import cors from "cors"
import { config } from "./config/index.js"
import { dotenvSchema } from "./config/schema.js"
import { mongo_db } from "./lib/mongoDb.js"
import { validator } from "./lib/validator.js"
import { router } from "./modules/module.routes.js"
const server = express()
server.use(cors())
server.use(express.json())
mongo_db()
validator(dotenvSchema, config)

server.use("/api", router)

server.use("/", (err, req, res, next)=>{
    res.json(err.message)
})
server.listen(config.PORT, ()=>{
    console.log("http://localhost:" + config.PORT);
    
})