const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Restaurants = mongoose.model('Restaurant',new Schema({
    name: String,
    nit: Number,
    propietario: String,
    direccion: String,
    telefono: Number,
    lat: Number,
    lng: Number,
    logo: String,
    fecha_registro: {type:Date,default: Date.now()},
    foto_lugar: String,

}))
module.exports = Restaurants