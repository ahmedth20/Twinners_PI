const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
  badgeNumber: { type: Number, required: true, unique: true },
  function: { type: String, required: true }, // ex: nurse, doctor, etc.
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: false, versionKey: false });

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;
