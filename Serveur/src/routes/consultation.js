const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultationController");

// CRUD Routes
router.post("/", consultationController.createConsultation);
router.get("/", consultationController.getAllConsultations);
router.get("/:id", consultationController.getConsultationById);
router.get("/ByUser/:id", consultationController.getConsultationsByPatient);
router.get("/ByDoctorConnecter/:id", consultationController.getConsultationsByDoctorConnecter);
router.get("/OneByUser/:id", consultationController.getConsultationsByPatientback);
router.put("/:id", consultationController.updateConsultation);
router.delete("/:id", consultationController.deleteConsultation);
router.delete("/delete/:id", consultationController.deleteConsultationsByDoctor);

module.exports = router;
