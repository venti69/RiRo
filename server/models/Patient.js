const mongoose = require('mongoose');
const Kezeles = require('./Kezeles'); // Kezelések importálása

const PatientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            default: '',
        },
        gender: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            default: '',
        },
        ssn: {
            type: String,
            default: 0,
        },
        motherName: {
            type: String,
            default: '',
        },
        birthName: {
            type: String,
            default: '',
        },
        birthDate: {
            type: String,
            default: "2025-01-23",
        },
        illness: [{
            type: String,
        }],
        orvosok: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'doctor',
        }],
        isAdmin: { 
            type: Boolean, 
            default: false 
        },
    },
    {
        timestamps: true,
    }
);

PatientSchema.pre('findOneAndDelete', async function (next) {
    const patientId = this.getQuery()._id;
    await Kezeles.deleteMany({ paciens: patientId });
    next();
});

const PatientModel = mongoose.model('patient', PatientSchema);

module.exports = PatientModel;
