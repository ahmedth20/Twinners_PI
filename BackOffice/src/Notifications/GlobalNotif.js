import React, { useEffect } from 'react';
import { useSocket } from './SocketContext';
import { useSnackbar } from 'notistack';

const GlobalNotifications = () => {
  const socket = useSocket();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (socket) {
      socket.on('ambulance_request', (data) => {
        const message = `Un patient a demandé une ambulance avec l'ID ${data.ambulanceId}`;
        
        // Afficher une notification
        enqueueSnackbar(message, { variant: 'info' });

        // Sauvegarder la notification dans localStorage pour la persistance
        localStorage.setItem('lastAmbulanceNotification', JSON.stringify({
          message,
          from: data.from
        }));
      });

       socket.on('send_notification', (consultationDataDetails) => {
        const message = `Nouvelle consultation: Patient: ${consultationDataDetails.patient}, Durée: ${consultationDataDetails.duration} minutes`;
        
        // Sauvegarder la notification de consultation dans localStorage
        localStorage.setItem('lastConsultationNotification', JSON.stringify({
          message,
          details: consultationDataDetails,
        }));

        // Afficher la notification de consultation
        enqueueSnackbar(message, { variant: 'info' });
      });
    }

    // Cleanup à la destruction du composant
    return () => {
      if (socket) {
        socket.off('ambulance_request');  // Désabonner l'écouteur d'événements ambulance_request
        socket.off('send_notification');  // Désabonner l'écouteur d'événements send_notification
      } };
  }, [socket, enqueueSnackbar]);

  return null;  // Ce composant ne retourne rien à afficher mais gère les notifications
};

export default GlobalNotifications;
