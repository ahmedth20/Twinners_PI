// controllers/medicalController.js
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const multer = require('multer');
require('dotenv').config();

// Configuration de Multer pour gérer l'upload de fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '..', 'uploads');
    // Vérifie si le dossier existe sinon le crée
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Fonction pour prédire l'anomalie à partir d'une image
const predictFromImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Aucun fichier reçu.' });
    }

    const imagePath = req.file.path;
    const imageBuffer = fs.readFileSync(imagePath);

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/microsoft/beit-base-patch16-224',
      imageBuffer,
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/octet-stream',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Erreur Hugging Face:', error.response?.data || error.message);
    res.status(500).json({
      error: "Erreur lors de l'appel à l'API Hugging Face.",
      details: error.response?.data || error.message,
    });
  }
};

module.exports = { upload, predictFromImage };
