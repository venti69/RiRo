const Employee = require('../models/Employee');

exports.updateOrvosok = async (req, res) => {
    const {id} = req.params;
    const {phone, gender, address, ssn, motherName, birthName, birthDate, illness} = req.body;
    
    console.log(id);
    
    try {
        const employee = await Employee.findById({_id:id});
        console.log(employee);
        if (doctor){
            const ujDoctor = await Employee.findByIdAndUpdate({_id:id}, {phone, gender, address, ssn, motherName, birthName, birthDate, illness});
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