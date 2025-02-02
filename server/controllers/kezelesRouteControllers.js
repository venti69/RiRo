const path = require('node:path');
const Kezeles = require('../models/Kezeles');

exports.getKezeles = async (req, res) => {
    try {
        const kezelesek = await Kezeles.find({}).populate('orvos paciens');
        // console.log(patient);
        
        // res.status(200).render('patientList.ejs', { patient });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
const ujKezeles = await Kezeles.create({
    nev: req.body.nev,
    paciens: req.body.paciensId,
    orvos: req.body.orvosId,
    idopont: req.body.idopont,
});

await Patient.findByIdAndUpdate(req.body.paciensId, { $push: { kezelések: ujKezeles._id } });
await Doctor.findByIdAndUpdate(req.body.orvosId, { $push: { paciensek: req.body.paciensId } });

res.status(201).json(ujKezeles);

exports.updatedKezeles = async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);
        
        
        const updatedKezeles = await Kezeles.findByIdAndUpdate({_id:id}, req.body);
        res.status(200).json({ msg: "ASd", updatedKezeles });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}