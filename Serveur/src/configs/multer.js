const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuration de Multer pour spécifier où stocker les fichiers et comment nommer les fichiers.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Créer le répertoire uploads s'il n'existe pas déjà
    const uploadPath = path.join(__dirname, '..', 'uploads');  // Chemin vers le dossier 'uploads'
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath); // Crée le répertoire s'il n'existe pas
    }
    cb(null, uploadPath); // Destination de l'upload
  },
  filename: (req, file, cb) => {
    // Nom unique pour éviter les conflits de nommage
    cb(null, Date.now() + path.extname(file.originalname)); // Utilise le timestamp comme nom
  }
});

// Initialisation de Multer avec cette configuration
const upload = multer({ storage });

module.exports = upload;
