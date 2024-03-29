const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const UserRoute = require('./server/routes/userRoutes');
const EmployeeRoute = require('./server/routes/employeeRoutes');
const CompanyRoute = require('./server/routes/companyRoutes');
const ReminderRoute = require('./server/routes/reminderRoutes');
const BonusRoute = require('./server/routes/bonusRoutes');
const AnnualLeaveRoute = require('./server/routes/annualLeaveRoutes');
const EntityRoute = require('./server/routes/entityRoutes');
const path = require('path');
mongoose.connect('mongodb://localhost:27017/application',{useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', (err) => {
    console.log('Error on mongodb connection : ' + err);
});
db.once('open', ()=>{
    console.log('MongoDB connection is established!');
});

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/app')));
app.use(express.static(path.join(__dirname, '/node_modules')));
app.get('/home', (req,res) =>{
    //res.redirect('/login');
    res.sendFile(path.join(__dirname, '/app', '/index.html'));
});
app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, '/app', '/login.html'));
});
app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, '/app', '/register.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.use('/api/user', UserRoute);
app.use('/api/employee', EmployeeRoute);
app.use('/api/company', CompanyRoute);
app.use('/api/reminder', ReminderRoute);
app.use('/api/bonus', BonusRoute);
app.use('/api/annualLeave', AnnualLeaveRoute);
app.use('/api/entity', EntityRoute);