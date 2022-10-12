const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema({

    name: {
        type: String
    },
    description: {
        type: String
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