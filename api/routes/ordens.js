const express = require('express')
const Ordens = require('../models/Ordens')
const router = express.Router()

router.get('/', (req,res) => {
    Ordens.find()
    .exec()
    .then(x => res.status(200).send(x))
     })
router.get('/:id',(req,res)=>{
    Ordens.findById(req.params.id)
    .exec()
    .then(x => res.status(200).send(x))
})

router.post('/',(req,res)=>{
    Ordens.create(req.body).then(x => res.status(201).send(x))    
})

router.put('/:id', (req,res) => {
    Ordens.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(204))
})

router.delete('/:id',(req,res) =>{
    Ordens.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
    
})

 module.exports = router