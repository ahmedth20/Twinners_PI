const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
  reference: { type: Number, required: true, unique: true },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  status: { type: String, required: true, enum: ["on road to patient", "available", "busy"] },
  estimatedTime: { type: Number, required: true },
  historique: {
    date: { type: String, required: true },
    mission: { type: String, required: true }
  },
  paramedics: [{ type: mongoose.Schema.Types.ObjectId, ref: "Paramedic" }]
}, { timestamps: false, versionKey: false });

const Ambulance = mongoose.model("Ambulance", ambulanceSchema);

module.exports = Ambulance;
