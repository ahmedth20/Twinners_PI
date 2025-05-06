const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true, enum: ["Planned", "Ongoing", "Completed", "Cancelled"] },
  diagnostic: { type: Map, of: String },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  emergencyRoom: { type: mongoose.Schema.Types.ObjectId, ref: "emergencyRoom", required: true }

}, { timestamps: false, versionKey: false });

// Auto-incrémentation manuelle
consultationSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastConsultation = await mongoose.model("Consultation").findOne().sort({ reference: -1 });
    this.reference = lastConsultation ? lastConsultation.reference + 1 : 1;
  }
  next();
});

const Consultation = mongoose.model("Consultation", consultationSchema);
module.exports = Consultation;
