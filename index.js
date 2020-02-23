const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');

const app = express();

const mongoose = require('mongoose');

const config = require('./configuration/conf.json');
const port = config.application.port;

const user = require('./routes/user');

//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ MISCELLANEOUS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
}));

//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DATABASE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


mongoose.connect("mongodb://localhost:27017/Game", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex : true
}, function (err, db) {
    if (err) console.log(chalk.redBright("Connection to the database failed"));
    else console.log("Connection to the databse succeed");
});


//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ APP INIT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(port, () => console.log(chalk.blue(`Example app listening on port ${port}!`)));

//! Debugging purpose only.
// app.get('/', (req, res) => {
//     console.log('Url who requested', req.originalUrl);
// });
//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ APP ROUTES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.use('/user', user);



