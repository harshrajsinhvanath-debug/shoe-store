const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  price: { type: String, required: true },
  img:   { type: String, default: '' },
  size:  { type: String, default: '' },
  qty:   { type: Number, required: true, min: 1 },
});

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    items: {
      type: [orderItemSchema],
      validate: {
        validator: (arr) => arr.length > 0,
        message: 'Order must have at least one item',
      },
    },
    shippingAddress: {
      fullName: { type: String, required: true },
      phone:    { type: String, required: true },
      address:  { type: String, required: true },
      city:     { type: String, required: true },
      state:    { type: String, required: true },
      pincode:  { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      enum: ['COD', 'UPI', 'Card'],
      default: 'COD',
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);