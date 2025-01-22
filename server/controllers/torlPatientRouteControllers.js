const Patient = require('../models/Patient');

exports.deletePatient = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        await Patient.findByIdAndDelete({_id:id});
        res.status(200).json({msg: "Sikeres törlés!"});
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
};