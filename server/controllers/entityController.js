const Company = require('../models/Company');
const Employee = require('../models/Employee');
const Reminder = require('../models/Reminder');

function getEntityObject (req) {
    if (req.body._class.includes('company')) {
        return new Company ({
            _class: 'company',
            name: req.body.name,
            uniqueName: req.body.uniqueName,
            address: req.body.address,
            phone: req.body.phone,
            archived: false
        });
    }
    if (req.body._class.includes('employee')) {
        return new Employee ({
           _class: 'employee',
           fullName: req.body.name + ' ' + req.body.surname,
           name: req.body.name,
           surname: req.body.surname,
           uniqueName: req.body.uniqueName,
           internalUniqueName: req.body.internalUniqueName,
           dateOfBirth: req.body.dateOfBirth,
           jobStartDate: req.body.jobStartDate,
           annualLeaveSpent: 0,
           gender: req.body.gender,
           email: req.body.email,
           phone: req.body.phone,
           companyRef: {
               _id: req.body.companyRef._id,
               name: req.body.companyRef.name,
               class: req.body.companyRef.class,
           },
           archived: false
       });
    }
    if (req.body._class.includes('reminder')) {
        return new Reminder ({
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
    }
}
function specifyEntityToBeUpdated (req) {
    if (req.body._class.includes('company')){
        return Company;
    }
    if (req.body._class.includes('employee')){
        return Employee;
    }
    if (req.body._class.includes('reminder')){
        return Reminder;
    }
}

//Save Entity

const saveEntity = (req,res,next) => {
    let entity = getEntityObject(req);
    entity.save()
    .then(response => {
        console.log('Entity saved successfully : ' + entity.name);
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while saving entity : ' + err
        })
    })
};

//Update Entity

const updateEntity = (req, res, next) => {
    let entityId = req.body._id;
    let entityToBeUpdated = specifyEntityToBeUpdated(req);
    entityToBeUpdated.findByIdAndUpdate(entityId, req.body)
    .then(response => {
        console.log('Entity updated successfully : ' + entity);
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while updating entity ' + req.body._class + ' with Id : ' + req.body + ' Error : ' + err
        })
    })
};

//Get Entities

const getEntities = (req, res, next) => {
    const query = req.body;
    let entityToBeUpdated = specifyEntityToBeUpdated(req);
    entityToBeUpdated.find(query)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting entities : ' + err
        })
    })
};

//Get Entity By ID

const getEntityById = (req, res, next) => {
    let compId = req.body.companyId;
    Company.findById(compId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting entity by id : ' + err
        })
    })
};


//Delete Entity (archived: true)

const deleteEntity = (req,res,next) => {
    let entityId = req.body._id;
    let entityToBeUpdated = specifyEntityToBeUpdated(req);
    entityToBeUpdated.findByIdAndUpdate(entityId,{archived:true})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while deleting entity : ' + err
        })
    })
};

//Activate Entity (archived: false)

const activateEntity = (req,res,next) => {
    let entityId = req.body._id;
    let entityToBeUpdated = specifyEntityToBeUpdated(req);
    entityToBeUpdated.findByIdAndUpdate(entityId,{archived:false})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while activating entity : ' + err
        })
    })
};

//Remove Entity (remove from db)

const removeEntity = (req,res,next) => {
    let entityId = req.body._id;
    let entityToBeUpdated = specifyEntityToBeUpdated(req);
    entityToBeUpdated.findByIdAndDelete(entityId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while removing entity : ' + err
        })
    })
};

module.exports = {saveEntity,updateEntity,getEntities,getEntityById,deleteEntity,activateEntity,removeEntity};