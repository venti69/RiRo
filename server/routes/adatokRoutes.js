const express = require('express');
const { getAdatok, postAdatok } = require('../controllers/adatokRouteControllers.js');

const router = express.Router();
router.get('/:id', getAdatok);
router.post('/', postAdatok); 
router.put('/:id', postAdatok); 

module.exports = router;