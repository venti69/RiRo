const express = require('express');
const { GetAllIdopont, CreateIdopont } = require('../controllers/idopontokRouteControllers');

const router = express.Router();

router.get('/', GetAllIdopont);
router.post('/', CreateIdopont);

module.exports = router;
