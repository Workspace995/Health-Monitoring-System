// routes/healthDataRoutes.js
const express = require('express');
const router = express.Router();
const { addHealthData, getHealthData } = require('../controllers/healthDataController');
const auth = require('../middleware/auth');

router.post('/add', auth, addHealthData);
router.get('/', auth, getHealthData);

module.exports = router;
