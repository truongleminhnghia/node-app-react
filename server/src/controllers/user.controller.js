const userService = require("../services/user.service");

const create = async (req, res) => {
  try {
    const user = await userService.saveUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    if (!users) {
      return res.status(400).json({ error: "List user null" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getByUserName = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await userService.getByUserName(username);
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getByEmail = async (req, res) => {
  try {
    const { email } = await req.params;
    const user = userService.getByEmail(email);
    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.update(id, req.body);
        if(!user) {
            return res.status(400).json({error: "update failed"});
        }
        res.status(200).json(user);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userService.deleteUser(id);
        if(!user) return res.status(400).json({error: 'delete failed'});
        res.status(200).json('delete successfully');
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    create,
    getAll,
    getById,
    getByUserName,
    getByEmail,
    updateUser,
    deleteUser
}