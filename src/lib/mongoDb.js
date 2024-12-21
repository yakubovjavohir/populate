import mongoose from "mongoose"
import { config } from "../config/index.js"
function mongo_db() {
    mongoose.connect(config.URL)
    .then(()=>{
        console.log("mongoDb ishga tushirildi");  
    })
    .catch((error)=>{
        console.log("serverda xatoli : ", error.message)
    })
}

export {mongo_db}