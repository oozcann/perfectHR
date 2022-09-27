const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.post('/save', CompanyController.saveCompany);
router.post('/list', CompanyController.getCompanies);
router.post('/:companyId', CompanyController.getCompanyById);

module.exports = router;