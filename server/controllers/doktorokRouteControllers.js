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
exports.addOrvos = async (req, res) => {
    const { nev, szak, kor, neme, email, telszam, idopont } = req.body;
    try {
        const newDoctor = new Doctor({
            nev,
            szak,
            kor,
            neme,
            email,
            telszam,
            idopont,
            orvoskep: "default.jpg"
        });

        await newDoctor.save();
        res.status(200).json({ success: true, msg: "Orvos sikeresen hozzáadva!" });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
};
exports.updateOrvosok = async (req, res) => {
    const {id} = req.params;
    const {nev, szak, kor, neme, email, telszam, idopont} = req.body;
    // console.log(idopont);
    
    // console.log(id);
    
    try {
        const doctor = await Doctor.findById({_id:id});
        // console.log('Hello: ' + doctor);
        if (doctor){
            const ujDoctor = await Doctor.findByIdAndUpdate({_id:id}, {nev: nev, szak: szak, kor: kor, neme: neme, email: email, telszam: telszam, idopont: idopont});
            // console.log("új" +  ujDoctor);
            res.status(200).json({ msg: "Sikeres frissítés történt!" });
        } else {
            res.status(500).json({ msg: "Valami hiba van!" });
        }
        
        // const viewsUt = path.resolve(__dirname, '..', 'views', 'doctors.ejs');
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
