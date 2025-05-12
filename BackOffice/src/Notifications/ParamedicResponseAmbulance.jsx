import React, { useEffect, useState } from 'react';
import ParamedicService from 'services/ParamedicService';
import { useSelector } from 'react-redux';
import { useSocket } from './SocketContext'; 
import { useSnackbar } from 'notistack';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'; // Pour gérer les marqueurs
import 'leaflet/dist/leaflet.css'; // Le style de Leaflet

const ParamedicResponseAmbulance = () => {
  const socket = useSocket();  
  const { enqueueSnackbar } = useSnackbar();  
  const [notification, setNotification] = useState('');
  const [patientSocketId, setPatientSocketId] = useState('');
  const [isAssigned, setIsAssigned] = useState(false);
  const [history, setHistory] = useState([]);
  const user = useSelector(state => state.auth.user.user.id);
  const [paramedics, setParamedics] = useState([]);
  const [patientLocation, setPatientLocation] = useState(null);  // Coordonnées du patient pour la carte

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
    const savedNotification = localStorage.getItem('lastAmbulanceNotification');
    if (savedNotification) {
      const { message, from } = JSON.parse(savedNotification);
      setNotification(message);
      setPatientSocketId(from);
      // Simuler une localisation du patient (ex: vous pouvez récupérer cela via une API)
      setPatientLocation([51.505, -0.09]); // Remplacez par la position réelle du patient
    }
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('ambulance_request', (data) => {
        const message = `Un patient a demandé une ambulance avec l'ID ${data.ambulanceId}`;
        
        enqueueSnackbar(message, { variant: 'info' });
        localStorage.setItem('lastAmbulanceNotification', JSON.stringify({ message, from: data.from }));
      });
    }
  }, [socket, enqueueSnackbar]);

  const respondToRequest = (status) => {
    if (!patientSocketId) return;

    socket.emit('ambulance_response', {
      to: patientSocketId,
      status,
    });

    setNotification(`Réponse envoyée: ${status}`);
    setHistory(prev => {
      const updatedHistory = [...prev];
      const last = updatedHistory[updatedHistory.length - 1];
      if (last) {
        last.status = status;
        last.timestamp = new Date().toLocaleString();
      }
      return updatedHistory;
    });

    setPatientSocketId('');
    localStorage.removeItem('lastAmbulanceNotification');
  };

  const resetHistory = () => {
    setHistory([]);
    localStorage.removeItem('ambulanceHistory');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>Interface Paramedic</h2>

        {notification ? (
          <div
            style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '8px',
              width: '350px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h3 style={{ marginBottom: '15px' }}>{notification}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <button
                onClick={() => respondToRequest('accepted')}
                style={{
                  padding: '10px 20px',
                  width: '48%',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                }}
              >
                Accepter
              </button>
              <button
                onClick={() => respondToRequest('refused')}
                style={{
                  padding: '10px 20px',
                  width: '48%',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
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
                {history.map((item) => (
                  <tr key={item.id}>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{item.timestamp}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc' }}>{item.ambulanceId}</td>
                    <td style={{ padding: '8px', border: '1px solid #ccc', textTransform: 'capitalize' }}>
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={resetHistory}
              style={{
                marginTop: '10px',
                backgroundColor: '#999',
                color: 'white',
                padding: '8px 12px',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Réinitialiser l'historique
            </button>
          </div>
        )}
      </div>

      {/* Carte Leaflet */}
      <div style={{ flex: 1, height: '800px' }}>
        {patientLocation && (
          <MapContainer center={patientLocation} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={patientLocation}>
              <Popup>Patient ici</Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default ParamedicResponseAmbulance;
