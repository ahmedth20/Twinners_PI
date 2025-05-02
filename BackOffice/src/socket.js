// socket.js
import io from 'socket.io-client';
import { toast } from 'react-toastify';  // Assure-toi d'installer 'react-toastify' si tu veux afficher des notifications

// Remplace par l'URL de ton serveur backend si nécessaire
const socket = io('http://localhost:3000', { withCredentials: true });

// Écouter l'événement 'new_patient_file' et afficher une notification
socket.on('new_patient_file', (data) => {
  console.log('Notification reçue:', data);  // Pour vérifier que tu reçois bien l'événement
  toast.success(`Nouveau dossier patient : ${data.message}`);
});

export default socket;
