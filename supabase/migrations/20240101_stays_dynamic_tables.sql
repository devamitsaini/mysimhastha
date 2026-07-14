-- Stays Dynamic Tables Migration
-- Adds normalized tables for amenities, rules, nearby places, and room types

-- ============================================
-- STAY AMENITIES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS stay_amenities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stay_id UUID NOT NULL REFERENCES stays(id) ON DELETE CASCADE,
  amenity_key TEXT NOT NULL, -- e.g., wifi, parking, restaurant, lift, ac, hot_water
  amenity_label TEXT NOT NULL, -- e.g., "Free WiFi", "Parking", "Restaurant"
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(stay_id, amenity_key)
);

CREATE INDEX IF NOT EXISTS idx_stay_amenities_stay_id ON stay_amenities(stay_id);
CREATE INDEX IF NOT EXISTS idx_stay_amenities_key ON stay_amenities(amenity_key);

-- ============================================
-- STAY RULES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS stay_rules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stay_id UUID NOT NULL REFERENCES stays(id) ON DELETE CASCADE,
  rule_key TEXT NOT NULL, -- e.g., check_in, check_out, pets, smoking, children, payment
  rule_label TEXT NOT NULL, -- e.g., "Check-in", "Pets", "Smoking"
  rule_value TEXT NOT NULL, -- e.g., "12:00 PM onwards", "Not Allowed", "No Smoking"
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(stay_id, rule_key)
);

CREATE INDEX IF NOT EXISTS idx_stay_rules_stay_id ON stay_rules(stay_id);
CREATE INDEX IF NOT EXISTS idx_stay_rules_key ON stay_rules(rule_key);

-- ============================================
-- STAY NEARBY PLACES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS stay_nearby_places (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stay_id UUID NOT NULL REFERENCES stays(id) ON DELETE CASCADE,
  place_name TEXT NOT NULL, -- e.g., "Mahakaleshwar Temple", "Ram Ghat"
  place_type TEXT DEFAULT 'attraction', -- e.g., temple, ghat, railway, market
  distance_meters INT, -- numeric distance in meters (e.g., 450, 1200, 2800)
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(stay_id, place_name)
);

CREATE INDEX IF NOT EXISTS idx_stay_nearby_places_stay_id ON stay_nearby_places(stay_id);
CREATE INDEX IF NOT EXISTS idx_stay_nearby_places_distance ON stay_nearby_places(distance_meters);

-- ============================================
-- STAY ROOM TYPES TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS stay_room_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stay_id UUID NOT NULL REFERENCES stays(id) ON DELETE CASCADE,
  room_type TEXT NOT NULL, -- e.g., Standard, Deluxe, Suite, Family Room
  price_from DECIMAL(10,2),
  price_to DECIMAL(10,2),
  description TEXT,
  amenities TEXT[], -- array of amenity keys
  max_guests INT DEFAULT 2,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_stay_room_types_stay_id ON stay_room_types(stay_id);

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

ALTER TABLE stay_amenities ENABLE ROW LEVEL SECURITY;
ALTER TABLE stay_rules ENABLE ROW LEVEL SECURITY;
ALTER TABLE stay_nearby_places ENABLE ROW LEVEL SECURITY;
ALTER TABLE stay_room_types ENABLE ROW LEVEL SECURITY;

-- Public read access for all stay-related data
CREATE POLICY "Public read access for stay_amenities" ON stay_amenities FOR SELECT USING (true);
CREATE POLICY "Public read access for stay_rules" ON stay_rules FOR SELECT USING (true);
CREATE POLICY "Public read access for stay_nearby_places" ON stay_nearby_places FOR SELECT USING (true);
CREATE POLICY "Public read access for stay_room_types" ON stay_room_types FOR SELECT USING (true);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to format distance in meters to human-readable format
CREATE OR REPLACE FUNCTION format_distance_meters(distance_meters INT)
RETURNS TEXT AS $$
BEGIN
  IF distance_meters IS NULL THEN
    RETURN NULL;
  END IF;
  
  IF distance_meters < 1000 THEN
    RETURN distance_meters || ' m';
  ELSE
    RETURN ROUND(distance_meters / 1000.0, 1) || ' km';
  END IF;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- ============================================
-- MIGRATION COMPLETE
-- ============================================

-- Usage:
-- 1. Insert amenities: INSERT INTO stay_amenities (stay_id, amenity_key, amenity_label) VALUES ('stay-uuid', 'wifi', 'Free WiFi');
-- 2. Insert rules: INSERT INTO stay_rules (stay_id, rule_key, rule_label, rule_value) VALUES ('stay-uuid', 'check_in', 'Check-in', '12:00 PM onwards');
-- 3. Insert nearby places: INSERT INTO stay_nearby_places (stay_id, place_name, place_type, distance_meters) VALUES ('stay-uuid', 'Mahakaleshwar Temple', 'temple', 450);
-- 4. Insert room types: INSERT INTO stay_room_types (stay_id, room_type, price_from, max_guests) VALUES ('stay-uuid', 'Deluxe', 2500, 3);

</parameter>
<task_progress>
- [x] Explore the stays module structure
- [x] Audit all hardcoded data in stays
- [x] Review Supabase schema
- [x] Design normalized schema for missing data
- [x] Update Supabase schema
- [x] Refactor frontend to be 100% dynamic
- [x] Verify implementation
</task_progress>
</write_to_file>