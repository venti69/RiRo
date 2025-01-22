const express = require('express');
const { deletePatient } = require('../controllers/torlPatientRouteControllers.js');

const router = express.Router();
router.delete('/:id', deletePatient);

module.exports = router;