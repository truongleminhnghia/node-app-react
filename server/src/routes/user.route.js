const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/create', userController.create);
router.get('/', userController.getAll);
router.get('/:id', userController.getById)
router.get('/:username', userController.getByUserName);
router.get('/:email', userController.getByEmail)
router.post('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;