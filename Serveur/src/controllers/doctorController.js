const Doctor = require("../models/doctors");
const User = require("../models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

 // 📌 Ajouter un nouveau médecin
async createDoctor(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();
  
    try {
      console.log("🟢 Début de la création d'un médecin");
      console.log("Données reçues :", req.body);
  
      // Extraire les données de la requête
      const { firstName, lastName, email, password, badgeNumber, departement, speciality, emailPerso, phone } = req.body;
  
      // // Vérification des données requises
      // if (!firstName || !lastName || !email || !password || !badgeNumber || !departement || !speciality || !emailPerso || !phone) {
      //   throw new Error("Données manquantes ! Veuillez vérifier tous les champs.");
      // }
  
      console.log("✅ Données utilisateur valides");
  
      // 🔐 Hash du mot de passe
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      // 1️⃣ Création et enregistrement de l'utilisateur
      const newUser = new User({ firstName, lastName, email, password: password,role:"medecin" });
      const savedUser = await newUser.save({ session });
  
      console.log("✅ Utilisateur enregistré :", savedUser._id);
  
      // 2️⃣ Création et enregistrement du médecin
      const newDoctor = new Doctor({
        badgeNumber,
        departement,
        speciality,
        emailPerso,
        phone,
        user: savedUser._id,
      });
  
      const savedDoctor = await newDoctor.save({ session });
      console.log("✅ Médecin enregistré :", savedDoctor._id);
  

       var transport = nodemailer.createTransport({
                  service: "Gmail",
                  auth: {
                      user: "gytgutu@gmail.com",
                      pass: "strp rifw uhso ciin",
                  },
              });
      
              var mailOptions = {
                  from: "smart 190",
                  to: email,
                  subject: "Création de votre compte",
                  html: `
                      <div>
                          <h1>Bienvenue ${firstName} ${lastName} !</h1>
                          <h2>Votre compte a été créé avec succès.</h2>
                          <p>Voici vos informations de connexion :</p>
                          <p><strong>Email :</strong> ${email}</p>
                          <p><strong>Mot de passe :</strong> ${password}</p>
                          <p>Vous pouvez vous connecter en cliquant sur le lien ci-dessous :</p>
                          <a href="http://localhost:5173/loginPage">Se connecter</a>
                      </div>
                  `,
              };
      
              transport.sendMail(mailOptions, (error, info) => {
                  if (error) {
                      console.log(error);
                  } else {
                      console.log("Mail envoyé:", info.response);
                  }
              });
      // ✅ Validation et fin de la transaction
      await session.commitTransaction();
      session.endSession();
  
      res.status(201).json({
        message: "Médecin enregistré avec succès",
        doctor: savedDoctor,
      });

    } catch (error) {
      // En cas d'erreur, annuler la transaction
      await session.abortTransaction();
      session.endSession();
      console.error("❌ Erreur lors de l'enregistrement :", error);
  
      // Retourner un message d'erreur détaillé
      res.status(500).json({ 
        message: "Erreur lors de l'enregistrement", 
        error: error.message || "Une erreur inconnue est survenue" 
      });
    }
  },

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
};

module.exports = doctorController;
