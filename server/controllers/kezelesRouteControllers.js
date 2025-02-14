const Kezeles = require('../models/Kezeles');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

// exports.getKezeles = async (req, res) => {
//     try {
//         // const kezelesek = await Kezeles.find({});
//         // const orvos = await Kezeles.find({}).populate('doctor');
//         const paciens = await Kezeles.find({}).populate('patient');
//         // console.log(paciens);
//         res.status(200).json({paciens});
//     } catch (error) {
//         res.status(500).json({ msg: error.message });
//     }
// };
exports.getKezeles = async (req, res) => {
    try {
        const kezelesek = await Kezeles.find({}).populate('orvos');
            const emberkek = await Kezeles.find({}).populate('paciens');
            const szures = emberkek.map(elem => elem.nev);
            const egyediNevek = [...new Set(szures)];
            // console.log(emberkek);

        res.status(200).render('kezeles', { kezelesek, egyediNevek, emberkek });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
exports.createKezeles = async (req, res) => {
    try {

        const { idopont } = req.body;
        const ora = new Date(idopont).getHours();        
        // console.log(Number(ora));
        const doctor = await Doctor.findById({_id:req.body.orvosId});
        const paciens = await Patient.findById({_id:req.body.paciensId});
        // console.log(doctor);
        const elerheto = doctor.idopont.split(' ')[1];
        // console.log(elerheto);
        const kezdo = elerheto.split('-')[0];
        // console.log("A kezdő érték", Number(kezdo));
        
        const vegso = elerheto.split('-')[1];
        // console.log("A végső érték", vegso);
        if(Number(kezdo) < Number(ora) && Number(ora) < Number(vegso)){
                const ujKezeles = new Kezeles({
                nev: req.body.nev,
                paciens: paciens._id,
                orvos: doctor._id,
                idopont: req.body.idopont,
                // await ujKezeles.save();
            });
            res.status(201).json({ujKezeles});
        }else{
            res.status(500).json({msg: "Az orvos ebben az időpontban nem elérhető!"});
        }
        // console.log(ujKezeles);

        // await Patient.findByIdAndUpdate(req.body.paciensId, { $push: { kezelések: ujKezeles._id } });
        // await Doctor.findByIdAndUpdate(req.body.orvosId, { $push: { paciensek: req.body.paciensId } });
        console.log(Number(kezdo) < Number(ora) && Number(ora) < Number(vegso));
        

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

