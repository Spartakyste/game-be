const express = require('express');

const router = express.Router();

const Chalk = require('../helpers/ChalkLogs');
const { successCbk, errorCbk } = require('../callbacks/sendResponse');

const UserService = require('../services/user');


router.get('/', async (req, res) => {
    const { id } = req.body;

    try {
        if (!id) throw new Error('You must pass an id');

        const user = await UserService.get(id);

        return successCbk(res, 200, user);
    } catch (error) {
        return errorCbk(res, 400, error);
    }
});

router.post('/', async (req, res) => {
    const { user } = req.body;

    try {
        const newUser = await UserService.add(user);

        Chalk.Debug(newUser);
        return successCbk(res, 200, newUser);
    } catch (error) {
        return errorCbk(res, 400, error);
    }
});

module.exports = router;
