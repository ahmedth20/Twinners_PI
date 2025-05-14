const express = require('express');
const router = express.Router();
const Appointment = require('../models/appoinetmentparamedic'); // à créer si non existant
const { getAllAppointments } = require("../controllers/apointmentparamediccontroller");

router.get("/", getAllAppointments);
// Ajouter une nouvelle affectation
router.post('/', async (req, res) => {console.log(req)
  try {
    console.log("BODY REÇU :", req.body); // Debug

    const { paramedicId, start, end } = req.body;
    const appointment = new Appointment({ paramedicId, start, end });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    console.error("Erreur création rendez-vous :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});


module.exports = router;