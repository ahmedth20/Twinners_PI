const express = require('express');
const router = express.Router();
const upload = require('../configs/multer'); // ← utilise ta config multer
const { predictFromImage } = require('../controllers/imagePredictionController');

// Route POST avec upload d'image
router.post('/predict-image', upload.single('image'), predictFromImage);

module.exports = router;
