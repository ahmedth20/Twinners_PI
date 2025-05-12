const express = require('express');
const router = express.Router();
const waitingListController = require('../controllers/waitingListController');

router.get('/status/:patientId', waitingListController.getWaitingListStatus);
router.post('', waitingListController.addToWaitingList);
router.get('/specialty/:specialty', waitingListController.getListBySpecialty);
router.get('/process', waitingListController.processWaitingList);
router.get('/list', waitingListController.getWaitingList);
router.get('/consultation/:patientId', waitingListController.getPatientConsultation);

module.exports = router;

