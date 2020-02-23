const successCbk = (res, status, data) => {
    res.status(status).json({
        message: data
    });
};

const errorCbk = (res, status, data) => {
    res.status(status).json({
        message: data
    });
};
module.exports = {
    successCbk,
    errorCbk
};