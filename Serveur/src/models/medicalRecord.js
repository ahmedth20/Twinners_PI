const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  diagnostic: {
    condition: { type: String, required: true },
    symptoms: [{ type: String, required: true }],
    severity: { type: String, required: true },
    notes: { type: String }
  },
  treatment: {
    medications: {
      name: { type: String },
      dosage: { type: String },
      frequency: { type: String },
      duration: { type: String }
    },
    procedures: {
      name: { type: String },
      duration: { type: String }
    },
    lifestyleRecommendations: [{ type: String }]
  },
  allergies: [{ type: String }],
  testResults: {
    chestXray: { type: String },
    bloodTest: { type: String },
    oxygenSaturation: { type: String }
  },
  createdDate: { type: Date, required: true },
  updateDate: { type: Date, required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  operations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Operation" }],
  patientFiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "PatientFile" }],
  prescriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prescription" }]
}, { timestamps: false, versionKey: false });

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

module.exports = MedicalRecord;
