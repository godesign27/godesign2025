/*
  # Fix Multiple Permissive Policies

  ## Summary
  This migration resolves issues where tables have multiple permissive policies for the same
  action (SELECT, UPDATE) and role (authenticated). Having multiple permissive policies can
  cause confusion and potential security issues.

  ## Problem
  Tables had overlapping policies:
  - Admin management policies (FOR ALL) that include SELECT
  - Public read policies (FOR SELECT)
  
  This creates redundancy and makes the security model harder to understand.

  ## Solution
  Separate admin policies into specific INSERT, UPDATE, DELETE policies instead of using FOR ALL.
  Keep the public SELECT policies separate. This makes the security model explicit:
  - Public users can SELECT (read)
  - Admins can INSERT, UPDATE, DELETE (manage)

  ## Changes
  
  ### Tables Fixed
  - business_settings - Split admin policy into INSERT/UPDATE/DELETE
  - categories - Split admin policy into INSERT/UPDATE/DELETE
  - pages - Split admin policy into INSERT/UPDATE/DELETE
  - product_categories - Split admin policy into INSERT/UPDATE/DELETE
  - product_images - Split admin policy into INSERT/UPDATE/DELETE
  - product_tags - Split admin policy into INSERT/UPDATE/DELETE
  - tags - Split admin policy into INSERT/UPDATE/DELETE
  - theme_settings - Split admin policy into INSERT/UPDATE/DELETE
  - user_profiles - Keep separate policies for own profile vs all profiles
  - stripe_connections - Split admin policy into INSERT/UPDATE/DELETE

  ## Security Notes
  - No change in actual access control, just cleaner policy structure
  - Public read access maintained for appropriate tables
  - Admin management access explicitly defined for each operation
*/

-- =====================================================
-- FIX BUSINESS_SETTINGS POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage business settings" ON public.business_settings;

CREATE POLICY "Admins can insert business settings"
  ON public.business_settings FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update business settings"
  ON public.business_settings FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete business settings"
  ON public.business_settings FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX CATEGORIES POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage categories" ON public.categories;

CREATE POLICY "Admins can insert categories"
  ON public.categories FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update categories"
  ON public.categories FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete categories"
  ON public.categories FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX PAGES POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage pages" ON public.pages;

CREATE POLICY "Admins can insert pages"
  ON public.pages FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update pages"
  ON public.pages FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete pages"
  ON public.pages FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX PRODUCT_CATEGORIES POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage product categories" ON public.product_categories;

CREATE POLICY "Admins can insert product categories"
  ON public.product_categories FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update product categories"
  ON public.product_categories FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete product categories"
  ON public.product_categories FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX PRODUCT_IMAGES POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage product images" ON public.product_images;

CREATE POLICY "Admins can insert product images"
  ON public.product_images FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update product images"
  ON public.product_images FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete product images"
  ON public.product_images FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX PRODUCT_TAGS POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage product tags" ON public.product_tags;

CREATE POLICY "Admins can insert product tags"
  ON public.product_tags FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update product tags"
  ON public.product_tags FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete product tags"
  ON public.product_tags FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX TAGS POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage tags" ON public.tags;

CREATE POLICY "Admins can insert tags"
  ON public.tags FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update tags"
  ON public.tags FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete tags"
  ON public.tags FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX THEME_SETTINGS POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage theme settings" ON public.theme_settings;

CREATE POLICY "Admins can insert theme settings"
  ON public.theme_settings FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update theme settings"
  ON public.theme_settings FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete theme settings"
  ON public.theme_settings FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- FIX STRIPE_CONNECTIONS POLICIES
-- =====================================================

DROP POLICY IF EXISTS "Admins can manage stripe connections" ON public.stripe_connections;

CREATE POLICY "Admins can insert stripe connections"
  ON public.stripe_connections FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can update stripe connections"
  ON public.stripe_connections FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can delete stripe connections"
  ON public.stripe_connections FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

CREATE POLICY "Admins can select stripe connections"
  ON public.stripe_connections FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );
