    const path = require('node:path');
    const Patient = require('../models/Patient');

    exports.getPatient = async (req, res) => {
        try {
            const patients = await Patient.find({});
            // console.log(doctors);
            const viewsUt = path.resolve(__dirname, '..', 'views', 'patient.ejs');
            res.status(200).render(viewsUt, { patients });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    };
    exports.deletePatient = async (req, res) => {
        const { id } = req.params;
        try {
            // Töröljük a pácienst
            await Patient.findByIdAndDelete({ _id: id });
            // Újra lekérjük a maradék pácienseket
            const patients = await Patient.find({});
            const viewsUt = path.resolve(__dirname, '..', 'views', 'patient.ejs');
            res.status(200).render(viewsUt, { patients });
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    };
    
