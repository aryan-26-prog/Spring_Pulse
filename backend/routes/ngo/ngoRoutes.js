const express = require("express");

const router = express.Router();

const auth = require("../../middleware/authMiddleware");

const ngoAuth = require("../../controllers/ngo/ngoAuthController");
const verification = require("../../controllers/ngo/verificationController");
const recharge = require("../../controllers/ngo/rechargeController");
const dashboard = require("../../controllers/ngo/ngoDashboardController");


// AUTH 
router.post("/register", ngoAuth.registerNGO);
router.post("/login", ngoAuth.loginNGO);


// SPRINGS
router.get("/springs", auth, verification.getDistrictSprings);
router.put("/verify/:id", auth, verification.verifySpring);


// RECHARGE WORK
router.post("/recharge", auth, recharge.addRechargeWork);
router.put("/recharge/:id", auth, recharge.updateWorkStatus);
router.get("/recharge", auth, recharge.getNgoWorks);


// DASHBOARD
router.get("/dashboard", auth, dashboard.getDashboard);

module.exports = router;