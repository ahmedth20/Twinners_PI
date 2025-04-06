const express = require("express");
const serviceManagerController = require("../controllers/serviceManagerController");

const router = express.Router();

router.get("/", serviceManagerController.getAllServiceManagers); // Get all service managers
router.get("/:id", serviceManagerController.getServiceManagerById); // Get service manager by ID
router.post("/", serviceManagerController.createServiceManager); // Create new service manager
router.put("/:id", serviceManagerController.updateServiceManager); // Update service manager by ID
router.delete("/:id", serviceManagerController.deleteServiceManager); // Delete service manager by ID

module.exports = router;
