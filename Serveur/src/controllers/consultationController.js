const Consultation = require("../models/consultation");
const Patient = require("../models/patient");

const consultationController = {
  // 🔹 Create a new consultation
// 🔹 Create a new consultation
async createConsultation(req, res) {
  try {
    const { patient, doctor, emergencyRoom, duration, date } = req.body;

    // Validation de base
    if (!patient || !doctor || !emergencyRoom || !duration || !date) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const consultation = new Consultation(req.body);
    const savedConsultation = await consultation.save();
    res.status(201).json(savedConsultation);
  } catch (error) {
    console.error("Error creating consultation:", error);
    res.status(500).json({ message: "Error creating consultation", error });
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
  }
};

module.exports = consultationController;
