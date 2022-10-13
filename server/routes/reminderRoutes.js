const express = require('express');
const router = express.Router();
const ReminderController = require('../controllers/reminderController');

router.post('/save', ReminderController.saveReminder);
router.post('/update', ReminderController.updateReminder);
router.post('/delete', ReminderController.deleteReminder);
router.post('/list', ReminderController.getReminders);
router.post('/:reminderId', ReminderController.getReminderById);

module.exports = router;