const UserDAO = require('../daos/user');

const add = (user) => UserDAO.add(user);

module.exports = {
    add
}