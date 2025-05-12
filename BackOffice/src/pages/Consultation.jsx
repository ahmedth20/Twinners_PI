import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import styles from "../styles/styles";
import { useNavigate } from 'react-router-dom';
const Consultation = () => {
  const userId = useSelector(state => state.auth.user.user.id);
  const [consultations, setConsultations] = useState([]);
  const [error, setError] = useState(null);
const [patients, setPatients] = useState({});
const [medical, setMedical] = useState({});


const navigate = useNavigate();

  useEffect(() => {
    const fetchConsultations = async () => {
      try {
        // Étape 1: Récupérer le médecin par l'utilisateur
        const doctorResponse = await axios.get(`http://localhost:5000/doctors/getByUser/${userId}`);
       const doctorId = doctorResponse.data[0]._id;

        // Étape 2: Récupérer les consultations de ce médecin
        const consultationsResponse = await axios.get(`http://localhost:5000/consultation/ByDoctorConnecter/${doctorId}`);
        console.log("**********************consultation*****************");
       
        setConsultations(consultationsResponse.data);
        console.log(consultationsResponse.data);
        const patientId=consultationsResponse.data[0].patient.user;
      
        console.log(consultationsResponse.data[0].patient.user)

        const responseUser = await axios.get(`http://localhost:5000/users/getprofile/${patientId}`);
        console.log("**********************profile*****************");
        console.log(responseUser.data);
 
      setPatients(responseUser.data);
        console.log("**********************DATAAA*****************");
        console.log(consultationsResponse.data[0].patient._id);

       /* const responsePatient = await axios.get(`http://localhost:5000/patient/details/${consultationsResponse.data[0].patient.user._id}`);
        console.log("**********************DATAAA*****************");
        console.log(responsePatient.data);
        setMedical(responsePatient.data);*/
      
      } catch (err) {
       console.log("Erreur lors de la récupération des consultations.");
      }
    };

    fetchConsultations();
  }, [userId]);

const handleRowClick = (patientId) => {
    if (patientId) {
      navigate(`/medical_form_update/${patientId}`, { state: { patientData: medical } });
      
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Mes Consultations</h2>
      </div>

      {error && <p style={styles.error}>{error}</p>}

      <h3>Liste des Consultations</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Patient</th>
            <th style={styles.tableHeader}>Type</th>
            <th style={styles.tableHeader}>Date</th>
            <th style={styles.tableHeader}>Heure</th>
          </tr>
        </thead>
        <tbody>
          {consultations.map((consultation) => (
            <tr key={consultation._id} style={styles.tableRow}  onClick={() => handleRowClick(consultation.patient._id)}>
              <td style={styles.tableCell}>
               {patients ? `${patients.firstName} ${patients.lastName}` : "Chargement..."}
               </td>
           <td
                style={{
                    ...styles.tableCell,
                    color: consultation.status === "Planned"
                    ? "orange"
                    : consultation.status === "Ongoing"
                    ? "blue"
                    : consultation.status === "Completed"
                    ? "green"
                    : "red",
                    fontWeight: "bold",
                }}
>
  {consultation.status}
           </td>

              <td style={styles.tableCell}>{new Date(consultation.date).toLocaleDateString()}</td>
              <td style={styles.tableCell}>{new Date(consultation.date).toLocaleTimeString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Consultation;
