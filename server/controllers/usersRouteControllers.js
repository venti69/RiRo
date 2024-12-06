const Employee = require('../models/Employee');

exports.getEmployee = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).render('employeeList', { employees });
    } catch (error) {
        res.status(500).render('error', { msg: error.message });
    }
};
