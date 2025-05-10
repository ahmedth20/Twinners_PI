import React, { useState, useEffect, useRef } from 'react';
import DoctorService from 'services/DoctorService';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Assure-toi que ton backend écoute ici

function DoctorsChat() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await DoctorService.getAllDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    // Reçoit les messages entrants
    socket.on('receive_message', (data) => {
      const newMessage = { text: data.message, sender: 'Other' };
      setMessages((prev) => [...prev, newMessage]);
    });
    return () => socket.off('receive_message');
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!selectedDoctor) {
      alert('Please select a doctor to send the message to.');
      return;
    }

    if (message.trim()) {
      const newMessage = { text: message, sender: 'You' };
      setMessages((prev) => [...prev, newMessage]);

      socket.emit('send_message', {
        message,
        to: selectedDoctor.id, // identifiant unique du doctor
      });

      setMessage('');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f2f5',
    }}>
      {/* Liste des médecins */}
      <div style={{
        width: '250px',
        backgroundColor: '#fff',
        borderRight: '1px solid #ddd',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <h3 style={{ marginBottom: '20px', color: '#0d6efd' }}>👨‍⚕️ Doctors</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {doctors.map((doctor, i) => {
            const fullName = `${doctor.user?.firstName || ''} ${doctor.user?.lastName || ''}`;
            return (
              <li
                key={doctor.id || i}
                onClick={() => setSelectedDoctor(doctor)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: selectedDoctor?.id === doctor.id ? '#cce5ff' : '#e9ecef',
                  marginBottom: '10px',
                  gap: '10px',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#0d6efd',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}>
                  {doctor.user?.firstName?.[0] || 'D'}
                </div>
                <span>{fullName}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Zone de chat */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #ddd', backgroundColor: '#fff' }}>
          <h2 style={{ margin: 0 }}>
            💬 Chat with: {selectedDoctor ? `${selectedDoctor.user?.firstName} ${selectedDoctor.user?.lastName}` : 'No one selected'}
          </h2>
        </div>

        <div style={{
          padding: '20px',
          overflowY: 'auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f8f9fa',
        }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'You' ? '#0d6efd' : '#e5e5ea',
                color: msg.sender === 'You' ? 'white' : 'black',
                padding: '10px 16px',
                borderRadius: '20px',
                marginBottom: '10px',
                maxWidth: '75%',
                wordWrap: 'break-word',
                fontSize: '15px',
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div style={{
          padding: '16px',
          backgroundColor: '#fff',
          borderTop: '1px solid #ddd',
          display: 'flex',
          gap: '10px',
        }}>
          <input
            type="text"
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              flexGrow: 1,
              padding: '12px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              fontSize: '15px',
            }}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button
            onClick={sendMessage}
            style={{
              backgroundColor: '#0d6efd',
              color: 'white',
              border: 'none',
              padding: '12px 18px',
              borderRadius: '20px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorsChat;
