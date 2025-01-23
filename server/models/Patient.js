

const mongoose = require('mongoose');

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
        phone:{
            type: String,
            default: '',
        },
        gender:{
            type: String,
            default: '',
        },
        address:{
            type: String,
            default: '',
        },
        ssn:{
            type: Number,
            default: 0,
        },
        motherName:{
            type: String,
            default: '',
        },
        birthName:{
            type: String,
            default: '',
        },
        birthDate:{
            type: String,
            default: "2025-01-23",
        },
        illness:[{
            type: String,
            }],
        orvosok: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'doctor',
            }],
        isAdmin: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);
const PatientModel = mongoose.model('patient', PatientSchema);

module.exports = PatientModel;
