// controllers/healthDataController.js
const HealthData = require('../models/HealthData');

exports.addHealthData = async (req, res) => {
  const { bloodPressure, bloodSugar, heartRate, weight, cholesterol } = req.body;

  console.log('Received data:', req.body); // Log incoming data

  if (!bloodPressure || !bloodPressure.systolic || !bloodPressure.diastolic) {
    return res.status(400).json({ error: 'Systolic and Diastolic blood pressure values are required.' });
  }

  try {
    const newHealthData = new HealthData({
      bloodPressure,
      bloodSugar,
      heartRate,
      weight,
      cholesterol,
      date: new Date(),
      user: req.user.id
    });

    const savedHealthData = await newHealthData.save();
    res.status(201).json(savedHealthData);
  } catch (error) {
    console.error('Error adding health data:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getHealthData = async (req, res) => {
  const days = parseInt(req.query.days) || 7; // Default to last 7 days
  const userId = req.user.id;

  try {
    const healthData = await HealthData.find({
      user: userId,
      date: { $gte: new Date(Date.now() - days * 24 * 60 * 60 * 1000) },
    }).sort({ date: -1 });

    res.json(healthData);
  } catch (error) {
    console.error('Error fetching health data:', error);
    res.status(500).json({ error: error.message });
  }
};
