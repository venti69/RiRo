const express = require('express');
const { getKezeles } = require('../controllers/kezelesFrontendRouteControllers');

const router = express.Router();

router.get('/', getKezeles);

module.exports = router;
