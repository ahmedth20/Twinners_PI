import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function DoctorsConsultaion() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // Assurez-vous que le socket est bien connecté
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  
    // Écoute l'événement 'send_notification' envoyé depuis le côté Appointment
    socket.on('send_notification', (consultationData) => {
      console.log('Notification reçue:', consultationData);  // Vérifiez ici
      setNotification(consultationData);  // Met à jour l'état avec les données de la consultation
    });
  
    // Nettoyage de l'écouteur lors du démontage du composant
    return () => {
      socket.off('send_notification');
    };
  }, []);
   // Dépendance vide pour écouter une seule fois

  return (
    <div>
      <h2>Consultation Notification</h2>
      {notification ? (
        <div>
          <h3>Nouvelle Consultation</h3>
          <p><strong>Patient:</strong> {notification.patient}</p>
          <p><strong>Médecin:</strong> {notification.doctor}</p>
          <p><strong>Salle d'urgence:</strong> {notification.emergencyRoom}</p>
          <p><strong>Durée:</strong> {notification.duration} minutes</p>
          <p><strong>Date:</strong> {new Date(notification.date).toLocaleString()}</p>
        </div>
      ) : (
        <p>Aucune nouvelle consultation.</p>
      )}
    </div>
  );
}

export default DoctorsConsultaion;
