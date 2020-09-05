const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Menus = mongoose.model('Menu',new Schema({
    resta_id: { type: Schema.Types.ObjectId,ref:'Restaurant'},
    name: String,
    precio: {type:Number,default:0},
    desc: String,
    fecha_registro: {type:Date,default: Date.now()},
    image_product:String,


}))

module.exports = Menus 