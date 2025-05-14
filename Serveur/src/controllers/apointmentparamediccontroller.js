const Appointment = require("../models/appoinetmentparamedic");

const getAllAppointments = async (req, res) => {
    try {
      const appointments = await Appointment.find().populate({
        path: "paramedicId",
        populate: { path: "user" } // si tu veux accéder à doctorId.user.firstName
      });
  
      res.status(200).json(appointments);
    } catch (error) {
      console.error("Erreur lors de la récupération des rendez-vous :", error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };
  

module.exports = { getAllAppointments };