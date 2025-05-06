import axios from "axios";

const API_URL = "http://localhost:5000/paramedics/paramedics";

const ParamedicService = {
 getAllParamedics: async () => {
    try {
        const response = await axios.get(API_URL);
         return response.data;
    } catch (error) {
          console.error("Erreur lors du chargement des Paramedics:", error);
          throw error;
    }
  },

  getParamedicById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du Paramedic:", error);
      throw error;
    }
  },

  createParamedic: async (ParamedicData) => {
    try {
      const response = await axios.post(API_URL, ParamedicData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du Paramedic:", error);
      throw error;
    }
  },
  createSimpleParamedic: async (ParamedicData) => {
    try {
      const response = await axios.post(`${API_URL}/createSimpleParamedic`, ParamedicData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du Paramedic:", error);
      throw error;
    }
  },
  updateParamedic: async (id, ParamedicData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, ParamedicData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du Paramedic:", error);
      throw error;
    }
  },

  deleteParamedic: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du Paramedic:", error);
      throw error;
    }
  },

  getParamedicByAmbulance: async (id) => {
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