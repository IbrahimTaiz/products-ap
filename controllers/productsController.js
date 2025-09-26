let products = [
    { id: 1, name: 'Laptop Pro', price: 1200, category: 'Electronics' },
    { id: 2, name: 'Mechanical Keyboard', price: 150, category: 'Accessories' },
    { id: 3, name: 'Wireless Mouse', price: 50, category: 'Accessories' },
];
let nextId = products.length + 1; // Will be used for new product creation later
/**
 * @desc Get all products with optional filtering by query strings
 * @route GET /api/products
 * @access Public
 */
exports.getAllProducts = (req, res) => {
    const { name, category } = req.query; // Destructure optional query parameters
    let filteredProducts = products;
    // Optional: Filtering by name (case-insensitive)
    if (name) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(name.toLowerCase())
        );
    }
    // Optional: Filtering by category (case-insensitive)
    if (category) {
        filteredProducts = filteredProducts.filter(p =>
            p.category.toLowerCase() === category.toLowerCase()
        );
    }
    res.status(200).json(filteredProducts);
};
/**
 * @desc Get a single product by ID
 * @route GET /api/products/:id
 * @access Public
 */
exports.getSingleProduct = (req, res) => {
    // Route parameter is accessed via req.params
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: `Product with id ${id} not found` });
    }
    res.status(200).json(product);
};