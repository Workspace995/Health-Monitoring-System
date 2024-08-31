const express = require('express');
const { generateRecommendations, getRecommendations } = require('../controllers/healthRecommendationController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:userId', auth, getRecommendations);
router.post('/:userId', auth, generateRecommendations);

module.exports = router;
