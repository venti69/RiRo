const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    name: String,
    email: String,
    password: String,
});

const EmployeeModel = new mongoose.model('employee', EmployeeSchema);
module.exports = EmployeeModel;
