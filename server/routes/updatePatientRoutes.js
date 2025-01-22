const express = require('express');
const { getUpdatePage } = require('../controllers/patientUpdateRouteControllers.js');

const router = express.Router();
router.get('/:id', getUpdatePage);

module.exports = router;