const express = require('express');
const { deleteDoctor, confirmDeleteDoctor } = require('../controllers/doctorsTorolRouteControllers.js');

const router = express.Router();
router.get('/confirm-delete/:id', confirmDeleteDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router;