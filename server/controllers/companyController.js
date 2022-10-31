const Company = require('../models/Company');
const Employee = require('../models/Employee');

//Save Company

const saveCompany = (req,res,next) => {
    let company = new Company ({
        _class: 'company',
        name: req.body.name,
        uniqueName: req.body.uniqueName,
        address: req.body.address,
        phone: req.body.phone,
        archived: false
    });
    company.save()
    .then(response => {
        console.log('Company saved successfully : ' + company.name);
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while saving company : ' + err
        })
    })
};

//Update Company

const updateCompany = (req, res, next) => {
    let compId = req.body._id;
    Company.findByIdAndUpdate(compId, req.body)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while updating company : ' + req.body.name+ ' Error : ' + err
        })
    })
};

//Get Companies

const getCompanies = (req, res, next) => {
    const query = req.body;
    Company.find(query)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting companies : ' + err
        })
    })
};

//Get Company By ID

const getCompanyById = (req, res, next) => {
    let compId = req.body.companyId;
    Company.findById(compId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while getting company by id : ' + err
        })
    })
};


//Delete Company (archived: true)

const deleteCompany = (req,res,next) => {
    let compId = req.body._id;
    Employee.updateMany({"companyRef._id":compId},{archived:true})
    .then(response => {
        console.log(response);
    });
    Company.findByIdAndUpdate(compId,{archived:true})
    .then(response => {
        res.json(response);
        //res.redirect('/login');
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while deleting company : ' + err
        })
    })
};

//Activate Company (archived: false)

const activateCompany = (req,res,next) => {
    let compId = req.body._id;
    Employee.updateMany({"companyRef._id":compId},{archived:false})
    .then(response => {
        console.log(response);
    });
    Company.findByIdAndUpdate(compId,{archived:false})
    .then(response => {
        res.json(response);
        //res.redirect('/login');
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while activating company : ' + err
        })
    })
};

//Remove Company (remove from db)

const removeCompany = (req,res,next) => {
    let compId = req.body._id;
    Company.findByIdAndDelete(compId)
    .then(response => {
        res.json(response);
    })
    .catch(err => {
        res.json({
            message: 'An error ocurred while removing company : ' + err
        })
    })
};

module.exports = {saveCompany,updateCompany,getCompanies,getCompanyById,deleteCompany,activateCompany,removeCompany};