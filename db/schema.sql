CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  product TEXT NOT NULL,
  bank_id TEXT NOT NULL,
  full_name TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  source TEXT NOT NULL DEFAULT 'website',
  user_agent TEXT,
  ip_address TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_product ON leads(product);
