import { createClient } from '@supabase/supabase-js';
import { Resend }       from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  try {
    const payload = JSON.parse(event.body);

    // Bannerbear sendet 'completed' wenn das Bild fertig ist
    if (payload.status !== 'completed' || !payload.image_url) {
      return { statusCode: 200, body: 'Not ready yet' };
    }

    const orderId     = payload.metadata;  // wurde in stripe-webhook.js gesetzt
    const downloadUrl = payload.image_url;

    if (!orderId) {
      console.error('Kein orderId in Bannerbear metadata');
      return { statusCode: 200, body: 'No orderId' };
    }

    // Aktuelle Order laden um bisherige Download-URLs zu ergänzen
    const { data: current } = await supabase
      .from('orders')
      .select('customer_email, download_url, design_config')
      .eq('id', orderId)
      .single();

    if (!current) return { statusCode: 200, body: 'Order not found' };

    // Mehrere Bilder pro Order (Multi-Item) → URLs sammeln
    const existingUrls = current.download_url
      ? current.download_url.split('\n').filter(Boolean)
      : [];
    existingUrls.push(downloadUrl);

    const configs = Array.isArray(current.design_config)
      ? current.design_config
      : [current.design_config];
    const allDone = existingUrls.length >= configs.filter(Boolean).length;

    await supabase.from('orders').update({
      download_url: existingUrls.join('\n'),
      status:       allDone ? 'ready' : 'processing',
    }).eq('id', orderId);

    // E-Mail erst senden wenn ALLE Bilder fertig sind
    if (allDone && current.customer_email) {
      const linksHtml = existingUrls
        .map((url, i) => `
          <p style="margin:0.75rem 0">
            <a href="${url}"
               style="background:#C67B5A;color:#fff;padding:12px 24px;
                      border-radius:6px;text-decoration:none;font-weight:bold;
                      display:inline-block">
              ${existingUrls.length > 1 ? `Post ${i + 1} ` : ''}herunterladen →
            </a>
          </p>`)
        .join('');

      await resend.emails.send({
        from:    'Anna Merkert <anna@merkertsocialmedia.de>',
        to:      current.customer_email,
        subject: 'Dein Social-Media-Post ist fertig! 🎉',
        html: `
          <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;
                      color:#2C2420;padding:2rem">
            <h1 style="color:#C67B5A;font-size:1.5rem;font-weight:normal">
              Dein Post ist fertig!
            </h1>
            <p style="font-family:sans-serif;font-size:15px;line-height:1.7;
                      color:#5C4433">
              Vielen Dank für deine Bestellung bei Merkert Social Media.<br>
              Dein personalisierter Social-Media-Post steht zum Download bereit:
            </p>
            ${linksHtml}
            <p style="font-family:sans-serif;font-size:12px;color:#9B8B7E;
                      margin-top:2rem;border-top:1px solid #E8DDD0;padding-top:1rem">
              Der Link ist 7 Tage gültig.<br>
              Bei Fragen einfach antworten oder schreib an anna@merkertsocialmedia.de
            </p>
          </div>`,
      });
    }

    return { statusCode: 200, body: 'Done' };
  } catch (err) {
    console.error('Bannerbear-Webhook-Fehler:', err);
    return { statusCode: 500, body: err.message };
  }
}
