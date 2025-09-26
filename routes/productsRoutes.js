
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Read all products
router.get('/', productsController.getAllProducts);

// Read a single product
router.get('/:id', productsController.getSingleProduct);

// Create a new product
router.post('/', productsController.createProduct);

// Update an existing product
router.put('/:id', productsController.updateProduct);

// Delete a product
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
