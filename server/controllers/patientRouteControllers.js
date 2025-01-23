const Patient = require('../models/Patient');

exports.getPatient = async (req, res) => {
    try {
        const patient = await Patient.find({}).populate('orvosok');
        // console.log(patient);
        
        res.status(200).render('patientList.ejs', { patient });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.updatedPatient = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        
        
        const updatePatient = await Patient.findByIdAndUpdate({_id:id}, req.body);
        res.status(200).json({ msg: "ASd", updatePatient });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}