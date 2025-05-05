const express = require("express");
const patientFileController = require("../controllers/patientFileController");

const router = express.Router();

router.post("/add", patientFileController.createPatientFile);
router.get("/",  patientFileController.getAllPatientFiles);
router.get("/:id",  patientFileController.getPatientFileById);
router.put("/:id",  patientFileController.updatePatientFile);
router.delete("/:id", patientFileController.deletePatientFile);

module.exports = router;
