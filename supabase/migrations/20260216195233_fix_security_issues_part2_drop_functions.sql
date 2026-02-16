/*
  # Fix Database Security Issues - Part 2a: Drop Functions

  ## Summary
  Drops existing functions so they can be recreated with secure search paths.
  This is necessary because PostgreSQL won't allow changing function parameters
  without dropping first.
*/

-- Drop all functions that need to be recreated
DROP FUNCTION IF EXISTS public.update_business_settings_updated_at() CASCADE;
DROP FUNCTION IF EXISTS public.update_pages_updated_at() CASCADE;
DROP FUNCTION IF EXISTS public.update_updated_at_column() CASCADE;
DROP FUNCTION IF EXISTS public.sync_user_role_to_jwt() CASCADE;
DROP FUNCTION IF EXISTS public.create_user_profile() CASCADE;
DROP FUNCTION IF EXISTS public.admin_get_user_id_by_email(text) CASCADE;
DROP FUNCTION IF EXISTS public.admin_set_user_role(uuid, text) CASCADE;
DROP FUNCTION IF EXISTS public.admin_set_user_role_with_audit(uuid, text) CASCADE;
DROP FUNCTION IF EXISTS public.current_user_role() CASCADE;
DROP FUNCTION IF EXISTS public.is_admin() CASCADE;
