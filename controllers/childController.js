let router = require('express').Router();
let sequelize = require('../db')
let Child = sequelize.import('../models/child')

router.post('/create', (req, res) => {
  Child.create({
    relatedInfo: req.body.child.info
  })
  .then(
    (child) => { res.status(200).json({child}) },
    (err) => { res.send(500).send(err.message) }
  )
})

router.get('/get', (req, res) => {
  Child.findAll()
  .then(
    (children) => res.status(200).json({children}),
    (err) => res.status(500).send(err.message)
  )
})

module.exports = router;
