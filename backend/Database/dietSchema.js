// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;



const userHealthInfoSchema = new Schema({
    phone: {
        type: Number,
        unique: true
      },
    height: {
        type: Number,
        min:0
      },
    weight: {
        type: Number,
        min: 0
      },
      age: {
        type: Number,
        min: 0
      },
      duration: {
        type: Number,
        min: 0
      }

}, { timestamps: true });

const userHealthInfo = mongoose.model('UserHealthInfo', userHealthInfoSchema);

module.exports = userHealthInfo;