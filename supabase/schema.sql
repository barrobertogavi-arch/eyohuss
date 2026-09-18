CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  wallet_balance NUMERIC(12,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS media_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  genre TEXT,
  quality TEXT,
  year INT,
  duration TEXT,
  rating NUMERIC(3,1),
  description TEXT,
  synopsis TEXT,
  director TEXT,
  poster_url TEXT,
  price NUMERIC(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS news_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT,
  excerpt TEXT,
  image_url TEXT,
  content TEXT,
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS market_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  category TEXT,
  description TEXT,
  price NUMERIC(12,2) NOT NULL,
  commission_rate NUMERIC(5,2) DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS wallet_ledger (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  entry_type TEXT CHECK (entry_type IN ('credit', 'debit')) NOT NULL,
  amount NUMERIC(12,2) NOT NULL,
  status TEXT CHECK (status IN ('completed', 'pending')) DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS smm_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  service TEXT NOT NULL,
  quantity INT NOT NULL,
  total NUMERIC(12,2) NOT NULL,
  status TEXT CHECK (status IN ('queued', 'processing', 'complete')) DEFAULT 'queued',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS affiliate_payouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  amount NUMERIC(12,2) NOT NULL,
  status TEXT CHECK (status IN ('pending', 'paid')) DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_media_items_genre ON media_items(genre);
CREATE INDEX IF NOT EXISTS idx_news_articles_category ON news_articles(category);
CREATE INDEX IF NOT EXISTS idx_market_items_category ON market_items(category);
CREATE INDEX IF NOT EXISTS idx_wallet_ledger_user_id ON wallet_ledger(user_id);
CREATE INDEX IF NOT EXISTS idx_smm_orders_user_id ON smm_orders(user_id);
