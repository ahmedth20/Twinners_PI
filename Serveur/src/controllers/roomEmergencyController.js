const EmergencyRoom = require("../models/emergencyRoom");

// Créer une nouvelle emergency room
exports.createEmergencyRoom = async (req, res) => {
  try {
    const { capacity, departement, availability } = req.body;

    const newRoom = new EmergencyRoom({ capacity, departement, availability });
    await newRoom.save();

    res.status(201).json(newRoom);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de la création de la salle", error: err });
  }
};

// Obtenir toutes les emergency rooms
exports.getAllEmergencyRooms = async (req, res) => {
  try {
    const rooms = await EmergencyRoom.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la récupération", error: err });
  }
};

// Obtenir une emergency room par ID
exports.getEmergencyRoomById = async (req, res) => {
  try {
    const room = await EmergencyRoom.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Salle non trouvée" });
    res.json(room);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la recherche", error: err });
  }
};

// Mettre à jour une emergency room
exports.updateEmergencyRoom = async (req, res) => {
  try {
    const updatedRoom = await EmergencyRoom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRoom) return res.status(404).json({ message: "Salle non trouvée" });
    res.json(updatedRoom);
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la mise à jour", error: err });
  }
};

// Supprimer une emergency room
exports.deleteEmergencyRoom = async (req, res) => {
  try {
    const deleted = await EmergencyRoom.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Salle non trouvée" });
    res.json({ message: "Salle supprimée" });
  } catch (err) {
    res.status(500).json({ message: "Erreur lors de la suppression", error: err });
  }
};


exports.getRandomEmergencyRoomByDepartement = async (req, res) => {
    try {
      const { departement } = req.params;
  
      const matchingRooms = await EmergencyRoom.find({
        departement: departement,
        capacity: { $gt: 0 },
      });
  
      if (matchingRooms.length === 0) {
        return res.status(404).json({ message: "Aucune salle disponible trouvée pour ce département" });
      }
  
      // Tirage aléatoire
      const randomRoom = matchingRooms[Math.floor(Math.random() * matchingRooms.length)];
  
      res.json(randomRoom);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erreur lors de la récupération de la salle", error: err });
    }
  };
  