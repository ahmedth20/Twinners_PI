const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  type: { type: String, required: true },
  estimatedTime: { type: Number, required: true },
  date: { type: Date, required: true },
  roomNumber: { type: Number, required: true },
  status: { type: String, enum: ["scheduled", "completed", "canceled"], required: true },
  medicalRecord: { type: mongoose.Schema.Types.ObjectId, ref: "MedicalRecord", required: true }
}, { timestamps: false, versionKey: false });

const Operation = mongoose.model("Operation", operationSchema);

module.exports = Operation;
