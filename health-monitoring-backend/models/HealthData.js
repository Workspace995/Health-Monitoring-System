// models/HealthData.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HealthDataSchema = new Schema({
  bloodPressure: {
    systolic: { type: Number, required: true },
    diastolic: { type: Number, required: true },
  },
  bloodSugar: { type: Number, required: true },
  heartRate: { type: Number, required: true },
  weight: { type: Number, required: true },
  cholesterol: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('HealthData', HealthDataSchema);
