const successCbk = (res, status, data) => {
    return res.status(status).json({
        message: data
    });
};

const errorCbk = (res, status, data) => {
    return res.status(status).json({
        message: data
    });
};
module.exports = {
    successCbk,
    errorCbk
};