const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Chalk = require('./helpers/ChalkLogs');

const config = require('./configuration/conf.json');

const { port } = config.application;

const app = express();
const user = require('./routes/user');

//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ MISCELLANEOUS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.use(bodyParser.json());

app.use(cors({
    origin: config.cors,
}));


//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DATABASE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


mongoose.connect('mongodb://localhost:27017/Game', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => {
    if (err) Chalk.Important('Connection to the database failed');
    else Chalk.Good('Connection to the database succeeded');
});


//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ APP INIT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(port, () => Chalk.Blue(`Game back-end running on ${port}!`));

//! Debugging purpose only.
// app.use((req, res, next) => {
//     console.log('Url requested', req.originalUrl);
//     next();
// });

//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ APP ROUTES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.use('/user', user);
