const express = require('express');
const router = express.Router();
const { askMedicalBot } = require('../controllers/qaController');

router.post('/ask', askMedicalBot);

module.exports = router;
