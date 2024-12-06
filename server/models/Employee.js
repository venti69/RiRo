

const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);
const EmployeeModel = mongoose.model('employee', EmployeeSchema);

module.exports = EmployeeModel;
