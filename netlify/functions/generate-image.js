import sharp from 'sharp';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);
const resend = new Resend(process.env.RESEND_API_KEY);

// Positionen aller Elemente pro Design (1080×1350px)
// cx/cy = Mittelpunkt des Kreises, r = Radius
const DESIGNS = {
  'strukturiert-1': {
    bg: 'strukturiert-1.png',
    circle:   { cx: 840,  cy: 1055, r: 135 },
    hook:     { x: 58,  y: 145, maxW: 680, size: 82, weight: '700', align: 'start',  color: '#1a1a1a' },
    subtitle: { x: 58,  y: 330, maxW: 660, size: 44, weight: '400', align: 'start',  color: '#333333' },
  },
  'strukturiert-2': {
    bg: 'strukturiert-2.png',
    circle:   { cx: 860,  cy: 278,  r: 125 },
    hook:     { x: 55,  y: 730, maxW: 650, size: 82, weight: '700', align: 'start',  color: '#1a1a1a' },
    subtitle: { x: 55,  y: 920, maxW: 580, size: 44, weight: '400', align: 'start',  color: '#333333' },
  },
  'strukturiert-3': {
    bg: 'strukturiert-3.png',
    circle:   { cx: 295,  cy: 278,  r: 125 },
    hook:     { x: 75,  y: 730, maxW: 580, size: 82, weight: '700', align: 'start',  color: '#1a1a1a' },
    subtitle: { x: 75,  y: 920, maxW: 550, size: 44, weight: '400', align: 'start',  color: '#333333' },
  },
  'strukturiert-4': {
    bg: 'strukturiert-4.png',
    circle:   { cx: 540,  cy: 368,  r: 135 },
    hook:     { x: 540, y: 660, maxW: 900, size: 82, weight: '700', align: 'middle', color: '#1a1a1a' },
    subtitle: { x: 540, y: 865, maxW: 860, size: 44, weight: '400', align: 'middle', color: '#333333' },
  },
};

function wrapLines(text, maxWidth, fontSize) {
  const avgCharWidth = fontSize * 0.52;
  const maxChars = Math.floor(maxWidth / avgCharWidth);
  const words = text.split(' ');
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= maxChars) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function textSvg(cfg, text, W, H) {
  if (!text) return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"/>`);
  const lines      = wrapLines(text, cfg.maxW, cfg.size);
  const lineHeight = cfg.size * 1.3;
  const tspans     = lines.map((l, i) =>
    `<tspan x="${cfg.x}" dy="${i === 0 ? 0 : lineHeight}">${esc(l)}</tspan>`
  ).join('');
  return Buffer.from(
    `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <text x="${cfg.x}" y="${cfg.y}"
        font-family="Arial,Helvetica,sans-serif"
        font-size="${cfg.size}" font-weight="${cfg.weight}"
        fill="${cfg.color}" text-anchor="${cfg.align}">${tspans}</text>
    </svg>`
  );
}

async function circlePhoto(url, diameter) {
  const r   = diameter / 2;
  const mask = Buffer.from(
    `<svg width="${diameter}" height="${diameter}">
      <circle cx="${r}" cy="${r}" r="${r}" fill="white"/>
    </svg>`
  );
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Foto konnte nicht geladen werden: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return sharp(buf)
    .resize(diameter, diameter, { fit: 'cover', position: 'centre' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

export async function handler(event) {
  const { orderId } = JSON.parse(event.body || '{}');
  if (!orderId) return { statusCode: 400, body: 'Missing orderId' };

  // Order laden
  const { data: order, error: fetchErr } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single();

  if (fetchErr || !order) return { statusCode: 404, body: 'Order not found' };

  try {
    const cfg = order.design_config || {};
    const design = DESIGNS[cfg.design_id] || DESIGNS['strukturiert-1'];
    const bgPath = path.join(__dirname, '../../assets/designs', design.bg);

    // Bild-Metadaten
    const meta = await sharp(bgPath).metadata();
    const W    = meta.width  || 1080;
    const H    = meta.height || 1350;

    // Kreisfoto erstellen
    const diameter   = design.circle.r * 2;
    const photoLayer = await circlePhoto(cfg.photo_url, diameter);
    const circleLeft = Math.round(design.circle.cx - design.circle.r);
    const circleTop  = Math.round(design.circle.cy - design.circle.r);

    // Text-Layer
    const hookBuf     = textSvg(design.hook,     cfg.hook     || '', W, H);
    const subtitleBuf = textSvg(design.subtitle, cfg.subtitle || '', W, H);

    // Alles zusammensetzen
    const output = await sharp(bgPath)
      .composite([
        { input: photoLayer,  left: circleLeft, top: circleTop },
        { input: hookBuf,     top: 0, left: 0 },
        { input: subtitleBuf, top: 0, left: 0 },
      ])
      .png()
      .toBuffer();

    // In Supabase Storage hochladen
    const fileName = `orders/${orderId}/post.png`;
    const { error: uploadErr } = await supabase.storage
      .from('uploads')
      .upload(fileName, output, { contentType: 'image/png', upsert: true });

    if (uploadErr) throw new Error('Storage upload: ' + uploadErr.message);

    const { data: { publicUrl } } = supabase.storage
      .from('uploads')
      .getPublicUrl(fileName);

    // Order aktualisieren
    await supabase.from('orders').update({
      status:       'ready',
      download_url: publicUrl,
    }).eq('id', orderId);

    // E-Mail an Kunden
    const toEmail = order.customer_email;
    if (toEmail) {
      await resend.emails.send({
        from: 'Merkert Social Media <anna@merkertsocialmedia.de>',
        to:   toEmail,
        subject: '✅ Dein personalisierter Post ist fertig!',
        html: `
          <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;
                      color:#2C2420;padding:2rem">
            <h2 style="color:#C67B5A;font-weight:normal">Dein Post ist fertig! 🎉</h2>
            <p style="font-family:sans-serif;font-size:15px;line-height:1.7">
              Hier kannst du ihn herunterladen:
            </p>
            <a href="${publicUrl}" download
               style="display:inline-block;background:#C67B5A;color:white;
                      padding:14px 32px;border-radius:4px;font-family:sans-serif;
                      text-decoration:none;font-weight:600;margin:1rem 0">
              Post herunterladen ↓
            </a>
            ${cfg.caption ? `
            <div style="margin-top:1.5rem;padding:1rem;background:#f8f4ef;
                        border-radius:8px;font-family:sans-serif;font-size:14px;
                        line-height:1.7;color:#5C4433">
              <strong>Dein Caption-Text:</strong><br><br>
              ${cfg.caption.replace(/\n/g,'<br>')}
            </div>` : ''}
            <p style="font-family:sans-serif;font-size:12px;color:#9B8B7E;
                      margin-top:2rem;border-top:1px solid #E8DDD0;padding-top:1rem">
              Bei Fragen: anna@merkertsocialmedia.de · Merkert Social Media
            </p>
          </div>
        `,
      });
    }

    return { statusCode: 200, body: JSON.stringify({ url: publicUrl }) };

  } catch (err) {
    console.error('generate-image Fehler:', err);
    await supabase.from('orders')
      .update({ status: 'error' })
      .eq('id', orderId);
    return { statusCode: 500, body: err.message };
  }
}
