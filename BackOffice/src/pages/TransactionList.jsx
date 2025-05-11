import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const tableStyles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    position: 'relative',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  th: {
    backgroundColor: '#f0f0f0',
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '12px',
    borderBottom: '1px solid #eee',
    color: '#333',
  },
  trEven: {
    backgroundColor: '#fdfdfd',
  },
  trOdd: {
    backgroundColor: '#f7f7f7',
  },
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/stripe/transactions')
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.error(err));
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('fr-FR');
  };

  const formatAmount = (amount) => `${(amount / 100).toFixed(2)} DT`;

  return (
    <div style={tableStyles.container}>
      <h2 style={tableStyles.title}>Liste des Transactions Stripe</h2>

      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Nom</th>
            <th style={tableStyles.th}>Téléphone</th>
            <th style={tableStyles.th}>CIN</th>
            <th style={tableStyles.th}>Montant</th>

            <th style={tableStyles.th}>Statut</th>
            <th style={tableStyles.th}>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={tx.id} style={index % 2 === 0 ? tableStyles.trEven : tableStyles.trOdd}>
              <td style={tableStyles.td}>{tx.nom || '—'}</td>
              <td style={tableStyles.td}>{tx.phoneNumber || '—'}</td>
              <td style={tableStyles.td}>{tx.cin || '—'}</td>
              <td style={tableStyles.td}>{formatAmount(tx.amount)}</td>

              <td style={tableStyles.td}>{tx.status}</td>
              <td style={tableStyles.td}>{formatDate(tx.created)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Bouton en bas à droite */}
      <div style={tableStyles.buttonContainer}>
        <button
          style={tableStyles.button}
          onClick={() => navigate('/PaymentPage')}
        >
          Add transactions
        </button>
      </div>
    </div>
  );
};

export default TransactionList;
