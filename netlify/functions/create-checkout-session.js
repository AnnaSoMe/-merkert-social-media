import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { items, orderId, email } = JSON.parse(event.body);

    const lineItems = items.map(item => ({
      price_data: {
        currency:     'eur',
        product_data: { name: item.name },
        unit_amount:  Math.round(item.price * 100), // Cent, inkl. MwSt.
        tax_behavior: 'inclusive',
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal', 'klarna', 'sepa_debit'],
      line_items:           lineItems,
      mode:                 'payment',
      locale:               'de',
      customer_email:       email || undefined,
      billing_address_collection: 'required',
      success_url: `${process.env.BASE_URL}/success.html?order_id=${orderId}`,
      cancel_url:  `${process.env.BASE_URL}/#shop`,
      metadata: { orderId },
      payment_intent_data: {
        description: 'Merkert Social Media – personalisierte Posts',
        metadata:    { orderId },
      },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('Checkout error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
}
