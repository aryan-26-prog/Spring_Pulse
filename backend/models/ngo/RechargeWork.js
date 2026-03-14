const mongoose = require("mongoose");

const rechargeWorkSchema = new mongoose.Schema({

  springId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spring"
  },

  ngoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NGO"
  },

  workType: {
    type: String,
    enum: [
      "Recharge Pit",
      "Trench",
      "Plantation",
      "Water Diversion"
    ]
  },

  description: String,

  status: {
    type: String,
    enum: ["Planned", "In Progress", "Completed"],
    default: "Planned"
  },

  photo: String

}, { timestamps: true });

module.exports = mongoose.model("RechargeWork", rechargeWorkSchema);