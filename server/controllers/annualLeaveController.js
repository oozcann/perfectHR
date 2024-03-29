const AnnualLeave = require('../models/AnnualLeave');
const mongoose = require('mongoose');
//Save AnnualLeave

const collection = mongoose.connection.collection('ANNUAL_LEAVE');
const getNumDocs = () => {
    return collection.countDocuments().then(count => {
        return count;
    });
}
let count = 0;
getNumDocs().then(result => {
    count = result;
})
const saveAnnualLeave = (req,res,next) => {
    let annualLeave = new AnnualLeave ({
        _class: 'annualLeave',
        uniqueName: 'IZN-' + (count + 1),
        description: req.body.description,
        annualLeaveStartDate: req.body.annualLeaveStartDate,
        annualLeaveEndDate: req.body.annualLeaveEndDate,
        jobStartDate: req.body.jobStartDate,
        daysInDiff: req.body.daysInDiff,
        employeeRef: {
            _id: req.body.employeeRef._id,
            fullName: req.body.employeeRef.fullName,
            class: req.body.employeeRef.class,
        },
        archived: false
    });
    annualLeave.save()
    .then(response => {
        console.log('Annual Leave saved successfully for ' + annualLeave.employeeRef.fullName);
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while saving annual leave : ' + err
        })
    })
};

//Update AnnualLeave

const updateAnnualLeave = (req, res, next) => {
    let annualLeaveId = req.body._id;
    AnnualLeave.findByIdAndUpdate(annualLeaveId, req.body)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while updating annual leave for employee with id : ' + req.body.employeeRef._id+ ' Error : ' + err
        })
    })
};

//Get AnnualLeaves

const getAnnualLeaves = (req, res, next) => {
    const query = req.body;
    AnnualLeave.find(query)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting Annual Leaves : ' + err
        })
    })
};

//Get AnnualLeave By ID

const getAnnualLeaveById = (req, res, next) => {
    let annualLeaveId = req.body.annualLeaveId;
    AnnualLeave.findById(annualLeaveId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting annual leave by id : ' + err
        })
    })
};


//Delete AnnualLeave (archived: true)

const deleteAnnualLeave = (req,res,next) => {
    let annualLeaveId = req.body._id;
    AnnualLeave.findByIdAndUpdate(annualLeaveId,{archived:true})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while deleting annual leave : ' + err
        })
    })
};

module.exports = {saveAnnualLeave,updateAnnualLeave,getAnnualLeaves,getAnnualLeaveById,deleteAnnualLeave};