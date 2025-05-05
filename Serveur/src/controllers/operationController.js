const Operation = require("../models/operation");
const MedicalRecord = require("../models/medicalRecord");

const operationController = {
  // 🔹 Créer une opération
  async createOperation(req, res) {
    try {
      const operation = new Operation(req.body);
      const savedOperation = await operation.save();
      res.status(201).json(savedOperation);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la création de l'opération", error });
    }
  },

  // 🔹 Récupérer toutes les opérations
  async getAllOperations(req, res) {
    try {
      const operations = await Operation.find()
        .populate("medicalRecord", "reference patient")
        .populate("patient");
      res.status(200).json(operations);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération des opérations", error });
    }
  },

  // 🔹 Récupérer une opération par ID
  async getOperationById(req, res) {
    try {
      const operation = await Operation.findById(req.params.id)
        .populate("medicalRecord", "reference patient")
        .populate("patient");

      if (!operation) return res.status(404).json({ message: "Opération introuvable" });
      res.status(200).json(operation);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la récupération de l'opération", error });
    }
  },

  // 🔹 Mettre à jour une opération
  async updateOperation(req, res) {
    try {
      const operation = await Operation.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updateDate: new Date() },
        { new: true }
      );
      if (!operation) return res.status(404).json({ message: "Opération non trouvée" });
      res.status(200).json(operation);
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la mise à jour de l'opération", error });
    }
  },

  // 🔹 Supprimer une opération
  async deleteOperation(req, res) {
    try {
      const result = await Operation.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ message: "Opération non trouvée" });
      res.status(200).json({ message: "Opération supprimée avec succès" });
    } catch (error) {
      res.status(500).json({ message: "Erreur lors de la suppression de l'opération", error });
    }
  },

  // 🔹 Récupérer les opérations par UserId
  async getOperationsByUserId(req, res) {
    try {
      const { userId } = req.params;

      // Étape 1 : Trouver le dossier médical associé à cet userId
      const medicalRecord = await MedicalRecord.findOne({ "patient.user": userId });

      if (!medicalRecord) {
        return res.status(404).json({ message: "Aucun dossier médical trouvé pour cet utilisateur." });
      }

      // Étape 2 : Trouver les opérations associées à ce dossier médical
      const operations = await Operation.find({ medicalRecord: medicalRecord._id })
        .populate("medicalRecord", "reference patient") // Vous pouvez ajouter d'autres champs du dossier médical à afficher si nécessaire
        .populate("patient");

      if (!operations || operations.length === 0) {
        return res.status(404).json({ message: "Aucune opération trouvée pour ce dossier médical." });
      }

      res.status(200).json(operations);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur", error });
    }
  }
};

module.exports = operationController;
