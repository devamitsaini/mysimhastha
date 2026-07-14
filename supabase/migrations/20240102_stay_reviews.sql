-- Stay Reviews Table Migration
-- Stores customer reviews for each stay. New reviews are inserted with
-- status='pending' and become visible only after moderation (status='approved').

CREATE TABLE IF NOT EXISTS stay_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stay_id UUID NOT NULL REFERENCES stays(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title TEXT,
  review TEXT NOT NULL,
  visit_date DATE,
  verified_stay BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  owner_reply TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_stay_reviews_stay_id ON stay_reviews(stay_id);
CREATE INDEX IF NOT EXISTS idx_stay_reviews_status ON stay_reviews(status);
CREATE INDEX IF NOT EXISTS idx_stay_reviews_created_at ON stay_reviews(created_at DESC);

ALTER TABLE stay_reviews ENABLE ROW LEVEL SECURITY;

-- Public read access for approved reviews only
CREATE POLICY "Public read access for approved reviews"
  ON stay_reviews FOR SELECT
  USING (status = 'approved');

-- Allow anonymous inserts (pending moderation)
CREATE POLICY "Allow anonymous review submission"
  ON stay_reviews FOR INSERT
  WITH CHECK (status = 'pending');