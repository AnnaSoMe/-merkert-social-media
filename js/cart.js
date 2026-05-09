// ── Warenkorb ──────────────────────────────────────────────────────────────
// Voraussetzung: globale `supabase`-Instanz, `state` aus index.dev.html,
// `designState` aus designState.js, `renderCart()` aus index.dev.html.

function syncCartBadge() {
  const count = state.cart.length;
  document.querySelectorAll('.cart-badge, #cart-count, #cart-count-mobile')
    .forEach(el => { if (el) el.textContent = count; });
}

function addToCartFromDesignState(product) {
  // Snapshot des aktuellen Design-States – keine Referenz!
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

// Kompletten Checkout-Prozess starten:
// 1. Order in Supabase speichern (Browser → anon key)
// 2. Stripe-Session über Netlify Function anlegen
async function startCheckout() {
  if (!state.cart.length) return;

  const btn   = document.getElementById('checkout-btn');
  const email = document.getElementById('checkout-email')?.value?.trim() || '';

  if (!email) {
    alert('Bitte E-Mail-Adresse eingeben.');
    document.getElementById('checkout-email')?.focus();
    return;
  }

  if (btn) { btn.disabled = true; btn.textContent = 'Wird vorbereitet …'; }

  try {
    const orderId = crypto.randomUUID();

    // Alle design_configs der Warenkorb-Items
    const configs = state.cart.map(i => i.designConfig).filter(Boolean);

    const { error: dbErr } = await supabase.from('orders').insert({
      id:             orderId,
      customer_email: email,
      design_config:  configs.length === 1 ? configs[0] : configs,
      status:         'pending',
    });
    if (dbErr) throw new Error('Supabase: ' + dbErr.message);

    const TAX_RATE = 0.19;
    const items = state.cart.map(item => ({
      name:  item.content?.title || item.name || 'Social Media Post',
      price: parseFloat((item.price * (1 + TAX_RATE)).toFixed(2)),
      designConfig: item.designConfig || null,
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
