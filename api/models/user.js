const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
