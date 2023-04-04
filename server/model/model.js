const { time } = require('console');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  booking_id: {
    type: Number,
    required: true,
    unique: true
  },
  location_id: {
    type: String,
    required: true,
    unique: true
  },
  drone_shot_id: {
    type: Number,
    required: true,
    unique: true
  },
  created_time: {
    type: String,
  },
  created_date: {
    type: String,
  }

})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;