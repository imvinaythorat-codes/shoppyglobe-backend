require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

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

// product routes
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
