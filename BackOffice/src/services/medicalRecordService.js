import axios from "axios";

const API_URL = "http://localhost:5000/medicalrecord";

const MedicalRecordService = {
  getMedicalRecordByUserId: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/ByUser/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du dossier médical par userId:", error);
      throw error;
    }
  },

  getAllMedicalRecords: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des dossiers médicaux:", error);
      throw error;
    }
  },

  getMedicalRecordById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du dossier médical:", error);
      throw error;
    }
  },

  createMedicalRecord: async (data) => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du dossier médical:", error);
      throw error;
    }
  },

  updateMedicalRecord: async (id, data) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du dossier médical:", error);
      throw error;
    }
  },

  deleteMedicalRecord: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la suppression du dossier médical:", error);
      throw error;
    }
  }
};

export default MedicalRecordService;
