const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  img: {
    type: String,
    default: 'default-product.jpg'
  },
  description: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'General'
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);