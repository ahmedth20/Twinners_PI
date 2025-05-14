
const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointementsstaffs'); // à créer si non existant
const { getAllAppointmentsstaff ,getAppointmentsByStaffId} = require("../controllers/appointementsstaff");

router.get("/", getAllAppointmentsstaff);
// Ajouter une nouvelle affectation
router.post('/', async (req, res) => {
  try {
    const { staffId, start, end } = req.body;
    const appointment = new Appointment({ staffId, start, end });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    console.error("Erreur création rendez-vous :", err);
    res.status(500).json({ error: "Erreur serveur" });
  }
});
router.get('/', getAppointmentsByStaffId);

module.exports = router;