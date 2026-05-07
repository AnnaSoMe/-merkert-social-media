const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, successUrl, cancelUrl } = JSON.parse(event.body);

    const lineItems = items.map(item => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.title,
          description: [
            item.design ? `Design: ${item.design}` : null,
            item.format ? `Format: ${item.format}` : null,
            item.palette ? `Farbe: ${item.palette}` : null,
          ].filter(Boolean).join(' · '),
        },
        unit_amount: Math.round(item.grossPrice * 100), // Cent, incl. MwSt
        tax_behavior: 'inclusive',
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal', 'klarna', 'sepa_debit'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl + '?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl,
      billing_address_collection: 'required',
      locale: 'de',
      payment_intent_data: {
        description: 'Merkert Social Media – personalisierte Posts',
      },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('Stripe error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
