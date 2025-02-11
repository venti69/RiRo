const express = require('express');
const {deleteKezeles } = require('../controllers/kezelesTorlesRouteControllers.js');

const router = express.Router();

router.delete('/:id', deleteKezeles);


module.exports = router;
