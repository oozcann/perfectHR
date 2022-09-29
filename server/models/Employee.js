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
    internalUniqueName: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    jobStartDate: {
        type: Date
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
    companyRef:{
        type: Object
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const Employee = mongoose.model('Employee', employeeSchema, 'EMPLOYEE');
module.exports = Employee;