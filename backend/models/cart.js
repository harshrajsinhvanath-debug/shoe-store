const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: String,
    price: String,
    img: String,
    qty: Number,
    size: String,
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);