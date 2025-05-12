const MedicalRecord = require("../models/medicalRecord");
const Patient = require("../models/patient");
const Operation = require("../models/operation");
const PatientFile = require("../models/patientFile");
const Prescription = require("../models/prescription");

const medicalRecordController = {
  // 🔹 Créer un dossier médical
  async createMedicalRecord(req, res) {
    try {
      const record = new MedicalRecord(req.body);
      const savedRecord = await record.save();
      res.status(201).json(savedRecord);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la création du dossier médical", error });
    }
  },

  // 🔹 Récupérer tous les dossiers médicaux
  async getAllMedicalRecords(req, res) {
    try {
      const records = await MedicalRecord.find()
        .populate("patient", "firstName lastName")
        .populate("operations")
        .populate("patientFiles")
        .populate("prescriptions");
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des dossiers médicaux", error });
    }
  },

  // 🔹 Récupérer un dossier médical par ID
  async getMedicalRecordById(req, res) {
    try {
      const record = await MedicalRecord.findById(req.params.id)
        .populate("patient", "firstName lastName")
        .populate("operations")
        .populate("patientFiles")
        .populate("prescriptions");

      if (!record) return res.status(404).json({ message: "Dossier médical introuvable" });
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération du dossier", error });
    }
  },

  // 🔹 Mettre à jour un dossier médical
  async updateMedicalRecord(req, res) {
    try {
      const record = await MedicalRecord.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updateDate: new Date() },
        { new: true }
      );
      if (!record) return res.status(404).json({ message: "Dossier médical non trouvé" });
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour", error });
    }
  },

  // 🔹 Supprimer un dossier médical
  async deleteMedicalRecord(req, res) {
    try {
      const result = await MedicalRecord.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ message: "Dossier médical non trouvé" });
      res.status(200).json({ message: "Dossier supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression", error });
    }
  },
  async getMedicalRecordByUserId(req, res) {
    try {
      const { userId } = req.params;

      // Étape 1 : Trouver le patient associé à ce userId
      const patient = await Patient.findOne({ user: userId });

      if (!patient) {
        return res.status(404).json({ message: "Aucun patient trouvé pour cet utilisateur." });
      }

      // Étape 2 : Trouver le dossier médical associé à ce patient
      const medicalRecord = await MedicalRecord.findOne({ patient: patient._id })
        .populate("patient", "reference sex age user") // tu peux adapter le populate
        .populate("operations")
        .populate("patientFiles")
        .populate("prescriptions");

      if (!medicalRecord) {
        return res.status(404).json({ message: "Aucun dossier médical trouvé pour ce patient." });
      }

      res.status(200).json(medicalRecord);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur", error });
    }
  },
  async getMedicalRecordByIdAsync(req,res) {
  try {
    const record = await MedicalRecord.findById(req.params.id)
      .populate("patient", "firstName lastName")
      .populate("operations")
      .populate("patientFiles")
      .populate("prescriptions");

    if (!record) {
      console.error("Dossier médical introuvable");
      return null;
    }
    return record;
  } catch (error) {
    console.error("Erreur lors de la récupération du dossier :", error.message);
    return null;
  }
},

};


module.exports = medicalRecordController;
