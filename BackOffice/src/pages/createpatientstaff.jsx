import React, { useState } from 'react';
import axios from 'axios';

const CreatePatientForm = () => {
  const [formData, setFormData] = useState({
    dateIssued: '',
    symptoms: '',
    emergencyLevel: 'low', // par défaut à "low"
    description: '',
    testResults: {
      chestXray: '',
      bloodTest: '',
      oxygenSaturation: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('testResults')) {
      setFormData(prevState => ({
        ...prevState,
        testResults: {
          ...prevState.testResults,
          [name]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/createSimplePatient1', formData);
      console.log('Réponse du serveur:', response.data);
      alert('Patient créé avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout du patient:', error);
      alert('Erreur lors de l\'ajout du patient');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date d\'émission :</label>
        <input
          type="date"
          name="dateIssued"
          value={formData.dateIssued}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Symptômes :</label>
        <input
          type="text"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Niveau d'urgence :</label>
        <select
          name="emergencyLevel"
          value={formData.emergencyLevel}
          onChange={handleChange}
          required
        >
          <option value="low">Faible</option>
          <option value="moderate">Modéré</option>
          <option value="critical">Critique</option>
        </select>
      </div>
      <div>
        <label>Description :</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Résultats des tests - Radio thoracique :</label>
        <input
          type="text"
          name="testResults.chestXray"
          value={formData.testResults.chestXray}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Résultats des tests - Analyse de sang :</label>
        <input
          type="text"
          name="testResults.bloodTest"
          value={formData.testResults.bloodTest}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Résultats des tests - Saturation en oxygène :</label>
        <input
          type="text"
          name="testResults.oxygenSaturation"
          value={formData.testResults.oxygenSaturation}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Créer le patient</button>
    </form>
  );
};

export default CreatePatientForm;
