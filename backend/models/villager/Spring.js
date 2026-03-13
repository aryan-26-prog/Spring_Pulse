const mongoose = require("mongoose");

const springSchema = new mongoose.Schema({
  name: String,
  village: String,
  district: String,
  latitude: Number,
  longitude: Number,
  elevation: Number,
  photo: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, { timestamps: true });

module.exports = mongoose.model("Spring", springSchema);