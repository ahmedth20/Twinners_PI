const PatientFile = require('../models/patientFile');
const { io, connectedUsers } = require('../socket');
// ➔ Créer un patient file
exports.createPatientFile = async (req, res) => {
  try {
    const { dateIssued, description, symptoms, emergencyLevel, paramedic, medicalRecord } = req.body;

    const patientFile = new PatientFile({
      dateIssued,
      description,
      symptoms,
      emergencyLevel,
      paramedic,
      medicalRecord,
    });

    const savedFile = await patientFile.save();
    // 🎯 Notification Socket.IO au médecin concerné
    const populatedFile = await PatientFile.findById(savedFile._id).populate('medicalRecord');
    const doctorId = populatedFile.medicalRecord.doctor;

    const doctorSocketId = connectedUsers[doctorId];
    if (doctorSocketId) {
      io.to(doctorSocketId).emit('new_patient_file', {
        message: `Un nouveau dossier patient a été soumis par un paramédic.`,
        patientFile: savedFile,
      });
    }
    res.status(201).json(savedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➔ Récupérer tous les patient files
exports.getAllPatientFiles = async (req, res) => {
  try {
    const files = await PatientFile.find()
      .populate('paramedic', 'name') // Affiche le nom du paramedic
      .populate('medicalRecord');    // Ajoute tout le medicalRecord

    res.json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➔ Récupérer un patient file par ID
exports.getPatientFileById = async (req, res) => {
  try {
    const file = await PatientFile.findById(req.params.id)
      .populate('paramedic', 'name')
      .populate('medicalRecord');

    if (!file) {
      return res.status(404).json({ message: 'Patient file not found' });
    }

    res.json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➔ Modifier un patient file
exports.updatePatientFile = async (req, res) => {
  try {
    const updatedFile = await PatientFile.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedFile) {
      return res.status(404).json({ message: 'Patient file not found' });
    }

    res.json(updatedFile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➔ Supprimer un patient file
exports.deletePatientFile = async (req, res) => {
  try {
    const deletedFile = await PatientFile.findByIdAndDelete(req.params.id);

    if (!deletedFile) {
      return res.status(404).json({ message: 'Patient file not found' });
    }

    res.json({ message: 'Patient file deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
