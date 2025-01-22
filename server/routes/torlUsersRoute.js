const express = require('express');
const { deleteUser } = require('../controllers/torlUsersRouteControllers.js');

const router = express.Router();
router.delete('/:id', deleteUser);

module.exports = router;