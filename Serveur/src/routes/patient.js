const express = require("express");
const patientController = require("../controllers/patientController");

const router = express.Router();

router.get("/", patientController.getAllPatients);
router.get("/listDoctors", patientController.getAllDoctors);
router.get("/:id", patientController.getPatientById);
router.get("/details/:id", patientController.getPatientInfoById);
router.get("/getPatientProfile/:user", patientController.getPatientProfile);
router.post("/", patientController.createPatient);
router.post("/createSimplePatient", patientController.createSimplePatient);
router.post("/createSimplePatient1", patientController.addPatientStaff);
router.post("/createSimplePatientFront", patientController.createSimplePatientFront);
router.put("/:id", patientController.updatePatient);
router.put("/updatePatientProfile/:user", patientController.updatePatientProfile);
router.put("/updateSimplePatient/:id", patientController.updateSimplePatient);
router.delete("/:id", patientController.deletePatient);
router.put("/toggle-status/:id", patientController.toggleUserStatus);
router.put("/add-consultation/:id", patientController.addConsultationToPatient);

module.exports = router;
