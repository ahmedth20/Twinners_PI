// routes/medicalRoutes.js
const express = require('express');
const { upload, predictFromImage } = require('../controllers/medicalController');

const router = express.Router();

// Route pour tester la détection d'anomalies sur une image
router.post('/predictImage', upload.single('image'), predictFromImage);

module.exports = router;
