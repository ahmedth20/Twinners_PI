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
const frontAreas = [
  { id: 'head', label: 'Head' },
  { id: 'neck', label: 'Neck' },
  { id: 'chest', label: 'Chest' },
  { id: 'stomach', label: 'Stomach' },
  { id: 'heart', label: 'Heart' },
  { id: 'left_arm', label: 'Left Arm' },
  { id: 'right_arm', label: 'Right Arm' },
  { id: 'left_leg', label: 'Left Leg' },
  { id: 'right_leg', label: 'Right Leg' }
];

const backAreas = [
  { id: 'back', label: 'Back' },
  { id: 'left_shoulder', label: 'Left Shoulder' },
  { id: 'right_shoulder', label: 'Right Shoulder' },
  { id: 'lungs', label: 'Lungs' },
  { id: 'left_ankle', label: 'Left Ankle' },
  { id: 'right_ankle', label: 'Right Ankle' }
];

const allAreas = [...frontAreas, ...backAreas];
const openAiController = {
 async getSpecialty(req, res) {
    const { symptoms, allergies, medicalHistory } = req.body;

    const prompt = `
Tu es un assistant médical intelligent. En fonction des informations suivantes, déduis la spécialité médicale la plus appropriée. 
Tu dois OBLIGATOIREMENT choisir UNE SEULE spécialité parmi la liste suivante : 
Neurologie, Cardiologie, Radiologie, Gynécologie, Pédiatrie, Pneumologist.
si la specialite hors (Neurologie, Cardiologie, Radiologie, Gynecologie, Pediatrie, Pneumologist)sinon envoyer Generaliste
Voici les informations du patient :
- Symptômes : ${symptoms}
- Allergies : ${allergies}
- Antécédents médicaux : ${medicalHistory}

Réponds uniquement par (Neurologie ou Cardiologie ou  Radiologie ou Gynécologie ou Pédiatrie ou Pneumologist) sans aucune explication. Ne propose rien d'autre.
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
},
async getMedicalPainLocation(record) {
    try {
      const prompt = `
Tu es un assistant médical intelligent. À partir des informations suivantes du dossier médical, identifie les localisations de douleur probables.
Voici le dossier médical :
- Symptômes : ${record.diagnostic.symptoms.join(", ")}
- Diagnostic : ${record.diagnostic.condition}
- Traitements : ${record.treatment.medications.map(m => m.name).join(", ")}
- Antécédents médicaux : ${record.MedicalHistory.join(", ")}

Renvoie une liste des localisations de douleur sous la forme d'un tableau d'ID correspondant aux zones anatomiques suivantes : 
${allAreas.map(a => `- ${a.label} (${a.id})`).join("\n")}

Renvoie uniquement les IDs séparés par des virgules, par exemple : "head,neck,chest".
      `;

      const chatResponse = await openai.chat.completions.create({
        model: "mistralai/mistral-7b-instruct",
        messages: [{ role: "user", content: prompt }],
      });

      const rawPainLocations = chatResponse.choices[0].message.content.trim();
      console.log(`🔍 Réponse brute de l'IA : ${rawPainLocations}`);

      // Transformer la réponse en tableau
      const painLocations = rawPainLocations.split(',').map(loc => loc.trim());

      // Vérification avec les IDs déclarés
      const validPainLocations = allAreas.filter(area => painLocations.includes(area.id)).map(area => area.id);

      return validPainLocations;
    } catch (error) {
      console.error("Erreur lors de l'identification des douleurs :", error.message);
      throw new Error("Erreur lors de l'analyse des localisations de douleur.");
    }
  }

};

module.exports = openAiController;
