const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  sex: { type: String, enum: ["Male", "Female"], required: true },
  phone: { type: Number, required: true },
  adress: { type: String, required: true },
  consultations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Consultation" }],
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: false, versionKey: false });

// ✅ Vérification avant la création du modèle
const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema);

module.exports = Patient;
