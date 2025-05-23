const Doctor = require("../models/doctors");
const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const appointement = require("../models/appointement");

const doctorController = {
  // 📌 Récupérer tous les médecins
  async getAllDoctors(req, res) {
    try {
      const doctors = await Doctor.find().populate("user", "firstName lastName email");
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des médecins", error });
    }
  },
  async getDoctorByUser(req, res) {
  try {
    const doctor = await Doctor.find({ user: req.params.id });
    
    if (!doctor) {
      return res.status(404).json({ message: "Médecin non trouvé" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération du médecin", error });
  }
}
,
  // 📌 Récupérer un médecin par ID
  async getDoctorById(req, res) {
    try {
      const doctor = await Doctor.findById(req.params.id).populate("user", "firstName lastName email");
      if (!doctor) return res.status(404).json({ message: "Médecin non trouvé" });
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération du médecin", error });
    }
  },
// Nouvelle méthode sans req et res
async getDoctorByIdback(doctorId) {
  try {
    const doctor = await Doctor.findById(doctorId).populate("user", "firstName lastName email");
    if (!doctor) {
      return { status: 404, message: "Médecin non trouvé" };
    }
    return { status: 200, doctor };
  } catch (error) {
    console.error("Erreur lors de la récupération du médecin :", error.message);
    return { status: 500, message: "Erreur lors de la récupération du médecin", error: error.message };
  }
},

 /* async getDoctorsBySpecialty(req, res) {
    try {
      const { specialty } = req.params;
      const doctors = await Doctor.find({ speciality: specialty }).populate("user", "firstName lastName email");
  
      if (doctors.length === 0) {
        return res.status(404).json({ message: "Aucun médecin trouvé pour cette spécialité" });
      }
  
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des médecins", error });
    }
  }*/
   async getAvailableDoctorsBySpecialty({ params }) {
  try {
    const { specialty } = params;
    const now = new Date();

    const doctors = await Doctor.find({ speciality: specialty, availability: true })
      .populate("user", "firstName lastName email");

    if (doctors.length === 0) {
      return null;
    }

    const availableDoctors = [];

    for (const doctor of doctors) {
      const hasAvailability = await appointement.findOne({
        doctorId: doctor._id,
        start: { $lte: now },
        end: { $gte: now }
      });

      if (hasAvailability) {
        availableDoctors.push(doctor);
      }
    }

    if (availableDoctors.length === 0) {
      return null;
    }

    const randomDoctor = availableDoctors[Math.floor(Math.random() * availableDoctors.length)];
    
    // On retourne le médecin directement
    return randomDoctor;
  } catch (error) {
    console.error(error);
    throw new Error("Erreur lors de la récupération des médecins disponibles");
  }
}
,
   async getAvailableDoctorsBySpecialtyfront(req, res) {
  try {
    const { specialty } = req.params;
    const now = new Date();

    // Récupération des médecins disponibles avec un peu de projection pour alléger la requête
    const doctors = await Doctor.find({ speciality: specialty, availability: true })
      .populate("user", "firstName lastName email");

    if (!doctors.length) {
      return res.status(404).json({ message: "Aucun médecin disponible" });
    }

    // Vérification des disponibilités (en parallèle pour accélérer)
    const promises = doctors.map(doctor =>
     
      appointement.findOne({ // Vérifie le nom ici, c'est bien "appointment" ?
        doctorId: doctor._id,
        start: { $lte: now },
        end: { $gte: now }
      })
    );

    // Attente de toutes les promesses
    const availabilities = await Promise.all(promises);

    // Filtrer ceux qui sont effectivement disponibles
    const availableDoctors = doctors.filter((_, index) => availabilities[index]);

    if (!availableDoctors.length) {
      return res.status(404).json({ message: "Aucun médecin disponible" });
    }

    // Sélectionner un médecin aléatoire
    const randomDoctor = availableDoctors[Math.floor(Math.random() * availableDoctors.length)];
    return res.status(200).json(randomDoctor);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Erreur lors de la récupération des médecins disponibles" });
  }
}
 
    
,  
 // 📌 Ajouter un nouveau médecin
// doctorController.js


async createDoctor (req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const {
      firstName,
      lastName,
      email,
      password,
      badgeNumber,
      departement,
      speciality,
      emailPerso,
      phone
    } = req.body;

    console.log("📦 Données reçues :", req.body);

    // Crée l'utilisateur
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role: "medecin"
    });

    await user.save({ session });

    // Crée le médecin lié à l'utilisateur
    const doctor = new Doctor({
      badgeNumber,
      departement,
      speciality,
      emailPerso,
      phone,
      user: user._id
    });

    await doctor.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({ message: "Médecin créé avec succès", doctor });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("❌ Erreur lors de la création du médecin :", error);

    return res.status(500).json({
      message: "Erreur lors de l'enregistrement",
      error: error.message
    });
  }
}
,

// 📌 Mettre à jour un médecin
async updateDoctor(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const doctorId = req.params.id;
    const { firstName, lastName, email, password } = req.body;

    // Récupérer le médecin existant
    const doctor = await Doctor.findById(doctorId).populate("user");
    if (!doctor) return res.status(404).json({ message: "Médecin non trouvé" });

    // Mettre à jour les informations de l'utilisateur
    if (firstName || lastName || email || password) {
      const userUpdates = {};
      if (firstName) userUpdates.firstName = firstName;
      if (lastName) userUpdates.lastName = lastName;
      if (email) userUpdates.email = email;
      if (password) userUpdates.password = bcrypt.hashSync(password, 10); // Hash du mot de passe

      await User.findByIdAndUpdate(doctor.user._id, userUpdates, { session });
    }

    // Mettre à jour les informations du médecin
    const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, req.body, { new: true, session });
    if (!updatedDoctor) return res.status(404).json({ message: "Médecin non trouvé" });

    // ✅ Validation et fin de la transaction
    await session.commitTransaction();
    session.endSession();

    res.json(updatedDoctor);
  } catch (error) {
    // En cas d'erreur, annuler la transaction
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ message: "Erreur lors de la mise à jour du médecin", error });
  }
},

// 📌 Supprimer un médecin
async deleteDoctor(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const doctorId = req.params.id;

    // Récupérer le médecin existant
    const doctor = await Doctor.findById(doctorId).populate("user");
    if (!doctor) return res.status(404).json({ message: "Médecin non trouvé" });

    // Supprimer l'utilisateur associé
    await User.findByIdAndDelete(doctor.user._id, { session });

    // Supprimer le médecin
    await Doctor.findByIdAndDelete(doctorId, { session });

    // ✅ Validation et fin de la transaction
    await session.commitTransaction();
    session.endSession();

    res.json({ message: "Médecin et utilisateur supprimés avec succès" });
  } catch (error) {
    // En cas d'erreur, annuler la transaction
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ message: "Erreur lors de la suppression du médecin", error });
  }
},
async updateDoctorAvailabilityToFalse(doctorId) {
  try {
    // Mettre à jour uniquement la disponibilité à false
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId, 
      { availability: false }, // Met la disponibilité à false
      { new: true }  // Retourne le document mis à jour
    );

    if (!updatedDoctor) {
      throw new Error("Médecin non trouvé");
    }

    return updatedDoctor; // Retourne le médecin mis à jour
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de la disponibilité : " + error.message);
  }
}


};

module.exports = doctorController;
