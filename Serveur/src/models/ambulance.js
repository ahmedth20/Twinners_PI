const mongoose = require("mongoose");

const ambulanceSchema = new mongoose.Schema({
  matricule: { type: String, required: true, unique: true },
  reference: { type: Number, unique: true },
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
});

// Auto-incrémentation manuelle
ambulanceSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastAmbulance = await mongoose.model("Ambulance").findOne().sort({ reference: -1 });
    this.reference = lastAmbulance ? lastAmbulance.reference + 1 : 1;
  }
  next();
});

const Ambulance = mongoose.model("Ambulance", ambulanceSchema);
module.exports = Ambulance;
