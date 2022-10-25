const express = require('express');
const router = express.Router();
const EntityController = require('../controllers/entityController');

router.post('/save', EntityController.saveEntity);
router.post('/update', EntityController.updateEntity);
router.post('/delete', EntityController.deleteEntity);
router.post('/activate', EntityController.activateEntity);
router.post('/remove', EntityController.removeEntity);
router.post('/list', EntityController.getEntities);
router.post('/:entityId', EntityController.getEntityById);

module.exports = router;