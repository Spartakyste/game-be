const User = require('../models/user');


const get = (id) => User.findOne({ _id: id });

const add = (user) => new User(user).save();


module.exports = {
    get,
    add,
};
