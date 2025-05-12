import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSocket } from './SocketContext'; 
import { useSnackbar } from 'notistack';

function ConsultationNotification() {
  const socket = useSocket();
  const { enqueueSnackbar } = useSnackbar();
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    // ➡️ Vérifier que le socket est bien défini avant de l'utiliser
    if (!socket) {
      console.warn("Socket is not initialized yet");
      return;
    }

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('send_notification', (consultationDataDetails) => {
      console.log('Notification reçue:', consultationDataDetails);
      setNotification(consultationDataDetails);

      enqueueSnackbar(
        `Nouvelle consultation: Patient: ${consultationDataDetails.patient}, Durée: ${consultationDataDetails.duration} minutes`,
        { 
          variant: 'info',
          autoHideDuration: 10000,
        }
      );

      setTimeout(() => {
        setNotification(null);
      }, 10000);
    });

    return () => {
      socket.off('send_notification');
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
