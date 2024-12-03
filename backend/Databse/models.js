// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{10,15}$/ // Validates phone number format
    },
    nid: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = {User};
