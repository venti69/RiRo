const Appointment = require('../models/Appointment');

exports.GetAllIdopont = async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        res.status(200).render('appointment.ejs', { appointments });
    } catch (error) {
        console.error('Error in GetAllIdopont:', error); // Naplózd a hibát a szerver konzoljára
        res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
};


exports.CreateIdopont = async (req, res) => {
    const {
        patientName,
        doctorName,
        idopont
    } = req.body;
    try {
        const newAppointment = new Appointment({
            patientName,
            doctorName,
            GetIdopont: idopont,
        });
        await newAppointment.save();
        res.status(201).json({ msg: 'Appointment created', newAppointment });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
