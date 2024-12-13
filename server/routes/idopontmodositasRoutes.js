const express = require('express');
const { UpdateIdopont } = require('../controllers/idopontmodositRouteControllers');

const router = express.Router();

router.post('/:id', UpdateIdopont);

module.exports = router;
