const User = require("../../models/villager/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Used to register villager
exports.registerVillager = async (req, res) => {

  try {

    const { name, email, phone, village, district, password } = req.body;

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      village,
      district,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Villager registered successfully",
      token,
      user
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


//Used to login villager
exports.loginVillager = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token, user });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};