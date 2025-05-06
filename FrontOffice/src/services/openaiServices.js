import axios from "axios";

const API_URL = "http://localhost:5000/api/llm-specialty/getSpeciality";

const openaiService = {
 
    getSpeciality: async (patientData) => {
    try {
      const response = await axios.post(API_URL,patientData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du médecin:", error);
      throw error;
    }
  },

  

  
  
};

export default openaiService;
