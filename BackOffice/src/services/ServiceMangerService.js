import axios from "axios";

const API_URL = "http://localhost:5000/serviceManager";

const ServiceManagerService = {
  // 📌 Récupérer tous les service managers
  getAllServiceManagers: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des service managers:", error);
      throw error;
    }
  },

  // 📌 Récupérer un service manager par ID
  getServiceManagerById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du service manager:", error);
      throw error;
    }
  },

  // 📌 Créer un nouveau service manager
  createServiceManager: async (serviceManagerData) => {
    try {
      const response = await axios.post(API_URL, serviceManagerData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du service manager:", error);
      throw error;
    }
  },

  // 📌 Mettre à jour un service manager
  updateServiceManager: async (id, serviceManagerData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, serviceManagerData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du service manager:", error);
      throw error;
    }
  },

  // 📌 Supprimer un service manager
  deleteServiceManager: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du service manager:", error);
      throw error;
    }
  },
};

export default ServiceManagerService;
