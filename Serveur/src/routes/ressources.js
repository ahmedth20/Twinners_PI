const express = require("express");
const router = express.Router();
const ressourcesController = require("../controllers/ressourcesController");

router.post("/", ressourcesController.createRessource);
router.get("/", ressourcesController.getAllRessources);
router.get("/:id", ressourcesController.getRessourceById);
router.put("/:id", ressourcesController.updateRessource);
router.delete("/:id", ressourcesController.deleteRessource);

module.exports = router;
