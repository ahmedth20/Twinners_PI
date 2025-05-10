const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost", // mettre ton domaine si tu déploies
    "X-Title": "MyMedicalAssistant",
  },
});

const openAiController = {
  async getSpecialty(req, res) {
    const { symptoms, allergies, medicalHistory } = req.body;

    const prompt = `
Tu es un assistant médical. En fonction des informations suivantes, déduis la spécialité médicale appropriée :
- Symptômes : ${symptoms}
- Allergies : ${allergies}
- Antécédents médicaux : ${medicalHistory}

Donne uniquement la spécialité specifique dans un seule mot de docteur recommandée apartir de ces specialites :
Neurologie ,Cardiologie, Radiologie,Gynécologie,Pédiatrie ,seul mot svp sans explication.
`;

    try {
      const chatResponse = await openai.chat.completions.create({
        model: "mistralai/mistral-7b-instruct", // modèle gratuit
        messages: [{ role: "user", content: prompt }],
      });

      const specialty = chatResponse.choices[0].message.content.trim();
      res.json({ specialty });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur avec OpenRouter" });
    }
  },
};

module.exports = openAiController;
