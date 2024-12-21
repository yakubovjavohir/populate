import mongoose from "mongoose";

const appSchema = new mongoose.Schema({
    appID : { type:Number, required:true },
    appName : { type:String, required:true },
    appVolume : {type:String, required:true}
})

const AppModel = mongoose.model("app", appSchema)

export {AppModel}