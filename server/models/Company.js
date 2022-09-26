const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({

    name: {
        type: String
    },
    uniqueName: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const Company = mongoose.model('Company', companySchema, 'COMPANY');
module.exports = Company;