const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  duration: { type: Number, required: true }, // Durée en minutes
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ["Planned", "Ongoing", "Completed", "Cancelled"] },
  diagnostic: {
    type: Map,
    of: String // Clé: type d'examen, Valeur: résultat
  },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true }
}, { timestamps: false, versionKey: false });

const Consultation = mongoose.model("Consultation", consultationSchema);

module.exports = Consultation;
