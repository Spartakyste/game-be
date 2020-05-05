const Chalk = require('../helpers/ChalkLogs');

const successCbk = (res, status, data) => res.status(status).json({
    data,
});

const errorCbk = (res, status, error) => {
    Chalk.Important(error);

    return res.status(status).json({
        error: error.message,
    });
};
module.exports = {
    successCbk,
    errorCbk,
};
