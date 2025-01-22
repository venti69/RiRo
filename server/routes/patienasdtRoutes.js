const express = require('express');
const { getPatient, deletePatient } = require('../controllers/patientRouteControllers');

const router = express.Router();
router.get('/', getPatient);
router.post('/:id', deletePatient);

module.exports = router;