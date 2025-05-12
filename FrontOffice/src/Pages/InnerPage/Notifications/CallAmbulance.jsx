import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000', {
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
});

const CallAmbulance = ({ ambulance, onResponse }) => {
  const [status, setStatus] = useState(localStorage.getItem('status') || '');
  const [waitingForResponse, setWaitingForResponse] = useState(localStorage.getItem('waitingForResponse') === 'true');
  const [isRequestAccepted, setIsRequestAccepted] = useState(localStorage.getItem('isRequestAccepted') === 'true');

  useEffect(() => {
    const handleResponse = (data) => {
      console.log("Réponse reçue :", data);

      setWaitingForResponse(false);
      setStatus(data.status);
      localStorage.setItem('status', data.status);
      localStorage.setItem('waitingForResponse', 'false');

      if (data.status === 'accepted') {
        setIsRequestAccepted(true);
        localStorage.setItem('isRequestAccepted', 'true');
      }

      if (onResponse) onResponse(data);
    };

    socket.on('ambulance_response_result', handleResponse);
    return () => socket.off('ambulance_response_result', handleResponse);
  }, [onResponse]);

  const callAmbulance = () => {
    setWaitingForResponse(true);
    setStatus('');

    const payload = {
      ambulanceId: ambulance._id,
      from: socket.id,
    };

    socket.emit('call_ambulance', payload);
    console.log("Demande envoyée :", payload);

    localStorage.setItem('ambulanceId', ambulance.reference);
    localStorage.setItem('waitingForResponse', 'true');
    localStorage.removeItem('status');
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={callAmbulance}
        disabled={waitingForResponse || isRequestAccepted}
        style={{
          padding: '10px 20px',
          backgroundColor: waitingForResponse || isRequestAccepted ? '#aaa' : '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          minWidth: '120px',
          cursor: waitingForResponse || isRequestAccepted ? 'not-allowed' : 'pointer'
        }}
        className="primary-btn"
      >
        {waitingForResponse
          ? 'Waiting for response...'
          : isRequestAccepted
          ? 'Already accepted'
          : 'Confirm'}
      </button>
    </div>
  );
};

export default CallAmbulance;




