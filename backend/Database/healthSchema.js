// models/User.js
const mongoose = require('mongoose');
const { Schema } = mongoose;



const userHealthInfoSchema = new Schema({
    phone: {
        type: Number,
        unique: true
      },
    height: {
        type: Number
      },
    weight: {
        type: Number
      },
      duration: {
        type: Number
      },
      healthActivity:{
        type:String
      }

}, { timestamps: true });

const UserHealthInfo = mongoose.model('UserHealthInfo', userHealthInfoSchema);

module.exports = UserHealthInfo;