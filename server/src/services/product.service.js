const Product = require('../models/product.model')


const createProduct = async (newProduct) => {
    const product = new Product(newProduct);
    await product.save();
    return product;
}

const getProduct = async (id) => {
    const product = await Product.findById(id);
    return product;
}

const getAll = async () => {
    return await Product.find();
}

module.exports = {createProduct, getProduct, getAll};