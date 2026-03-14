const NGO = require("../../models/ngo/NGO");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// NGO REGISTER
exports.registerNGO = async (req, res) => {

  try {

    const { name, organization, email, phone, district, password } = req.body;

    const existing = await NGO.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: "NGO already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const ngo = await NGO.create({
      name,
      organization,
      email,
      phone,
      district,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: ngo._id, role: "ngo", district: ngo.district },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "NGO registered successfully",
      token,
      ngo
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// NGO LOGIN
exports.loginNGO = async (req, res) => {

  try {

    const { email, password } = req.body;

    const ngo = await NGO.findOne({ email });

    if (!ngo) {
      return res.status(404).json({ message: "NGO not found" });
    }

    const match = await bcrypt.compare(password, ngo.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: ngo._id, role: "ngo", district: ngo.district },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      ngo
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};