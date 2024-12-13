

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
        phone:{
            type: String,
            required: true,
        },
        gender:{
            type: String,
            required: true,
        },
        address:{
            type: String,
            required: true,
        },
        ssn:{
            type: Number,
            required: true,
        },
        motherName:{
            type: String,
            required: true,
        },
        birthName:{
            type: String,
            required: true,
        },
        birthDate:{
            type: Date,
            required: true,
        },
        illness:[{
            type: String,
            required: false,
        }],
        isAdmin: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);
const EmployeeModel = mongoose.model('employee', EmployeeSchema);

module.exports = EmployeeModel;
