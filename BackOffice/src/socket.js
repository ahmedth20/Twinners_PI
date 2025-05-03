// src/socket.js
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';  // Assurez-vous d'avoir 'react-toastify' installé

// Remplacez par l'URL de votre serveur backend si nécessaire
const socket = io('http://localhost:3000', { withCredentials: true });

// Écouter l'événement 'new_patient_file' et afficher une notification
socket.on('new_patient_file', (data) => {
    console.log('Notification reçue:', data);
    toast.success(`Nouveau dossier patient : ${data.message}`);
});

export default socket;