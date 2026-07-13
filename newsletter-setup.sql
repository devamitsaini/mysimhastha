-- =====================================================
-- Newsletter Subscribers Table Setup
-- Run this in your Supabase SQL Editor
-- =====================================================

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  active BOOLEAN DEFAULT true
);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Allow public selects" ON newsletter_subscribers;

-- Create policy for inserting (public can subscribe)
CREATE POLICY "Allow public inserts" 
  ON newsletter_subscribers FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create policy for selecting (public can check existing emails)
CREATE POLICY "Allow public selects" 
  ON newsletter_subscribers FOR SELECT 
  TO public 
  USING (true);

-- Optional: Create a view for active subscribers count
CREATE OR REPLACE VIEW newsletter_subscribers_count AS
SELECT COUNT(*) as count FROM newsletter_subscribers WHERE active = true;
