const Ambulance = require("../models/ambulance");

exports.createAmbulance = async (req, res) => {
  try {
    const ambulance = new Ambulance(req.body);
    await ambulance.save();
    res.status(201).json(ambulance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all ambulances
exports.getAmbulances = async (req, res) => {
  try {
    const ambulances = await Ambulance.find().populate("paramedics");
    res.status(200).json(ambulances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get only available ambulances
exports.getAvailableAmbulances = async (req, res) => {
    try {
      const ambulances = await Ambulance.find({ status: "available" }).populate("paramedics");
      res.status(200).json(ambulances);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Get a single ambulance by ID
exports.getAmbulanceById = async (req, res) => {
  try {
    const ambulance = await Ambulance.findById(req.params.id).populate("paramedics");
    if (!ambulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }
    res.status(200).json(ambulance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an ambulance by ID
exports.updateAmbulance = async (req, res) => {
  try {
    const ambulance = await Ambulance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ambulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }
    res.status(200).json(ambulance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
// Update an ambulance status by ID
exports.updateAmbulanceStatus = async (req, res) => {
  const { status } = req.body;

  // Vérification si le status est valide
  const validStatuses = ["on road to patient", "available", "busy"];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    const ambulance = await Ambulance.findByIdAndUpdate(
      req.params.id, 
      { status: status },  // On met à jour uniquement le status
      { new: true }
    );

    if (!ambulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }

    res.status(200).json(ambulance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an ambulance by ID
exports.deleteAmbulance = async (req, res) => {
  try {
    const ambulance = await Ambulance.findByIdAndDelete(req.params.id);
    if (!ambulance) {
      return res.status(404).json({ message: "Ambulance not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
