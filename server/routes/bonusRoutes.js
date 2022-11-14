const express = require('express');
const router = express.Router();
const BonusController = require('../controllers/bonusController');

router.post('/save', BonusController.saveBonus);
router.post('/update', BonusController.updateBonus);
router.post('/delete', BonusController.deleteBonus);
router.post('/list', BonusController.getAllBonus);
router.post('/:bonusId', BonusController.getBonusById);

module.exports = router;