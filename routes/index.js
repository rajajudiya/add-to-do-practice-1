const express = require('express');
const router = express.Router();
const controll = require('../controllers/controller');

router.get('/index',controll.defaultcontroller);

module.exports = router;