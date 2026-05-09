// ── Warenkorb ──────────────────────────────────────────────────────────────

// Design-ID Mapping: UI-ID → Sharp-Template-Name
const DESIGN_ID_MAP = {
  18: 'strukturiert-1',
  19: 'strukturiert-2',
  20: 'strukturiert-3',
  21: 'strukturiert-4',
};

// Body-Text in Untertitel + Caption aufteilen (getrennt durch Leerzeile)
function parsePostBody(body = '') {
  const parts = body.split('\n\n');
  return {
    subtitle: parts[0]?.trim() || '',
    caption:  parts.slice(1).join('\n\n').trim(),
  };
}

function syncCartBadge() {
  const count = state.cart.length;
  document.querySelectorAll('.cart-badge, #cart-count, #cart-count-mobile')
    .forEach(el => { if (el) el.textContent = count; });
}

function addToCartFromDesignState(product) {
  const item = {
    id:           Date.now(),
    productId:    product.id   || null,
    name:         product.name || 'Social Media Post',
    price:        product.price || 9.80,
    content:      state.selectedContent,
    format:       (window.FORMATS || []).find(f => f.id === state.selectedFormat) || {},
    design:       (window.DESIGNS || []).find(d => d.id === state.selectedDesign) || {},
    palette:      (window.PALETTES || [])[state.selectedPalette] || {},
    img:          state.uploadedImg,
    designConfig: structuredClone(designState),
  };
  state.cart.push(item);
  renderCart();
  syncCartBadge();
}

async function startCheckout() {
  if (!state.cart.length) return;

  const btn   = document.getElementById('checkout-btn');
  const email = document.getElementById('checkout-email')?.value?.trim() || '';

  if (!email) {
    alert('Bitte E-Mail-Adresse eingeben.');
    document.getElementById('checkout-email')?.focus();
    return;
  }

  // Foto prüfen
  const photoUrl = designState.photoUrl || state.uploadedImg || '';
  if (!photoUrl) {
    alert('Bitte lade zuerst dein Foto hoch.');
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = 'Wird vorbereitet …'; }

  try {
    const orderId = crypto.randomUUID();

    // Ersten Warenkorb-Artikel verarbeiten (MVP: ein Post pro Bestellung)
    const item    = state.cart[0];
    const content = state.selectedContent || item?.content || {};
    const { subtitle, caption } = parsePostBody(content.body || '');

    const designConfig = {
      design_id: DESIGN_ID_MAP[state.selectedDesign] || 'strukturiert-1',
      hook:      content.title || '',
      subtitle,
      caption,
      photo_url: photoUrl,
      post_id:   content.id   || null,
      colors:    designState.colors || {},
    };

    // Order in Supabase speichern
    const { error: dbErr } = await supabase.from('orders').insert({
      id:             orderId,
      customer_email: email,
      design_config:  designConfig,
      status:         'pending',
    });
    if (dbErr) throw new Error('Supabase: ' + dbErr.message);

    // Stripe Checkout starten
    const TAX_RATE = 0.19;
    const items = state.cart.map(i => ({
      name:  i.content?.title || i.name || 'Social Media Post',
      price: parseFloat(((i.price || 9.80) * (1 + TAX_RATE)).toFixed(2)),
    }));

    const res = await fetch('/.netlify/functions/create-checkout-session', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ items, orderId, email }),
    });

    if (!res.ok) throw new Error('Server-Fehler ' + res.status);
    const { url, error } = await res.json();
    if (error) throw new Error(error);

    window.location.href = url;
  } catch (err) {
    console.error('Checkout-Fehler:', err);
    alert('Zahlung konnte nicht gestartet werden. Bitte versuche es erneut.');
    if (btn) { btn.disabled = false; btn.textContent = 'Jetzt sicher bezahlen →'; }
  }
}
