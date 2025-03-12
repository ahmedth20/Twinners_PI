const mongoose = require("mongoose");

const emergencyRoomSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
  capacity: { type: Number, required: true }, // Capacité maximale
  departement: { type: String, required: true } // Département associé
}, { timestamps: false, versionKey: false });

const EmergencyRoom = mongoose.model("EmergencyRoom", emergencyRoomSchema);

module.exports = EmergencyRoom;
