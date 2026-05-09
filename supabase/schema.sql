-- ──────────────────────────────────────────────────────────────────────────
-- Merkert Social Media – Supabase Schema
-- Ausführen in: Supabase Dashboard → SQL Editor
-- ──────────────────────────────────────────────────────────────────────────

-- Orders-Tabelle
CREATE TABLE IF NOT EXISTS orders (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at     TIMESTAMPTZ DEFAULT now(),
  email          TEXT,
  design_id      TEXT,                   -- z.B. 'strukturiert-1'
  hook           TEXT,                   -- Große Überschrift auf dem Post
  subtitle       TEXT,                   -- Kleinere Zeile darunter
  photo_url      TEXT,                   -- URL des Berater-Fotos in Supabase Storage
  caption        TEXT,                   -- Vollständiger Instagram-Caption-Text
  stripe_session TEXT,
  download_url   TEXT,
  status         TEXT        DEFAULT 'pending'
    CHECK (status IN ('pending', 'processing', 'ready', 'error'))
);

-- Felder zu bestehender Tabelle hinzufügen (falls Tabelle schon existiert)
ALTER TABLE orders ADD COLUMN IF NOT EXISTS email          TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS design_id      TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS hook           TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS subtitle       TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS photo_url      TEXT;
ALTER TABLE orders ADD COLUMN IF NOT EXISTS caption        TEXT;

-- Row Level Security aktivieren
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Polling vom Browser: Eigene Order per ID lesbar
CREATE POLICY "orders_select_by_id"
  ON orders FOR SELECT
  USING (true);

-- Neue Order anlegen (Browser mit anon key)
CREATE POLICY "orders_insert_anon"
  ON orders FOR INSERT
  WITH CHECK (true);


-- ──────────────────────────────────────────────────────────────────────────
-- Storage Bucket für Fotos und generierte Posts
-- ──────────────────────────────────────────────────────────────────────────

INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', true)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "uploads_insert_public"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'uploads');

CREATE POLICY "uploads_select_public"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'uploads');
