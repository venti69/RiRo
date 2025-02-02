const express = require('express');
const { getKezeles, createKezeles, updatedKezeles } = require('../controllers/kezelesRouteControllers');

const router = express.Router();

router.get('/', getKezeles);
router.post('/', createKezeles);
router.put('/:id', updatedKezeles);

module.exports = router;
