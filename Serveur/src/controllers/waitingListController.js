const MedicalRecord = require('../models/medicalRecord');
const WaitingList = require('../models/waitingLists');
const doctorController = require('./doctorController');
const medicalRecordController = require('./medicalRecordController');
const openAiController = require('./openAiController');
const axios = require('axios');
const { getRandomEmergencyRoomByDepartement, updateEmergencyRoom, getEmergencyRoomById, getEmergencyRoomByIdback } = require('./roomEmergencyController');
const consultationController = require('./consultationController');
const EmergencyRoom = require('../models/emergencyRoom');
const patientController = require('./patientController');
const Consultation = require('../models/consultation');
exports.addToWaitingList = async (req, res) => {
  try {
    const { patient, specialty } = req.body;

    const newEntry = new WaitingList({
      patient,
      specialty,
    });

    await newEntry.save();
    res.status(201).json({ message: 'Patient ajouté à la liste d\'attente.', entry: newEntry });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de l\'ajout à la liste d\'attente.' });
  }
};

// ✅ Récupérer la liste d'attente par spécialité
exports.getListBySpecialty = async (req, res) => {
  try {
    const { specialty } = req.params;
    const waitingList = await WaitingList.find({ specialty }).populate('patient');
    
    if (waitingList.length === 0) {
      return res.status(404).json({ message: 'Aucun patient trouvé pour cette spécialité.' });
    }

    res.status(200).json(waitingList);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération de la liste d\'attente.' });
  }
};


exports.getSymptomSeverity = async (symptoms) => {
  try {
    
   const severity = await openAiController.getSymptomSeverity(symptoms);

    // Suppose que OpenAI retourne une évaluation des symptômes sur une échelle de 1 à 10
    return severity; 
  } catch (error) {
    console.error("Erreur lors de l'analyse des symptômes", error);
    return 0; // Retourne 0 en cas d'erreur
  }
};

/*exports.processWaitingList = async (req, res) => { 
  try {
    // 1️⃣ Récupérer la liste d'attente avec les informations du patient
    const waitingList = await WaitingList.find().populate('patient');

    // 2️⃣ Grouper les patients par spécialité
    const groupedBySpecialty = waitingList.reduce((acc, entry) => {
      if (!acc[entry.specialty]) {
        acc[entry.specialty] = [];
      }
      acc[entry.specialty].push(entry);
      return acc;
    }, {});

    console.log('Groupement par spécialité :', groupedBySpecialty);

    // 3️⃣ Pour chaque spécialité, récupérer les symptômes, allergies, historique médical et l'âge
    for (const specialty in groupedBySpecialty) {
      const patients = groupedBySpecialty[specialty];

      // Récupérer les dossiers médicaux pour chaque patient
      const patientsWithSeverity = await Promise.all(
        patients.map(async (entry) => {
          try {
            // Récupération du dossier médical
            const medicalRecord = await MedicalRecord.findById(entry.patient.medicalRecord);

            if (medicalRecord) {
              const symptoms = medicalRecord.diagnostic?.symptoms ?? [];
              const allergies = medicalRecord.allergies ?? [];
              const medicalHistory = medicalRecord.MedicalHistory ?? [];

              // Obtenir les dernières entrées s'ils existent
              const lastSymptom = symptoms.at(-1) ?? null;
              const lastAllergy = allergies.at(-1) ?? null;
              const lastMedicalHistory = medicalHistory.at(-1) ?? null;

              console.log('Dernier symptôme :', lastSymptom);
              console.log('Dernière allergie :', lastAllergy);
              console.log('Dernier historique médical :', lastMedicalHistory);

              if (lastSymptom) {
                // Appel OpenAI pour obtenir la sévérité
                const severityResponse = await this.getSymptomSeverity([lastSymptom], {
                  age: entry.patient.age,
                  allergies: lastAllergy,
                  medicalHistory: lastMedicalHistory
                });

                const severityValue = severityResponse.length > 0 ? severityResponse[0].severity : 0;

                console.log('✅ Sévérité détectée :', severityValue);

                // Retourner l'entrée du patient avec la sévérité calculée
                return { ...entry.toObject(), severity: severityValue };
              }
            } else {
              console.error(`⚠️ Aucun dossier médical trouvé pour le patient : ${entry.patient._id}`);
            }
          } catch (error) {
            console.error(`Erreur lors de la récupération du dossier médical : ${error.message}`);
            return null;
          }
        })
      );

      // Filtrer les résultats pour ne conserver que ceux qui sont valides
      groupedBySpecialty[specialty] = patientsWithSeverity
        .filter(patient => patient !== null)
        .sort((a, b) => b.severity - a.severity);
    }

    // 4️⃣ Retourner la liste triée
    res.status(200).json(groupedBySpecialty);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Erreur lors du traitement de la liste d attente.' });
  }
};*/

