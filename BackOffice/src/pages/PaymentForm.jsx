import React, { useState ,useEffect} from 'react';
import { CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js';


import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from '../styles/styleP';

const stripePromise = loadStripe('pk_test_51RNHOxQfFMfIjADYY215WlgmXKTIxFmFgawQMnqlMe6EkAbI0dM8CcZvQcL2DMHPOUnliH7e0cxjZHlKB9i2T0jm000WHYqlzN');

function PaymentForm() {
  const [amount, setAmount] = useState(0);
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cin, setCin] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  useEffect(() => {
    toast.info("🧪 Ceci est un message de test affiché à l'ouverture de la page");
  }, []);

const handlePayment = async () => {
  if (!stripe || !elements) return;

  const res = await fetch('http://localhost:5000/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: amount * 100,
      clientName,
      phoneNumber,
      cin,
    }),
  });

  const { clientSecret } = await res.json();

  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement),
      billing_details: {
        name: clientName,
        phone: phoneNumber,
      },
    },
  });

  if (result.error) {
    toast.error(`Erreur : ${result.error.message}`);
  } else if (result.paymentIntent.status === 'succeeded') {
    toast.success(`✅ Paiement réussi de ${amount} DT pour ${clientName}`, {
      onClose: () => navigate('/TransactionList'), // Redirection après la fermeture du toast
      autoClose: 3000,
    });
  }
};


  return (
    <div style={styles.wrapper}>
      <ToastContainer  position="bottom-right" autoClose={3000} />
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Formulaire de Paiement</h1>
        </div>
        <div style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nom du client</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Entrez votre nom"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Numéro de téléphone</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Entrez votre numéro"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>CIN</label>
            <input
              type="text"
              value={cin}
              onChange={(e) => setCin(e.target.value)}
              placeholder="Entrez votre CIN"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Montant</label>
            <div style={styles.inputWrapper}>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Entrez le montant"
                style={styles.input}
              />
              <span style={styles.currency}>DT</span>
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Informations de carte</label>
            <div style={styles.cardElement}>
              <CardElement />
            </div>
          </div>

          <button
            onClick={handlePayment}
            style={styles.submitButton}
            disabled={!stripe || !amount || !clientName || !phoneNumber || !cin}
          >
            Payer
          </button>
        </div>
      </div>
    </div>
  );
}

function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>

      <PaymentForm />
    </Elements>
  );
}

export default PaymentPage;
