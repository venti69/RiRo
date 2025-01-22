const express = require('express');
const { getPatient, updatedPatient } = require('../controllers/patientRouteControllers');

const router = express.Router();
router.get('/', getPatient);
router.put('/edit/:id', updatedPatient);

module.exports = router;