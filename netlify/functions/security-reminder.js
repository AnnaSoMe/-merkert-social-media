import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Läuft automatisch alle 90 Tage (Cron: 0 9 1 */3 *)
// = jeden 1. des Monats um 9 Uhr, alle 3 Monate
export const config = {
  schedule: '0 9 1 */3 *'
};

export async function handler() {
  await resend.emails.send({
    from: 'Merkert Social Media System <anna@merkertsocialmedia.de>',
    to:   'a.merkert58@googlemail.com',
    subject: '🔐 Sicherheits-Erinnerung: Supabase Key rotieren',
    html: `
      <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;color:#2C2420;padding:2rem">
        <h2 style="color:#C67B5A;font-weight:normal">🔐 Zeit den Supabase Key zu rotieren</h2>
        <p style="font-family:sans-serif;font-size:15px;line-height:1.7;color:#5C4433">
          Alle 90 Tage solltest du deinen Supabase Service Key erneuern. Das dauert nur 2 Minuten:
        </p>
        <ol style="font-family:sans-serif;font-size:14px;line-height:2;color:#5C4433">
          <li>
            <a href="https://supabase.com/dashboard/project/yxhmyoyavozfmvhnzfcf/settings/api"
               style="color:#C67B5A">Supabase → Settings → API</a>
            → Service role → <strong>Rotate key</strong>
          </li>
          <li>
            <a href="https://app.netlify.com/projects/lively-eclair-324454/configuration/env"
               style="color:#C67B5A">Netlify → Environment variables</a>
            → <strong>SUPABASE_SERVICE_KEY</strong> ersetzen
          </li>
          <li>Deine Zugänge-Datei aktualisieren</li>
        </ol>
        <p style="font-family:sans-serif;font-size:12px;color:#9B8B7E;margin-top:2rem;
                  border-top:1px solid #E8DDD0;padding-top:1rem">
          Diese E-Mail wird automatisch alle 90 Tage verschickt.<br>
          Merkert Social Media · Automatisches Sicherheitssystem
        </p>
      </div>
    `
  });

  return { statusCode: 200, body: 'Reminder sent' };
}
