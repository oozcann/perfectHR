const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    name: {
        type: String
    },
    surname: {
        type: String
    },
    uniqueName: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    jobStartDate: {
        type: String
    },
    annualLeaveSpent: {
        type: Number
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    phone:{
        type: String
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const Employee = mongoose.model('Employee', employeeSchema, 'EMPLOYEE');
module.exports = Employee;