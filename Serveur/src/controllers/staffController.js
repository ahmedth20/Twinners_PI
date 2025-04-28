
const Staff = require("../models/staff");
const User = require("../models/user");
const mongoose = require("mongoose");
const nodemailer = require('nodemailer');
const staffController = {
  // 📌 Récupérer tous les patients
  async getAllstaffs(req, res) {
    try {
      const staffs = await Staff.find().populate("user", "firstName lastName email");
      res.json(staffs);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des staffs", error: error.message });
    }
  },
  

  // 📌 Récupérer un patient par ID
  async getStaffById(req, res) {
    try {
      const staff = await Staff.findById(req.params.id);
      if (!staff) return res.status(404).json({ message: "Agent staff non trouvé" });
      res.json(staff);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération du patient", error });
    }
  },

  // 📌 Ajouter un nouveau patient
  async createStaff(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        console.log("🟢 Début de la création d'un patient");
        console.log("Données reçues :", req.body);

        const { 
            firstName, lastName, email, password, // Données User
            badgeNumber, service // Données Patient
        } = req.body;
       
        // Vérification des données reçues
        if (!firstName || !lastName || !email || !password) {
            throw new Error("Données utilisateur manquantes !");
        }

        console.log("✅ Données utilisateur valides");

        // 1️⃣ Création et enregistrement de l'utilisateur
        const newUser = new User({ firstName, lastName, email, password,role:"staff" });
        const savedUser = await newUser.save({ session });

        console.log("✅ Utilisateur enregistré :", savedUser._id);

        // 2️⃣ Création et enregistrement du patient
        const newStaff = new Staff({ 
            badgeNumber, service, 
            user: savedUser._id
        });

        const savedStaff = await newStaff.save({ session });
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
        
        console.log("✅ Staff enregistré :", savedStaff._id);

        // ✅ Validation et fin de la transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ 
            message: "Staff, utilisateur, dossier médical et consultations enregistrés avec succès",
            staff: savedStaff
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("❌ Erreur lors de l'enregistrement :", error);
        res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
    }
},


// 📌 Mettre à jour un staff
async updateStaff(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log("🟢 Début de la mise à jour du staff");
    console.log("Données reçues :", req.body);

    const { firstName, lastName, email, password, badgeNumber, service, userId } = req.body;

    // Vérification des données requises
    if (!firstName || !lastName || !email) {
        return res.status(400).json({ message: "Données utilisateur incomplètes !" });
    }

    console.log("✅ Données utilisateur valides");

    // Vérification si l'utilisateur existe
    console.log("Recherche de l'utilisateur avec l'ID :", userId);
    const user = await User.findById(userId).session(session); // Recherche de l'utilisateur dans la même session
    if (!user) {
        console.error("❌ Utilisateur non trouvé avec l'ID :", userId);
        return res.status(404).json({ message: "Utilisateur non trouvé !" });
    }
    console.log("✅ Utilisateur trouvé :", user._id);

    // 1️⃣ Mise à jour de l'utilisateur
    const updatedUser = await User.findByIdAndUpdate(
        userId, 
        { firstName, lastName, email, ...(password && { password }) }, 
        { new: true, session }
    );

    if (!updatedUser) {
        console.error("❌ Utilisateur non trouvé après mise à jour :", userId);
        return res.status(404).json({ message: "Utilisateur non trouvé !" });
    }
    console.log("✅ Utilisateur mis à jour :", updatedUser._id);

    // 2️⃣ Mise à jour du staff
    const updatedStaff = await Staff.findByIdAndUpdate(
        req.params.id, 
        { badgeNumber, service, user: updatedUser._id }, 
        { new: true, session }
    );

    if (!updatedStaff) {
        console.error("❌ Agent Staff non trouvé avec l'ID :", req.params.id);
        return res.status(404).json({ message: "Agent Staff non trouvé !" });
    }
    console.log("✅ Staff mis à jour :", updatedStaff._id);

    // Validation et fin de la transaction
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({ message: "Mise à jour réussie", staff: updatedStaff });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("❌ Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur lors de la mise à jour", error: error.message });
  }
}

,

  // 📌 Supprimer un patient
  async deleteStaff(req, res) {
    try {
      const deleteStaff = await Staff.findByIdAndDelete(req.params.id);
      if (!deleteStaff) return res.status(404).json({ message: "Patient non trouvé" });
      res.json({ message: "Patient supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression du patient", error });
    }
  },
};

module.exports = staffController;
