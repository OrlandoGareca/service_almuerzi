const express = require('express')
const Menus = require('../models/Menus')
const router = express.Router()

router.get('/', (req,res) => {
    Menus.find()
    .exec()
    .then(x => res.status(200).send(x))
     })
router.get('/:id',(req,res)=>{
    Menus.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/',(req,res)=>{
    Menus.create(req.body).then(x => res.status(201).send(x))    
})

router.put('/:id', (req,res) => {
    Menus.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id',(req,res) =>{
    Menus.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
    
})

 module.exports = router