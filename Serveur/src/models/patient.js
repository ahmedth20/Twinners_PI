const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const patientSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  sex: { type: String, enum: ["Male", "Female"] },
  phone: { type: Number },
  address: { type: String },
  age: { type: Number },
  height: { type: Number }, 
  weight: { type: Number }, 
  consultations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Consultation" }],
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true, versionKey: false });

patientSchema.plugin(AutoIncrement, { inc_field: "reference" });
const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema);

module.exports = Patient;
