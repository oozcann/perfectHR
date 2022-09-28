const express = require('express');
const router = express.Router();
const CompanyController = require('../controllers/companyController');

router.post('/save', CompanyController.saveCompany);
router.post('/update', CompanyController.updateCompany);
router.post('/delete', CompanyController.deleteCompany);
router.post('/activate', CompanyController.activateCompany);
router.post('/remove', CompanyController.removeCompany);
router.post('/list', CompanyController.getCompanies);
router.post('/:companyId', CompanyController.getCompanyById);

module.exports = router;