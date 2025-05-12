const OpenAI = require("openai");
require("dotenv").config();
const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost",
    "X-Title": "MyMedicalAssistant",
  },
});

const openAiController = {
 async getSpecialty(req, res) {
    const { symptoms, allergies, medicalHistory } = req.body;

    const prompt = `
Tu es un assistant médical intelligent. En fonction des informations suivantes, déduis la spécialité médicale la plus appropriée. 
Tu dois OBLIGATOIREMENT choisir UNE SEULE spécialité parmi la liste suivante : 
Neurologie, Cardiologie, Radiologie, Gynécologie, Pédiatrie, Pneumologist.
si la specialite hors (Neurologie, Cardiologie, Radiologie, Gynécologie, Pédiatrie, Pneumologist.) renoit Généraliste
Voici les informations du patient :
- Symptômes : ${symptoms}
- Allergies : ${allergies}
- Antécédents médicaux : ${medicalHistory}

Réponds uniquement par l'un des mots EXACTS de la liste ci-dessus, sans aucune explication. Ne propose rien d'autre.
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

async getSymptomSeverity(symptomsList, age, allergies, medicalHistory) {
  try {
    const results = [];

    // Boucle sur chaque groupe de symptômes
    for (const [index, symptoms] of symptomsList.entries()) {
      const prompt = `Voici une liste de symptômes : ${symptoms}. Patient âgé de ${age} ans, avec les allergies suivantes : ${allergies} et un historique médical de : ${medicalHistory}. Classez les symptômes sur une échelle de 1 à 10 en fonction de leur criticité, où 10 est le plus critique. Donne uniquement le chiffre sur 10.`;

      const chatResponse = await openai.chat.completions.create({
        model: "mistralai/mistral-7b-instruct",
        messages: [{ role: "user", content: prompt }],
      });

      const rawResponse = chatResponse.choices[0].message.content.trim();
      console.log(`🔍 Réponse brute du modèle pour Cas ${index + 1} :`, rawResponse);

      // Extraction de la sévérité depuis la réponse du modèle
      const severity = parseInt(rawResponse.match(/\d+/)?.[0], 10);

      console.log(`🧪 Sévérité parsée pour Cas ${index + 1} :`, severity);

      // Ajouter l'information au tableau des résultats
      results.push({ cas: `Cas ${index + 1}`, severity: isNaN(severity) ? 0 : severity });
    }

    // Tri des résultats par ordre de sévérité décroissante
    results.sort((a, b) => b.severity - a.severity);

    return results; // Retourner directement les résultats triés
  } catch (error) {
    console.error("Erreur OpenRouter:", error);
    return "Erreur lors de l'évaluation."; // En cas d'erreur
  }
}


};

module.exports = openAiController;
