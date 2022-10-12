const Reminder = require('../models/Reminder');

//Save Reminder

const saveReminder = (req,res,next) => {
    let reminder = new Reminder ({
        name: req.body.name,
        description: req.body.description,
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

//Update Employee

//Get Employees

//Get Employee By ID

//Delete Employee (archived: true)

//Activate Employee (archived: true)

//Remove Employee (remove from db)

module.exports = {saveReminder};