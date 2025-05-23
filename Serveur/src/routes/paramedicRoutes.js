const express = require('express');
const router = express.Router();
const paramedicController = require('../controllers/paramedicController'); 


router.post('/paramedics/new', paramedicController.createParamedic);
router.post('/paramedics', paramedicController.createParamedic);
router.get('/paramedics/', paramedicController.getParamedics);
router.get('/paramedics/:id', paramedicController.getParamedicById);
router.put('/paramedics/:id', paramedicController.updateParamedic);
router.delete('/paramedics/:id', paramedicController.deleteParamedic);
router.put('/paramedics/:id/deactivate', paramedicController.deactivateParamedic);
router.put('/paramedics/:id/activate', paramedicController.activateParamedic);
router.get('/paramedics/ambulance/:ambulanceId', paramedicController.getParamedicByAmbulance); // Recherche des paramedics par ambulance

module.exports = router;