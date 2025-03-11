const Patient = require("../models/patient");
const User = require("../models/user");
const Doctor = require("../models/doctors");
const Consultation = require("../models/consultation");
const MedicalRecord = require("../models/medicalRecord");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Operation = require('../models/operation');
const nodemailer = require('nodemailer');
const patientController = {
  // 📌 Récupérer tous les patients
  async getAllPatients(req, res) {
    try {
      const patients = await Patient.find().populate("user", "firstName lastName age email isActive role");
      res.json(patients);
      console.log(patients);
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
        const hashedPassword = await bcrypt.hash(generatedPassword, 10);


        // Création et enregistrement de l'utilisateur avec rôle "patient"
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, role: "patient" });
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

        // Envoi d'un email de création de compte
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
                    <p><strong>Mot de passe :</strong> ${generatedPassword}</p>
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

        // Validation de la transaction
        await session.commitTransaction();
        session.endSession();

        res.status(201).json({ 
            message: "Patient et utilisateur enregistrés avec succès. Un email contenant les informations de connexion a été envoyé.",
            patient: savedPatient
        });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error("❌ Erreur lors de l'enregistrement :", error);

        // Suppression des entrées en cas d'erreur
        if (savedUser) {
            await User.findByIdAndDelete(savedUser._id);
        }
        if (savedPatient) {
            await Patient.findByIdAndDelete(savedPatient._id);
        }

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
            firstName, lastName, email, 
            sex, age, phone, address, 
            consultations = [], 
            medicalRecord = {} 
        } = req.body;

        if (!firstName || !lastName || !email  || !sex || !age || !phone || !address) {
            throw new Error("Données utilisateur/patient incomplètes !");
        }

        console.log("✅ Données utilisateur et patient valides");

        // 🔹 Hash du mot de passe
        const generatedPassword = Math.random().toString(36).slice(-8);
        console.log("🔑 Mot de passe généré :", generatedPassword);

        // Hasher le mot de passe avant de l'enregistrer
        const hashedPassword = await bcrypt.hash(generatedPassword, 10);

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

          // Envoi d'un email de création de compte
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
                    <p><strong>Mot de passe :</strong> ${generatedPassword}</p>
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
,
  // 📌 Mettre à jour un patient
  async updateSimplePatient(req, res) {
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
}
,
async updatePatient(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        console.log("🟡 Mise à jour complète du patient", req.params.id);
        console.log("Données reçues :", req.body);

        const { firstName, lastName, sex, age, phone, address, consultations = [], medicalRecord = {} } = req.body;

        // Vérifier si le patient existe
        const patient = await Patient.findById(req.params.id).session(session);
        if (!patient) return res.status(404).json({ message: "Patient non trouvé" });

        // Vérifier si l'utilisateur existe
        const user = await User.findById(patient.user).session(session);
        if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });

        // Mise à jour des informations utilisateur (sans modifier l'email ni le password)
        if (firstName) user.firstName = firstName;
        if (lastName) user.lastName = lastName;
        await user.save({ session });

        // Mise à jour des informations patient
        patient.sex = sex || patient.sex;
        patient.age = age || patient.age;
        patient.phone = phone || patient.phone;
        patient.address = address || patient.address;

        // Mise à jour des consultations
        const consultationDocs = await Promise.all(
            consultations.map(async (consultation) => {
                if (!consultation._id) {
                    // Nouvelle consultation
                    const newConsultation = new Consultation({ ...consultation, patient: patient._id });
                    return await newConsultation.save({ session });
                } else {
                    // Mise à jour de la consultation existante
                    return await Consultation.findByIdAndUpdate(consultation._id, consultation, { new: true, session });
                }
            })
        );

        patient.consultations = consultationDocs.map(doc => doc._id);

        // Mise à jour du dossier médical
        if (patient.medicalRecord) {
            await MedicalRecord.findByIdAndUpdate(patient.medicalRecord, medicalRecord, { session });
        } else {
            const newMedicalRecord = new MedicalRecord({ ...medicalRecord, patient: patient._id });
            const savedMedicalRecord = await newMedicalRecord.save({ session });
            patient.medicalRecord = savedMedicalRecord._id;
        }

        await patient.save({ session });

        await session.commitTransaction();
        session.endSession();

        console.log("✅ Mise à jour complète réussie pour le patient :", patient._id);
        res.json({ message: "Mise à jour complète réussie", patient });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error("❌ Erreur lors de la mise à jour :", error);
        res.status(500).json({ message: "Erreur lors de la mise à jour du patient", error: error.message });
    }
}
,

  // 📌 Supprimer un patient
  async deletePatient(req, res) {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) return res.status(404).json({ message: "Patient non trouvé" });

        if (deletedPatient.user) {
            await User.findByIdAndDelete(deletedPatient.user);
        }

        res.json({ message: "Patient et utilisateur supprimés avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression du patient", error });
    }
}
,

async toggleUserStatus(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // ✅ Toujours inverser `isActive`
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: { isActive: !user.isActive } }, // 🔄 Inversion forcée ici
      { new: true, returnDocument: "after" }
    );

    return res.json({ 
      message: `Utilisateur ${updatedUser.isActive ? "activé" : "désactivé"} avec succès`,
      isActive: updatedUser.isActive 
    });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur", error });
  }
}
,
async getAllDoctors(req, res) {
  try {
    const doctors = await Doctor.find().populate("user", "firstName lastName email isActive role");
    res.json(doctors);
    console.log(doctors);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des doctors", error });
  }
},

};


module.exports = patientController;
