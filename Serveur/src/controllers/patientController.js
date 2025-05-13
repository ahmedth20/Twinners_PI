const Patient = require("../models/patient");
const User = require("../models/user");
const Doctor = require("../models/doctors");
const Consultation = require("../models/consultation");
const MedicalRecord = require("../models/medicalRecord");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Operation = require('../models/operation');
const nodemailer = require('nodemailer');
const PatientFile = require("../models/patientFile");
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

  async getPatientInfoById(req, res) {
        try {
          const patient = await Patient.findById(req.params.id)
            .populate("user", "firstName lastName email ") // Récupérer les infos du user sans l'ID seulement
            .populate({
              path: "medicalRecord",
              populate: [
                { path: "operations" },
                { path: "patientFiles" },
                { path: "prescriptions" }
              ]
            })
            .populate({
              path: "consultations",
              populate: { path: "doctor", select: "name specialty email phone" } // Charger les infos du médecin
            });
      
          if (!patient) return res.status(404).json({ message: "Patient non trouvé" });
      
          res.json(patient);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Erreur lors de la récupération du patient", error: error.message });
        }
      }
  
,// Nouvelle méthode sans req et res
async getPatientInfoByIdback(id) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("ID invalide");
    }

    const patient = await Patient.findById(id)
      .populate("user", "firstName lastName email")
      .populate({
        path: "medicalRecord",
        populate: [
          { path: "operations" },
          { path: "patientFiles" },
          { path: "prescriptions" }
        ]
      })
      .populate({
        path: "consultations",
        populate: { path: "doctor", select: "name specialty email phone" }
      });

    if (!patient) {
      throw new Error("Patient non trouvé");
    }

    return patient;
  } catch (error) {
    console.error("Erreur lors de la récupération du patient :", error.message);
    return null;
  }
}


,
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
        const newUser = new User({ firstName, lastName, email, password: generatedPassword, role: "patient" });
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
/*async createSimplePatientFront(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction(); // Il manquait aussi ça pour la transaction

    try {
        console.log("🟢 Début de la création d'un patient");
        console.log("Données reçues :", req.body);

        const { user, sex, age, phone, address,height,weight, allergies, medicalHistory, bloodGroup, mainSymptom } = req.body;

        console.log("✅ Données utilisateur valides");

        // Création et enregistrement du patient
        const newPatient = new Patient({
            reference: Math.floor(Math.random() * 10000),
            sex,
            age,
            phone,
            address,
            height,
            weight,
            user: user,
            consultations: [],
            medicalRecord: null
        });

        const savedPatient = await newPatient.save({ session });
        console.log("✅ Patient enregistré :", savedPatient._id);

        // Création du dossier médical
        const newMedicalRecord = new MedicalRecord({
            reference: Math.floor(Math.random() * 10000),
            bloodGroup: bloodGroup,
            allergies: allergies ? [allergies] : [],
            MedicalHistory: medicalHistory ? [medicalHistory] : [],
            diagnostic: {
                symptoms: [mainSymptom],
            },
            patient: savedPatient._id,
        });

        const savedMedicalRecord = await newMedicalRecord.save({ session });
        console.log("✅ Dossier médical enregistré :", savedMedicalRecord._id);

        // Création du fichier patient
        const newPatientFile = new PatientFile({
            reference: Math.floor(Math.random() * 10000),
            dateIssued: new Date().toISOString().split('T')[0],
            symptoms: mainSymptom,
            medicalRecord: savedMedicalRecord._id,
            patient: savedPatient._id,
        });

        const savedPatientFile = await newPatientFile.save({ session });
        console.log("✅ Patient file enregistré :", savedPatientFile._id);

        // Ajout du patientFile dans le medicalRecord
        savedMedicalRecord.patientFiles.push(savedPatientFile._id);
        await savedMedicalRecord.save({ session });
        
        savedPatient.medicalRecord = savedMedicalRecord._id;
        await savedPatient.save({ session });
        console.log("✅ Patient mis à jour avec dossier médical :", savedPatient.medicalRecord);

        await session.commitTransaction();

        res.status(201).json({
            message: "Patient, dossier médical et fichier patient créés avec succès.",
            patient: savedPatient,
        });

    } catch (error) {
        console.error(error);
        await session.abortTransaction();
       
        res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
    } finally {
        session.endSession();
    }
}*/

