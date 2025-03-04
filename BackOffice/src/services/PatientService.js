import axios from "axios";

const API_URL = "http://localhost:5000/patient";

const PatientService = {
 getAllPatients: async () => {
    try {
        const response = await axios.get(API_URL);
         return response.data;
    } catch (error) {
          console.error("Erreur lors du chargement des patients:", error);
          throw error;
    }
  },

  getPatientById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du patient:", error);
      throw error;
    }
  },

  createPatient: async (patientData) => {
    try {
      const response = await axios.post(API_URL, patientData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du patient:", error);
      throw error;
    }
  },

  updatePatient: async (id, patientData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, patientData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du patient:", error);
      throw error;
    }
  },

  deletePatient: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du patient:", error);
      throw error;
    }
  },
};

export default PatientService;