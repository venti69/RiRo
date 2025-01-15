const Doctor = require('../models/Doctor');

exports.deleteDoctor = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    
    try {
        await Doctor.findByIdAndDelete({_id:id});
        res.status(200).json({msg: "Sikeres törlés Rómeó!"});
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
};