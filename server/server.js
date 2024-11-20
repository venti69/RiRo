const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Szerveren vagyunk'); // Ez jelenik meg a főoldalon
});

module.exports = router; // Kiadjuk az útvonalakat az index.js-nek
