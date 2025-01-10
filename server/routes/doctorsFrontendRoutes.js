const express = require('express');
const { getOrvosok, updateOrvosok } = require('../controllers/doktorokFrontendRouteControllers');

const router = express.Router();
router.get('/', getOrvosok); 
router.post('/:id', updateOrvosok); 

module.exports = router;