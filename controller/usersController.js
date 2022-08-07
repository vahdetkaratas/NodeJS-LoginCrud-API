const Users = require('../models/usersModel');

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    const emailAlreadyExists = await Users.findOne({ email });
    if (emailAlreadyExists) {
      return res.status(400).json({ msg: 'Email already exists' });
    }
    const user = await Users.create({ name, email });
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await Users.findOne({ _id: userID });
    if(!user) {
      return res.status(404).json({ msg: `User with id:${userID} not found` });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const user = await Task.findOneAndUpdate({ _id: userID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userID } = req.params;
    const users = await Users.findOneAndDelete({ _id: userID });
    res.status(200).json({ msg: 'User removed successfully' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
