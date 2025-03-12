const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  dateIssued: { type: Date, required: true },
  medications: [
    {
      medication: { type: String, required: true },
      dosageInstruction: { type: String, required: true }
    }
  ],
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: true }
}, { timestamps: false, versionKey: false });

const Prescription = mongoose.model("Prescription", prescriptionSchema);

module.exports = Prescription;
