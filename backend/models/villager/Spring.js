const mongoose = require("mongoose");

const springSchema = new mongoose.Schema({

  name: String,

  village: String,

  district: String,

  latitude: Number,

  longitude: Number,

  elevation: Number,

  photo: {
    type: String,
    default: ""
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  verificationStatus: {
    type: String,
    enum: ["Pending", "Verified", "Rejected"],
    default: "Pending"
  },

  riskLevel: {
    type: String,
    enum: ["Stable", "Warning", "Critical"],
    default: "Stable"
  },

  lastUpdated: {
    type: Date,
    default: Date.now
  }

}, { timestamps: true });

module.exports = mongoose.model("Spring", springSchema);