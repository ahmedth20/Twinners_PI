const mongoose = require("mongoose");

const DoctorsRequestSchema = new mongoose.Schema({
  from: { type: String, required: true }, // socketId du patient
  doctorsId: { type: mongoose.Schema.Types.ObjectId, ref: "doctors" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("DoctorsRequest", DoctorsRequestSchema);
