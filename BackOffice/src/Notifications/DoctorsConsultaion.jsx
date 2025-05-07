import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { motion } from 'framer-motion';

const socket = io('http://localhost:5000');

function ConsultationNotification() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('send_notification', (consultationDataDetails) => {
      console.log('Notification reçue:', consultationDataDetails);
      setNotification(consultationDataDetails);

      // Disparition de la notification après 10 secondes
      setTimeout(() => {
        setNotification(null);
      }, 10000);
    });

    return () => {
      socket.off('send_notification');
    };
  }, []);

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

