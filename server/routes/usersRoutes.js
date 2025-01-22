const express = require('express');
const { getUser, updatedUser } = require('../controllers/usersRouteControllers');

const router = express.Router();
router.get('/', getUser);
router.put('/edit/:id', updatedUser);

module.exports = router;