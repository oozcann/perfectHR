const Bonus = require('../models/Bonus');

//Save Bonus

const saveBonus = (req,res,next) => {
    let bonus = new Bonus ({
        _class: 'bonus',
        uniqueName: 'PRM-',
        description: req.body.description,
        payment: req.body.payment,
        paymentDate: req.body.paymentDate,
        employeeRef: {
            _id: req.body.employeeRef._id,
            fullName: req.body.employeeRef.fullName,
            class: req.body.employeeRef.class,
        },
        archived: false
    });
    bonus.save()
    .then(response => {
        console.log('Bonus saved successfully for ' + bonus.employeeRef.fullName);
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while saving bonus : ' + err
        })
    })
};

//Update Bonus

const updateBonus = (req, res, next) => {
    let bonusId = req.body._id;
    Bonus.findByIdAndUpdate(bonusId, req.body)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while updating bonus for employee with id : ' + req.body.employeeRef._id+ ' Error : ' + err
        })
    })
};

//Get All Bonus

const getAllBonus = (req, res, next) => {
    const query = req.body;
    Bonus.find(query)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting all bonus : ' + err
        })
    })
};

//Get Bonus By ID

const getBonusById = (req, res, next) => {
    let bonusId = req.body.bonusId;
    Bonus.findById(bonusId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting bonus by id : ' + err
        })
    })
};


//Delete Bonus (archived: true)

const deleteBonus = (req,res,next) => {
    let bonusId = req.body._id;
    Bonus.findByIdAndUpdate(bonusId,{archived:true})
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while deleting bonus : ' + err
        })
    })
};

module.exports = {saveBonus,updateBonus,getAllBonus,getBonusById,deleteBonus};