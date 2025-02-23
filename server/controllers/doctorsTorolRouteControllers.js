const Doctor = require('../models/Doctor');

exports.deleteDoctor = async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    
    try {
        await Doctor.findByIdAndDelete({_id:id});
        res.status(200).json({msg: "Sikeres törlés!"});
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
};
exports.confirmDeleteDoctor = async (req, res) => {
    const { id } = req.params;

    try {
        const doctor = await Doctor.findById(id);
        if (!doctor) {
            return res.status(404).json({ msg: "Az orvos nem található!" });
        }

        return res.status(200).json({ msg: `Biztosan törölni szeretnéd ${doctor.nev} orvost?`, confirm: true });
    } catch (error) {
        return res.status(500).json({ msg: "Hiba történt a törlés ellenőrzésekor", error: error.message });
    }
};
