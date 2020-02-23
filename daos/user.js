const User = require('../models/user');


const get = () => {
    return User.find({}, (err, users) => {
        return (users);
    });
};

const add = (user) => new User(user).save();


module.exports = {
    get,
    add
}