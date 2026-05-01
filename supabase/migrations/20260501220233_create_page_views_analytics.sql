/*
  # Create page_views analytics table

  1. New Tables
    - `page_views`
      - `id` (bigint, primary key, auto-generated)
      - `path` (text) - the page path visited
      - `referrer` (text) - the referring URL
      - `user_agent` (text) - browser user agent string
      - `screen_width` (integer) - visitor screen width
      - `screen_height` (integer) - visitor screen height
      - `language` (text) - browser language
      - `country` (text) - visitor country (if available)
      - `session_id` (text) - anonymous session identifier
      - `created_at` (timestamptz) - when the view occurred

  2. Security
    - Enable RLS on `page_views` table
    - Add INSERT policy for anonymous users (tracking from public site)
    - SELECT restricted to authenticated users only (dashboard access)

  3. Indexes
    - Index on `path` for page-level queries
    - Index on `created_at` for time-based queries
    - Composite index on `path, created_at` for filtered time queries

  4. Notes
    - Anonymous visitors can insert page views but cannot read data
    - Only authenticated users can view analytics data on the dashboard
    - No PII is stored; session_id is a random anonymous identifier
*/

CREATE TABLE IF NOT EXISTS page_views (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  path text NOT NULL DEFAULT '',
  referrer text DEFAULT '',
  user_agent text DEFAULT '',
  screen_width integer DEFAULT 0,
  screen_height integer DEFAULT 0,
  language text DEFAULT '',
  country text DEFAULT '',
  session_id text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Anonymous visitors can record page views
CREATE POLICY "Anyone can insert page views"
  ON page_views
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read analytics data
CREATE POLICY "Authenticated users can read page views"
  ON page_views
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

-- Indexes for query performance
CREATE INDEX IF NOT EXISTS idx_page_views_path ON page_views (path);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views (created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_path_created_at ON page_views (path, created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views (session_id);
