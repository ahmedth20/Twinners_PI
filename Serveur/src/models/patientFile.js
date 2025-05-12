const mongoose = require("mongoose");

const patientFileSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },

  phoneNumber: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  address: { type: String, required: true },

  height: { type: Number, required: true }, // en cm
  weight: { type: Number, required: true }, // en kg

  allergies: { type: String }, // ou Array si tu préfères un tableau
  medicalHistory: { type: String },

  symptom: { type: String, required: true },
  bloodGroup: { 
    type: String, 
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], 
    required: true 
  },

  paramedic: { type: mongoose.Schema.Types.ObjectId, ref: "Paramedic" },
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: false },
  testResults: {
    chestXray: { type: String },
    bloodTest: { type: String },
    oxygenSaturation: { type: String }
  }
}, { timestamps: false, versionKey: false });

// Auto-incrémentation du champ `reference`
patientFileSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastFile = await mongoose.model("PatientFile").findOne().sort({ reference: -1 });
    this.reference = lastFile ? lastFile.reference + 1 : 1;
  }
  next();
});

const PatientFile = mongoose.model("PatientFile", patientFileSchema);
module.exports = PatientFile;
