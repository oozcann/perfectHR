const express = require('express');
const router = express.Router();
const AnnualLeaveController = require('../controllers/annualLeaveController');

router.post('/save', AnnualLeaveController.saveAnnualLeave);
router.post('/update', AnnualLeaveController.updateAnnualLeave);
router.post('/delete', AnnualLeaveController.deleteAnnualLeave);
router.post('/list', AnnualLeaveController.getAnnualLeaves);
router.post('/:annualLeaveId', AnnualLeaveController.getAnnualLeaveById);

module.exports = router;