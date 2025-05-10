// routes/appointments.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointments'); // à créer si non existant
const { getAllAppointments } = require("../controllers/appointmentController");

router.get("/", getAllAppointments);

// Ajouter une nouvelle affectation
router.post('/', async (req, res) => {
    try {
      const { doctorId, start, end } = req.body;
      const appointment = new Appointment({ doctorId, start, end });
      await appointment.save();
      res.status(201).json(appointment);
    } catch (err) {
      console.error("Erreur création rendez-vous :", err);
      res.status(500).json({ error: "Erreur serveur" });
    }
  });
  
  
module.exports = router;