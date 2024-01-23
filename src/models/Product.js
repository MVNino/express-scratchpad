const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('products', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    
  },
  updatedAt: {
    type: Sequelize.DATE,
  },
});

module.exports = Product;