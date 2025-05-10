import axios from 'axios';

const API_URL = 'http://localhost:5000/ressources';

// ✅ Créer une ressource
const createResource = async (resource) => {
  try {
    const response = await axios.post(API_URL, resource);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la création de la ressource :', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Récupérer toutes les ressources
const getAllResources = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des ressources :', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Récupérer une ressource par ID
const getResourceById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de la ressource :', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Mettre à jour une ressource
const updateResource = async (id, updatedResource) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedResource);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la ressource :', error.response?.data || error.message);
    throw error;
  }
};

// ✅ Supprimer une ressource
const deleteResource = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression de la ressource :', error.response?.data || error.message);
    throw error;
  }
};

export default {
  createResource,
  getAllResources,
  getResourceById,
  updateResource,
  deleteResource,
};
