const express = require("express");
const router = express.Router();
const ambulanceController = require("../controllers/ambulanceController");

router.post("/", ambulanceController.createAmbulance);
router.get("/", ambulanceController.getAmbulances);
router.get("/availabes", ambulanceController.getAvailableAmbulances);
router.get("/:id", ambulanceController.getAmbulanceById);
router.put("/:id", ambulanceController.updateAmbulance);
router.put("/updateStatus/:id", ambulanceController.updateAmbulanceStatus);
router.delete("/:id", ambulanceController.deleteAmbulance);

module.exports = router;
