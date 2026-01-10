require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("ShoppyGlobe Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
