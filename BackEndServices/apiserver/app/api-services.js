const express = require('express');
const productApi = require('./api/product')
const apiservices = express();

// Rest service for product listings
apiservices.get('/product_listing', getProducts);

function getProducts(req, res) {
  console.log ("Getting product list");
  
  const products = productApi.getAllProducts();
  res.end(JSON.stringify(products));
}

module.exports = {
  api: apiservices,
  getProducts: getProducts
}