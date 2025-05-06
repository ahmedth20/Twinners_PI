import React, { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  paramedicListContainer: {
    padding: '20px',
    backgroundColor: '#f4f7f6',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    padding: '12px 20px',
    textAlign: 'left',
    backgroundColor: '#2196F3',
    color: 'white',
    fontWeight: 'bold',
  },
  td: {
    padding: '12px 20px',
    textAlign: 'left',
  },
  evenRow: {
    backgroundColor: '#f2f2f2',
  },
  hoverRow: {
    backgroundColor: '#ddd',
    cursor: 'pointer',
  },
  loading: {
    color: 'red',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  button: {
    padding: '8px 16px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  editButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    color: 'white',
  },
  form: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  input: {
    padding: '8px',
    margin: '10px 0',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
};

const ParamedicList = () => {
  const [paramedics, setParamedics] = useState([]);
  const [filteredParamedics, setFilteredParamedics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const [search] = useState('');
 const [filterFunction] = useState('');
  const [newParamedic, setNewParamedic] = useState({
    function: '',
    ambulance: '',
    patientsFile: '',
    user: '',
  });
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    fetchParamedics();
  }, []);

  useEffect(() => {
    let filtered = paramedics;

    if (search) {
      filtered = paramedics.filter((p) =>
        JSON.stringify(p).toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterFunction) {
      filtered = filtered.filter((p) => p.function?.toLowerCase() === filterFunction.toLowerCase());
    }

    setFilteredParamedics(filtered);
  }, [search, filterFunction, paramedics]);

  const fetchParamedics = async () => {
    try {
      const response = await fetch('http://localhost:5000/paramedics/paramedics');
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const data = await response.json();
      setParamedics(data);
      setFilteredParamedics(data);
    } catch (err) {
      setError(err.message);
      console.error('Erreur fetch:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParamedic((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddParamedic = async () => {
    const { function: functionValue, ambulance, patientsFile, user } = newParamedic;

    const newParamedicData = {
      function: functionValue,
      ambulance: ambulance,
      patientsFile: patientsFile.split(',').map((file) => file.trim()), 
      user: user,
    };

    try {
      const response = await axios.post('http://localhost:5000/paramedics/paramedics', newParamedicData);
      console.log('Paramedic créé:', response.data);
      setParamedics((prev) => [...prev, response.data]);
      setNewParamedic({
        function: '',
        ambulance: '',
        patientsFile: [],
        user: '',
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du paramédic:', error.response?.data || error.message);
    }
  };


  const handleEdit = async (paramedicId) => {
    const paramedicToEdit = paramedics.find(p => p._id === paramedicId);
  
    if (paramedicToEdit) {
      setNewParamedic({
        _id: paramedicToEdit._id,
        function: paramedicToEdit.function,
        ambulance: paramedicToEdit.ambulance,
        patientsFile: paramedicToEdit.patientsFile.join(', '), // Assurez-vous que patientsFile soit une chaîne
        user: paramedicToEdit.user,
      });
      setShowAddForm(true);  // Affiche le formulaire d'édition
    }
  };
  
  const handleUpdateParamedic = async () => {
    const { _id, function: functionValue, ambulance, patientsFile, user } = newParamedic;
  
    const updatedParamedicData = {
      function: functionValue,
      ambulance: ambulance,
      patientsFile: patientsFile.split(',').map((file) => file.trim()), 
      user: user,
    };
  
    try {
      const response = await axios.put(`http://localhost:5000/paramedics/paramedics/${_id}`, updatedParamedicData);
      console.log('Paramedic mis à jour:', response.data);
  
      // Mettre à jour l'état local avec le paramédic mis à jour
      setParamedics((prev) =>
        prev.map((paramedic) => (paramedic._id === _id ? response.data : paramedic))
      );
  
      // Réinitialiser le formulaire
      setShowAddForm(false);
      setNewParamedic({
        function: '',
        ambulance: '',
        patientsFile: [],
        user: '',
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du paramédic:', error.response?.data || error.message);
    }
  };
  
  
  
  

  const handleDelete = (id) => {
    console.log('Supprimer paramédic avec ID:', id);
    fetch(`http://localhost:5000/paramedics/paramedics/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        setParamedics(paramedics.filter((paramedic) => paramedic._id !== id));
      })
      .catch((err) => {
        setError('Erreur lors de la suppression');
        console.error('Erreur delete:', err);
      });
  };

  const handleActivate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/paramedics/paramedics/${id}`, {
        isActive: true
      });
      console.log('Paramedic activated:', response.data);
  
      // Mettre à jour l'état local pour refléter l'activation immédiatement
      setParamedics((prevParamedics) =>
        prevParamedics.map((paramedic) =>
          paramedic._id === id ? { ...paramedic, isActive: true } : paramedic
        )
      );
    } catch (error) {
      console.error('Erreur activation paramédic:', error.message);
    }
  };
  
  const handleDeactivate = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5000/paramedics/paramedics/${id}`, {
        isActive: false
      });
      console.log('Paramedic deactivated:', response.data);
  
      // Mettre à jour l'état local pour refléter la désactivation immédiatement
      setParamedics((prevParamedics) =>
        prevParamedics.map((paramedic) =>
          paramedic._id === id ? { ...paramedic, isActive: false } : paramedic
        )
      );
    } catch (error) {
      console.error('Erreur désactivation paramédic:', error.message);
    }
  };
  
  
  
  

  if (loading) return <div style={styles.loading}>Chargement...</div>;
  if (error) return <div style={styles.error}>Erreur: {error}</div>;



// Formulaire d'édition
return (
  <div style={styles.paramedicListContainer}>
    <h2 style={styles.title}>Liste des Paramédics</h2>

    <button
      style={{ ...styles.button, backgroundColor: '#2196F3' }}
      onClick={() => setShowAddForm(!showAddForm)}
    >
      {showAddForm ? 'Annuler' : 'Ajouter un paramédic'}
    </button>

    {showAddForm && (
      <div style={styles.form}>
        <h3>{newParamedic._id ? 'Modifier un paramédic' : 'Ajouter un paramédic'}</h3>
        <input
          style={styles.input}
          type="text"
          name="function"
          value={newParamedic.function}
          onChange={handleInputChange}
          placeholder="Fonction"
        />
        <input
          style={styles.input}
          type="text"
          name="ambulance"
          value={newParamedic.ambulance}
          onChange={handleInputChange}
          placeholder="Ambulance ID"
        />
        <input
          style={styles.input}
          type="text"
          name="patientsFile"
          value={newParamedic.patientsFile}
          onChange={handleInputChange}
          placeholder="Fichiers des patients (séparés par des virgules)"
        />
        <input
          style={styles.input}
          type="text"
          name="user"
          value={newParamedic.user}
          onChange={handleInputChange}
          placeholder="Utilisateur ID"
        />
        <button
          style={{ ...styles.button, backgroundColor: '#2196F3' }}
          onClick={newParamedic._id ? handleUpdateParamedic : handleAddParamedic}
        >
          {newParamedic._id ? 'Mettre à jour' : 'Ajouter Paramédic'}
        </button>
      </div>
    )}

    {/* Affichage de la liste des paramédics */}
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Nom</th>
          <th style={styles.th}>Service</th>
          <th style={styles.th}>Fonction</th>
          <th style={styles.th}>Actif</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredParamedics.length > 0 ? (
          filteredParamedics.map((paramedic, index) => (
            <tr key={paramedic._id} style={{ ...styles.td, ...(index % 2 === 0 ? styles.evenRow : {}) }}>
              <td style={styles.td}>
                {paramedic.user ? `${paramedic.user.firstName} ${paramedic.user.lastName}` : 'Inconnu'}
              </td>
              <td style={styles.td}>{paramedic.serviceParamedic}</td>
              <td style={styles.td}>{paramedic.function}</td>
              <td style={styles.td}>{paramedic.isActive ? 'Oui' : 'Non'}</td>
              <td style={styles.td}>
                <button
                  style={{ ...styles.button, ...styles.editButton,backgroundColor: '#808080' }}
                  onClick={() => handleEdit(paramedic._id)}
                >
                  Modifier
                </button>
                <button
                  style={{ ...styles.button, ...styles.deleteButton }}
                  onClick={() => handleDelete(paramedic._id)}
                >
                  Supprimer
                </button>
                {!paramedic.isActive ? (
                  <button
                    style={{ ...styles.button, backgroundColor: '#D3D3D3' }}
                    onClick={() => handleActivate(paramedic._id)}
                  >
                    Activer
                  </button>
                ) : (
                  <button
                    style={{ ...styles.button, backgroundColor: '#D3D3D3 ' }}
                    onClick={() => handleDeactivate(paramedic._id)}
                  >
                    Désactiver
                  </button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" style={styles.td}>Aucun paramédic trouvé</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>)
};

export default ParamedicList;
