const mongoose = require("mongoose");

const paramedicSchema = new mongoose.Schema({
  function: { type: String, required: true },
  ambulance: { type: mongoose.Schema.Types.ObjectId, ref: "Ambulance" },
  patientsFile: [{ type: mongoose.Schema.Types.ObjectId, ref: "PatientFile" }],
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: false, versionKey: false });

const Paramedic = mongoose.model("Paramedic", paramedicSchema);
module.exports = Paramedic;
