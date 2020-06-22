const pool = require('../database');

const getProducts = async (req, res) => {
  const products = await pool.query('SELECT * FROM products');
  res.json({products});
};

const notFound = async (req, res) => {
  await res.status(404).send({err: {message: 'Not Found'}});
};
module.exports = {getProducts, notFound};
