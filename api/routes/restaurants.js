const express = require('express')
const Restaurants = require('../models/Restaurants')
const router = express.Router()

router.get('/', (req,res) => {
    Restaurants.find()
    .exec()
    .then(x => res.status(200).send(x))
     })
router.get('/:id',(req,res)=>{
    Restaurants.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/',(req,res)=>{
    Restaurants.create(req.body).then(x => res.status(201).send(x))    
})

router.put('/:id', (req,res) => {
    Restaurants.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id',(req,res) =>{
    Restaurants.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
    
})

 module.exports = router