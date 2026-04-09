const express  = require('express');
const jwt      = require('jsonwebtoken');
const User = require('../models/user');
const { protect } = require('../middleware/auth');

const router = express.Router();

// ── Helper: sign JWT ──
const generateToken = (id) => {
  console.log("SIGN SECRET:", process.env.JWT_SECRET);
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// ─────────────────────────────────────────
// POST /api/auth/register
// Body: { name, email, password }
// ─────────────────────────────────────────
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'An account with this email already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
  message: 'Account created successfully',
  token: generateToken(user._id),
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
  },
});
  } catch (err) {
  console.log("REGISTER ERROR:", err);   // 👈 ADD THIS
  res.status(500).json({ message: 'Server error', error: err.message });
}
});

// ─────────────────────────────────────────
// POST /api/auth/login
// Body: { email, password }
// ─────────────────────────────────────────
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      message: 'Login successful',
      token: generateToken(user._id),
      user: {
        id:    user._id,
        name:  user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ─────────────────────────────────────────
// GET /api/auth/profile  (protected)
// Returns logged-in user's data
// ─────────────────────────────────────────
router.get('/profile', protect, async (req, res) => {
  try {
    res.json({
      id:        req.user._id,
      name:      req.user.name,
      email:     req.user.email,
      createdAt: req.user.createdAt,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ─────────────────────────────────────────
// PUT /api/auth/profile  (protected)
// Update name or password
// Body: { name?, password? }
// ─────────────────────────────────────────
router.put('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (req.body.name)     user.name     = req.body.name;
    if (req.body.password) user.password = req.body.password; // pre-save hook hashes it

    const updated = await user.save();

    res.json({
      message: 'Profile updated',
      user: {
        id:    updated._id,
        name:  updated.name,
        email: updated.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

router.put('/profile', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (req.body.name) user.name = req.body.name;
    if (req.body.password) user.password = req.body.password;

    const updated = await user.save();

    res.json({
      message: 'Profile updated',
      user: {
        id: updated._id,
        name: updated.name,
        email: updated.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;