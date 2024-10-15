const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please enter name user"],
    },
    email: {
      type: String,
      require: [true, "Please enter email"],
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
      require: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'author'],
      default: 'user',
    }
  },
  {
    timestamps: true,
  }
);


//hash mật khẩu trước khi lưu

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// so sánh mật khẩu

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);
module.exports = User
