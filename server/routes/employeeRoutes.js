const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.post('/save', EmployeeController.saveEmployee);


module.exports = router;