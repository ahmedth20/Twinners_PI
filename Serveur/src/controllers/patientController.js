const Patient = require("../models/patient");
const User = require("../models/user");
const Consultation = require("../models/consultation");
const MedicalRecord = require("../models/medicalRecord");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const patientController = {
  // 📌 Récupérer tous les patients
  async getAllPatients(req, res) {
    try {
      const patients = await Patient.find().populate("user", "firstName lastName age email");
      res.json(patients);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des patients", error });
    }
  },

  // 📌 Récupérer un patient par ID
  async getPatientById(req, res) {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) return res.status(404).json({ message: "Patient non trouvé" });
      res.json(patient);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération du patient", error });
    }
  },


  async createSimplePatient(req, res) {
      const session = await mongoose.startSession();
      session.startTransaction();
  
      try {
          console.log("🟢 Début de la création d'un patient");
          console.log("Données reçues :", req.body);
  
          const { firstName, lastName, email, sex, age, phone, address } = req.body;
  
          // Vérification des données requises
          if (!firstName || !lastName || !email) {
              throw new Error("Données utilisateur manquantes !");
          }
  
          console.log("✅ Données utilisateur valides");
  
          // Générer un mot de passe aléatoire (8 caractères)
          const generatedPassword = Math.random().toString(36).slice(-8);
          console.log("🔑 Mot de passe généré :", generatedPassword);
  
          // Hasher le mot de passe avant de l'enregistrer
          const hashedPassword = bcrypt.hashSync(generatedPassword, 10); // Utilisation de hashSync
  
          // Création et enregistrement de l'utilisateur
          const newUser = new User({ firstName, lastName, email, password: hashedPassword });
          const savedUser = await newUser.save({ session });
  
          console.log("✅ Utilisateur enregistré :", savedUser._id);
  
          // Création et enregistrement du patient
          const newPatient = new Patient({ 
              reference: Math.floor(Math.random() * 10000), 
              sex, age, phone, address, 
              user: savedUser._id, 
          });
  
          const savedPatient = await newPatient.save({ session });
          console.log("✅ Patient enregistré :", savedPatient._id);
  
          // Validation de la transaction
          await session.commitTransaction();
          session.endSession();
  
          res.status(201).json({ 
              message: "Patient et utilisateur enregistrés avec succès",
              patient: savedPatient
          });
  
      } catch (error) {
          await session.abortTransaction();
          session.endSession();
  
          console.error("❌ Erreur lors de l'enregistrement :", error);
          res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
      }
  },
  
  

  // 📌 Ajouter un nouveau patient
  async createPatient(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        console.log("🟢 Début de la création d'un patient");
        console.log("Données reçues :", req.body);

        const { 
            firstName, lastName, email, password, // Données User
            sex, age, phone, address, // Données Patient
            consultations, // Liste des consultations
            medicalRecord // Données du dossier médical
        } = req.body;

        // Vérification des données reçues
        if (!firstName || !lastName || !email || !password) {
            throw new Error("Données utilisateur manquantes !");
        }

        console.log("✅ Données utilisateur valides");

        // 1️⃣ Création et enregistrement de l'utilisateur
        const newUser = new User({ firstName, lastName, email, password });
        const savedUser = await newUser.save({ session });

        console.log("✅ Utilisateur enregistré :", savedUser._id);

        // 2️⃣ Création et enregistrement du patient
        const newPatient = new Patient({ 
            reference: Math.floor(Math.random() * 10000), 
            sex, age, phone, address, 
            user: savedUser._id, 
            consultations: [], 
            medicalRecord: null 
        });

        const savedPatient = await newPatient.save({ session });
        console.log("✅ Patient enregistré :", savedPatient._id);

        // 3️⃣ Création et enregistrement du dossier médical
        const newMedicalRecord = new MedicalRecord({ 
            reference: Math.floor(Math.random() * 10000),
            ...medicalRecord,
            patient: savedPatient._id 
        });

        const savedMedicalRecord = await newMedicalRecord.save({ session });
        console.log("✅ Dossier médical enregistré :", savedMedicalRecord._id);

        // 4️⃣ Création et enregistrement des consultations
        const consultationDocs = await Promise.all(
            consultations.map(async (consultation) => {
                console.log("🔵 Création consultation :", consultation);
                const newConsultation = new Consultation({ 
                    ...consultation, 
                    patient: savedPatient._id 
                });
                return await newConsultation.save({ session });
            })
        );

        console.log("✅ Consultations enregistrées :", consultationDocs.map(doc => doc._id));

        // 5️⃣ Mise à jour du patient
        savedPatient.medicalRecord = savedMedicalRecord._id;
        savedPatient.consultations = consultationDocs.map(doc => doc._id);
        await savedPatient.save({ session });

        console.log("✅ Patient mis à jour :", savedPatient._id);

        // ✅ Validation et fin de la transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ 
            message: "Patient, utilisateur, dossier médical et consultations enregistrés avec succès",
            patient: savedPatient
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("❌ Erreur lors de l'enregistrement :", error);
        res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
    }
}

,

  // 📌 Mettre à jour un patient
  async updatePatient(req, res) {
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedPatient) return res.status(404).json({ message: "Patient non trouvé" });
      res.json(updatedPatient);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour du patient", error });
    }
  },

  // 📌 Supprimer un patient
  async deletePatient(req, res) {
    try {
      const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
      if (!deletedPatient) return res.status(404).json({ message: "Patient non trouvé" });
      res.json({ message: "Patient supprimé avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression du patient", error });
    }
  },
};

module.exports = patientController;
