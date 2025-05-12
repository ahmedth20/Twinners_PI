const express = require("express");
const router = express.Router();
const prescriptionController = require("../controllers/prescriptionController");
const path = require('path'); // Ajouter cette ligne pour définir 'path'

// 🔹 Créer une prescription
router.post("/", prescriptionController.createPrescription);

// 🔹 Récupérer toutes les prescriptions
router.get("/", prescriptionController.getAllPrescriptions);

// 🔹 Récupérer une prescription par ID
router.get("/:id", prescriptionController.getPrescriptionById);

// 🔹 Mettre à jour une prescription
router.put("/:id", prescriptionController.updatePrescription);

// 🔹 Supprimer une prescription
router.delete("/:id", prescriptionController.deletePrescription);

// 🔹 Récupérer les prescriptions par dossier médical
router.get("/medicalRecord/:medicalRecordId", prescriptionController.getPrescriptionsByMedicalRecordId);

router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "../pdfs", fileName);
  res.download(filePath);
});
router.get("/pdf/:id", prescriptionController.generatePrescriptionPDF);

module.exports = router;
