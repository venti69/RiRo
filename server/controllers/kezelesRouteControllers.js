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

        const doctor = await Doctor.findById({ _id: req.body.orvosId });
        const paciens = await Patient.findById({ _id: req.body.paciensId });

        const elerheto = doctor.idopont.split(' ')[1];
        const kezdo = elerheto.split('-')[0];
        const vegso = elerheto.split('-')[1];
        const napErtek = new Date(idopont).getDay();

        if (doctor.idopont.includes("H-P") && (napErtek === 0 || napErtek === 6)) {
            return res.status(400).json({ msg: "Ez az orvos csak hétfőtől péntekig rendel!" });
        }

        if (doctor.idopont.includes("Szo-V") && (napErtek >= 1 && napErtek <= 5)) {
            return res.status(400).json({ msg: "Ez az orvos csak hétvégén rendel!" });
        }

        if (Number(kezdo) < Number(ora) && Number(ora) < Number(vegso)) {
            const ujKezeles = new Kezeles({
                nev: req.body.nev,
                paciens: paciens._id,
                orvos: doctor._id,
                idopont: req.body.idopont,
                });
            await ujKezeles.save();

            // console.log(ujKezeles);
            
            return res.status(201).json({ ujKezeles });
        } 
        
        return res.status(500).json({ msg: "Az orvos ebben az időpontban nem elérhető!" });

    } catch (error) {
        return res.status(500).json({ msg: error.message });
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
exports.deletedKezeles = async (req, res) => {
    const {id} = req.params;
    // console.log(id);
    
    try {
        await Kezeles.findByIdAndDelete({_id:id});
        res.status(200).json({msg: "Sikeres törlés!"});
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
};
