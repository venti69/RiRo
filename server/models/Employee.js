

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
            default: '',
        },
        gender:{
            type: String,
            default: '',
        },
        address:{
            type: String,
            default: '',
        },
        ssn:{
            type: Number,
            default: 0,
        },
        motherName:{
            type: String,
            default: '',
        },
        birthName:{
            type: String,
            default: '',
        },
        birthDate:{
            type: Date,
            default: new Date().now,
        },
        illness:[{
            type: String,
            }],
        isAdmin: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);
const EmployeeModel = mongoose.model('employee', EmployeeSchema);

module.exports = EmployeeModel;
