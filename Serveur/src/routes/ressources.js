const express = require('express');
const router = express.Router();
const ressourceController = require('../controllers/ressourcesController');

router.post('/addressource', ressourceController.createRessource);
router.get('/getressources', ressourceController.getAllRessources);
router.get('/:id', ressourceController.getRessourceById);
router.put('/:id', ressourceController.updateRessource);
router.delete('/:id', ressourceController.deleteRessource);

module.exports = router;
