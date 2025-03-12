const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
  reference: { type: Number, required: true, unique: true },
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

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
