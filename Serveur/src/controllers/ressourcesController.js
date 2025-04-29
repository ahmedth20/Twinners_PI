const Ressource = require('../models/ressources');

// CREATE
exports.createRessource = async (req, res) => {
  try {
    const newRessource = new Ressource(req.body);
    const saved = await newRessource.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Error creating ressource', error: err.message });
  }
};

// READ ALL
exports.getAllRessources = async (req, res) => {
  try {
    const ressources = await Ressource.find().populate('serviceManager');
    res.status(200).json(ressources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching ressources', error: err.message });
  }
};

// READ ONE
exports.getRessourceById = async (req, res) => {
  try {
    const ressource = await Ressource.findById(req.params.id).populate('serviceManager');
    if (!ressource) return res.status(404).json({ message: 'Ressource not found' });
    res.status(200).json(ressource);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching ressource', error: err.message });
  }
};

// UPDATE
exports.updateRessource = async (req, res) => {
    try {
      const updated = await Ressource.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ message: 'Ressource not found' });
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ message: 'Error updating ressource', error: err.message });
    }
  };
  
  // DELETE
  exports.deleteRessource = async (req, res) => {
    try {
      const deleted = await Ressource.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Ressource not found' });
      res.status(200).json({ message: 'Ressource deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting ressource', error: err.message });
    }
  };