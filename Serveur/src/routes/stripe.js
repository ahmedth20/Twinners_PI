// backend/routes/stripe.js
const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51RNHOxQfFMfIjADYfssLirIsSvaCGJohvpvhGtTriiFkcG0py6zgovBmyA0HNWeDge2zYRE9tU0LnmdvuVHK7eo500He7PFcRe'); // ta clé secrète Stripe

router.get('/transactions1', async (req, res) => {
  try {
    const paymentIntents = await stripe.paymentIntents.list({ limit: 10 });

    const results = await Promise.all(
      paymentIntents.data.map(async (pi) => {
        // Vérifier si le payment_method existe
        if (!pi.payment_method) {
          return {
            id: pi.id,
            nom: 'Inconnu',
            amount: pi.amount / 100,
            currency: pi.currency,
            status: pi.status,
            created: new Date(pi.created * 1000).toLocaleString(),
          };
        }

        // Si payment_method existe, récupérer les informations
        const paymentMethod = await stripe.paymentMethods.retrieve(pi.payment_method);

        return {
          id: pi.id,
          nom: paymentMethod?.billing_details?.name || 'Inconnu',
          amount: pi.amount / 100,
          currency: pi.currency,
          status: pi.status,
          created: new Date(pi.created * 1000).toLocaleString(),
        };
      })
    );

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la récupération des transactions' });
  }
});




module.exports = router;
