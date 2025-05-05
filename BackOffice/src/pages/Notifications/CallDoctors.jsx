import React, { useState } from 'react';
import io from 'socket.io-client';



const CallDoctors = ({ doctor }) => {

 
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <button
        onClick={calldoctor}
        disabled={waitingForResponse}
        style={{
          padding: '10px 20px',
          backgroundColor: waitingForResponse ? '#aaa' : '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          color: '#fff',
          minWidth: '120px',
          cursor: waitingForResponse ? 'not-allowed' : 'pointer'
        }}
        className="primary-btn"
      >
        {waitingForResponse ? 'Demande envoyée...' : 'Confirmer'}
      </button>
    </div>
  );
};

export default CallDoctors;
