const express = require('express');
const router = express.Router();
const weatherRoute = require('../controllers/weatherRoute.controller');


router.get('/', weatherRoute.getForecast);

module.exports = router;