import axios from "axios";

const API_URL = "http://localhost:5000/paramedics/paramedics";

const ParamedicService = {
  // Get all ambulances
  getParamedicByAmbulance: async () => {
    try {
      const response = await axios.get(`${API_URL}/ambulance/${id}`);

      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des ambulances:", error);
      throw error;
    }
  },

};

export default ParamedicService;
