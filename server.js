// server.js
const express = require('express');
const productRoutes = require('./routes/productsRoutes');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON payloads (required for POST and PUT requests)
app.use(express.json());

// Base route for the API
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to the Products API! Use /api/products to get started.' });
});

// Mount the products router under the /api/products path
app.use('/api/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});