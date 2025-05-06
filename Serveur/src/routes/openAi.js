// routes/specialtyRoutes.js
const express = require("express");
const openAiController  = require("../controllers/openAiController");

const router = express.Router();
router.post("/getSpeciality", openAiController.getSpecialty);

module.exports = router;
