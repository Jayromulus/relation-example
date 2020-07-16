let User = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    info: DataTypes.STRING
  })
}

module.exports = User