// 🔍 Méthode interne pour récupérer un patient par ID (sans Express)
const getWaitingListEntryById = async (id) => {
  try {
    if (!id) {
      console.error("ID non fourni.");
      return null;
    }

    const waitingListEntry = await WaitingList.findById(id).populate('patient');
    if (!waitingListEntry) {
      console.error("Patient non trouvé dans la liste d'attente.");
      return null;
    }
    
    return waitingListEntry;
  } catch (error) {
    console.error("Erreur lors de la récupération du patient :", error.message);
    return null;
  }
};

// 🔍 Route Express (inchangée, sauf appel vers la nouvelle méthode)
exports.getWaitingListById = async (req, res) => {
  const { id } = req.params;
  const waitingListEntry = await getWaitingListEntryById(id);

  if (!waitingListEntry) {
    return res.status(404).json({ message: "Patient non trouvé dans la liste d'attente." });
  }

  res.status(200).json(waitingListEntry);
};


exports.processWaitingList = async (req, res) => {
  const processInterval = 30000; // 30 secondes en millisecondes

  const process = async () => {
    try {
      const waitingList = await WaitingList.find().populate('patient');

      if (waitingList.length === 0) {
        console.log("📭 Liste d'attente vide");
        return;
      }

      const groupedBySpecialty = waitingList.reduce((acc, entry) => {
        if (!acc[entry.specialty]) {
          acc[entry.specialty] = [];
        }
        acc[entry.specialty].push(entry);
        return acc;
      }, {});

      for (const specialty in groupedBySpecialty) {
        const patients = groupedBySpecialty[specialty];

        const patientsWithSeverity = await Promise.all(
          patients.map(async (entry) => {
            try {
              const medicalRecord = await MedicalRecord.findById(entry.patient.medicalRecord);
              if (medicalRecord) {
                const symptoms = medicalRecord.diagnostic?.symptoms ?? [];
                const lastSymptom = symptoms.at(-1) ?? null;

                if (lastSymptom) {
                  const severityResponse = await this.getSymptomSeverity([lastSymptom], {
                    age: entry.patient.age,
                    allergies: medicalRecord.allergies ?? [],
                    medicalHistory: medicalRecord.MedicalHistory ?? []
                  });

                  const severityValue = severityResponse.length > 0 ? severityResponse[0].severity : 0;
                  return { ...entry.toObject(), severity: severityValue };
                }
              }
            } catch (error) {
              console.error(`Erreur lors de la récupération du dossier médical : ${error.message}`);
              return null;
            }
          })
        );

        groupedBySpecialty[specialty] = patientsWithSeverity
          .filter(patient => patient !== null)
          .sort((a, b) => b.severity - a.severity);

        const patientToAssign = groupedBySpecialty[specialty][0];

        if (patientToAssign) {
          const specialtyCleaned = specialty.trim().replace(/ /g, '%20');
          
          // Boucle infinie (toutes les 30 secondes) jusqu'à trouver un médecin
          let doctor;
          while (!doctor) {
            console.log("⏳ En attente d'un médecin disponible pour la spécialité:", specialty);
            doctor = await doctorController.getAvailableDoctorsBySpecialty({ params: { specialty: specialtyCleaned } });
            if (!doctor) await new Promise(resolve => setTimeout(resolve, processInterval));
          }
          console.log("🩺 Médecin trouvé :", doctor);

          // Boucle infinie (toutes les 30 secondes) jusqu'à trouver une salle d'urgence
          let room;
          while (!room) {
            console.log("⏳ En attente d'une salle disponible...");
            room = await getRandomEmergencyRoomByDepartement(doctor.departement);
            if (!room) await new Promise(resolve => setTimeout(resolve, processInterval));
          }
          console.log("🚑 Salle d'urgence trouvée :", room);

          // Création de la consultation
          const consultationData = {
            duration: 30,
            date: new Date(),
            status: 'Planned',
            diagnostic: {},
            patient: patientToAssign._id,
            doctor: doctor._id,
            emergencyRoom: room._id
          };

          const createdConsultation = await consultationController.createConsultationback(consultationData);
          await doctorController.updateDoctorAvailabilityToFalse(doctor._id);

          // Mise à jour de la capacité de la salle
          const newCapacity = room.capacity - 1;
          await EmergencyRoom.findByIdAndUpdate(room._id, {
            capacity: newCapacity,
            availability: newCapacity > 0
          }, { new: true });

          // Mise à jour du patient
          await patientController.addConsultationToPatient(patientToAssign.patient._id.toString(), {
            consultationId: createdConsultation._id
          });

          // Retirer le patient de la liste d'attente
          await WaitingList.findByIdAndDelete(patientToAssign._id);
          console.log(`✅ Consultation planifiée pour ${patientToAssign.patient.firstName} ${patientToAssign.patient.lastName}`);
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // Appel initial + toutes les 30 secondes
  process();
  setInterval(process, processInterval);

  // Réponse immédiate pour éviter l'erreur de double header
  res.status(200).json({ message: "Traitement de la liste d'attente en cours..." });
};

exports.getWaitingList = async (req, res) => {
  const process = async () => {
    try {
      // Récupération de la liste d'attente avec les informations du patient et de l'utilisateur
      const waitingList = await WaitingList.find()
        .populate('patient')
        .populate({
          path: 'patient',
          populate: {
            path: 'user',
            model: 'User'
          }
        });

      if (waitingList.length === 0) {
        console.log("📭 Liste d'attente vide");
        return [];
      }

      const groupedBySpecialty = waitingList.reduce((acc, entry) => {
        if (!acc[entry.specialty]) {
          acc[entry.specialty] = [];
        }
        acc[entry.specialty].push(entry);
        return acc;
      }, {});

      for (const specialty in groupedBySpecialty) {
        const patients = groupedBySpecialty[specialty];

        const patientsWithSeverity = await Promise.all(
          patients.map(async (entry) => {
            try {
              const medicalRecord = await MedicalRecord.findById(entry.patient.medicalRecord);
              if (medicalRecord) {
                const symptoms = medicalRecord.diagnostic?.symptoms ?? [];
                const lastSymptom = symptoms.at(-1) ?? null;

                if (lastSymptom) {
                  const severityResponse = await this.getSymptomSeverity([lastSymptom], {
                    age: entry.patient.age,
                    allergies: medicalRecord.allergies ?? [],
                    medicalHistory: medicalRecord.MedicalHistory ?? []
                  });

                  const severityValue = severityResponse.length > 0 ? severityResponse[0].severity : 0;
                  return { ...entry.toObject(), severity: severityValue };
                }
              }
            } catch (error) {
              console.error(`Erreur lors de la récupération du dossier médical : ${error.message}`);
              return null;
            }
          })
        );

        groupedBySpecialty[specialty] = patientsWithSeverity
          .filter(patient => patient !== null)
          .sort((a, b) => b.severity - a.severity);
      }

      return groupedBySpecialty;
    } catch (error) {
      console.error(error.message);
      return [];
    }
  };

  const result = await process();
  res.status(200).json(result);
};

exports.getWaitingListStatus = async (req, res) => {
  const { patientId } = req.params;

  try {
    const patient = await WaitingList.findOne({ patient: patientId })
      .populate('patient')
      .populate({
        path: 'patient',
        populate: {
          path: 'user',
          model: 'User',
        },
      })

    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(404).json({ message: "Patient non trouvé dans la liste d'attente" });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du statut du patient :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
exports.getWaitingListStatus = async (req, res) => {
  const { patientId } = req.params;

  try {
    const patient = await WaitingList.findOne({ patient: patientId })
      .populate('patient')
      .populate({
        path: 'patient',
        populate: {
          path: 'user',
          model: 'User',
        },
      });

    if (patient) {
      res.status(200).json(patient);
    } else {
      res.status(204).send(); // Renvoie un 204 No Content
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du statut du patient :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};


exports.getPatientConsultation = async (req, res) => {
  const { patientId } = req.params;

  try {
    const consultation = await Consultation.findOne({ patient: patientId })
      .sort({ createdAt: -1 }) // Trie par date de création (la plus récente en premier)
      .populate('patient')
      .populate('doctor')

    if (consultation) {
      res.status(200).json(consultation);
    } else {
      res.status(404).json({ message: "Aucune consultation trouvée pour ce patient" });
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de la consultation :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

