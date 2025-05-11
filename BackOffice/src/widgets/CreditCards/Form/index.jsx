import React, { useState } from 'react';
import { CardElement, useElements, useStripe, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PatternFormat } from 'react-number-format';
import { Container, Title } from './style';
import Grow from '@mui/material/Grow';
import Collapse from '@mui/material/Collapse';
import { useDispatch } from 'react-redux';
import { addCard } from 'store/features/cards';

const stripePromise = loadStripe('pk_test_51RNHOxQfFMfIjADYY215WlgmXKTIxFmFgawQMnqlMe6EkAbI0dM8CcZvQcL2DMHPOUnliH7e0cxjZHlKB9i2T0jm000WHYqlzN');

const PaymentForm = ({ isVisible, handler }) => {
  const initialState = {
    title: 'Nom du client',
    number: '',
    expiration: '',
    cvv: '',
    amount: 0
  };

  const [state, setState] = useState(initialState);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const handleReset = () => {
    setState(initialState);
    handler(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    // 1. Récupération du clientSecret via le backend
    const res = await fetch('http://localhost:5000/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: state.amount * 100 }), // Montant en centimes
    });

    const { clientSecret } = await res.json();

    // 2. Confirmer le paiement avec Stripe
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: state.title,
        },
      },
    });

    // 3. Traiter le résultat
    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Paiement réussi !');
        dispatch(addCard(state)); // Déclenche l'action si nécessaire
      }
    }

    handleReset();
  };

  return (
    <Collapse in={isVisible}>
      <Grow in={isVisible}>
        <Container as="form" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="header_wrapper">
            <Title>
              <label htmlFor="title">
                <i className="icon icon-pen"></i>
              </label>
              <input
                className="h3"
                type="text"
                id="title"
                value={state.title}
                onChange={e => setState({ ...state, title: e.target.value })}
              />
            </Title>
            <div className="header_wrapper-btns">
              <button type="reset">
                <i className="icon icon-ban-regular" />
              </button>
              <button type="submit">
                <i className="icon icon-check"></i>
              </button>
            </div>
          </div>

          <div className="inputs_wrapper">
            {/* Utilisation de PatternFormat pour la gestion de la carte et autres champs */}
            <div className="block block--number">
              <label htmlFor="number">Numéro de carte</label>
              <PatternFormat
                id="number"
                placeholder="0000 0000 0000 0000"
                format="#### #### #### ####"
                value={state.number}
                onChange={(e) => setState({ ...state, number: e.target.value })}
              />
            </div>

            <div className="block">
              <label htmlFor="expiration">Expiration</label>
              <PatternFormat
                id="expiration"
                placeholder="MM/YY"
                format="##/##"
                value={state.expiration}
                onChange={(e) => setState({ ...state, expiration: e.target.value })}
              />
            </div>

            <div className="block">
              <label htmlFor="cvv">CVV</label>
              <PatternFormat
                format={'###'}
                id="cvv"
                placeholder="000"
                value={state.cvv}
                onChange={(e) => setState({ ...state, cvv: e.target.value })}
              />
            </div>

            {/* Intégration de CardElement de Stripe */}
            <div className="block">
              <label htmlFor="cardElement">Informations de carte</label>
              <CardElement />
            </div>
          </div>
        </Container>
      </Grow>
    </Collapse>
  );
};

const PaymentPage = ({ isVisible, handler }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm isVisible={isVisible} handler={handler} />
    </Elements>
  );
};

export default PaymentPage;
