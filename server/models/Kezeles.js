const mongoose = require('mongoose');

const kezelesSchema = new mongoose.Schema({
    nev: {
        type: String,
        required: true,
    },
    paciens: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient',
    },
    orvos: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
    },
    idopont: {
        type: Date,
        required: true,
    }
    });
const kezelesModel = mongoose.model('kezeles', kezelesSchema);

module.exports = kezelesModel;