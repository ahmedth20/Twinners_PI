const express = require("express");
const router = express.Router();
const consultationController = require("../controllers/consultationController");

// CRUD Routes
router.post("/", consultationController.createConsultation);
router.get("/", consultationController.getAllConsultations);
router.get("/:id", consultationController.getConsultationById);
router.get("/ByUser/:userId", consultationController.getConsultationsByUserId);
router.put("/:id", consultationController.updateConsultation);
router.delete("/:id", consultationController.deleteConsultation);

// Get consultations by user ID
router.get("/byUser/:userId", consultationController.getConsultationsByUserId);

module.exports = router;
