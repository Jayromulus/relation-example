const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' })

sequelize.authenticate().then(
  () => console.log('Connected to postgres database'),
  (err) => console.log(err)
);

let ParentModel = sequelize.import('./models/parent')
let ChildModel = sequelize.import('./models/child')
let CommentModel = sequelize.import('./models/comment')

// 1:1 Association
ParentModel.hasOne(ChildModel)
// belongs to?

// 1:N Association
ChildModel.hasMany(CommentModel, { as: 'comment' })
CommentModel.belongsTo(ChildModel, { foreignKey: 'childId', as: 'child' })

module.exports = sequelize;