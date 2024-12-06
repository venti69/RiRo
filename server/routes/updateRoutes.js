const express = require('express');
const { getUpdatePage } = require('../controllers/updateRouteControllers.js');

const router = express.Router();
router.get('/:id', getUpdatePage);

module.exports = router;