module.exports = function(sequelize, DataTypes){
  return sequelize.define('parent', {
    information: DataTypes.STRING
  })
}