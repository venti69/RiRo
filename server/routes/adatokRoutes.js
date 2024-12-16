const express = require('express');
const { updateAdatok } = require('../controllers/doktorokRouteControllers');

const router = express.Router();
router.post('/:id', updateAdatok); 

module.exports = router;