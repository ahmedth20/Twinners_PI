const mongoose = require("mongoose");

const patientFileSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  dateIssued: { type: String, required: true },
  description: { type: String, required: true },
  symptoms: { type: String, required: true },
  emergencyLevel: { type: String, enum: ["low", "moderate", "critical"], required: true },
  paramedic: { type: mongoose.Schema.Types.ObjectId, ref: "Paramedic", required: true },
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: true }
}, { timestamps: false, versionKey: false });

const PatientFile = mongoose.model("PatientFile", patientFileSchema);

module.exports = PatientFile;
