const mongoose = require('mongoose');

const HealthRecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  recommendations: [{ type: String }],
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HealthRecommendation', HealthRecommendationSchema);
