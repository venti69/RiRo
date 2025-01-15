const express = require('express');
const { deleteDoctor } = require('../controllers/doctorsTorolRouteControllers.js');

const router = express.Router();
router.delete('/:id', deleteDoctor);

module.exports = router;