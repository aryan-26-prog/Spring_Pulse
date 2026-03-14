require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/villager/authRoutes");
const springRoutes = require("./routes/villager/springRoutes");
const ngoRoutes = require("./routes/ngo/ngoRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/springs", springRoutes);
app.use("/api/ngo", ngoRoutes);

app.get("/", (req, res) => {
  res.send("Spring Pulse Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});