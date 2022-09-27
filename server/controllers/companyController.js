const Company = require('../models/Company');

//Save Company

const saveCompany = (req,res,next) => {
    let company = new Company ({
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

//Get Companies

//Get Company By ID

const getCompanyById = (req, res, next) => {
    let compId = req.body.companyId;
    Employee.findById(compId)
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

//Activate Company (archived: false)

//Remove Company (remove from db)


module.exports = {saveCompany,getCompanyById};