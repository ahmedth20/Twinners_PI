import axios from "axios";

const API_URL = "http://localhost:5000/doctors";

const DoctorService = {
  getAllDoctors: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des médecins:", error);
      throw error;
    }
  },

  getDoctorById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du médecin:", error);
      throw error;
    }
  },

  createDoctor: async (doctorData) => {
    try {
      const response = await axios.post(API_URL, doctorData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du médecin:", error);
      throw error;
    }
  },

  createSimpleDoctor: async (doctorData) => {
    try {
      const response = await axios.post(`${API_URL}/createSimpleDoctor`, doctorData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du médecin:", error);
      throw error;
    }
  },

  updateDoctor: async (id, doctorData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, doctorData);
      console.log("Response from update:", response.data); // Ajoutez cette ligne
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du médecin:", error);
      throw error;
    }
  },

  deleteDoctor: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du médecin:", error);
      throw error;
    }
  },
};

export default DoctorService;
