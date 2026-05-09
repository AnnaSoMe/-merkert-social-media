-- ──────────────────────────────────────────────────────────────────────────
-- Merkert Social Media – Supabase Schema
-- Ausführen in: Supabase Dashboard → SQL Editor
-- ──────────────────────────────────────────────────────────────────────────

-- Orders-Tabelle
CREATE TABLE IF NOT EXISTS orders (
  id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at      TIMESTAMPTZ DEFAULT now(),
  customer_email  TEXT,
  design_config   JSONB       NOT NULL,   -- Farben, Layout, Foto-URL, Logo-URL
  stripe_session  TEXT,
  bannerbear_uid  TEXT,
  download_url    TEXT,                   -- '\n'-getrennt bei mehreren Posts
  status          TEXT        DEFAULT 'pending'
    CHECK (status IN ('pending', 'paid', 'processing', 'ready', 'failed'))
);

-- Row Level Security aktivieren
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Polling vom Browser: Eigene Order per ID lesbar (kein Auth nötig für MVP)
CREATE POLICY "orders_select_by_id"
  ON orders FOR SELECT
  USING (true);  -- ggf. auf auth.uid() einschränken wenn Login eingebaut wird

-- Neue Order anlegen (Browser mit anon key)
CREATE POLICY "orders_insert_anon"
  ON orders FOR INSERT
  WITH CHECK (true);

-- Updates NUR über Service Key (Webhooks), nicht über anon key möglich
-- (kein UPDATE-Policy → anon key kann nicht updaten)


-- ──────────────────────────────────────────────────────────────────────────
-- Storage Bucket für Fotos und Logos
-- ──────────────────────────────────────────────────────────────────────────

-- Bucket anlegen (alternativ im Dashboard: Storage → New Bucket)
INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Jeder darf hochladen (Berater lädt Foto hoch)
CREATE POLICY "uploads_insert_public"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'uploads');

-- Öffentlich lesbar (für Bannerbear-Zugriff auf Foto-URL)
CREATE POLICY "uploads_select_public"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'uploads');
