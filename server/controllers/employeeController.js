const Employee = require('../models/Employee');

//Save Employee

const saveEmployee = (req,res,next) => {
    let employee = new Employee ({
        name: req.body.name,
        surname: req.body.surname,
        uniqueName: req.body.uniqueName,
        dateOfBirth: req.body.dateOfBirth,
        jobStartDate: req.body.jobStartDate,
        annualLeaveSpent: 0,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        archived: false
    });
    employee.save()
    .then(response => {
        console.log('Employee saved successfully : ' + employee.name + ' ' + employee.surname);
        //res.redirect('/login');
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while registering : ' + err
        })
    })    
};

//Get Employees

const getEmployees = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json(response);
        //res.redirect('/login');
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while registering : ' + err
        })
    })  
};

//Get Employee By ID
const getEmployeeById = (req, res, next) => {
    let empId = req.body.employeeId;
    Employee.findById(empId)
    .then(response => {
        res.json(response);
        //res.redirect('/login');
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while registering : ' + err
        })
    })  
};

module.exports = {saveEmployee, getEmployees, getEmployeeById};