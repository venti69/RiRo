const Patient = require('../models/Patient');
const Kezeles = require('../models/Kezeles');

exports.deletePatient = async (req, res) => {
    const { id } = req.params;

    try {
        await Kezeles.deleteMany({ paciens: id });

        await Patient.findByIdAndDelete(id);

        res.status(200).json({ msg: "Sikeres törlés! (Páciens és kezelései törölve)" });
    } catch (error) {
        res.status(500).json({ msg: "Hiba történt a törlés során", error: error.message });
    }
};
