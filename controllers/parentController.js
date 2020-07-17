let router = require('express').Router();
let sequelize = require('../db')
let Parent = sequelize.import('../models/parent')

router.post('/create', (req, res) => {
  Parent.create({
    information: req.body.parent.info
  })
  .then(
    (parent) => { res.status(200).json({parent}) },
    (err) => { res.send(500).send(err.message) }
  )
})

router.get('/get', (req, res) => {
  Parent.findAll({ include: ['child'] })
  .then(
    (parents) => res.status(200).json({parents}),
    (err) => res.status(500).send(err.message)
  )
})

module.exports = router
