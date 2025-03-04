const multer =require( 'multer');
const { CloudinaryStorage } =require( 'multer-storage-cloudinary');
const cloudinary =require( '../cloudinary.js'); // Assure-toi que ce chemin est correct

// Configuration de Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Le dossier sur Cloudinary où les images seront stockées
    allowed_formats: ['jpg', 'jpeg', 'png'], // Formats autorisés
    public_id: (req, file) => {
      // Génère un identifiant unique pour l'image
      return `image-${Date.now()}`;
    }
  }
});

// Crée l'instance multer avec le storage Cloudinary
const upload = multer({ storage });


module.exports = upload;