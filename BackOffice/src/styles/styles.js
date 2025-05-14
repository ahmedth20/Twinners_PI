const styles = {
    wrapper: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      padding: '40px 0',
      fontFamily: 'Roboto, sans-serif',
    },
    container: {
      width: '98%',
      maxWidth: '1800px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '2rem',
      color: '#333',
      fontWeight: '600',
    },
    createButton: {
      padding: '12px 20px',
      backgroundColor: '#2c3e50',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      maxWidth: '800px',
      marginBottom: '30px',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: '250px',
      width: '100%',
    },
    iconButton: {
      background: 'none',
      border: 'none',
      color: '#555',
      cursor: 'pointer',
      fontSize: '1.2rem',
      marginLeft: '0.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      padding: '12px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ddd',
      transition: 'border 0.3s',
    },
    submitButton: {
      gridColumn: '1 / -1',
      padding: '12px',
      backgroundColor: '#2c3e50',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
    // Nouvelle section pour le tableau
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '30px',
    },
    tableHeader: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      fontSize: '1rem',
      textAlign: 'left',
      padding: '10px',
    },
    tableRow: {
      transition: 'background-color 0.3s',
    },
    tableCell: {
      padding: '12px 16px',
      textAlign: 'left',
      fontSize: '1rem',
      borderBottom: '1px solid #ddd',
    },
    tableRowAlt: {
      backgroundColor: '#f4f4f4', // ligne alternative
    },
    inUseCell: {
      backgroundColor: '#f8d7da', // Couleur rouge pâle pour "En usage"
      color: '#721c24',
    },
    availableCell: {
      backgroundColor: '#d4edda', // Couleur verte pour "Disponible"
      color: '#155724',
    },
    maintenanceCell: {
      backgroundColor: '#fff3cd', // Jaune pâle pour "Maintenance"
      color: '#856404',
    },
    actionsCell: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    editButton: {
      backgroundColor: '#888',
      color: '#fff',
      border: 'none',
      padding: '6px 12px',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginBottom: '20px',
      fontWeight: 'bold',
    },
     badgeBase : {
  display: 'inline-block',
  padding: '4px 10px',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '0.85rem',
  border: '2px solid',
  backgroundColor: 'transparent',
  textAlign: 'center'
},

 badgeColors : {
  green: {
    color: '#28a745',
    borderColor: '#28a745'
  },
  orange: {
    color: '#fd7e14',
    borderColor: '#fd7e14'
  },
  red: {
    color: '#dc3545',
    borderColor: '#dc3545'
  }
},
  };
  
  export default styles;
  