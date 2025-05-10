require('dotenv').config();
const axios = require('axios');

const askMedicalBot = async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required.' });
  }

  try {
    // Envoi de la question au modèle distilgpt2
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/distilgpt2',
      {
        inputs: question, // La question seule sans contexte
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
      }
    );

    const answer = response.data?.[0]?.generated_text || 'No answer found';
    res.status(200).json({ question, answer });
  } catch (error) {
    console.error('Error querying Hugging Face:', error?.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from Hugging Face API.' });
  }
};

module.exports = { askMedicalBot };
