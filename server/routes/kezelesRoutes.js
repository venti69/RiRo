const express = require('express');
const { kezeles } = require('../controllers/kezelesRouteControllers.js');

const router = express.Router();

router.get('/', kezeles);

module.exports = router;