let User = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  })
}

module.exports = User

// const { Sequelize, DataTypes } = require('sequelize')
// const sequelize = new Sequelize('postgres')

// const User = sequelize.define('user', {
//   username: DataTypes.STRING,
//   password: DataTypes.STRING
// })

// console.log(User === sequelize.models.User)