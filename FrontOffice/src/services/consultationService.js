import axios from "axios";

const API_URL = "http://localhost:5000/consultation";

const ConsultationService = {
  // 🔹 Créer une nouvelle consultation
  createConsultation: async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de la consultation:", error);
      throw error;
    }
  },

  // 🔹 Récupérer toutes les consultations
  getAllConsultations: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des consultations:", error);
      throw error;
    }
  },

  // 🔹 Récupérer une consultation par son ID
  getConsultationById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération de la consultation:", error);
      throw error;
    }
  },

  // 🔹 Mettre à jour une consultation existante
  updateConsultation: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la consultation:", error);
      throw error;
    }
  },

  // 🔹 Supprimer une consultation
  deleteConsultation: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression de la consultation:", error);
      throw error;
    }
  },

  // 🔹 Récupérer les consultations par l'ID de l'utilisateur (patient)
  getConsultationsByUserId: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/ByUser/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des consultations par userId:", error);
      throw error;
    }
  }
};

export default ConsultationService;
