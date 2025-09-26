// routes/productsRoutes.js
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Define the routes
// GET /api/products (Read all, with optional query filters)
router.get('/', productsController.getAllProducts);

// GET /api/products/:id (Read a single product using a path parameter)
router.get('/:id', productsController.getSingleProduct);

module.exports = router;