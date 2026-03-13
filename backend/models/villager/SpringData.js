const mongoose = require("mongoose");

const springDataSchema = new mongoose.Schema({
  springId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Spring"
  },
  bucketSize: Number,
  timeTaken: Number,
  flowRate: Number,
  photo: String,
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model("SpringData", springDataSchema);