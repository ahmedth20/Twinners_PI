import React, { useState } from 'react';
import axios from 'axios';

const EmergencyChatbot = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    try {
      // Envoi uniquement la question au backend
      const res = await axios.post('http://localhost:5000/api/qa/ask', {
        question,
      });
      setAnswer(res.data.answer); // Affiche la réponse de l'IA
    } catch (error) {
      setAnswer("❌ Erreur lors de l'appel à l'API.");
    }
    setLoading(false);
  };

  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '25px',
      borderRadius: '12px',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      backgroundColor: '#ffffff',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: '#2c3e50'
      }}>
        💬 Urgence IA Médicale
      </h2>

      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>Votre question :</label>
      <textarea
        placeholder="Décrivez votre problème ou symptôme ici..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={3}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '6px',
          border: '1px solid #ccc',
        }}
      />

      <button
        onClick={handleAsk}
        disabled={loading}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? '⏳ En cours...' : '📤 Envoyer la question'}
      </button>

      {answer && (
        <div style={{
          marginTop: '25px',
          padding: '15px',
          borderRadius: '8px',
          backgroundColor: '#ecf0f1',
          border: '1px solid #ccc',
        }}>
          <strong>🧠 Réponse de l'IA :</strong>
          <p style={{ marginTop: '10px', lineHeight: '1.5' }}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default EmergencyChatbot;
