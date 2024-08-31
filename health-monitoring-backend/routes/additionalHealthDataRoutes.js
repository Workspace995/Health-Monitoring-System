const express = require('express');
const { addAdditionalHealthData, getAdditionalHealthData } = require('../controllers/additionalHealthDataController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, addAdditionalHealthData);
router.get('/:userId', auth, getAdditionalHealthData);

module.exports = router;
