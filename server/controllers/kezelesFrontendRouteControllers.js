const Kezeles = require('../models/Kezeles');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');
exports.getKezeles = async (req, res) => {
    try {
        const kezelesek = await Kezeles.find({})
            .populate('orvos');
            const emberkek = await Kezeles.find({}).populate('paciens');
            const szures = emberkek.map(elem => elem.nev);
            const egyediNevek = [...new Set(szures)];
            console.log(kezelesek);

        res.status(200).json({ kezelesek, egyediNevek, emberkek });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
