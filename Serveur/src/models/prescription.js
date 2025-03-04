const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  dateIssued: { type: Date, required: true },
  medications: [
    {
      medication: { type: String, required: true },
      dosageInstruction: { type: String, required: true }
    }
  ],
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: true }
}, { timestamps: false, versionKey: false });

// Auto-incrémentation de `reference` avant l'enregistrement
prescriptionSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastPrescription = await mongoose.model("Prescription").findOne().sort({ reference: -1 });
    this.reference = lastPrescription ? lastPrescription.reference + 1 : 1;
  }
  next();
});

const Prescription = mongoose.model("Prescription", prescriptionSchema);
module.exports = Prescription;
