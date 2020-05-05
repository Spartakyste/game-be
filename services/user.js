const UserDAO = require('../daos/user');

const get = (user) => UserDAO.get(user);

const add = (user) => UserDAO.add(user);

module.exports = {
    get,
    add
}