const mongoose = require("mongoose");

const emergencyRoomSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  capacity: { type: Number, required: true },
  departement: { type: String, required: true },
  availability: { type: Boolean, required: true },

}, { timestamps: false, versionKey: false });

// Auto-incrémentation de `reference` avant l'enregistrement
emergencyRoomSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastRoom = await mongoose.model("EmergencyRoom").findOne().sort({ reference: -1 });
    this.reference = lastRoom ? lastRoom.reference + 1 : 1;
  }
  next();
});

const EmergencyRoom = mongoose.model("EmergencyRoom", emergencyRoomSchema);
module.exports = EmergencyRoom;
