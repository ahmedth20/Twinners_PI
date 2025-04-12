import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  reconnection: true,       // Réconnexion automatique en cas de déconnexion
  reconnectionAttempts: 5,   // Nombre d'essais de reconnexion
  reconnectionDelay: 1000,   // Délai avant chaque tentative de reconnexion
  reconnectionDelayMax: 5000 // Délai maximal entre les tentatives
});


const ParamedicResponseAmbulance = () => {
  const [notification, setNotification] = useState('');
  const [patientSocketId, setPatientSocketId] = useState('');

  useEffect(() => {
    // Écoute de la demande d'ambulance
    socket.on('ambulance_request', (data) => {
      console.log('Demande d\'ambulance reçue du patient:', data);
      setNotification(`Un patient a demandé une ambulance avec l'ID ${data.ambulanceId}`);
      setPatientSocketId(data.from); // Sauvegarder l'ID du patient
    });

    return () => {
      socket.off('ambulance_request');
    };
  }, []);

  const respondToRequest = (status) => {
    if (!patientSocketId) return; // Vérifie que l'ID du patient existe
    
    socket.emit('ambulance_response', {
      to: patientSocketId, // ID du patient
      status,
    });

    setNotification('Réponse envoyée');
  };

  return (
    <div>
      <h2>Interface Paramedic</h2>
      {notification ? (
       <div style={{
        backgroundColor: 'white', padding: '30px', borderRadius: '8px', width: '350px',
        textAlign: 'center', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <h3 style={{ marginBottom: '15px' }}>{notification}</h3>
      
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <button 
          onClick={() => respondToRequest('accepted')}
            className='primary-btn' 
            style={{
              padding: '10px 20px', width: '48%', backgroundColor: '#ccc', border: 'none', borderRadius: '5px',
              textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
          >
          Accepter
          </button>
          <button
            onClick={() => respondToRequest('refused')}
            className='primary-btn' 
            style={{
              padding: '10px 20px', width: '48%', backgroundColor: '#ccc', border: 'none', borderRadius: '5px',
              textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
          >
          Refuser
          </button>
        </div>
</div>
      ) : (
        <p>En attente de demandes...</p>
      )}
    </div>
  );
};

export default ParamedicResponseAmbulance;





/* import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const  ParamedicResponseAmbulance = () => {
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');
  const sendMessage = () => {
    socket.emit('send_message', { message });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setReceivedMessage(data.message);
    });
  }, []);


  useEffect(() => {
    socket.on('ambulance_request', (data) => {
      console.log('Demande ambulance reçue du patient:', data);
      const confirm = window.confirm('Un patient a demandé une ambulance. Accepter ?');
      const status = confirm ? 'accepted' : 'refused';
      socket.emit('ambulance_response', {
        to: data.from, 
        status,
      });
    });
  }, []);
  

  return (
    <div className="App">
      <h2>Frontend App 1</h2>
      <input
        type="text"
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p>Received: {receivedMessage}</p>
    </div>
  );
};

export default  ParamedicResponseAmbulance;
*/