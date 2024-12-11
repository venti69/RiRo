const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    idopont: { type: Date, required: true },
});


const Appointment = mongoose.model('appointment', appointmentSchema);

module.exports = Appointment;
