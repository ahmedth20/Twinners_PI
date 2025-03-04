const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  reference: { type: Number,  unique: true },
  diagnostic: {
    condition: { type: String, required: true },
    symptoms: [{ type: String, required: true }],
    severity: { type: String, required: true },
    notes: { type: String }
  },
  treatment: {
    medications: [{
      name: { type: String },
      dosage: { type: String },
      frequency: { type: String },
      duration: { type: String },
      notes: { type: String } // Additional notes for medication
    }],
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
  createdDate: { type: Date, default: Date.now, immutable: true }, // Ne change jamais après création
  updateDate: { type: Date, default: Date.now }, // Change à chaque mise à jour
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  operations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Operation" }],
  patientFiles: [{ type: mongoose.Schema.Types.ObjectId, ref: "PatientFile" }],
  prescriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Prescription" }]
}, { timestamps: false, versionKey: false });

// Auto-incrémentation de `reference` avant l'enregistrement
medicalRecordSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastRecord = await mongoose.model("MedicalRecord").findOne().sort({ reference: -1 });
    this.reference = lastRecord ? lastRecord.reference + 1 : 1;
  }
  next();
});

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);
module.exports = MedicalRecord;
