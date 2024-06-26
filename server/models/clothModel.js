import mongoose from "mongoose";

const clothSchema = mongoose.Schema({
    category: { type: String, require: true},
    subCategory: { type: String, require: true},
    title: { type: String, require: true},
    subTitle: { type: String, require: true},
    price: { type: Number, require: true},
    imgURL: { type: String, require: true},
    clothDiscription: { type: String, require: true},
})

const clothModel = mongoose.model('Cloth Details', clothSchema)
export {clothModel}