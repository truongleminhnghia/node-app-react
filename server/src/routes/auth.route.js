const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')

const { verifyToken } = require('../middlewares/auth.middlewares')

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Welcome to your profile' });
});

module.exports = router;