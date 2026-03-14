const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({

  name: String,

  organization: String,

  email: {
    type: String,
    unique: true
  },

  phone: String,

  district: String,

  password: String,

  role: {
    type: String,
    default: "ngo"
  }

}, { timestamps: true });

module.exports = mongoose.model("NGO", ngoSchema);