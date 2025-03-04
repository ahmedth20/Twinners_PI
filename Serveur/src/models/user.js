const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: String,
}, { timestamps: false, versionKey: false });

// ✅ Évite la recréation du modèle s'il est déjà défini
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
