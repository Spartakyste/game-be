const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserModel = function userModel() {
    const userSchema = new Schema(
        {
            username: {
                type: String,
                unique: true,
                required: true,
            },
            inventory: {
                type: Array,
            },
        },
        {
            timestamps: true,
        },
    );

    return mongoose.model('User', userSchema);
};

module.exports = new UserModel();
