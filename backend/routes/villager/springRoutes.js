const express = require("express");
const router = express.Router();
const auth = require("../../middleware/authMiddleware");
const { registerSpring, submitWeeklyData } = require("../../controllers/villager/springController");

router.post("/register", auth, registerSpring);
router.post("/weekly-data", auth, submitWeeklyData);

module.exports = router;