require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());

// connect database
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("ShoppyGlobe Backend Running");
});

// routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
