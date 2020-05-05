const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { ChalkBlue, ChalkImportant, ChalkGood, ChalkDebug } = require('./helpers/ChalkLogs')

const config = require('./configuration/conf.json');
const port = config.application.port;

const app = express();
const user = require('./routes/user');

//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ MISCELLANEOUS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.use(bodyParser.json());

app.use(cors({
    origin: config.cors
}));


//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ DATABASE @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


mongoose.connect("mongodb://localhost:27017/Game", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, function (err, db) {
    if (err) ChalkImportant("Connection to the database failed");
    else ChalkGood("Connection to the database succeed");
});


//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ APP INIT @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.listen(port, () => ChalkBlue(`Game back-end running on ${port}!`));

//! Debugging purpose only.
// app.get("*", (req, res) => {
//     console.log('Url requested', req.originalUrl);
// });

//* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ APP ROUTES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

app.use('/user', user);



