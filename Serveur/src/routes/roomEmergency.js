const express = require("express");
const router = express.Router();
const controller = require("../controllers/roomEmergencyController");

router.post("/", controller.createEmergencyRoom);
router.get("/", controller.getAllEmergencyRooms);
router.get("/:id", controller.getEmergencyRoomById);
router.put("/:id", controller.updateEmergencyRoom);
router.delete("/:id", controller.deleteEmergencyRoom);
router.get("/random/:departement", controller.getRandomEmergencyRoomByDepartement);

module.exports = router;
