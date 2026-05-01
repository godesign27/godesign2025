/*
  # Grant anon role privileges on page_views table

  ## Problem
  A previous migration (revoke_anon_and_public_access) set ALTER DEFAULT PRIVILEGES
  to revoke all table-level privileges from anon for future tables. The page_views
  table was created after that migration, so anon has zero table-level access --
  even though RLS policies exist for anon INSERT and SELECT, the underlying
  PostgreSQL table-level GRANTs are missing, causing all operations to fail silently.

  ## Changes
  - GRANT SELECT, INSERT on page_views to anon (required for RLS policies to work)
  - This enables anonymous visitors to record page views (INSERT)
  - This enables the analytics dashboard to read data without auth (SELECT)

  ## Security Notes
  - RLS remains enabled; the existing policies control row-level access
  - No UPDATE or DELETE granted -- anon cannot modify or remove records
*/

GRANT SELECT, INSERT ON public.page_views TO anon;
