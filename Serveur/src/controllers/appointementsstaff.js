
const Appointment = require("../models/appointementsstaffs");

const getAllAppointmentsstaff = async (req, res) => {
    try {
      const appointments = await Appointment.find().populate({
        path: "staffId",
        populate: { path: "user" } // si tu veux accéder à doctorId.user.firstName
      });
  
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Erreur lors de la récupération des rendez-vous :", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };
  
const getAppointmentsByStaffId = async (req, res) => {
  try {
    const { staffId } = req.query; // Récupère le staffId depuis la query string

    if (!staffId) {
      return res.status(400).json({ message: "Le staffId est requis" });
    }

    const appointments = await Appointment.find({ staffId }).populate({
      path: "staffId",
      populate: { path: "user" },
    });

    res.status(200).json(appointments);
  } catch (error) {
    console.error("Erreur lors de la récupération des rendez-vous pour le staff :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
  

module.exports = { getAllAppointmentsstaff,getAppointmentsByStaffId };