async createSimplePatientFront(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
      const {
          user,
          sex,
          age,
          phone,
          address,
          height,
          weight,
          allergies,
          medicalHistory,
          bloodGroup,
          mainSymptom
      } = req.body;

      const existingPatient = await Patient.findOne({ user }).session(session);

      let patientToReturn = null;  // Déclare une variable pour stocker le patient à renvoyer.

      if (existingPatient) {
          console.log("🟢 Patient trouvé, mise à jour en cours...");

          existingPatient.sex = sex;
          existingPatient.age = age;
          existingPatient.phone = phone;
          existingPatient.address = address;
          existingPatient.height = height;
          existingPatient.weight = weight;
       
          await existingPatient.save({ session });

          if (existingPatient.medicalRecord) {
              console.log("🟢 Dossier médical existant, mise à jour...");
              const medicalRecord = await MedicalRecord.findById(existingPatient.medicalRecord).session(session);
              medicalRecord.allergies.push(allergies);
              medicalRecord.MedicalHistory.push(medicalHistory);
              medicalRecord.bloodGroup = bloodGroup;
              medicalRecord.diagnostic.symptoms.push(mainSymptom);
              await medicalRecord.save({ session });

              const newPatientFile = new PatientFile({
                  reference: Math.floor(Math.random() * 10000),
                  dateIssued: new Date().toISOString().split('T')[0],
                  symptoms: mainSymptom,
                  medicalRecord: medicalRecord._id,
                  patient: existingPatient._id,
              });

              await newPatientFile.save({ session });
              medicalRecord.patientFiles.push(newPatientFile._id);
              await medicalRecord.save({ session });

          } else {
              console.log("🟢 Pas de dossier médical, création en cours...");
              const newMedicalRecord = new MedicalRecord({
                  reference: Math.floor(Math.random() * 10000),
                  bloodGroup,
                  allergies: allergies ? [allergies] : [],
                  MedicalHistory: medicalHistory ? [medicalHistory] : [],
                  diagnostic: { symptoms: [mainSymptom] },
                  patient: existingPatient._id,
              });

              const savedMedicalRecord = await newMedicalRecord.save({ session });
              existingPatient.medicalRecord = savedMedicalRecord._id;
              await existingPatient.save({ session });

              const newPatientFile = new PatientFile({
                  reference: Math.floor(Math.random() * 10000),
                  dateIssued: new Date().toISOString().split('T')[0],
                  symptoms: mainSymptom,
                  medicalRecord: savedMedicalRecord._id,
                  patient: existingPatient._id,
              });

              await newPatientFile.save({ session });
              savedMedicalRecord.patientFiles.push(newPatientFile._id);
              await savedMedicalRecord.save({ session });
          }

          patientToReturn = existingPatient;  // Assigner le patient existant à la variable `patientToReturn`
          console.log("✅ Mise à jour réussie.");

      } else {
          console.log("🟢 Création d'un nouveau patient...");
          const newPatient = new Patient({
              reference: Math.floor(Math.random() * 10000),
              sex,
              age,
              phone,
              address,
              height,
              weight,
              user,
              consultations: [],
              medicalRecord: null,
          });

          const savedPatient = await newPatient.save({ session });

          const newMedicalRecord = new MedicalRecord({
              reference: Math.floor(Math.random() * 10000),
              bloodGroup,
              allergies: allergies ? [allergies] : [],
              MedicalHistory: medicalHistory ? [medicalHistory] : [],
              diagnostic: { symptoms: [mainSymptom] },
              patient: savedPatient._id,
          });

          const savedMedicalRecord = await newMedicalRecord.save({ session });
          savedPatient.medicalRecord = savedMedicalRecord._id;
          await savedPatient.save({ session });

          const newPatientFile = new PatientFile({
              reference: Math.floor(Math.random() * 10000),
              dateIssued: new Date().toISOString().split('T')[0],
              symptoms: mainSymptom,
              medicalRecord: savedMedicalRecord._id,
              patient: savedPatient._id,
          });

          await newPatientFile.save({ session });
          savedMedicalRecord.patientFiles.push(newPatientFile._id);
          await savedMedicalRecord.save({ session });

          patientToReturn = savedPatient;  // Assigner le nouveau patient à la variable `patientToReturn`
          console.log("✅ Nouveau patient créé avec succès.");
      }

      await session.commitTransaction();

      // Retourne le patient trouvé ou créé dans la réponse
      res.status(201).json({
          message: "Opération réussie.",
          patient: patientToReturn,  // Renvoyer le patient à la fin
      });

  } catch (error) {
      console.error("❌ Erreur :", error);
      await session.abortTransaction();
      res.status(500).json({ message: "Erreur lors de l'opération", error: error.message });
  } finally {
      session.endSession();
  }
}

