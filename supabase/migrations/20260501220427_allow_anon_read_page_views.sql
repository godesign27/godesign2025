/*
  # Allow anonymous read access to page_views for dashboard

  1. Changes
    - Add SELECT policy for anon role on page_views table
    - This allows the analytics dashboard to display data without authentication
    - The dashboard URL (/analytics) is unlisted and not linked from any public page

  2. Security Notes
    - The analytics data contains no personally identifiable information
    - Only aggregate traffic metrics (paths, referrers, device info) are stored
    - The dashboard is accessible via direct URL only
*/

CREATE POLICY "Anonymous users can read page views for dashboard"
  ON page_views
  FOR SELECT
  TO anon
  USING (true);
