const mongoose = require("mongoose");

const patientFileSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  dateIssued: { type: String, required: true },
  description: { type: String},
  symptoms: { type: String, required: true },
  emergencyLevel: { type: String, enum: ["low", "moderate", "critical"]},
  paramedic: { type: mongoose.Schema.Types.ObjectId, ref: "Paramedic" },
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: true }
}, { timestamps: false, versionKey: false });

// Auto-incrémentation de `reference` avant l'enregistrement
patientFileSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastFile = await mongoose.model("PatientFile").findOne().sort({ reference: -1 });
    this.reference = lastFile ? lastFile.reference + 1 : 1;
  }
  next();
});

const PatientFile = mongoose.model("PatientFile", patientFileSchema);
module.exports = PatientFile;
