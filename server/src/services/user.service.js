const User = require("../models/user.model");

const saveUser = async (newUser) => {
  return await User.create(newUser);
};

const getAll = async () => {
  return await User.find();
};

const getById = async (id) => {
  return await User.findById(id);
};

const getByUserName = async (username) => {
  return await User.findOne({ username: username });
};

const getByEmail = async (email) => {
  return await User.findOne({ email: email });
};

const update = async (id, user)=> {
    return User.findByIdAndUpdate(id, user);
} 

const deleteUser = async (id) => {
    return User.findByIdAndDelete(id);
}


module.exports = {
    saveUser,
    getAll,
    getById,
    getByUserName,
    getByEmail,
    update,
    deleteUser
}
