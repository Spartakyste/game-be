const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = function () {
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

module.exports = new userModel();
