const express = require("express");
const router = express.Router();
const { registerVillager, loginVillager } = require("../../controllers/villager/authController");

router.post("/register", registerVillager);
router.post("/login", loginVillager);

module.exports = router;