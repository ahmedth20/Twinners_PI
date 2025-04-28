import React, { useEffect, useState } from 'react';
import PatientService from 'services/ServiceMangerService';

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
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    minWidth: '400px',
  },
  closeButton: {
    float: 'right',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    border: 'none',
    background: 'none',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  submitButton: {
    width: '100%',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ParamedicList = () => {
  console.log("sss")
  const [paramedics, setParamedics] = useState([]);
  const [selectedParamedic, setSelectedParamedic] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    badgeNumber: '',
    departement: '',
  });

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await PatientService.getAllServiceManagers();
        setParamedics(data);
      } catch (error) {
        console.error('Failed to fetch patients', error);
      }
    };
    fetchPatients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await PatientService.deleteServiceManager(id);
      setParamedics((prev) => prev.filter((p) => p._id !== id));
      window.location.reload();
    } catch (error) {
      console.error('Erreur lors de la suppression', error);
    }
  };

  const handleEditClick = (paramedic) => {
    setSelectedParamedic(paramedic);
    setFormData({
      firstName: paramedic.user?.firstName || '',
      lastName: paramedic.user?.lastName || '',
      email: paramedic.user?.email || '',
      badgeNumber: paramedic.badgeNumber || '',
      departement: paramedic.departement || '',
    });
    setIsModalOpen(true);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await PatientService.updateServiceManager(selectedParamedic._id, formData);
     /* setParamedics((prev) =>
        prev.map((p) =>
          p._id === selectedParamedic._id ? { ...p, ...formData, user: { ...p.user, ...formData } } : p
        )
      );*/
        setTimeout(() => {
          setIsModalOpen(false);
          window.location.reload()
        },  500);
      
    } catch (error) {
      console.error('Erreur lors de la mise à jour', error);
    }
  };

  return (
    <div style={styles.paramedicListContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Nom</th>
            <th style={styles.th}>Prénom</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Badge Number</th>
            <th style={styles.th}>Département</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paramedics.length > 0 ? (
            paramedics.map((paramedic, index) => (
              <tr key={paramedic._id} style={index % 2 === 0 ? styles.evenRow : {}}>
                <td style={styles.td}>{paramedic.user?.firstName || 'Inconnu'}</td>
                <td style={styles.td}>{paramedic.user?.lastName || 'Inconnu'}</td>
                <td style={styles.td}>{paramedic.user?.email || 'Inconnu'}</td>
                <td style={styles.td}>{paramedic.badgeNumber}</td>
                <td style={styles.td}>{paramedic.departement}</td>
                <td style={styles.td}>
                  <button
                    style={{ ...styles.button, ...styles.editButton }}
                    onClick={() => handleEditClick(paramedic)}
                  >
                    Modifier
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onClick={() => handleDelete(paramedic._id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={styles.td}>Aucun paramédic trouvé</td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button style={styles.closeButton} onClick={() => setIsModalOpen(false)}>✖</button>
            <h2>Modifier le Service Manager</h2>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Prénom"
                style={styles.input}
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Nom"
                style={styles.input}
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                style={styles.input}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <button type="submit" style={styles.submitButton}>Mettre à jour</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParamedicList;
