import Stripe            from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe   = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY  // Service Key – NUR serverseitig!
);

// Bannerbear Template-IDs: Layoutbuchstabe → BB Template UID
// In Netlify env vars eintragen: BB_TEMPLATE_A, BB_TEMPLATE_B, …
const TEMPLATE_MAP = {
  A: process.env.BB_TEMPLATE_A,
  B: process.env.BB_TEMPLATE_B,
  C: process.env.BB_TEMPLATE_C,
  D: process.env.BB_TEMPLATE_D,
  E: process.env.BB_TEMPLATE_E,
  F: process.env.BB_TEMPLATE_F,
  G: process.env.BB_TEMPLATE_G,
};

async function triggerBannerbear(cfg, orderId) {
  const templateId = TEMPLATE_MAP[cfg.layoutId] || process.env.BB_TEMPLATE_A;

  const modifications = [
    { name: 'background_color', property: 'background', value: cfg.colors?.background },
    { name: 'accent_color',     property: 'color',      value: cfg.colors?.accent },
    { name: 'text_color',       property: 'color',      value: cfg.colors?.text },
  ];
  if (cfg.photoUrl) modifications.push({ name: 'photo', image_url: cfg.photoUrl });
  if (cfg.logoUrl)  modifications.push({ name: 'logo',  image_url: cfg.logoUrl  });

  const res = await fetch('https://api.bannerbear.com/v2/images', {
    method:  'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:  `Bearer ${process.env.BANNERBEAR_API_KEY}`,
    },
    body: JSON.stringify({
      template:      templateId,
      modifications,
      metadata:      orderId,  // kommt im Webhook zurück
      webhook_url:   `${process.env.BASE_URL}/.netlify/functions/bannerbear-webhook`,
    }),
  });

  const job = await res.json();
  return job.uid;
}

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

  const session  = stripeEvent.data.object;
  const orderId  = session.metadata?.orderId;
  const email    = session.customer_details?.email;

  if (!orderId) {
    console.error('Kein orderId in session.metadata');
    return { statusCode: 200, body: 'No orderId' };
  }

  // Order in Supabase als 'paid' markieren + E-Mail ergänzen
  const { data: order, error } = await supabase
    .from('orders')
    .update({
      stripe_session: session.id,
      customer_email: email,
      status:         'paid',
    })
    .eq('id', orderId)
    .select('design_config, customer_email')
    .single();

  if (error || !order) {
    console.error('Order nicht gefunden:', orderId, error);
    return { statusCode: 500, body: 'Order not found' };
  }

  // Einzelne oder mehrere Configs (Multi-Item-Warenkorb)
  const configs = Array.isArray(order.design_config)
    ? order.design_config
    : [order.design_config];

  const uids = [];
  for (const cfg of configs.filter(Boolean)) {
    try {
      const uid = await triggerBannerbear(cfg, orderId);
      uids.push(uid);
    } catch (err) {
      console.error('Bannerbear-Fehler für Config:', err);
    }
  }

  if (uids.length) {
    await supabase.from('orders')
      .update({ bannerbear_uid: uids.join(','), status: 'processing' })
      .eq('id', orderId);
  }

  return { statusCode: 200, body: 'OK' };
}