,
async createPatient(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
      console.log("🟢 Début de la création d'un patient");
      console.log("Données reçues :", req.body);

      const { user, sex, age, phone, address, allergies, bloodGroup, height, mainSymptom, medicalHistory, weight } = req.body;

      if (!sex || !age || !phone || !address) {
          throw new Error("Données utilisateur/patient incomplètes !");
      }

      // 1️⃣ Création du dossier médical avant le patient
      const newMedicalRecord = new MedicalRecord({
          reference: Math.floor(Math.random() * 10000),
          MedicalHistory: medicalHistory,
          allergies: allergies,
          diagnostic: {
              symptoms: mainSymptom,
          },
          patient: null, // Nous laissons le champ patient vide pour l'instant
      });
      const savedMedicalRecord = await newMedicalRecord.save({ session });
      console.log("✅ Dossier médical créé :", savedMedicalRecord._id);

      // 2️⃣ Création et enregistrement du patient
      const newPatient = new Patient({
          reference: Math.floor(Math.random() * 10000),
          sex,
          age,
          phone,
          address,
          user: user,
          consultations: [],
          height:height,
          weight:weight,
          medicalRecord: savedMedicalRecord._id,  // On associe directement l'ID du dossier médical
      });
      const savedPatient = await newPatient.save({ session });
      console.log("✅ Patient enregistré :", savedPatient._id);
      console.log("✅ Patient enregistré :", savedPatient);
            
      // 3️⃣ Mise à jour du dossier médical avec l'ID du patient
      savedMedicalRecord.patient = savedPatient._id; // On associe l'ID du patient au dossier médical
      await savedMedicalRecord.save({ session });
      console.log("✅ Dossier médical mis à jour avec l'ID du patient.");

      // 4️⃣ Vérification de l'enregistrement du patient
      const patientExists = await Patient.findById(savedPatient._id).session(session);
      if (!patientExists) {
          throw new Error("Le patient n'a pas été enregistré correctement !");
      }
      console.log("🔎 Vérification patient réussie :", patientExists._id);

      await session.commitTransaction();
      session.endSession();

      res.status(201).json({
          message: "Patient et dossier médical enregistrés avec succès",
          patient: savedPatient
      });

  } catch (error) {
      await session.abortTransaction();
      session.endSession();
      console.error("❌ Erreur lors de l'enregistrement :", error);
      res.status(500).json({ message: "Erreur lors de l'enregistrement", error: error.message });
  }
},


