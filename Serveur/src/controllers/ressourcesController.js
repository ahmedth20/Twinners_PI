const Ressource = require("../models/ressources");

// ✅ Créer une ressource
exports.createRessource = async (req, res) => {
  try {
    // Vérification des données reçues
    if (!req.body.name || !req.body.type || !req.body.quantity || !req.body.usage || !req.body.serviceManager) {
      return res.status(400).json({ message: "Tous les champs doivent être remplis" });
    }

    const newRessource = new Ressource(req.body);
    const savedRessource = await newRessource.save();
    res.status(201).json(savedRessource);
  } catch (error) {
    res.status(400).json({ message: `Erreur lors de la création de la ressource: ${error.message}` });
  }
};

// ✅ Récupérer toutes les ressources
exports.getAllRessources = async (req, res) => {
  try {
    const ressources = await Ressource.find().populate("serviceManager");
    res.status(200).json(ressources);
  } catch (error) {
    res.status(500).json({ message: `Erreur lors de la récupération des ressources: ${error.message}` });
  }
};

// ✅ Récupérer une ressource par ID
exports.getRessourceById = async (req, res) => {
  try {
    const ressource = await Ressource.findById(req.params.id).populate("serviceManager");
    if (!ressource) return res.status(404).json({ message: "Ressource non trouvée" });
    res.status(200).json(ressource);
  } catch (error) {
    res.status(500).json({ message: `Erreur lors de la récupération de la ressource: ${error.message}` });
  }
};

// ✅ Mettre à jour une ressource
exports.updateRessource = async (req, res) => {
  try {
    const updatedRessource = await Ressource.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedRessource) return res.status(404).json({ message: "Ressource non trouvée" });
    res.status(200).json(updatedRessource);
  } catch (error) {
    res.status(400).json({ message: `Erreur lors de la mise à jour de la ressource: ${error.message}` });
  }
};

// ✅ Supprimer une ressource
exports.deleteRessource = async (req, res) => {
  try {
    const deleted = await Ressource.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Ressource non trouvée" });
    res.status(200).json({ message: "Ressource supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: `Erreur lors de la suppression de la ressource: ${error.message}` });
  }
};
