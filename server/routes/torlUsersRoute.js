const express = require('express');
const { deleteEmployee } = require('../controllers/torlUsersRouteControllers.js');

const router = express.Router();
router.delete('/:id', deleteEmployee);

module.exports = router;