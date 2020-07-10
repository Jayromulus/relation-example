require('dotenv').config()
let express = require('express');
let app = express();
let user = require('./controllers/userController');
let sequelize = require('./db');
app.use(express.json());

// sequelize.sync({force: true});
sequelize.sync();

app.use(require('./middleware/headers'))

app.use('/api/user', user)

app.use(require('./middleware/validate-session'));

// app.use('/api/child', require('./controllers/childController'))
// app.use('/api/parent', require('./controllers/parentController'))

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`))

