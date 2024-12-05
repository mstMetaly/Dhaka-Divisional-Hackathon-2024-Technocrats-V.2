const express = require('express');
const router = express.Router();

const {getUserHealthInfo, insertUserHealthInfo} = require('../controllers/dietController');

router.post('/get-health-info', getUserHealthInfo);

router.post('/insert-health-info', insertUserHealthInfo);

module.exports = router;