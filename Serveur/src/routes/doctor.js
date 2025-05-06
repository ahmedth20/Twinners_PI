const express = require("express");
const doctorController = require("../controllers/doctorController");

const router = express.Router();

router.get("/", doctorController.getAllDoctors);

router.get("/:id", doctorController.getDoctorById);

router.post("/", doctorController.createDoctor);

router.put("/:id", doctorController.updateDoctor);

router.delete("/:id", doctorController.deleteDoctor);

//router.get('/specialty/:specialty', doctorController.getDoctorsBySpecialty);
router.get('/specialty/:specialty', doctorController.getAvailableDoctorsBySpecialty);

module.exports = router;
