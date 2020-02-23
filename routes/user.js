const express = require('express');
const router = express.Router();

const { successCbk, errorCbk } = require('../callbacks/sendResponse');

const UserService = require('../services/user');


router.get('/', function (req, res) {

    UserService.getAll(
        (message) => successCbk(res, 200,message),
        (err) => errorCbk(res, 400, err)
    );
});

router.post('/', async (req, res) => {
    const { user } = req.body;

    try {
       const newUser = await UserService.add(user);
        console.log('user', newUser)
        return successCbk(res, 200, newUser);
    } catch (error) {
        return errorCbk(res, 400, error)
    }
});

module.exports = router