const path = require('node:path');
const Kezeles = require('../models/Kezeles');

exports.getKezeles = async (req, res) => {
    try {
        const kezeles = await Patient.find({}).populate('kezeles');
        // console.log(patient);
        
        // res.status(200).render('patientList.ejs', { patient });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.updatedKezeles = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        
        
        const updatedKezeles = await Kezeles.findByIdAndUpdate({_id:id}, req.body);
        res.status(200).json({ msg: "ASd", updatedKezeles });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}