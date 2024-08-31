const express = require('express');
const router = express.Router();
const { getHealthAdvice } = require('../controllers/virtualAssistantController');

router.post('/healthadvice', getHealthAdvice);

module.exports = router;
