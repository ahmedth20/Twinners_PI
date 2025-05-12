const express = require("express");
const patientController = require("../controllers/patientController");
const upload = require("../middleware/uploadMiddleware.js"); 
const router = express.Router();

router.get("/", patientController.getAllPatients);
router.get("/listDoctors", patientController.getAllDoctors);
router.get("/:id", patientController.getPatientById);
router.get("/details/:id", patientController.getPatientInfoById);
router.get("/detailsback/:id", patientController.getPatientInfoByIdback);
router.get("/getPatientProfile/:user", patientController.getPatientProfile);
router.post("/", patientController.createPatient);
router.post("/createSimplePatient", patientController.createSimplePatient);
router.post("/createSimplePatientFront", patientController.createSimplePatientFront);
router.put("/:id", patientController.updatePatient);
router.put("/updatePatientProfile/:user",upload.single('picture'), patientController.updatePatientProfile);
router.put("/updateSimplePatient/:id", patientController.updateSimplePatient);
router.delete("/:id", patientController.deletePatient);
router.put("/toggle-status/:id", patientController.toggleUserStatus);
router.put("/add-consultation/:id", patientController.addConsultationToPatient);

router.post('/upload', upload.single('image'), (req, res) => {
  try {
  res.json({ imageUrl: req.file.path }); // Retourne l'URL Cloudinary
  } catch (error) {
  res.status(500).json({ error: error.message });
  }
});
module.exports = router;
