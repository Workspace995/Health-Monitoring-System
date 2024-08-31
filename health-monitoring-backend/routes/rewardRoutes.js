const express = require('express');
const { getRewards, updateRewards } = require('../controllers/rewardController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/:userId', auth, getRewards);
router.post('/', auth, updateRewards);

module.exports = router;
