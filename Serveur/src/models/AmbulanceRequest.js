const mongoose = require("mongoose");

const ambulanceRequestSchema = new mongoose.Schema({
  from: { type: String, required: true }, // socketId du patient
  ambulanceId: { type: mongoose.Schema.Types.ObjectId, ref: "Ambulance" },
  status: { type: String, enum: ['pending', 'accepted', 'refused'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AmbulanceRequest", ambulanceRequestSchema);
