const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

router.post('/save', EmployeeController.saveEmployee);
router.post('/update', EmployeeController.updateEmployee);
router.post('/delete', EmployeeController.deleteEmployee);
router.post('/activate', EmployeeController.activateEmployee);
router.get('/list', EmployeeController.getEmployees);
router.post('/:employeeId', EmployeeController.getEmployeeById);

module.exports = router;