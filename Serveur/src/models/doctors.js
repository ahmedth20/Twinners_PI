const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  badgeNumber: { type: Number, required: true, unique: true },
  departement: { type: String, required: true },
  speciality: { type: String, required: true },
  emailPerso: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  schedule: { type: mongoose.Schema.Types.ObjectId, ref: "Schedule" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: false, versionKey: false });

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
