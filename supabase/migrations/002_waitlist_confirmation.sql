-- Adds confirmation_email_sent to the existing waitlist table.
-- Run in Supabase SQL editor if not using the CLI.

ALTER TABLE waitlist
  ADD COLUMN IF NOT EXISTS confirmation_email_sent BOOLEAN NOT NULL DEFAULT false;
