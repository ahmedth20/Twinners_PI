import axios from "axios";

const API_URL = "http://localhost:5000/operation";

const OperationService = {
  // 🔹 Récupérer les opérations par userId
  getOperationsByUserId: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/ByUser/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des opérations par userId:", error);
      throw error;
    }
  },

  // 🔹 Récupérer toutes les opérations
  getAllOperations: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des opérations:", error);
      throw error;
    }
  },

  // 🔹 Récupérer une opération par son ID
  getOperationById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'opération:", error);
      throw error;
    }
  },

  // 🔹 Créer une nouvelle opération
  createOperation: async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de l'opération:", error);
      throw error;
    }
  },

  // 🔹 Mettre à jour une opération existante
  updateOperation: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'opération:", error);
      throw error;
    }
  },

  // 🔹 Supprimer une opération
  deleteOperation: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression de l'opération:", error);
      throw error;
    }
  }
};

export default OperationService;
