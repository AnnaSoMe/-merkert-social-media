import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export async function handler(event) {
  // Stripe Signatur prüfen
  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(
      event.body,
      event.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return { statusCode: 400, body: `Webhook Error: ${err.message}` };
  }

  if (stripeEvent.type !== 'checkout.session.completed') {
    return { statusCode: 200, body: 'Ignored' };
  }

  const session = stripeEvent.data.object;
  const orderId = session.metadata?.orderId;
  const email   = session.customer_details?.email;

  if (!orderId) {
    console.error('Kein orderId in session.metadata');
    return { statusCode: 200, body: 'No orderId' };
  }

  // Order als 'processing' markieren + E-Mail speichern
  const { error } = await supabase
    .from('orders')
    .update({
      stripe_session: session.id,
      email,
      status: 'processing',
    })
    .eq('id', orderId);

  if (error) {
    console.error('Order update fehlgeschlagen:', error);
    return { statusCode: 500, body: 'DB error' };
  }

  // Bildgenerierung asynchron anstoßen (Fire & Forget)
  const baseUrl = process.env.BASE_URL || 'https://merkertsocialmedia.com';
  fetch(`${baseUrl}/.netlify/functions/generate-image`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ orderId }),
  }).catch(err => console.error('generate-image call failed:', err));

  return { statusCode: 200, body: 'OK' };
}
