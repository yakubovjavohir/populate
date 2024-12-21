import mongoose from "mongoose";

const phoneAppSchema = new mongoose.Schema({
    PhoneID: { type: mongoose.Schema.Types.ObjectId, ref: 'telephon', required: true },
    AppID: { type: mongoose.Schema.Types.ObjectId, ref: 'app', required: true }
});  

const Model = mongoose.model("phoneApp", phoneAppSchema)

export {Model}