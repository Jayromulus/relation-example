let router = require('express').Router();
let sequelize = require('../db')
let Comment = sequelize.import('../models/comment')

router.post('/create', (req, res) => {
  Comment.create({
    info: req.body.comment.info
  })
  .then(
    (comment) => { res.status(200).json({comment}) },
    (err) => { res.send(500).send(err.message) }
  )
})

router.get('/get', (req, res) => {
  Comment.findAll()
  .then(
    (comments) => res.status(200).json({comments}),
    (err) => res.status(500).send(err.message)
  )
})

module.exports = router;
