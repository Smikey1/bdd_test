const mongoose = require("mongoose");
const moment = require("moment-timezone");
const dateKathmandu = moment().tz("Asia/Kathmandu").format();

const user = mongoose.model("user", {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(dateKathmandu),
  },
});
module.exports = user;
