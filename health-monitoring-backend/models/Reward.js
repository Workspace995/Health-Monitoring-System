const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  points: { type: Number, default: 0 },
  achievements: [{ type: String }],
});

module.exports = mongoose.model('Reward', RewardSchema);
