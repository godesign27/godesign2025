/*
  # Revoke Unnecessary Public and Anonymous Access

  ## Summary
  This migration removes excessive permissions that expose tables and functions
  to unauthenticated users and the GraphQL schema. It follows the principle of
  least privilege: only grant what is explicitly needed.

  ## Problem
  - All 15 public tables are visible to the `anon` role via SELECT grants,
    exposing schema structure to unauthenticated API consumers.
  - All 11 SECURITY DEFINER functions are callable by `anon` and `PUBLIC`,
    including admin functions and internal trigger functions.
  - Trigger/utility functions are callable via RPC by `authenticated` users
    even though they should only fire as triggers.

  ## Changes

  ### 1. Revoke SELECT from `anon` on All Tables
  Removes anonymous read access from:
  - business_settings, categories, order_items, orders, pages,
    product_categories, product_images, product_tags, products,
    role_change_audit, roles, stripe_connections, tags, theme_settings,
    user_profiles

  ### 2. Revoke EXECUTE from `PUBLIC` on All Functions
  Removes the blanket PUBLIC grant (which cascades to all roles) from:
  - admin_get_user_id_by_email, admin_set_user_role,
    admin_set_user_role_with_audit, create_user_profile,
    current_user_role, is_admin, rls_auto_enable,
    sync_user_role_to_jwt, update_business_settings_updated_at,
    update_pages_updated_at, update_updated_at_column

  ### 3. Revoke EXECUTE from `anon` on All Functions
  Ensures anonymous users cannot call any function via RPC.

  ### 4. Revoke EXECUTE from `authenticated` on Trigger-Only Functions
  These functions are only used as triggers and should not be callable via RPC:
  - create_user_profile (auth.users INSERT trigger)
  - sync_user_role_to_jwt (user_profiles role sync trigger)
  - update_business_settings_updated_at (timestamp trigger)
  - update_pages_updated_at (timestamp trigger)
  - update_updated_at_column (generic timestamp trigger)
  - rls_auto_enable (event trigger / utility)

  ### 5. Re-grant EXECUTE to `authenticated` for RPC Functions
  These functions are legitimately called from the app and need authenticated access:
  - admin_get_user_id_by_email (admin RPC, has internal auth checks)
  - admin_set_user_role (admin RPC, has internal auth checks)
  - admin_set_user_role_with_audit (admin RPC, has internal auth checks)
  - current_user_role (used by app to check current user role)
  - is_admin (used by app and referenced in RLS policy logic)

  ## Security Notes
  - RLS policies on tables are unchanged; authenticated users still access
    data through properly scoped RLS policies
  - Trigger functions continue to work because SECURITY DEFINER triggers
    execute as the function owner regardless of caller permissions
  - The `authenticated` role retains SELECT on tables because the Supabase
    client requires it and RLS governs row-level access
*/

-- =====================================================
-- PART 1: REVOKE SELECT FROM anon ON ALL TABLES
-- =====================================================

REVOKE SELECT ON public.business_settings FROM anon;
REVOKE SELECT ON public.categories FROM anon;
REVOKE SELECT ON public.order_items FROM anon;
REVOKE SELECT ON public.orders FROM anon;
REVOKE SELECT ON public.pages FROM anon;
REVOKE SELECT ON public.product_categories FROM anon;
REVOKE SELECT ON public.product_images FROM anon;
REVOKE SELECT ON public.product_tags FROM anon;
REVOKE SELECT ON public.products FROM anon;
REVOKE SELECT ON public.role_change_audit FROM anon;
REVOKE SELECT ON public.roles FROM anon;
REVOKE SELECT ON public.stripe_connections FROM anon;
REVOKE SELECT ON public.tags FROM anon;
REVOKE SELECT ON public.theme_settings FROM anon;
REVOKE SELECT ON public.user_profiles FROM anon;

-- Also revoke INSERT, UPDATE, DELETE from anon where granted
REVOKE INSERT, UPDATE, DELETE ON public.business_settings FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.categories FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.order_items FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.orders FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.pages FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.product_categories FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.product_images FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.product_tags FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.products FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.role_change_audit FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.roles FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.stripe_connections FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.tags FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.theme_settings FROM anon;
REVOKE INSERT, UPDATE, DELETE ON public.user_profiles FROM anon;

-- =====================================================
-- PART 2: REVOKE EXECUTE FROM PUBLIC ON ALL FUNCTIONS
-- (PUBLIC grant cascades to all roles including anon)
-- =====================================================

REVOKE EXECUTE ON FUNCTION public.admin_get_user_id_by_email(text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role_with_audit(uuid, text) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.create_user_profile() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.current_user_role() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.sync_user_role_to_jwt() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_business_settings_updated_at() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_pages_updated_at() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC;

-- =====================================================
-- PART 3: REVOKE EXECUTE FROM anon ON ALL FUNCTIONS
-- =====================================================

REVOKE EXECUTE ON FUNCTION public.admin_get_user_id_by_email(text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role_with_audit(uuid, text) FROM anon;
REVOKE EXECUTE ON FUNCTION public.create_user_profile() FROM anon;
REVOKE EXECUTE ON FUNCTION public.current_user_role() FROM anon;
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM anon;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM anon;
REVOKE EXECUTE ON FUNCTION public.sync_user_role_to_jwt() FROM anon;
REVOKE EXECUTE ON FUNCTION public.update_business_settings_updated_at() FROM anon;
REVOKE EXECUTE ON FUNCTION public.update_pages_updated_at() FROM anon;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon;

-- =====================================================
-- PART 4: REVOKE EXECUTE FROM authenticated ON
--         TRIGGER-ONLY / UTILITY FUNCTIONS
-- (These should never be called via RPC)
-- =====================================================

REVOKE EXECUTE ON FUNCTION public.create_user_profile() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.sync_user_role_to_jwt() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.update_business_settings_updated_at() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.update_pages_updated_at() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.rls_auto_enable() FROM authenticated;

-- =====================================================
-- PART 5: EXPLICITLY GRANT EXECUTE TO authenticated
--         ON FUNCTIONS THAT ARE LEGITIMATELY CALLED
-- =====================================================

GRANT EXECUTE ON FUNCTION public.admin_get_user_id_by_email(text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.admin_set_user_role_with_audit(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.current_user_role() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;

-- =====================================================
-- PART 6: REVOKE DEFAULT PRIVILEGES FOR FUTURE OBJECTS
-- Prevent anon from automatically getting access to new
-- tables and functions created in the public schema
-- =====================================================

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  REVOKE SELECT, INSERT, UPDATE, DELETE ON TABLES FROM anon;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  REVOKE EXECUTE ON FUNCTIONS FROM anon;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;
