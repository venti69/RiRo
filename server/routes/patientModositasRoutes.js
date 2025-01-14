const express = require('express');
const { UpdatePaciens } = require('../controllers/patientModositRouteControllers');

const router = express.Router();

router.put('/:id', UpdatePaciens);

module.exports = router;
