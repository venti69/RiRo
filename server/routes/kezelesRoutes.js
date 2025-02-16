const express = require('express');
const { getKezeles, createKezeles, updatedKezeles, deletedKezeles} = require('../controllers/kezelesRouteControllers');

const router = express.Router();

router.get('/', getKezeles);
router.post('/', createKezeles);
router.put('/:id', updatedKezeles);
router.delete('/:id', deletedKezeles);


module.exports = router;
