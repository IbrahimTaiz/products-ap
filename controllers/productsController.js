
let products = [
    { id: 1, name: 'Laptop Pro', price: 1200, category: 'Electronics' },
    { id: 2, name: 'Mechanical Keyboard', price: 150, category: 'Accessories' },
    { id: 3, name: 'Wireless Mouse', price: 50, category: 'Accessories' },
];
let nextId = products.length + 1;

/**
 * @desc Get all products with optional filtering
 * @route GET /api/products
 * @access Public
 */
exports.getAllProducts = (req, res) => {
    const { name, category } = req.query;
    let filteredProducts = products;

    if (name) {
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(name.toLowerCase())
        );
    }

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
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: `Product with id ${id} not found` });
    }

    res.status(200).json(product);
};

/**
 * @desc Create a new product
 * @route POST /api/products
 * @access Public
 */
exports.createProduct = (req, res) => {
    const { name, price, category } = req.body;

    if (!name || !price || !category) {
        return res.status(400).json({ message: 'Please provide name, price, and category' });
    }

    const newProduct = {
        id: nextId++,
        name,
        price,
        category,
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
};

/**
 * @desc Update an existing product
 * @route PUT /api/products/:id
 * @access Public
 */
exports.updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price, category } = req.body;
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(404).json({ message: `Product with id ${id} not found` });
    }

    const updatedProduct = {
        ...products[productIndex],
        name: name || products[productIndex].name,
        price: price || products[productIndex].price,
        category: category || products[productIndex].category,
    };

    products[productIndex] = updatedProduct;
    res.status(200).json(updatedProduct);
};

/**
 * @desc Delete a product
 * @route DELETE /api/products/:id
 * @access Public
 */
exports.deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === id);

    if (productIndex === -1) {
        return res.status(440).json({ message: `Product with id ${id} not found` });
    }

    products = products.filter(p => p.id !== id);
    res.status(200).json({ message: `Product with id ${id} has been deleted` });
};
