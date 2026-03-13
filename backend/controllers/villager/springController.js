const Spring = require("../../models/villager/Spring");
const SpringData = require("../../models/villager/SpringData");

exports.registerSpring = async (req, res) => {

  try {

    const { name, village, district, latitude, longitude, elevation } = req.body;

    const spring = await Spring.create({
      name,
      village,
      district,
      latitude,
      longitude,
      elevation,
      createdBy: req.user.id
    });

    res.json({ message: "Spring registered", spring });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

exports.submitWeeklyData = async (req, res) => {

  try {

    const { springId, bucketSize, timeTaken } = req.body;

    const flowRate = bucketSize / timeTaken;

    const data = await SpringData.create({
      springId,
      bucketSize,
      timeTaken,
      flowRate
    });

    res.json({ message: "Data submitted", data });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};