//staff ajout d'un patient 
async addPatientStaff(req, res) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { firstName, lastName, email, sex, age, phone, address, dateIssued, symptoms, emergencyLevel,allergies,MedicalHistory, description, testResults } = req.body;

    if (!firstName || !lastName || !email) {
      throw new Error("Données utilisateur manquantes !");
    }

    // Génération d'un mot de passe aléatoire
    const generatedPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(generatedPassword, 10);

    // Création de l'utilisateur avec rôle patient
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: "patient"
    });

    const savedUser = await newUser.save({ session });

    // Création du patient
    const newPatient = new Patient({
      reference: Math.floor(Math.random() * 10000),
      sex,
      age,
      phone,
      address,
      user: savedUser._id
    });

    const savedPatient = await newPatient.save({ session });

    // Création du dossier médical
    const medicalRecord = new MedicalRecord({
      patient: savedPatient._id,
        diagnostic: {
    symptoms: symptoms || []  // <== Ici on ajoute les symptômes
  },
  allergies: allergies || [],
  MedicalHistory: MedicalHistory || []
    });

    const savedMedicalRecord = await medicalRecord.save({ session });

    // Création de la fiche patient (PatientFile)
    const initialPatientFile = new PatientFile({
      dateIssued,
      symptoms,
      emergencyLevel,
      allergies,
      MedicalHistory,
      description,
      testResults,
      medicalRecord: savedMedicalRecord._id
    });

    const savedFile = await initialPatientFile.save({ session });

    // Association de la fiche patient au dossier médical
    savedMedicalRecord.patientFiles.push(savedFile._id);
    await savedMedicalRecord.save({ session });

    // Envoi d'email
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "gytgutu@gmail.com",
        pass: "strp rifw uhso ciin",
      },
    });

    const mailOptions = {
      from: "smart 190",
      to: email,
      subject: "Création de votre compte",
      html: `
        <div>
          <h1>Bienvenue ${firstName} ${lastName} !</h1>
          <p>Votre compte a été créé avec succès.</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Mot de passe :</strong> ${generatedPassword}</p>
          <p>Vous pouvez vous connecter ici :</p>
          <a href="http://localhost:5173/loginPage">Se connecter</a>
        </div>
      `
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Erreur d'envoi d'email :", error);
      } else {
        console.log("Email envoyé :", info.response);
      }
    });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      message: "Patient, utilisateur, dossier médical et fiche patient créés avec succès.",
      patient: savedPatient,
      medicalRecord: savedMedicalRecord,
      patientFile: savedFile
    });

  } catch (error) {
    await session.abortTransaction();
    session.endSession();

    console.error("Erreur :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout du patient", error: error.message });
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
    console.log("🟡 Requête reçue au backend :", req.body);
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
async getPatientProfile (req, res) {
    try {
      const patient = await Patient.findOne({ user: req.params.user }).populate("user");
   
      if (patient) {
        // Si le patient est trouvé, renvoyer les informations
        res.json({
          _id: patient._id,
          lastName: patient.user?.lastName,
          firstName: patient.user?.firstName,
          picture: patient.user?.picture,
          email: patient.user?.email,
          sex: patient.sex,
          age: patient.age,
          phone: patient.phone,
          address: patient.address,
        });
      } else {
        res.status(404).json({ message: 'Patient not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
},
async updatePatientProfile(req, res) {
    try {
      // Récupérer l'utilisateur par ID
      const user = await User.findById(req.params.user);
  
      if (user) {
        // Mise à jour des informations de l'utilisateur
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;
        user.firstName = req.body.firstName || user.firstName;
  
        // Mise à jour de l'image si un fichier est téléchargé
        if (req.file) {
          user.picture = req.file.path; // Stocke le chemin du fichier téléchargé
        }
  
        // Mise à jour des informations du patient
        const patient = await Patient.findOne({ user: user._id }); // Trouver le patient associé à cet utilisateur
  
        if (patient) {
          patient.age = req.body.age || patient.age;
          patient.address = req.body.address || patient.address;
          patient.sex = req.body.sex || patient.sex;
          patient.phone = req.body.phone || patient.phone;
          patient.firstName = req.body.firstName || patient.firstName;
          patient.lastName = req.body.lastName || patient.lastName;
            if (req.file) {
              user.picture = req.file.path; // Stocke le chemin du fichier
            }
          // Sauvegarder le patient mis à jour
          await patient.save();
        }
  
        // Sauvegarde de l'utilisateur mis à jour
        const updatedUser = await user.save();
  
        // Retour des informations mises à jour
        res.json({
          _id: updatedUser._id,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
          firstName: updatedUser.firstName,
          picture: updatedUser.picture, // Retourner l'image mise à jour
          patient: {
            age: patient ? patient.age : undefined,
            address: patient ? patient.address : undefined,
            sex: patient ? patient.sex : undefined,
            phone: patient ? patient.phone : undefined,
          },
        });
      } else {
        // Si l'utilisateur n'est pas trouvé
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      // Gestion des erreurs en cas d'échec de la mise à jour
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
async addConsultationToPatient(patientId, consultationData) {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { consultationId } = consultationData;  // Consultation ID passé dans le body

    // Vérifier si les IDs sont valides
    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return { status: 400, message: "Patient ID invalide" };
    }

    if (!mongoose.Types.ObjectId.isValid(consultationId)) {
      return { status: 400, message: "Consultation ID invalide" };
    }

    // Vérifier si le patient existe
    const patient = await Patient.findById(patientId).session(session);
    if (!patient) {
      await session.abortTransaction();
      return { status: 404, message: "Patient non trouvé" };
    }

    // Ajouter la consultation au tableau `consultations`
    patient.consultations.push(consultationId);

    await patient.save({ session });
    await session.commitTransaction();
    session.endSession();

    console.log(`🟢 Consultation ${consultationId} ajoutée avec succès au patient ${patientId}`);
    return { status: 200, message: "Consultation ajoutée avec succès" };

  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("❌ Erreur lors de l'ajout de la consultation :", error);
    return { status: 500, message: "Erreur lors de l'ajout de la consultation", error: error.message };
  }
}



};


module.exports = patientController;
