let router = require('express').Router();
let sequelize = require('../db')
let Parent = sequelize.import('../models/parent')

router.post('/', (req, res) => {
  let userId = req.user.id
})