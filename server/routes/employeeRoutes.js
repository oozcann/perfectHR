const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.post('/save', EmployeeController.saveEmployee);
router.get('/list', EmployeeController.getEmployees);
router.get('/:employeeId', EmployeeController.getEmployeeById);

module.exports = router;