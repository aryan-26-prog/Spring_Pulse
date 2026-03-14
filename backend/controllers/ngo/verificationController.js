const Spring = require("../../models/villager/Spring");


// Get springs in NGO district
exports.getDistrictSprings = async (req, res) => {

  try {

    const springs = await Spring.find({
      district: req.user.district
    });

    res.json(springs);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// Verify spring
exports.verifySpring = async (req, res) => {

  try {

    const springId = req.params.id;

    const { status } = req.body;

    const spring = await Spring.findById(springId);

    if (!spring) {
      return res.status(404).json({ message: "Spring not found" });
    }

    spring.verificationStatus = status;

    await spring.save();

    res.json({
      message: "Spring verification updated",
      spring
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};