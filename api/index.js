const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const meals = require('./routes/meals')
const orders = require('./routes/orders')
const auth = require('./routes/auth')
const restaurants = require('./routes/restaurants')
const menus = require('./routes/menus')
const ordens = require('./routes/ordens')

const app = express()
app.use(express.static(path.join(__dirname,'/public')))
//const publicDir = (__dirname+'/public/')

//app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true})


app.use('/api/meals', meals)
app.use('/api/orders', orders)

app.use('/api/auth', auth)
app.use('/api/restaurant', restaurants)
app.use('/api/menus', menus)
app.use('/api/ordens', ordens)


//app.get('*', (req,res) => {
//   res.send('hola mundossss')
// })
module.exports = app