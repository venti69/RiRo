const path = require('node:path');
const Doctor = require('../models/Doctor');

exports.getOrvosok = async (req, res) => {
    try {
        const doctors = await Doctor.find({}).where('kor').gte(10);
        // console.log(doctors);
        res.status(200).json({ doctors });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.updateOrvosok = async (req, res) => {
    const {id} = req.params;
    const {nev, szak} = req.body;
    console.log(nev, szak);
    
    console.log(id);
    
    try {
        const doctor = await Doctor.findById({_id:id});
        console.log(doctor);
        if (doctor){
            const ujDoctor = await Doctor.findByIdAndUpdate({_id:id}, {nev: nev, szak: szak});
            console.log("új" +  ujDoctor);
            res.status(200).json({ msg: "Sikeres frissítés történt!" });
        } else {
            res.status(500).json({ msg: "Valami hiba van!" });
        }
        
        // const viewsUt = path.resolve(__dirname, '..', 'views', 'doctors.ejs');
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
