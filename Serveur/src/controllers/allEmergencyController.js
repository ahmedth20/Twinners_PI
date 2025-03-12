const Patient = require("../models/patient");
const Doctor = require("../models/doctors");
const Staff = require("../models/staff");
const ServiceManager = require("../models/serviceManger");
const Paramedic = require("../models/paramedic");
const Ambulance = require("../models/ambulance");
const Consultation = require("../models/consultation");
const EmergencyRoom = require("../models/emergencyRoom");
const MedicalRecord = require("../models/medicalRecord");
const Operation = require("../models/operation");
const PatientFile = require("../models/patientFile");
const Prescription = require("../models/prescription");
const Resource = require("../models/ressources");
const Schedule = require("../models/schedule");

// 🟢 **Créer un document**
exports.createItem = async (req, res) => {
  try {
    const { collection } = req.params;
    const Model = getModel(collection);
    if (!Model) return res.status(400).json({ error: "Collection inconnue" });

    const newItem = new Model(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// 🔵 **Récupérer tous les documents**
exports.getAllItems = async (req, res) => {
  try {
    const { collection } = req.params;
    const Model = getModel(collection);
    if (!Model) return res.status(400).json({ error: "Collection inconnue" });

    const items = await Model.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🟡 **Récupérer un document par ID**
exports.getItemById = async (req, res) => {
  try {
    const { collection, id } = req.params;
    const Model = getModel(collection);
    if (!Model) return res.status(400).json({ error: "Collection inconnue" });

    const item = await Model.findById(id);
    if (!item) return res.status(404).json({ error: "Document non trouvé" });

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🟠 **Mettre à jour un document**
exports.updateItem = async (req, res) => {
  try {
    const { collection, id } = req.params;
    const Model = getModel(collection);
    if (!Model) return res.status(400).json({ error: "Collection inconnue" });

    const updatedItem = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ error: "Document non trouvé" });

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔴 **Supprimer un document**
exports.deleteItem = async (req, res) => {
  try {
    const { collection, id } = req.params;
    const Model = getModel(collection);
    if (!Model) return res.status(400).json({ error: "Collection inconnue" });

    const deletedItem = await Model.findByIdAndDelete(id);
    if (!deletedItem) return res.status(404).json({ error: "Document non trouvé" });

    res.status(200).json({ message: "Document supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 🔍 **Rechercher dans une collection**
exports.searchItems = async (req, res) => {
  try {
    const { collection } = req.params;
    const { query } = req.query;
    const Model = getModel(collection);

    if (!Model) return res.status(400).json({ error: "Collection inconnue" });

    const results = await Model.find({
      $or: [
        { firstName: { $regex: query, $options: "i" } },
        { lastName: { $regex: query, $options: "i" } }
      ]
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// 🛠 **Fonction pour obtenir le bon modèle**
function getModel(collection) {
  const models = {
    patients: Patient,
    doctors: Doctor,
    staff: Staff,
    serviceManagers: ServiceManager,
    paramedics: Paramedic,
    ambulances: Ambulance,
    consultations: Consultation,
    emergencyRooms: EmergencyRoom,
    medicalRecords: MedicalRecord,
    operations: Operation,
    patientFiles: PatientFile,
    prescriptions: Prescription,
    resources: Resource,
    schedules: Schedule
  };
  return models[collection] || null;
}
