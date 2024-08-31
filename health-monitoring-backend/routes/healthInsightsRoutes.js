const express = require('express');
const { getHealthTrends } = require('../controllers/healthInsightsController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:userId', auth, getHealthTrends);

module.exports = router;
