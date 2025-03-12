const mongoose = require("mongoose");

const serviceManagerSchema = new mongoose.Schema({
  badgeNumber: { type: Number, required: true, unique: true },
  departement: { type: String, required: true },
  schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: "Schedule" }],
  ressources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ressource" }],
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   role: { type: String },

}, { timestamps: false, versionKey: false });

const ServiceManager = mongoose.model("ServiceManager", serviceManagerSchema);
module.exports = ServiceManager;
