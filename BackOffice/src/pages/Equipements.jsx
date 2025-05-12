import React, { useEffect, useState } from 'react';
import RessourceService from '../services/Equipements';
import { useSelector } from 'react-redux';
import { jwtDecode } from "jwt-decode";
import styles from "../styles/styles"; // Importer les styles
import { FaEdit, FaTrash, FaExclamationTriangle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import io from 'socket.io-client';

const Ressources = () => {
  const token = useSelector(state => state.auth.user.token);
  const decoded = jwtDecode(token);

  const [ressources, setRessources] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    quantity: '',
    usage: {
      inUse: '',
      available: '',
      maintenance: ''
    },
    serviceManager: decoded.userId || ''
  });

  const [error, setError] = useState('');
  const [socket, setSocket] = useState(null);

  // Initialiser la connexion socket une seule fois
  useEffect(() => {
    const newSocket = io('http://localhost:5000'); // Remplacez par votre URL de serveur
    setSocket(newSocket);

    // Nettoyage lors du démontage du composant
    return () => {
      if (newSocket) newSocket.disconnect();
    };
  }, []);
const [lowStorageWarning, setLowStorageWarning] = useState(null);

useEffect(() => {
  if (!socket) return;

  // Écoute de l'événement "low-storage" émis toutes les 5 secondes
  socket.on('low-storage', (data) => {
    console.log("⚠️ Notification de stockage bas : ", data);
    setLowStorageWarning(`⚠️ Stockage bas : ${data.name} (${data.available} unités restantes)`);
  });

  // Écoute de l'événement "low-stock" émis lors d'un changement direct dans MongoDB
  socket.on('low-stock', (data) => {
    console.log("⚠️ Notification de stock bas détectée : ", data);
    setLowStorageWarning(`⚠️ Stockage bas : ${data.name} (${data.quantity} unités restantes)`);
  });

  return () => {
    socket.off('low-storage');
    socket.off('low-stock');
  };
}, [socket]);


  // Écouter les événements de stock bas
  useEffect(() => {
    if (!socket) return;

    socket.on('low-stock', (data) => {
      // Notification avec react-toastify
      toast.warning(
        <div>
          <FaExclamationTriangle style={{ marginRight: '8px' }} />
          Stock bas: {data.name} ({data.quantity} unités disponibles)
        </div>, 
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        }
      );
      
      // Mettre à jour la liste des ressources si celle concernée est présente
      fetchRessources();
    });

    return () => {
      socket.off('low-stock');
    };
  }, [socket]);

  useEffect(() => {
    fetchRessources();
  }, []);

  const fetchRessources = async () => {
    try {
      const data = await RessourceService.getAllResources();
      setRessources(data);
    } catch (err) {
      setError('Erreur lors du chargement des ressources.');
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    // Convertir les champs en nombre uniquement au moment de l'envoi
    const dataToSubmit = {
      ...formData,
      quantity: formData.quantity ? parseInt(formData.quantity) : 0,
      usage: {
        inUse: formData.usage.inUse ? parseInt(formData.usage.inUse) : 0,
        available: formData.usage.available ? parseInt(formData.usage.available) : 0,
        maintenance: formData.usage.maintenance ? parseInt(formData.usage.maintenance) : 0
      }
    };

    if (
      !formData.name || !formData.type || formData.quantity === "" ||
      !formData.usage || formData.usage.inUse === "" ||
      formData.usage.available === "" || formData.usage.maintenance === "" ||
      !formData.serviceManager
    ) {
      setError("Tous les champs doivent être remplis");
      return;
    }

    try {
      if (isEditing) {
        await RessourceService.updateResource(editId, dataToSubmit);
      } else {
        await RessourceService.createResource(dataToSubmit);
      }

      setFormData({
        name: '',
        type: '',
        quantity: '',
        usage: { inUse: '', available: '', maintenance: '' },
        serviceManager: decoded.userId || ''
      });

      setIsEditing(false);
      setEditId(null);
      setError('');
      fetchRessources();
      setShowForm(false); // Fermer le formulaire après la création ou modification
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la création/mise à jour.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await RessourceService.deleteResource(id);
      fetchRessources();
    } catch (err) {
      setError('Erreur lors de la suppression.');
    }
  };

  const handleEdit = (resource) => {
    setFormData({
      name: resource.name,
      type: resource.type,
      quantity: resource.quantity,
      usage: {
        inUse: resource.usage.inUse,
        available: resource.usage.available,
        maintenance: resource.usage.maintenance
      },
      serviceManager: decoded.userId || ''
    });
    setEditId(resource._id);
    setIsEditing(true);
    setShowForm(true); // Afficher le formulaire en mode édition
  };

  // Style pour les ressources avec stock bas
  const getLowStockStyle = (quantity) => {
    return quantity < 10 ? { ...styles.tableCell, color: 'red', fontWeight: 'bold' } : styles.tableCell;
  };

  return (
    <div style={styles.container}>
      {/* Conteneur pour les notifications */}
      <ToastContainer />
         {lowStorageWarning && (
  <div style={{
    backgroundColor: '#ffcccc',
    color: '#b30000',
    padding: '10px',
    marginTop: '15px',
    borderRadius: '5px',
    fontWeight: 'bold'
  }}>
    {lowStorageWarning}
  </div>
)}
      <div style={styles.header}>
        <h2 style={styles.title}>Gestion des Ressources</h2>
        <button onClick={() => {
          setShowForm(!showForm);
          setFormData({
            name: '',
            type: '',
            quantity: '',
            usage: { inUse: '', available: '', maintenance: '' },
            serviceManager: decoded.userId || ''
          });
          setIsEditing(false);
          setEditId(null);
        }} style={styles.createButton}>
          {showForm ? "Annuler" : "Créer une ressource"}
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      {showForm && (
        <form onSubmit={handleCreate} style={styles.form}>
          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="text"
              placeholder="Type"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="number"
              placeholder="Quantité"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="number"
              placeholder="En usage"
              value={formData.usage.inUse}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  usage: { ...formData.usage, inUse: e.target.value }
                })
              }
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="number"
              placeholder="Disponible"
              value={formData.usage.available}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  usage: { ...formData.usage, available: e.target.value }
                })
              }
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <input
              type="number"
              placeholder="Maintenance"
              value={formData.usage.maintenance}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  usage: { ...formData.usage, maintenance: e.target.value }
                })
              }
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            {isEditing ? 'Mettre à jour' : 'Créer'}
          </button>
        </form>
      )}

      <h3>Liste des Ressources</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Nom</th>
            <th style={styles.tableHeader}>Type</th>
            <th style={styles.tableHeader}>Quantité</th>
            <th style={styles.tableHeader}>En Usage</th>
            <th style={styles.tableHeader}>Disponible</th>
            <th style={styles.tableHeader}>Maintenance</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ressources.map((res) => (
            <tr key={res._id} style={styles.tableRow}>
              <td style={styles.tableCell}>{res.name}</td>
              <td style={styles.tableCell}>{res.type}</td>
              <td style={getLowStockStyle(res.quantity)}>
                {res.quantity} 
                {res.quantity < 10 && (
                  <FaExclamationTriangle 
                    color="orange" 
                    style={{ marginLeft: '5px' }} 
                    title="Stock bas!" 
                  />
                )}
              </td>
              <td style={styles.tableCell}>{res.usage.inUse}</td>
              <td style={styles.tableCell}>{res.usage.available}</td>
              <td style={styles.tableCell}>{res.usage.maintenance}</td>
              <td style={styles.tableCell}>
                <button onClick={() => handleEdit(res)} style={styles.iconButton}>
                  <FaEdit />
                </button>
                <button onClick={() => handleDelete(res._id)} style={styles.iconButton}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   

    </div>
  );
};

export default Ressources;