const express = require('express'),
  Product = require('./routes/product'),
  api = express.Router();

api.get('/', async (req, res) => {
  await res.status(200).send({
    message: 'API confecciones mercury Funcionando',
  });
});

// routes Products
api.get('/products', Product.getProducts);
api.get('*', Product.notFound);
module.exports = api;
