import axios from "axios";

const API_URL = "http://localhost:5000/emergencyrooms";

const emergencyRoomService = {
  getAllemergencyrooms: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des médecins:", error);
      throw error;
    }
  },

  getemergencyById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du médecin:", error);
      throw error;
    }
  },

  createemergencyroom: async (emergencyroomData) => {
    try {
      const response = await axios.post(API_URL, emergencyroomData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du médecin:", error);
      throw error;
    }
  },

  

  updateemergencyroom: async (id, emergencyroomData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, emergencyroomData);
      console.log("Response from update:", response.data); // Ajoutez cette ligne
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du médecin:", error);
      throw error;
    }
  },

  deleteemergencyroom: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du médecin:", error);
      throw error;
    }
  },
  getRandomEmergencyRoomByDepartement: async (departement) => {
    try {
      await axios.get(`${API_URL}/random/${departement}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du médecin:", error);
      throw error;
    }
  },
};

export default emergencyRoomService;
