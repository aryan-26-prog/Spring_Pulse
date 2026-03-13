const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
    type: String,
    required: true
  },
  village: {
    type: String,
    required: true
  },
  district: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "villager"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);