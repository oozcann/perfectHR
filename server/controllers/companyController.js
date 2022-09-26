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

//Get Company

//Get Company By ID

//Delete Company (archived: true)

//Activate Company (archived: false)

//Remove Company (remove from db)


module.exports = {saveCompany};