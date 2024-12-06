const express = require('express');
const { getEmployee } = require('../controllers/usersRouteControllers');

const router = express.Router();
router.get('/', getEmployee);

module.exports = router;