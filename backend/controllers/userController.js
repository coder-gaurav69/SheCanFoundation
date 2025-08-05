const User = require('../models/user');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Create new user
const createUser = async (req, res) => {
  try {
    const { username, referralCode, amountRaised, email, rewards } = req.body;

    const user = new User({
      username,
      referralCode,
      amountRaised,
      email,
      rewards
    });

    await user.save();
    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern?.email) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
};

// Get user by email
const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserByEmail
};
