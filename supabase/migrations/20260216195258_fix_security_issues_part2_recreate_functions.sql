/*
  # Fix Database Security Issues - Part 2b: Recreate Functions with Secure Search Paths

  ## Summary
  Recreates all functions with explicit search_path set to prevent security issues.
  All functions now have SET search_path = public, pg_temp which prevents
  search_path injection attacks.

  ## Functions Recreated
  - update_business_settings_updated_at - Updates business settings timestamp
  - update_pages_updated_at - Updates pages timestamp
  - update_updated_at_column - Generic updated_at column updater
  - sync_user_role_to_jwt - Syncs user role to JWT claims
  - create_user_profile - Creates user profile on signup
  - admin_get_user_id_by_email - Admin function to lookup user ID
  - admin_set_user_role - Admin function to change user role
  - admin_set_user_role_with_audit - Admin function to change user role with audit trail
  - current_user_role - Returns current user's role slug
  - is_admin - Checks if current user is admin

  ## Security Improvements
  - All functions use explicit search_path
  - Prevents malicious schema manipulation
  - Follows PostgreSQL security best practices
*/

-- =====================================================
-- RECREATE FUNCTIONS WITH SECURE SEARCH PATHS
-- =====================================================

-- Update business settings timestamp trigger
CREATE OR REPLACE FUNCTION public.update_business_settings_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Update pages timestamp trigger
CREATE OR REPLACE FUNCTION public.update_pages_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Generic updated_at column updater
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- Sync user role to JWT claims
CREATE OR REPLACE FUNCTION public.sync_user_role_to_jwt()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  role_slug text;
BEGIN
  SELECT r.slug INTO role_slug
  FROM public.roles r
  WHERE r.id = NEW.role_id;

  UPDATE auth.users
  SET raw_app_meta_data = 
    COALESCE(raw_app_meta_data, '{}'::jsonb) || 
    jsonb_build_object('role', role_slug)
  WHERE id = NEW.id;

  RETURN NEW;
END;
$$;

-- Create user profile on signup
CREATE OR REPLACE FUNCTION public.create_user_profile()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  default_role_id uuid;
BEGIN
  SELECT id INTO default_role_id FROM public.roles WHERE slug = 'user' LIMIT 1;
  
  INSERT INTO public.user_profiles (id, role_id)
  VALUES (NEW.id, default_role_id);
  
  RETURN NEW;
END;
$$;

-- Admin function to get user ID by email
CREATE OR REPLACE FUNCTION public.admin_get_user_id_by_email(query_email text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  found_user_id uuid;
BEGIN
  SELECT id INTO found_user_id
  FROM auth.users
  WHERE email = query_email
  LIMIT 1;
  
  RETURN found_user_id;
END;
$$;

-- Admin function to set user role
CREATE OR REPLACE FUNCTION public.admin_set_user_role(
  target_user uuid,
  role_slug text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  new_role_id uuid;
BEGIN
  SELECT id INTO new_role_id
  FROM public.roles
  WHERE slug = role_slug;

  IF new_role_id IS NULL THEN
    RAISE EXCEPTION 'Role % does not exist', role_slug;
  END IF;

  UPDATE public.user_profiles
  SET role_id = new_role_id,
      updated_at = NOW()
  WHERE id = target_user;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'User profile not found for user %', target_user;
  END IF;
END;
$$;

-- Admin function to set user role with audit trail
CREATE OR REPLACE FUNCTION public.admin_set_user_role_with_audit(
  target_user uuid,
  role_slug text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  new_role_id uuid;
  old_role_id uuid;
  admin_user_id uuid;
BEGIN
  admin_user_id := auth.uid();

  SELECT role_id INTO old_role_id
  FROM public.user_profiles
  WHERE id = target_user;

  SELECT id INTO new_role_id
  FROM public.roles
  WHERE slug = role_slug;

  IF new_role_id IS NULL THEN
    RAISE EXCEPTION 'Role % does not exist', role_slug;
  END IF;

  UPDATE public.user_profiles
  SET role_id = new_role_id,
      updated_at = NOW()
  WHERE id = target_user;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'User profile not found for user %', target_user;
  END IF;

  INSERT INTO public.role_change_audit (
    user_id,
    old_role_id,
    new_role_id,
    changed_by
  ) VALUES (
    target_user,
    old_role_id,
    new_role_id,
    admin_user_id
  );
END;
$$;

-- Get current user's role
CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  role_slug text;
BEGIN
  SELECT r.slug INTO role_slug
  FROM public.user_profiles up
  JOIN public.roles r ON r.id = up.role_id
  WHERE up.id = auth.uid();
  
  RETURN role_slug;
END;
$$;

-- Check if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.user_profiles up
    JOIN public.roles r ON r.id = up.role_id
    WHERE up.id = auth.uid()
    AND r.slug = 'admin'
  );
END;
$$;

-- =====================================================
-- RECREATE TRIGGERS
-- =====================================================

-- Recreate trigger for business_settings
DROP TRIGGER IF EXISTS update_business_settings_updated_at ON public.business_settings;
CREATE TRIGGER update_business_settings_updated_at
  BEFORE UPDATE ON public.business_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_business_settings_updated_at();

-- Recreate trigger for pages
DROP TRIGGER IF EXISTS update_pages_updated_at ON public.pages;
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON public.pages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_pages_updated_at();

-- Recreate trigger for user_profiles role sync
DROP TRIGGER IF EXISTS sync_user_role_to_jwt_trigger ON public.user_profiles;
CREATE TRIGGER sync_user_role_to_jwt_trigger
  AFTER INSERT OR UPDATE OF role_id ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.sync_user_role_to_jwt();

-- Recreate trigger for user profile creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.create_user_profile();

-- Recreate other triggers that use update_updated_at_column
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_theme_settings_updated_at ON public.theme_settings;
CREATE TRIGGER update_theme_settings_updated_at
  BEFORE UPDATE ON public.theme_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_stripe_connections_updated_at ON public.stripe_connections;
CREATE TRIGGER update_stripe_connections_updated_at
  BEFORE UPDATE ON public.stripe_connections
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
