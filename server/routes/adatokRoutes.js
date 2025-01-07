const express = require('express');
const { postAdatok } = require('../controllers/adatokRouteControllers.js');

const router = express.Router();
router.post('/', postAdatok); 

module.exports = router;