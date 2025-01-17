const express = require('express');
const { getEmployee, updateEmployee } = require('../controllers/usersRouteControllers');

const router = express.Router();
router.get('/', getEmployee);
router.put('/edit/:id', updateEmployee);

module.exports = router;