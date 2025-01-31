const path = require('node:path');
const Doctor = require('../models/Doctor');

exports.getOrvosok = async (req, res) => {
    try {
        const doctors = await Doctor.find({}).where('kor');
        // console.log(doctors);
        const viewsUt = path.resolve(__dirname, '..', 'views', 'doctors.ejs');
        res.status(200).render(viewsUt, { doctors });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

exports.updateOrvosok = async (req, res) => {
    const {id} = req.params;
    const {nev, szak, kor, neme, email, telszam} = req.body;
    // console.log(nev, szak, kor, neme, email, telszam);
    
    // console.log(id);
    
    try {
        const doctor = await Doctor.findById({_id:id});
        console.log('Hello: ' + doctor);
        if (doctor){
            const ujDoctor = await Doctor.findByIdAndUpdate({_id:id}, {nev: nev, szak: szak, kor: kor, neme: neme, email: email, telszam: telszam});
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
