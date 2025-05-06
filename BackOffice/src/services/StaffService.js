import axios from "axios";

const API_URL = "http://localhost:5000/staff"; // Changer l'endpoint

const StaffService = {
  getAllStaff: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement du personnel:", error);
      throw error;
    }
  },

  getStaffById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du personnel:", error);
      throw error;
    }
  },

  createStaff: async (staffData) => {
    try {
      const response = await axios.post(API_URL, staffData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du personnel:", error);
      throw error;
    }
  },

  updateStaff: async (id, staffData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, staffData); // Vérifiez si l'URL est correcte
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du staff:", error);
      throw error;
    }
  }
,  

  deleteStaff: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du personnel:", error);
      throw error;
    }
  },
};

export default StaffService;
