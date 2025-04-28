const mongoose = require('mongoose');
const Paramedic = require('../models/paramedic'); 

// Create a new paramedic
exports.createParamedic = async (req, res) => {
    try {
        const paramedic = new Paramedic(req.body);
        await paramedic.save();
        res.status(201).json(paramedic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all paramedics
exports.getParamedics = async (req, res) => {
    try {
        const paramedics = await Paramedic.find().populate('ambulance').populate('patientsFile').populate('user');
        res.status(200).json(paramedics);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single paramedic by ID
exports.getParamedicById = async (req, res) => {
    try {
        const paramedic = await Paramedic.findById(req.params.id).populate('ambulance').populate('patientsFile').populate('user');
        if (!paramedic) {
            return res.status(404).json({ message: 'Paramedic not found' });
        }
        res.status(200).json(paramedic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// controllers/paramedicController.js

exports.getParamedicByAmbulance = async (req, res) => {
    try {
      // Recherche les paramedics associés à l'ambulance
      const paramedics = await Paramedic.find({ ambulance: req.params.ambulanceId })
        .populate('ambulance')
        .populate('patientsFile')
        .populate('user');
      
      if (!paramedics || paramedics.length === 0) {
        return res.status(404).json({ message: 'No paramedics found for this ambulance' });
      }
      
      res.status(200).json(paramedics);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Update a paramedic by ID
exports.updateParamedic = async (req, res) => {
    try {
        const paramedic = await Paramedic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!paramedic) {
            return res.status(404).json({ message: 'Paramedic not found' });
        }
        res.status(200).json(paramedic);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a paramedic by ID
exports.deleteParamedic = async (req, res) => {
    try {
        const paramedic = await Paramedic.findByIdAndDelete(req.params.id);
        if (!paramedic) {
            return res.status(404).json({ message: 'Paramedic not found' });
        }
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.deactivateParamedic = async (req, res) => {
    try {
        const paramedic = await Paramedic.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        ).populate('ambulance').populate('patientsFile').populate('user');
        if (!paramedic) {
            return res.status(404).json({ message: 'Paramedic not found' });
        }
        res.status(200).json(paramedic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.activateParamedic = async (req, res) => {
    console.log('Requête reçue pour activer le paramédic avec ID:', req.params.id);
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID invalide' });
        }
        const paramedic = await Paramedic.findByIdAndUpdate(
            id,
            { isActive: true },
            { new: true }
        ).populate('ambulance').populate('patientsFile').populate('user');
        if (!paramedic) {
            return res.status(404).json({ message: 'Paramedic not found' });
        }
        res.status(200).json(paramedic);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};