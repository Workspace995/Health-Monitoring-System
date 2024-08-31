const AdditionalHealthData = require('../models/AdditionalHealthData');

exports.getHealthTrends = async (req, res) => {
  const { userId } = req.params;

  try {
    const healthData = await AdditionalHealthData.find({ userId }).sort({ timestamp: -1 });

    const trends = {
      heartRate: [],
      bloodPressure: [],
      bloodSugar: [],
    };

    healthData.forEach(data => {
      trends.heartRate.push({ timestamp: data.timestamp, value: data.heartRate });
      trends.bloodPressure.push({ timestamp: data.timestamp, value: data.bloodPressure });
      trends.bloodSugar.push({ timestamp: data.timestamp, value: data.bloodSugar });
    });

    res.status(200).json(trends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
