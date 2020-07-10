let router = require('express').Router();
let sequelize = require('../db');
let User = sequelize.import('../models/user');
let jwt = require('jsonwebtoken');
let bcrypt = require ('bcryptjs');

router.post('/create', (req, res) => {
  User.create({
    username: req.body.user.username,
    password: bcrypt.hashSync(req.body.user.password)
  })
  .then(
    (user) => {
      let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
      res.json({user, message: 'User Created', token})
    },
    (err) => {
      res.status(500).send(err.message)
    }
  )
})

router.post('/return', (req, res) => {
  let generateToken = (user) => {
    let token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24})
    res.status(200).json({user, message: 'User Returned', token})
  }

  let comparePasswords = (user) => {
    bcrypt.compare(req.body.user.password, user.password, (err, matches) => matches ? generateToken(user) : res.status(502).send('Incorrect Password'))
  }

  User.findOne({where: {username: req.body.user.username}})
  .then((user) => {
    user ? comparePasswords(user) : res.status(501).send('User not found in the database');
  })
  .catch(err => res.send(500, err.message))
})

module.exports = router;