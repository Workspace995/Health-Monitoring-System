const mongoose = require('mongoose');

const AdditionalHealthDataSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  heartRate: { type: Number },
  bloodPressure: { type: String },
  bloodSugar: { type: Number },
  oxygenSaturation: { type: Number },
  temperature: { type: Number },
  weight: { type: Number },
  activityLevel: { type: String },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdditionalHealthData', AdditionalHealthDataSchema);
