import React, { useEffect, useState } from 'react';
import ParamedicService from 'services/ParamedicService';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';

const socket = io('http://localhost:5000', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000
});

const ParamedicResponseAmbulance = () => {
  const [notification, setNotification] = useState('');
  const [patientSocketId, setPatientSocketId] = useState('');
  const [isAssigned, setIsAssigned] = useState(false);
  const [history, setHistory] = useState([]);
  const user = useSelector(state => state.auth.user.user.id);
  const [paramedics, setParamedics] = useState([]);

  // Charger l'historique depuis localStorage au démarrage
  useEffect(() => {
    const storedHistory = localStorage.getItem('ambulanceHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Sauvegarder dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem('ambulanceHistory', JSON.stringify(history));
  }, [history]);

  // Charger la notification depuis localStorage au démarrage de la page
  useEffect(() => {
    const savedNotification = localStorage.getItem('lastAmbulanceNotification');
    if (savedNotification) {
      const { message, from } = JSON.parse(savedNotification);
      setNotification(message);
      setPatientSocketId(from);
    }
  }, []);  // Ce useEffect s'exécute uniquement une fois au montage du composant.

  useEffect(() => {
    const fetchParamedics = async () => {
      try {
        const ambulanceId = localStorage.getItem('ambulanceId');
        const data = await ParamedicService.getParamedicByAmbulance(ambulanceId);
        setParamedics(data);
        const assigned = data.some(paramedic => paramedic.user._id === user);
        setIsAssigned(assigned);
      } catch (error) {
        console.error('Erreur paramedics', error);
      }
    };
    if (user) fetchParamedics();
  }, [user]);

  useEffect(() => {
    socket.on('ambulance_request', (data) => {
      const message = `Un patient a demandé une ambulance avec l'ID ${data.ambulanceId}`;
      setNotification(message);
      setPatientSocketId(data.from);
  
      // ✅ Sauvegarde de la notification dans localStorage
      localStorage.setItem('lastAmbulanceNotification', JSON.stringify({
        message,
        from: data.from
      }));
  
      // ✅ Ajouter au tableau d'historique
      setHistory(prev => [
        ...prev,
        {
          id: Date.now(),
          ambulanceId: data.ambulanceId,
          status: 'received',
          timestamp: new Date().toLocaleString()
        }
      ]);
    });
  
    return () => {
      socket.off('ambulance_request');
    };
  }, []);
  

  const respondToRequest = (status) => {
    if (!patientSocketId) return;

    socket.emit('ambulance_response', {
      to: patientSocketId,
      status,
    });

    setNotification('Réponse envoyée');

    // Mettre à jour le dernier statut dans l'historique
    setHistory(prev => {
      const updated = [...prev];
      const last = updated[updated.length - 1];
      if (last) last.status = status;
      return updated;
    });
  };

  const resetHistory = () => {
    setHistory([]);
    localStorage.removeItem('ambulanceHistory');
  };

  useEffect(() => {
    if (notification === 'Réponse envoyée') {
      localStorage.removeItem('lastAmbulanceNotification');
    }
  }, [notification]);

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
              style={{
                padding: '10px 20px', width: '48%', backgroundColor: '#4CAF50', color: 'white',
                border: 'none', borderRadius: '5px'
              }}
            >
              Accepter
            </button>
            <button
              onClick={() => respondToRequest('refused')}
              style={{
                padding: '10px 20px', width: '48%', backgroundColor: '#f44336', color: 'white',
                border: 'none', borderRadius: '5px'
              }}
            >
              Refuser
            </button>
          </div>
        </div>
      ) : (
        <p>En attente de demandes...</p>
      )}

      {history.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h3>Historique des demandes</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Date</th>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Ambulance ID</th>
                <th style={{ padding: '8px', border: '1px solid #ccc' }}>Statut</th>
              </tr>
            </thead>
            <tbody>
              {history.map(item => (
                <tr key={item.id}>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{item.timestamp}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc' }}>{item.ambulanceId}</td>
                  <td style={{ padding: '8px', border: '1px solid #ccc', textTransform: 'capitalize' }}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={resetHistory}
            style={{ marginTop: '10px', backgroundColor: '#999', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '5px' }}
          >
            Réinitialiser l'historique
          </button>
        </div>
      )}
    </div>
  );
};

export default ParamedicResponseAmbulance;

/* 


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



































import React, { useState, useEffect } from 'react';
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