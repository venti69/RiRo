const Patient = require('../models/Patient');

exports.UpdatePaciens = async (req, res) => {
    const {id} = req.params;
    
    const {
        name,
        age,
        gender
    } = req.body;

    // console.log(name, age, gender);
    
    try {
        const updatePatient = await Patient.findByIdAndUpdate({_id:id},{
            name,
            age,
            gender
        });
        // console.log(updatePatient); 
        
        res.status(201).json({ msg: 'Sikeres módosítás' });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
