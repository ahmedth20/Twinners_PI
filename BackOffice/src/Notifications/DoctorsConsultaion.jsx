import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSocket } from './SocketContext'; // Importer le hook pour accéder à la socket
import { useSnackbar } from 'notistack';

function ConsultationNotification() {
  const socket = useSocket();  // Récupérer la socket depuis le contexte
  const { enqueueSnackbar } = useSnackbar();  // Utiliser notistack pour afficher les notifications
  const [notification, setNotification] = useState(null);  // Initialiser notification avec null

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('send_notification', (consultationDataDetails) => {
      console.log('Notification reçue:', consultationDataDetails);
      setNotification(consultationDataDetails);

      // Utiliser notistack pour afficher la notification
      enqueueSnackbar(
        `Nouvelle consultation: Patient: ${consultationDataDetails.patient}, Durée: ${consultationDataDetails.duration} minutes`,
        { 
          variant: 'info',  // Choisir le type de notification (info, success, error, etc.)
          autoHideDuration: 10000,  // Disparition automatique après 10 secondes
        }
      );

      // Disparition de la notification après 10 secondes
      setTimeout(() => {
        setNotification(null);  // Réinitialiser l'état de notification après un délai
      }, 10000);
    });

    return () => {
      socket.off('send_notification');  // Nettoyage de l'événement lorsque le composant est démonté
    };
  }, [socket, enqueueSnackbar]);

  return (
    <div className="fixed top-5 right-5 z-50">
      {notification ? (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="bg-white shadow-lg border-l-4 border-green-500 p-4 rounded-lg w-80"
        >
          <h3 className="text-lg font-bold mb-2">🚀 Nouvelle Consultation</h3>
          <p><strong>👤 Patient:</strong> {notification.patient}</p>
          <p><strong>🏥 Emergency Room:</strong> {notification.emergencyRoom}</p>
          <p><strong>🕒 Duration:</strong> {notification.duration} minutes</p>
          <p><strong>📅 Date:</strong> {new Date(notification.date).toLocaleString()}</p>
        </motion.div>
      ) : null}
    </div>
  );
}

export default ConsultationNotification;
