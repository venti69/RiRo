const Appointment = require('../models/Appointment');

exports.UpdateIdopont = async (req, res) => {
    const {id} = req.params;
    
    const {
        patientName,
        doctorName,
        idopont
    } = req.body;

    console.log(patientName, doctorName, idopont);
    
    try {
        const updateAppointment = await Appointment.findByIdAndUpdate({_id:id},{
            patientName,
            doctorName,
            idopont
        });
        console.log(updateAppointment); 
        
        res.status(201).json({ msg: 'Sikeres módosítás' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
