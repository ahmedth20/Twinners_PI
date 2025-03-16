const Patient = require("../models/patient");
const User = require("../models/user");
const Consultation = require("../models/consultation");
const MedicalRecord = require("../models/medicalRecord");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Operation = require('../models/operation');
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
          const newUser = new User({ firstName, lastName, email, password: generatedPassword ,role:"patient"});
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
  async createPatient(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        console.log("🟢 Début de la création d'un patient");
        console.log("Données reçues :", req.body);

        const { 
            firstName, lastName, email, password, 
            sex, age, phone, address, 
            consultations = [], 
            medicalRecord = {} 
        } = req.body;

        if (!firstName || !lastName || !email || !password || !sex || !age || !phone || !address) {
            throw new Error("Données utilisateur/patient incomplètes !");
        }

        console.log("✅ Données utilisateur et patient valides");

        // 🔹 Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // 1️⃣ Création et enregistrement de l'utilisateur
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
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

        // 3️⃣ Création et enregistrement des consultations
        const consultationDocs = await Promise.all(
            consultations.map(async (consultation) => {
                if (!consultation.doctor) {
                    throw new Error("Chaque consultation doit avoir un médecin associé !");
                }
                console.log("🔵 Création consultation :", consultation);
                const newConsultation = new Consultation({ 
                    ...consultation, 
                    patient: savedPatient._id 
                });
                return await newConsultation.save({ session });
            })
        );

        console.log("✅ Consultations enregistrées :", consultationDocs.map(doc => doc._id));

        // 4️⃣ Création et enregistrement des opérations
        const operationsData = medicalRecord?.operations || [];
        const operationDocs = await Promise.all(
            operationsData.map(async (operation) => {
                console.log("🔵 Création opération :", operation);
                const newOperation = new Operation({ 
                    ...operation, 
                    patient: savedPatient._id 
                });
                return await newOperation.save({ session });
            })
        );

        const operationIds = operationDocs.map(op => op._id);
        console.log("✅ Opérations enregistrées :", operationIds);

        // 5️⃣ Création et enregistrement du dossier médical avec les opérations
        const newMedicalRecord = new MedicalRecord({ 
            reference: Math.floor(Math.random() * 10000),
            ...medicalRecord,
            patient: savedPatient._id,
            operations: operationIds // 🔹 Ajout des opérations ici
        });

        const savedMedicalRecord = await newMedicalRecord.save({ session });
        console.log("✅ Dossier médical enregistré :", savedMedicalRecord._id);

        // 6️⃣ Mise à jour des opérations avec l'ID du dossier médical
        await Operation.updateMany(
            { _id: { $in: operationIds } },
            { $set: { medicalRecord: savedMedicalRecord._id } },
            { session }
        );
        console.log("✅ Opérations mises à jour avec l'ID du dossier médical.");

        // 7️⃣ Mise à jour du patient avec les consultations et le dossier médical
        savedPatient.consultations = consultationDocs.map(doc => doc._id);
        savedPatient.medicalRecord = savedMedicalRecord._id;
        await savedPatient.save({ session });
        console.log("✅ Patient mis à jour avec consultations et dossier médical :", savedPatient._id);

        // 🔍 Vérification de l'enregistrement du patient
        const patientExists = await Patient.findById(savedPatient._id).session(session);
        if (!patientExists) {
            throw new Error("Le patient n'a pas été enregistré correctement !");
        }
        console.log("🔎 Vérification patient réussie :", patientExists._id);

        // ✅ Validation et fin de la transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ 
            message: "Patient, utilisateur, consultations, dossier médical et opérations enregistrés avec succès",
            patient: savedPatient
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("❌ Erreur lors de l'enregistrement :", error);
        res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
    }
}



 /* async createPatient(req, res) {
      const session = await mongoose.startSession();
      session.startTransaction();
  
      try {
          console.log("🟢 Début de la création d'un patient");
          console.log("Données reçues :", req.body);
  
          const { 
              firstName, lastName, email, password, 
              sex, age, phone, address, 
         //    consultations = [], 
          //    medicalRecord = {} 
          } = req.body;
  
          if (!firstName || !lastName || !email || !password || !sex || !age || !phone || !address) {
              throw new Error("Données utilisateur/patient incomplètes !");
          }
  
          console.log("✅ Données utilisateur et patient valides");
  
          // 🔹 Hash du mot de passe
          const hashedPassword = await bcrypt.hash(password, 10);
  
          // 1️⃣ Création et enregistrement de l'utilisateur
          const newUser = new User({ firstName, lastName, email, password: hashedPassword });
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
  
      /*    // 3️⃣ Création et enregistrement des opérations (si présentes)
          const operationsData = medicalRecord?.operations || [];
          const operationDocs = await Promise.all(
              operationsData.map(async (operation) => {
                  console.log("🔵 Création opération :", operation);
                  const newOperation = new Operation({ 
                      ...operation, 
                      patient: savedPatient._id // Temporaire, mis à jour après création du dossier médical
                  });
                  return await newOperation.save({ session });
              })
          );
          const operationIds = operationDocs.map(op => op._id);
          console.log("✅ Opérations enregistrées :", operationIds);
  
          // 4️⃣ Création et enregistrement du dossier médical
          const newMedicalRecord = new MedicalRecord({ 
              reference: Math.floor(Math.random() * 10000),
              ...medicalRecord,
              patient: savedPatient._id,
              operations: operationIds
          });
          const savedMedicalRecord = await newMedicalRecord.save({ session });
          console.log("✅ Dossier médical enregistré :", savedMedicalRecord._id);
  
          // Mise à jour des opérations avec l'ID du dossier médical
          await Operation.updateMany(
              { _id: { $in: operationIds } },
              { $set: { medicalRecord: savedMedicalRecord._id } },
              { session }
          );
  
          // 5️⃣ Création et enregistrement des consultations (si présentes)
          const consultationDocs = await Promise.all(
              consultations.map(async (consultation) => {
                  if (!consultation.doctor) {
                      throw new Error("Chaque consultation doit avoir un médecin associé !");
                  }
                  console.log("🔵 Création consultation :", consultation);
                  const newConsultation = new Consultation({ 
                      ...consultation, 
                      patient: savedPatient._id 
                  });
                  return await newConsultation.save({ session });
              })
          );
          console.log("✅ Consultations enregistrées :", consultationDocs.map(doc => doc._id));
  
          // 6️⃣ Mise à jour du patient avec le dossier médical et les consultations
          savedPatient.medicalRecord = savedMedicalRecord._id;
          savedPatient.consultations = consultationDocs.map(doc => doc._id);
          await savedPatient.save({ session });
          console.log("✅ Patient mis à jour :", savedPatient._id);
  
          // ✅ Validation et fin de la transaction
          await session.commitTransaction();
          session.endSession();
 
          res.status(201).json({ 
              message: "Patient, utilisateur, dossier médical, opérations et consultations enregistrés avec succès",
              patient: savedPatient
          });
  
      } catch (error) {
          await session.abortTransaction();
          session.endSession();
          console.error("❌ Erreur lors de l'enregistrement :", error);
          res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
      }
  } */
  

  

,

  // 📌 Mettre à jour un patient
  async updatePatient(req, res) {
    try {
        console.log("🟡 Mise à jour simple du patient", req.params.id);
        console.log("Données reçues :", req.body);

        const { firstName, lastName, sex, age, phone, address } = req.body;

        // Vérifier si le patient et l'utilisateur existent
        const patient = await Patient.findById(req.params.id);
        if (!patient) return res.status(404).json({ message: "Patient non trouvé" });

        const user = await User.findById(patient.user);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        // Mise à jour des informations utilisateur (sans modifier l'email ni le password)
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        await user.save();

        // Mise à jour des informations patient
        patient.sex = sex || patient.sex;
        patient.age = age || patient.age;
        patient.phone = phone || patient.phone;
        patient.address = address || patient.address;

        await patient.save();

        console.log("✅ Patient mis à jour :", patient._id);
        res.json({ message: "Mise à jour réussie", patient });
    } catch (error) {
        console.error("❌ Erreur lors de la mise à jour :", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du patient", error: error.message });
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
