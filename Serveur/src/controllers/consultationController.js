const Consultation = require("../models/consultation");
const Patient = require("../models/patient");

const consultationController = {
  // 🔹 Create a new consultation
async createConsultationback (consultationData) {
  try {
    // Extraction directe depuis l'objet passé en paramètre
    const { patient, doctor, emergencyRoom, duration, date } = consultationData;

    if (!patient || !doctor || !emergencyRoom || !duration || !date) {
      throw new Error("Missing required fields");
    }

    const consultation = new Consultation(consultationData);
    const savedConsultation = await consultation.save();
    console.log("Consultation créée avec succès :", savedConsultation);
    return savedConsultation;
  } catch (error) {
    console.error("Error creating consultation:", error.message);
    throw error;
  }
},
async createConsultation(req, res) {
  try {
    const { patient, doctor, emergencyRoom, duration, date, status, diagnostic } = req.body;

    // Vérification des données reçues
  

    // Création de l'objet Consultation
    const consultation = new Consultation({
      patient,
      doctor,
      emergencyRoom,
      duration,
      date,
      status,
      diagnostic
    });

    // Sauvegarde dans la base de données
    const savedConsultation = await consultation.save();
    console.log("Consultation créée avec succès :", savedConsultation);

    // Retour de la réponse
    return res.status(201).json(savedConsultation);
  } catch (error) {
    console.error("Erreur lors de la création de la consultation :", error.message);
    return res.status(500).json({ message: "Erreur lors de la création de la consultation." });
  }
}

,
  // 🔹 Get all consultations
async getAllConsultations(req, res) {
    try {
      const consultations = await Consultation.find()
        .populate("patient", "firstName lastName")
        .populate("doctor", "firstName lastName specialty");
      res.status(200).json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving consultations", error });
    }
},

// 🔹 Get consultation by ID
async getConsultationById(req, res) {
  try {
    const consultation = await Consultation.findById(req.params.id)
      .populate({
        path: "patient",
        populate: { path: "user", select: "firstName lastName" }
      })
      .populate({
        path: "doctor",
        populate: { path: "user", select: "firstName lastName" }
      })
      .populate("emergencyRoom", "reference"); // Affiche juste le numéro de salle

    if (!consultation) {
      return res.status(404).json({ message: "Consultation not found" });
    }

    res.status(200).json(consultation);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving consultation", error });
  }
}
,

  // 🔹 Update consultation
  async updateConsultation(req, res) {
    try {
      const consultation = await Consultation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!consultation) return res.status(404).json({ message: "Consultation not found" });
      res.status(200).json(consultation);
    } catch (error) {
      res.status(500).json({ message: "Error updating consultation", error });
    }
  },

  // 🔹 Delete consultation
  async deleteConsultation(req, res) {
    try {
      const result = await Consultation.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ message: "Consultation not found" });
      res.status(200).json({ message: "Consultation deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting consultation", error });
    }
  },

  // 🔹 Get consultations by patient user ID
  async getConsultationsByPatient(req, res) {
    try {

      const consultations = await Consultation.find({ patient: req.params.id })
        .populate("patient", "firstName lastName user")
        .populate("doctor", "firstName lastName specialty");

      if (!consultations || consultations.length === 0) {
        return res.status(404).json({ message: "No consultations found for this patient." });
      }

      res.status(200).json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },
async getConsultationsByPatientback(req, res) {
  try {
    const consultation = await Consultation.findOne({ patient: req.params.id })
       .populate("doctor");

    if (!consultation) {
      return res.status(404).json({ message: "Aucune consultation trouvée pour ce patient" });
    }

    res.status(200).json(consultation);
  } catch (error) {
    console.error("Erreur lors de la récupération de la dernière consultation :", error.message);
    res.status(500).json({ message: "Erreur serveur", error });
  }
}

,
   async getConsultationsByDoctorConnecter(req, res) {
    try {

      const consultations = await Consultation.find({ doctor: req.params.id })
        .populate("patient")
        .populate("doctor");

      if (!consultations || consultations.length === 0) {
        return res.status(404).json({ message: "No consultations found for this patient." });
      }

      res.status(200).json(consultations);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  },


  // 🔹 Delete consultations by Doctor
async deleteConsultationsByDoctor(req, res) {
  try {
    const result = await Consultation.deleteMany({ doctor: req.params.id });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Aucune consultation trouvée pour ce médecin" });
    }

    res.status(200).json({ message: `${result.deletedCount} consultation(s) supprimée(s) avec succès` });
  } catch (error) {
    console.error("Erreur lors de la suppression des consultations :", error.message);
    res.status(500).json({ message: "Erreur lors de la suppression des consultations", error });
  }
}

};

module.exports = consultationController;
