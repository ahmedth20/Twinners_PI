const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  type: { type: String, required: true },
  estimatedTime: { type: Number, required: true },
  date: { type: Date, required: true },
  roomNumber: { type: Number, required: true },
  status: { type: String, enum: ["scheduled", "completed", "canceled"], required: true },
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: true }
}, { timestamps: false, versionKey: false });

// Auto-incrémentation de `reference` avant l'enregistrement
operationSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastOperation = await mongoose.model("Operation").findOne().sort({ reference: -1 });
    this.reference = lastOperation ? lastOperation.reference + 1 : 1;
  }
  next();
});

const Operation = mongoose.model("Operation", operationSchema);
module.exports = Operation;
