const express = require("express");
const Patient = require("../models/patient");
const User = require("../models/user");

const router = express.Router();

// ✅ Route pour récupérer tous les patients avec leurs informations utilisateur
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().populate("user", "firstName lastName age email");
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des patients", error });
  }
});

module.exports = router;
