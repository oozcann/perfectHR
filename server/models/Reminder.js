const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
    _class: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    companyRef: {
        type: Object
    },
    reminderDate: {
        type: Date
    },
    archived: {
        type: Boolean
    }
},{timestamps: true});
const Reminder = mongoose.model('Reminder', reminderSchema, 'REMINDER');
module.exports = Reminder;