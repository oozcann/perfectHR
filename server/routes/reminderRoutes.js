const express = require('express');
const router = express.Router();
const ReminderController = require('../controllers/reminderController');

router.post('/save', ReminderController.saveReminder);
router.post('/list', ReminderController.getReminders);

module.exports = router;