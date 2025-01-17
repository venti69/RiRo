const Employee = require('../models/Employee');

exports.getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).render('employeeList.ejs', { employees });
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
};
exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        
        const updatedEmployee = await Employee.findByIdAndUpdate({_id:id}, req.body);
        res.status(200).json({ msg: "ASd" });
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
}