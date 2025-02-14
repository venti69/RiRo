const express = require('express');
const { getOrvosok, updateOrvosok, addOrvos } = require('../controllers/doktorokRouteControllers');

const router = express.Router();
router.get('/', getOrvosok); 
router.post('/', addOrvos);
router.post('/:id', updateOrvosok);

module.exports = router;