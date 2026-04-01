const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");

// ADD TO CART
router.post("/add", async (req, res) => {
    try {
        const { name, price, img, qty, size } = req.body;

        const newItem = new Cart({
            name,
            price,
            img,
            qty,
            size
        });

        await newItem.save();

        res.status(200).json({ message: "Product added to cart" });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;