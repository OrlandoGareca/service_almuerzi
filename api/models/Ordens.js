const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ordens = mongoose.model('Orden',new Schema({
    menu_id: { type: Schema.Types.ObjectId,ref:'Menu'},
    resta_id: { type: Schema.Types.ObjectId,ref:'Restaurant'},
    cantidad: {type:Number,default:0},
    cliente_id : {type: Schema.Types.ObjectId,ref:'User'},
    lugar_envio:Number,
    pago_total:Number,
    estado: {type:String, enum:['espera','pendiente','enviado']}
}))

module.exports = Ordens 