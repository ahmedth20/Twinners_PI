const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const patientSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  sex: { type: String, enum: ["Male", "Female"], required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number }, 
  weight: { type: Number }, 
  consultations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Consultation" }],
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: false, versionKey: false });

patientSchema.plugin(AutoIncrement, { inc_field: "reference" });
const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema);

module.exports = Patient;
