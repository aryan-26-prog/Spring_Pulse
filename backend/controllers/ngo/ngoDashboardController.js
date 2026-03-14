const Spring = require("../../models/villager/Spring");
const RechargeWork = require("../../models/ngo/RechargeWork");

exports.getDashboard = async (req, res) => {

  try {

    const springs = await Spring.find({
      district: req.user.district
    });

    const works = await RechargeWork.find({
      ngoId: req.user.id
    });

    const verified = springs.filter(
      s => s.verificationStatus === "Verified"
    );

    res.json({

      totalSprings: springs.length,

      verifiedSprings: verified.length,

      rechargeWorks: works.length

    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};