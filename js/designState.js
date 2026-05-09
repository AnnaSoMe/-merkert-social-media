// ── Zentraler Design-State ─────────────────────────────────────────────────
// Wird in index.dev.html als <script src="js/designState.js"> eingebunden.
// Voraussetzung: globale `supabase`-Instanz (Supabase CDN) und
// updateAllPreviews() aus index.dev.html sind verfügbar.

const designState = {
  paletteId:  'erdton-1',
  colors: {
    background: '#F5F0E8',
    accent:     '#C67B5A',
    text:       '#2C2420',
  },
  logoUrl:   null,  // Supabase Storage URL
  photoUrl:  null,  // Supabase Storage URL
  layoutId:  'A',
  productId: null,
  postCount: null,
};

// Einzelne Farbe ändern → State + Preview
function updateDesignColor(key, value) {
  designState.colors[key] = value;
  updateAllPreviews();
  syncCartBadge();
}

// Komplette Palette setzen
function updatePalette(paletteId, bg, accent, text) {
  designState.paletteId      = paletteId;
  designState.colors         = { background: bg, accent, text };
  updateAllPreviews();
  syncCartBadge();
}

function updateLayout(layoutId) {
  designState.layoutId = layoutId;
  updateAllPreviews();
}

// Foto → Supabase Storage hochladen, URL in State + state.uploadedImg speichern
async function uploadPhoto(file) {
  const ext      = file.name.split('.').pop();
  const filename = `photos/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from('uploads')
    .upload(filename, file, { cacheControl: '3600', upsert: false });

  if (error) { console.error('Foto-Upload fehlgeschlagen:', error); return; }

  const { data: { publicUrl } } = supabase.storage
    .from('uploads')
    .getPublicUrl(filename);

  designState.photoUrl   = publicUrl;
  state.uploadedImg      = publicUrl; // für bestehende Canvas-Vorschau
  updateAllPreviews();
}

// Logo → Supabase Storage hochladen
async function uploadLogo(file) {
  const ext      = file.name.split('.').pop();
  const filename = `logos/${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from('uploads')
    .upload(filename, file);

  if (error) { console.error('Logo-Upload fehlgeschlagen:', error); return; }

  const { data: { publicUrl } } = supabase.storage
    .from('uploads')
    .getPublicUrl(filename);

  designState.logoUrl   = publicUrl;
  state.uploadedLogo    = publicUrl; // für bestehende Canvas-Vorschau
  updateAllPreviews();
}
