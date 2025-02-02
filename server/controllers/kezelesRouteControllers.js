const Kezeles = require('../models/Kezeles');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

exports.getKezeles = async (req, res) => {
    try {
        const kezelesek = await Kezeles.find({}).populate('orvos paciens');
        res.status(200).json(kezelesek);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.createKezeles = async (req, res) => {
    try {
        const ujKezeles = await Kezeles.create({
            nev: req.body.nev,
            paciens: req.body.paciensId,
            orvos: req.body.orvosId,
            idopont: req.body.idopont,
        });

        await Patient.findByIdAndUpdate(req.body.paciensId, { $push: { kezelések: ujKezeles._id } });
        await Doctor.findByIdAndUpdate(req.body.orvosId, { $push: { paciensek: req.body.paciensId } });

        res.status(201).json(ujKezeles);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

exports.updatedKezeles = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedKezeles = await Kezeles.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(200).json({ msg: "Kezelés frissítve", updatedKezeles });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
