const express = require("express");
const emergencyController = require("../controllers/allEmergencyController");

const router = express.Router();

router.post("/:collection", emergencyController.createItem);
router.get("/:collection", emergencyController.getAllItems);
router.get("/:collection/search", emergencyController.searchItems);
router.get("/:collection/:id", emergencyController.getItemById);
router.put("/:collection/:id", emergencyController.updateItem);
router.delete("/:collection/:id", emergencyController.deleteItem);


module.exports = router;
