const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

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
    
    console.error('Erreur Hugging Face:', error.response ? error.response.data : error.message);
    res.status(500).json({
      error: 'Erreur lors de l\'appel à l\'API Hugging Face.',
      details: error.response ? error.response.data : error.message,
    });
  }
};

module.exports = { predictFromImage };