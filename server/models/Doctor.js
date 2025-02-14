const mongoose = require('mongoose');

const orvosSchema = new mongoose.Schema(
    {
        orvoskep: {
            type: String,
            required: true,
        },
        
        nev: {
            type: String,
            required: true,
        },
        kor: {
            type: Number,
            required: true,
        },
        szak: {
            type: String,
            required: true,
        },
        neme: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        telszam: {
            type: String,
            required: true,
        },
        idopont:{
            type: String,
            required: true,
        },
        paciensek: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'patient',
            default: 'Nincs paciens',
        }],
        isEditMode: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);
const OrvosModel = mongoose.model('doctor', orvosSchema);

module.exports = OrvosModel;
