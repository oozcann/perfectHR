const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const annualLeaveSchema = new Schema({
    _class: {
        type: String
    },
    uniqueName: {
        type: String
    },
    description: {
        type: String
    },
    annualLeaveStartDate: {
        type: Date
    },
    jobStartDate: {
        type: Date
    },
    annualLeaveEndDate: {
        type: Date
    },
    employeeRef:{
        type: Object
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const AnnualLeave = mongoose.model('AnnualLeave', annualLeaveSchema, 'ANNUAL_LEAVE');
module.exports = AnnualLeave;