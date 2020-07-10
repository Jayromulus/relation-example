module.exports = function(sequelize, DataTypes){
  return sequelize.define('child', {
    relatedInfo: DataTypes.STRING
  })
}