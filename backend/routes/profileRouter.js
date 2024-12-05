const express = require('express');
const router = express.Router();

const {getProfileInfo, updateProfileInfo} = require('../controllers/profileController');

router.post('/get-profile-info', getProfileInfo);

router.post('/update-profile-info', updateProfileInfo);

module.exports = router;
