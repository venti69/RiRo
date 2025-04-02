const express = require("express");
const { saveProfile, getProfile, updateProfile } = require("../controllers/profileRouteControllers");
const router = express.Router();

// Profil adatok mentése
router.post("/save", saveProfile);

// Profil adatok lekérése
router.get("/:id", getProfile);

// Profil adatok frissítése
router.put("/:id", updateProfile);

module.exports = router;