const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.post('/save', CompanyController.saveCompany);

module.exports = router;