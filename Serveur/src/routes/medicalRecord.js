const express = require("express");
const router = express.Router();
const medicalRecordController = require("../controllers/medicalRecordController");

// CRUD Routes
router.post("/", medicalRecordController.createMedicalRecord);
router.get("/", medicalRecordController.getAllMedicalRecords);
router.get("/:id", medicalRecordController.getMedicalRecordById);
router.get("/async/:id", medicalRecordController.getMedicalRecordByIdAsync);
router.put("/:id", medicalRecordController.updateMedicalRecord);
router.delete("/:id", medicalRecordController.deleteMedicalRecord);
router.get("/ByUser/:userId", medicalRecordController.getMedicalRecordByUserId);

module.exports = router;
