const Patient = require('../models/Patient');

exports.getUpdatePage = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Patient.findById({_id:id});
        // console.log(patient);
        
        res.status(200).render('user.ejs', { patient });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
