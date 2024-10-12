const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller')

router.post('/create', productController.create);
router.get('/:id', productController.getById);
router.get('/', productController.getAll);

module.exports = router;