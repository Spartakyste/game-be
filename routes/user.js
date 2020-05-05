const express = require('express');
const router = express.Router();
const { ChalkDebug } = require('../helpers/ChalkLogs')
const { successCbk, errorCbk } = require('../callbacks/sendResponse');

const UserService = require('../services/user');


router.get('/', async (req, res) => {
    const { id } = req.body;

    try {

        if (!id) throw "You must pass an id";

        const user = await UserService.get(id);
        console.log('user', user)
        return successCbk(res, 200, user);
    } catch (error) {
        ChalkDebug(error)
        return errorCbk(res, 400, error)
    }
});

router.post('/', async (req, res) => {
    const { user } = req.body;

    try {
        const newUser = await UserService.add(user);
        ChalkDebug(newUser)
        return successCbk(res, 200, newUser);
    } catch (error) {
        return errorCbk(res, 400, error)
    }
});

module.exports = router