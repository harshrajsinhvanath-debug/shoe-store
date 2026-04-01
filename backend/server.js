require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.resolve(__dirname, '..')));

// Import routes
const productRoutes = require('./routes/product');
const authRoutes = require('./routes/auth');  
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cart');

// Mount routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);  
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => console.log('✓ MongoDB connected successfully'))
  .catch(err => console.error('✗ MongoDB connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server
const PORT = process.env.PORT || 6900;
app.listen(PORT, () => {
  console.log(`✓ Server is running on http://localhost:${PORT}`);
  console.log(`✓ Auth page: http://localhost:${PORT}/auth.html`);
});

module.exports = app;
