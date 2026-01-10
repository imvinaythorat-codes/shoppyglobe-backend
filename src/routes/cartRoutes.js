const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/**
 * POST /cart
 * Add product to cart (Protected)
 */
router.post("/", authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity) {
    return res
      .status(400)
      .json({ message: "productId and quantity are required" });
  }

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartItem = await Cart.create({ productId, quantity });

    res.status(201).json({
      message: "Product added to cart",
      cartItem
    });
  } catch {
    res.status(400).json({ message: "Invalid product ID" });
  }
});

/**
 * PUT /cart/:id
 * Update cart item quantity (Protected)
 */
router.put("/:id", authMiddleware, async (req, res) => {
  const { quantity } = req.body;

  if (!quantity) {
    return res.status(400).json({ message: "Quantity required" });
  }

  try {
    const cartItem = await Cart.findById(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({
      message: "Cart item updated",
      cartItem
    });
  } catch {
    res.status(400).json({ message: "Invalid cart item ID" });
  }
});

/**
 * DELETE /cart/:id
 * Remove item from cart (Protected)
 */
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({ message: "Cart item removed" });
  } catch {
    res.status(400).json({ message: "Invalid cart item ID" });
  }
});

module.exports = router;
