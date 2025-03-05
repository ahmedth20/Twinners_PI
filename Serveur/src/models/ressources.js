const mongoose = require("mongoose");

const ressourceSchema = new mongoose.Schema({
  reference: { type: Number, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  usage: {
    inUse: { type: Number, required: true },
    available: { type: Number, required: true },
    maintenance: { type: Number, required: true }
  },
  serviceManager: { type: mongoose.Schema.Types.ObjectId, ref: "ServiceManager", required: true }
}, { timestamps: false, versionKey: false });

// Auto-incrémentation de `reference` avant l'enregistrement
ressourceSchema.pre("save", async function (next) {
  if (!this.reference) {
    const lastRessource = await mongoose.model("Ressource").findOne().sort({ reference: -1 });
    this.reference = lastRessource ? lastRessource.reference + 1 : 1;
  }
  next();
});

const Ressource = mongoose.model("Ressource", ressourceSchema);
module.exports = Ressource;
