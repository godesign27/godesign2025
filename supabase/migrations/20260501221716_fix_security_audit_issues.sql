/*
  # Fix Security Audit Issues

  ## Summary
  Addresses all security findings from the audit: overly permissive RLS policies,
  unnecessary GraphQL schema exposure, and SECURITY DEFINER function access.

  ## Changes

  ### 1. page_views INSERT policy (RLS always-true fix)
  - Drop the existing "Anyone can insert page views" policy (WITH CHECK true)
  - Replace with a validated policy that checks:
    - path is not empty
    - path length is reasonable (< 500 chars)
    - session_id length is reasonable (< 100 chars)
  - This prevents abuse while still allowing legitimate anonymous tracking

  ### 2. Revoke SELECT from anon on page_views
  - Removes anon SELECT grant and drops the anon SELECT policy
  - Analytics dashboard will use an edge function with service role instead

  ### 3. Revoke SELECT from authenticated on page_views
  - Drops the authenticated SELECT policy
  - Revokes table-level SELECT grant

  ### 4. Revoke SELECT from authenticated on all 15 exposed tables
  - business_settings, categories, order_items, orders, pages,
    product_categories, product_images, product_tags, products,
    role_change_audit, roles, stripe_connections, tags,
    theme_settings, user_profiles
  - These tables are not used by the current site (design portfolio)
  - RLS policies remain intact; grants can be restored if needed

  ### 5. Revoke EXECUTE from authenticated on 5 SECURITY DEFINER functions
  - admin_get_user_id_by_email, admin_set_user_role,
    admin_set_user_role_with_audit, current_user_role, is_admin
  - These are not used by the current site
  - Removes RPC attack surface for authenticated users

  ## Security Notes
  - No data is modified or deleted
  - RLS policies on other tables remain unchanged
  - Trigger functions are unaffected (they run as function owner)
  - All changes are additive restrictions (revocations), fully reversible
*/

-- =========================================================
-- 1. Fix page_views INSERT policy: replace always-true
-- =========================================================

DROP POLICY IF EXISTS "Anyone can insert page views" ON page_views;

CREATE POLICY "Anon can insert validated page views"
  ON page_views
  FOR INSERT
  TO anon
  WITH CHECK (
    path IS NOT NULL
    AND length(path) > 0
    AND length(path) < 500
    AND length(coalesce(session_id, '')) < 100
    AND length(coalesce(referrer, '')) < 2000
    AND length(coalesce(user_agent, '')) < 1000
  );

-- =========================================================
-- 2. Revoke anon SELECT on page_views
-- =========================================================

DROP POLICY IF EXISTS "Anonymous users can read page views for dashboard" ON page_views;
REVOKE SELECT ON public.page_views FROM anon;

-- =========================================================
-- 3. Revoke authenticated SELECT on page_views
-- =========================================================

DROP POLICY IF EXISTS "Authenticated users can read page views" ON page_views;
REVOKE SELECT ON public.page_views FROM authenticated;

-- =========================================================
-- 4. Revoke SELECT from authenticated on all 15 exposed tables
-- =========================================================

REVOKE SELECT ON public.business_settings FROM authenticated;
REVOKE SELECT ON public.categories FROM authenticated;
REVOKE SELECT ON public.order_items FROM authenticated;
REVOKE SELECT ON public.orders FROM authenticated;
REVOKE SELECT ON public.pages FROM authenticated;
REVOKE SELECT ON public.product_categories FROM authenticated;
REVOKE SELECT ON public.product_images FROM authenticated;
REVOKE SELECT ON public.product_tags FROM authenticated;
REVOKE SELECT ON public.products FROM authenticated;
REVOKE SELECT ON public.role_change_audit FROM authenticated;
REVOKE SELECT ON public.roles FROM authenticated;
REVOKE SELECT ON public.stripe_connections FROM authenticated;
REVOKE SELECT ON public.tags FROM authenticated;
REVOKE SELECT ON public.theme_settings FROM authenticated;
REVOKE SELECT ON public.user_profiles FROM authenticated;

-- Also revoke INSERT, UPDATE, DELETE from authenticated where not needed
REVOKE INSERT, UPDATE, DELETE ON public.business_settings FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.categories FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.order_items FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.orders FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.pages FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.product_categories FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.product_images FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.product_tags FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.products FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.role_change_audit FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.roles FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.stripe_connections FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.tags FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.theme_settings FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.user_profiles FROM authenticated;

-- Prevent future tables from auto-granting to authenticated
ALTER DEFAULT PRIVILEGES IN SCHEMA public
  REVOKE SELECT, INSERT, UPDATE, DELETE ON TABLES FROM authenticated;

-- =========================================================
-- 5. Revoke EXECUTE from authenticated on SECURITY DEFINER functions
-- =========================================================

REVOKE EXECUTE ON FUNCTION public.admin_get_user_id_by_email(text) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role(uuid, text) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.admin_set_user_role_with_audit(uuid, text) FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.current_user_role() FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.is_admin() FROM authenticated;
