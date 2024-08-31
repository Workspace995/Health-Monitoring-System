const Reward = require('../models/Reward');

exports.getRewards = async (req, res) => {
  const { userId } = req.params;

  try {
    const rewards = await Reward.findOne({ userId });
    res.status(200).json(rewards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateRewards = async (req, res) => {
  const { userId, points, achievement } = req.body;

  try {
    let rewards = await Reward.findOne({ userId });

    if (!rewards) {
      rewards = new Reward({ userId, points, achievements: [achievement] });
    } else {
      rewards.points += points;
      if (achievement && !rewards.achievements.includes(achievement)) {
        rewards.achievements.push(achievement);
      }
    }

    const savedRewards = await rewards.save();
    res.status(200).json(savedRewards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
