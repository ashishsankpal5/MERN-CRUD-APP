import User from '../models/userModel.js';

const userInfo = async (req, res) => {
  try {
    let user = await User.find({});
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const addUser = async (req, res) => {
  const user = req.body;
  const newUser = new User(user);
  try {
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const edittUser = async (req, res) => {
  const user = req.body;

  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.json(editUser);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.json('User Deleted Successfully');
  } catch (error) {
    res.json({ message: error.message });
  }
};
export { userInfo, addUser, getUserById, edittUser, deleteUser };
