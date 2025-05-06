import React, { useState, useEffect, useRef } from 'react';
import ParamedicService from 'services/ParamedicService';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function ParamedicChat() {
    const [paramedics, setParamedics] = useState([]);

    useEffect(() => {
            const fetchDoctors = async () => {
                try {
                    const data = await ParamedicService.getAllParamedics();
                    setParamedics(data);
                } catch (error) {
                    console.error('Failed to fetch Doctors', error);
                }
            };
            fetchDoctors();
        }, []);
    
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, sender: 'You' };
      setMessages([...messages, newMessage]);
      socket.emit('send_message', { message });
      setMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      const newMessage = { text: data.message, sender: 'Other' };
      setMessages((prev) => [...prev, newMessage]);
    });
    return () => socket.off('receive_message');
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f2f5',
      }}
    >
      {/* Sidebar utilisateurs */}
      <div
        style={{
          width: '250px',
          backgroundColor: '#fff',
          borderRight: '1px solid #ddd',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <h3 style={{ marginBottom: '20px', color: '#0d6efd' }}>👨‍⚕️ Paramedics</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
        {paramedics.map((paramedic, i) => {
            const fullName = `${paramedic.user?.firstName || ''} ${paramedic.user?.lastName || ''}`;
            return (
              <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#e9ecef',
                marginBottom: '10px',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: '#0d6efd',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                }}
              >
                {paramedic.user?.firstName?.[0] || 'D'}
              </div>
              <span>{fullName}</span>
            </li>
            );
            })}

        </ul>
      </div>

      {/* Zone de chat */}
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
        }}
      >
        <div
          style={{
            padding: '20px',
            borderBottom: '1px solid #ddd',
            backgroundColor: '#fff',
          }}
        >
          <h2 style={{ margin: 0 }}>💬 Chat Room</h2>
        </div>

        <div
          style={{
            padding: '20px',
            overflowY: 'auto',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f8f9fa',
          }}
        >
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

        <div
          style={{
            padding: '16px',
            backgroundColor: '#fff',
            borderTop: '1px solid #ddd',
            display: 'flex',
            gap: '10px',
          }}
        >
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

export default ParamedicChat;
