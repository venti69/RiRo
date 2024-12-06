const Employee = require('../models/Employee');

exports.getUpdatePage = async (req, res) => {
    const { id } = req.params;
    try {
        const employee = await Employee.findById({_id:id});
        console.log(employee);
        
        res.status(200).render('employee.ejs', { employee });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
