const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  title: String,
  description: String,
  unlocked: Boolean
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  referralCode: {
    type: String,
    required: true,
  },
  amountRaised: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  rewards: {
    type: [rewardSchema],
    default: []
  }
});

module.exports = mongoose.model('User', userSchema);

