const express = require('express');
const Order = require('../models/order');
const { protect } = require('../middleware/auth');

const router = express.Router();

// All order routes are protected — user must be logged in
router.use(protect);

// ─────────────────────────────────────────
// POST /api/orders
// Place a new order
// Body: { items, shippingAddress, paymentMethod, totalAmount }
// ─────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const { items, shippingAddress, paymentMethod, totalAmount } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'No items in order' });
    }

    if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.address) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    if (!totalAmount || totalAmount <= 0) {
      return res.status(400).json({ message: 'Invalid total amount' });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod: paymentMethod || 'COD',
      totalAmount,
    });

    res.status(201).json({
      message: 'Order placed successfully',
      order,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ─────────────────────────────────────────
// GET /api/orders
// Get all orders of the logged-in user
// ─────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ─────────────────────────────────────────
// GET /api/orders/:id
// Get a single order by ID (only owner can view)
// ─────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Make sure the order belongs to the logged-in user
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ─────────────────────────────────────────
// PUT /api/orders/:id/cancel
// Cancel a pending order
// ─────────────────────────────────────────
router.put('/:id/cancel', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    if (order.status !== 'Pending') {
      return res.status(400).json({ message: `Cannot cancel an order that is already ${order.status}` });
    }

    order.status = 'Cancelled';
    await order.save();

    res.json({ message: 'Order cancelled successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;