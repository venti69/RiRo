const Profile = require("../models/Patient");

// Profil adatok lekérése
exports.getProfile = async (req, res) => {
    try {
        const { id } = req.params;
        const profile = await Profile.findById(id);

        if (!profile) {
            return res.status(404).json({ msg: "Profil nem található." });
        }

        res.status(200).json(profile);
    } catch (error) {
        console.error("Hiba történt a profil lekérése során:", error);
        res.status(500).json({ msg: "Hiba történt a profil lekérése során." });
    }
};

// Profil adatok mentése
exports.saveProfile = async (req, res) => {
    const { name, email, phone, address, taj, motherName, birthDate, gender, profileImage } = req.body;

    try {
        const newProfile = new Profile({
            name,
            email,
            phone,
            address,
            taj,
            motherName,
            birthDate,
            gender,
            profileImage,
        });

        await newProfile.save();
        res.status(201).json({ msg: "Profil sikeresen mentve!" });
    } catch (error) {
        console.error("Hiba történt a profil mentése során:", error);
        res.status(500).json({ msg: "Hiba történt a profil mentése során." });
    }
};

// Profil adatok frissítése
exports.updateProfile = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address, taj, motherName, birthDate, gender, profileImage } = req.body;

    try {
        const profile = await Profile.findById(id);

        if (!profile) {
            return res.status(404).json({ msg: "Profil nem található." });
        }

        const updatedProfile = await Profile.findByIdAndUpdate(
            id,
            {
                name,
                email,
                phone,
                address,
                taj,
                motherName,
                birthDate,
                gender,
                profileImage,
            },
            { new: true }
        );

        res.status(200).json({ msg: "Profil sikeresen frissítve!", updatedProfile });
    } catch (error) {
        console.error("Hiba történt a profil frissítése során:", error);
        res.status(500).json({ msg: "Hiba történt a profil frissítése során." });
    }
};