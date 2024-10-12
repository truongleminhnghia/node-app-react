const User = require('../models/user.model')
const jwt = require('jsonwebtoken');

const registerUser = async (userNew) => {
    const user = new User(userNew);
    await user.save();
    return user;
}

const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    // Mã hóa secret thành Base64
    const secret = process.env.JWT_SECRET; // Giả sử bạn đã lưu secret trong .env
    const base64Secret = Buffer.from(secret).toString('base64');

    const token = jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, 
    base64Secret
    , {
        expiresIn: '1h'
    });

    return { user, token };
};


module.exports = { registerUser, loginUser };