-- Waitlist subscribers table
-- Run this in your Supabase SQL editor or via the Supabase CLI

CREATE TABLE IF NOT EXISTS waitlist_subscribers (
  id         UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  email      TEXT        UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast email lookups
CREATE INDEX IF NOT EXISTS waitlist_subscribers_email_idx
  ON waitlist_subscribers (email);

-- Optional: Row Level Security (if you want to protect direct reads via anon key)
ALTER TABLE waitlist_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow the service role full access (used by the API route)
-- The anon key has no access by default with RLS enabled
