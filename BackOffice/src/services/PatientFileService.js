import axios from "axios";

const API_URL = "http://localhost:5000/patientFiles";  

const PatientFileService = {
  // Récupérer tous les patientFiles
  getAllPatientFiles: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des patientFiles:", error);
      throw error;
    }
  },

  // Récupérer un patientFile par ID
  getPatientFileById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération du patientFile:", error);
      throw error;
    }
  },

  // Récupérer les informations d'un patientFile par ID
  getPatientFileInfoById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/details/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des détails du patientFile:", error);
      throw error;
    }
  },

  // Créer un nouveau patientFile
  createPatientFile: async (patientFileData) => {
    try {
      console.log("Création du patientFile avec les données:", patientFileData);  // Ajout d'un log pour vérifier les données envoyées
      const response = await axios.post(`${API_URL}`, patientFileData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du patientFile:", error);
      throw error;
    }
  },

  // Créer un patientFile simple
  createSimplePatientFile: async (patientFileData) => {
    try {
      console.log("Création simple du patientFile avec les données:", patientFileData);  // Ajout d'un log pour vérifier les données envoyées
      const response = await axios.post(`${API_URL}/add`, patientFileData);  // S'assurer que l'URL est correcte
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la création du patientFile simple:", error);
      throw error;
    }
  },

  // Mettre à jour un patientFile
  updatePatientFile: async (id, patientFileData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, patientFileData);
      return response.data;
    } catch (error) {
      console.error("Erreur lors de la mise à jour du patientFile:", error);
      throw error;
    }
  },

  // Supprimer un patientFile
  deletePatientFile: async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      console.error("Erreur lors de la suppression du patientFile:", error);
      throw error;
    }
  },

  // Changer le statut d'un patientFile (si applicable)
  togglePatientFileStatus: async (id) => {
    try {
      console.log("ID envoyé à l'API:", id);
      const response = await axios.put(`${API_URL}/toggle-status/${id}`, {}, { withCredentials: true });
      return response;
    } catch (error) {
      console.error("Erreur lors de la désactivation / activation du patientFile:", error);
      throw error;
    }
  },

  // Récupérer tous les médecins associés aux patientFiles
  getAllDoctors: async () => {
    try {
      const response = await axios.get(`${API_URL}/listDoctors`);
      return response.data;
    } catch (error) {
      console.error("Erreur lors du chargement des médecins:", error);
      throw error;
    }
  },
};

export default PatientFileService;
