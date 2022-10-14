const Reminder = require('../models/Reminder');

//Save Reminder

const saveReminder = (req,res,next) => {
    let reminder = new Reminder ({
        _class: 'reminder',
        name: req.body.name,
        description: req.body.description,
        companyRef: {
            _id: req.body.companyRef._id,
            name: req.body.companyRef.name,
            class: req.body.companyRef.class,
        },
        reminderDate: req.body.reminderDate,
        archived: false
    });
    reminder.save()
    .then(response => {
        console.log('Reminder saved successfully.');
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while saving reminder : ' + err
        })
    })
};

//Update Reminder

const updateReminder = (req, res, next) => {
    let reminderId = req.body._id;
    Reminder.findByIdAndUpdate(reminderId, req.body)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while updating reminder : ' + req.body.name + err
        })
    })
};

//Get Reminders

const getReminders = (req, res, next) => {
    const query = req.body;
    Reminder.find(query)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting reminders : ' + err
        })
    })
};

//Get Reminder By ID

const getReminderById = (req, res, next) => {
    let reminderId = req.body.reminderId;
    Reminder.findById(reminderId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting reminder by id : ' + err
        })
    })
};

//Delete Reminder (archived: true)

const deleteReminder = (req,res,next) => {
    let reminderId = req.body._id;
    Reminder.findByIdAndUpdate(reminderId,{archived:true})
    .then(response => {
        res.json(response);
        //res.redirect('/login');
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while deleting reminder : ' + err
        })
    })
};

module.exports = {saveReminder, updateReminder, getReminders, getReminderById, deleteReminder};