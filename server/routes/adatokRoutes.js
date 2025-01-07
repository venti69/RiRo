const express = require('express');
const { updateOrvosok  } = require('../controllers/doktorokRouteControllers');

const router = express.Router();
router.post('/:id', updateOrvosok); 

module.exports = router;