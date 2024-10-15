// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/auth.controller')

// const { verifyToken } = require('../middlewares/auth.middlewares')

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     User:
//  *       type: object
//  *       properties:
//  *         email:
//  *           type: string
//  *         password:
//  *           type: string
//  *       required:
//  *         - email
//  *         - password
//  *       example:
//  *         email: user@example.com
//  *         password: examplePassword
//  */

// /**
//  * @swagger
//  * /api/auth/login:
//  *   post:
//  *     summary: Login user
//  *     tags: [Auth]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/User'
//  *     responses:
//  *       200:
//  *         description: Login successful
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 token:
//  *                   type: string
//  *                 user:
//  *                   type: object
//  *                   properties:
//  *                     email:
//  *                       type: string
//  *       404:
//  *         description: User not found
//  *       401:
//  *         description: Invalid credentials
//  */
// router.post('/register', authController.register);
// router.post('/login', authController.login);
// router.get('/profile', verifyToken, (req, res) => {
//     res.status(200).json({ message: 'Welcome to your profile' });
// });

// module.exports = router;