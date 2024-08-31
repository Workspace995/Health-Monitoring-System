const HealthRecommendation = require('../models/HealthRecommendation');
const AdditionalHealthData = require('../models/AdditionalHealthData');

exports.generateRecommendations = async (req, res) => {
  const { userId } = req.params;

  try {
    const healthData = await AdditionalHealthData.find({ userId }).sort({ timestamp: -1 }).limit(10);
    const recommendations = [];

    // Example logic for generating recommendations based on health data
    if (healthData.length > 0) {
      const latestData = healthData[0];

      if (latestData.bloodPressure > '140/90') {
        recommendations.push('Consider reducing sodium intake.');
      }

      if (latestData.bloodSugar > 140) {
        recommendations.push('Monitor your carbohydrate intake.');
      }

      if (latestData.heartRate > 100) {
        recommendations.push('Engage in regular physical activity.');
      }
    }

    const newRecommendations = new HealthRecommendation({
      userId,
      recommendations,
    });

    const savedRecommendations = await newRecommendations.save();
    res.status(201).json(savedRecommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRecommendations = async (req, res) => {
  const { userId } = req.params;

  try {
    const recommendations = await HealthRecommendation.find({ userId }).sort({ timestamp: -1 });
    res.status(200).json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
