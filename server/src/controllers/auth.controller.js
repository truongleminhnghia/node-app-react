// const authService = require("../services/auth.service");

// const register = async (req, res) => {
//   try {
//     const user = await authService.registerUser(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const { user, token } = await authService.loginUser(email, password);
//         res.status(200).json({ user, token });
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// module.exports = { register, login };
