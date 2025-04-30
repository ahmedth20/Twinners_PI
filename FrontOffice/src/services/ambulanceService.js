import axios from "axios";

const API_URL = "http://localhost:5000/ambulance";

const AmbulanceService = {
  // Get all ambulances
  getAllAmbulances: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des ambulances:", error);
      throw error;
    }
  },

  // Get an ambulance by ID
  getAmbulanceById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'ambulance:", error);
      throw error;
    }
  },

  // Create a new ambulance
  createAmbulance: async (ambulanceData) => {
    try {
      const response = await axios.post(API_URL, ambulanceData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création de l'ambulance:", error);
      throw error;
    }
  },

  // Update an ambulance by ID
  updateAmbulance: async (id, ambulanceData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, ambulanceData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'ambulance:", error);
      throw error;
    }
  },

  // Delete an ambulance by ID
  deleteAmbulance: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression de l'ambulance:", error);
      throw error;
    }
  },

  // Get only available ambulances
  getAvailableAmbulances: async () => {
    try {
      const response = await axios.get(`${API_URL}/availabes`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des ambulances disponibles:", error);
      throw error;
    }
  }
};

export default AmbulanceService;
