const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Lấy token từ header
    const token = req.headers['authorization']?.split(' ')[1]; // Lấy token từ header Authorization
    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }

    // Mã hóa secret thành Base64
    const secret = process.env.JWT_SECRET;
    const base64Secret = Buffer.from(secret).toString('base64');

    try {
        // Xác minh token
        const decoded = jwt.verify(token, base64Secret);
        req.user = decoded; // Lưu thông tin người dùng vào req.user
    } catch (err) {
        return res.status(401).send('Invalid Token');
    }
    return next();
};
module.exports = { verifyToken };