const productService = require('../services/product.service')

const create = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({error:error.message});
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const product = await productService.getProduct(id); // Thêm await
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const products = await productService.getAll();
        if(!products) {
            return res.status(404).json({ message: 'Product Empty' });
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {create, getById, getAll};
