const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bonusSchema = new Schema({
    _class: {
        type: String
    },
    description: {
        type: String
    },
    payment: {
        type: Number
    },
    paymentDate: {
        type: Date
    },
    employeeRef:{
        type: Object
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const Bonus = mongoose.model('Bonus', bonusSchema, 'BONUS');
module.exports = Bonus;