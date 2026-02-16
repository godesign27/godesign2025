/*
  # Fix Database Security Issues - Part 1: Indexes and Initial Policy Fixes

  ## Summary
  This migration addresses multiple security and performance issues:
  - Adds missing indexes on foreign key columns for query performance
  - Removes unused indexes to reduce overhead
  - Optimizes RLS policies to prevent repeated auth function calls
  - Strengthens RLS policies to require admin role

  ## Changes

  ### 1. Add Indexes for Foreign Keys (Performance)
  Adds indexes on all foreign key columns that were missing them to improve query performance
  and prevent potential DoS attacks via slow queries.

  ### 2. Remove Unused Indexes (Maintenance)
  Removes indexes that are not being used to reduce database overhead.

  ### 3. Optimize RLS Performance
  Wraps auth.uid() in SELECT to prevent re-evaluation for each row, significantly improving
  query performance on tables with many rows.

  ### 4. Strengthen RLS Policies
  Replaces "always true" policies with proper admin role checks to ensure only administrators
  can perform management operations.

  ## Security Notes
  - All management operations now require admin role
  - Auth function calls are optimized to run once per query
  - Foreign key indexes improve query performance and prevent DoS via slow queries
*/

-- =====================================================
-- PART 1: ADD MISSING FOREIGN KEY INDEXES
-- =====================================================

-- Add index for order_items.order_id
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON public.order_items(order_id);

-- Add index for order_items.product_id
CREATE INDEX IF NOT EXISTS idx_order_items_product_id ON public.order_items(product_id);

-- Add index for orders.user_id
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);

-- Add index for product_categories.category_id
CREATE INDEX IF NOT EXISTS idx_product_categories_category_id ON public.product_categories(category_id);

-- Add index for product_tags.tag_id
CREATE INDEX IF NOT EXISTS idx_product_tags_tag_id ON public.product_tags(tag_id);

-- Add indexes for role_change_audit foreign keys
CREATE INDEX IF NOT EXISTS idx_role_change_audit_user_id ON public.role_change_audit(user_id);
CREATE INDEX IF NOT EXISTS idx_role_change_audit_old_role_id ON public.role_change_audit(old_role_id);
CREATE INDEX IF NOT EXISTS idx_role_change_audit_new_role_id ON public.role_change_audit(new_role_id);
CREATE INDEX IF NOT EXISTS idx_role_change_audit_changed_by ON public.role_change_audit(changed_by);

-- Add index for user_profiles.role_id
CREATE INDEX IF NOT EXISTS idx_user_profiles_role_id ON public.user_profiles(role_id);

-- =====================================================
-- PART 2: DROP UNUSED INDEXES
-- =====================================================

-- Drop pages_slug_idx (redundant with unique constraint pages_slug_key)
DROP INDEX IF EXISTS public.pages_slug_idx;

-- Drop unused product indexes
DROP INDEX IF EXISTS public.idx_products_category_id;
DROP INDEX IF EXISTS public.idx_products_enabled;
DROP INDEX IF EXISTS public.idx_products_featured;

-- =====================================================
-- PART 3: OPTIMIZE RLS POLICIES (FIX AUTH FUNCTION CALLS)
-- =====================================================

-- Fix orders policies
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;
CREATE POLICY "Users can view their own orders"
  ON public.orders FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Only authenticated users can create orders" ON public.orders;
CREATE POLICY "Only authenticated users can create orders"
  ON public.orders FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

-- Fix order_items policies
DROP POLICY IF EXISTS "Users can view their own order items" ON public.order_items;
CREATE POLICY "Users can view their own order items"
  ON public.order_items FOR SELECT
  TO authenticated
  USING (
    order_id IN (
      SELECT id FROM orders WHERE user_id = (select auth.uid())
    )
  );

-- Fix user_profiles policies
DROP POLICY IF EXISTS "Users can view own profile" ON public.user_profiles;
CREATE POLICY "Users can view own profile"
  ON public.user_profiles FOR SELECT
  TO authenticated
  USING (id = (select auth.uid()));

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.user_profiles;
CREATE POLICY "Admins can view all profiles"
  ON public.user_profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      WHERE up.id = (select auth.uid())
      AND up.role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

DROP POLICY IF EXISTS "Users can update own profile metadata" ON public.user_profiles;
CREATE POLICY "Users can update own profile metadata"
  ON public.user_profiles FOR UPDATE
  TO authenticated
  USING (id = (select auth.uid()))
  WITH CHECK (
    id = (select auth.uid()) 
    AND role_id = (SELECT role_id FROM user_profiles WHERE id = (select auth.uid()))
  );

DROP POLICY IF EXISTS "Admins can update any profile" ON public.user_profiles;
CREATE POLICY "Admins can update any profile"
  ON public.user_profiles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles up
      WHERE up.id = (select auth.uid())
      AND up.role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles up
      WHERE up.id = (select auth.uid())
      AND up.role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- Fix role_change_audit policies
DROP POLICY IF EXISTS "Admins can view audit log" ON public.role_change_audit;
CREATE POLICY "Admins can view audit log"
  ON public.role_change_audit FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

DROP POLICY IF EXISTS "Admins can insert audit records" ON public.role_change_audit;
CREATE POLICY "Admins can insert audit records"
  ON public.role_change_audit FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- =====================================================
-- PART 4: STRENGTHEN RLS POLICIES (FIX ALWAYS TRUE)
-- =====================================================

-- Fix business_settings policies
DROP POLICY IF EXISTS "Authenticated users can manage business settings" ON public.business_settings;
CREATE POLICY "Admins can manage business settings"
  ON public.business_settings FOR ALL
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

-- Fix categories policies
DROP POLICY IF EXISTS "Authenticated users can manage categories" ON public.categories;
CREATE POLICY "Admins can manage categories"
  ON public.categories FOR ALL
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

-- Fix pages policies
DROP POLICY IF EXISTS "Authenticated users can manage pages" ON public.pages;
CREATE POLICY "Admins can manage pages"
  ON public.pages FOR ALL
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

-- Fix product_categories policies
DROP POLICY IF EXISTS "Authenticated users can manage product categories" ON public.product_categories;
CREATE POLICY "Admins can manage product categories"
  ON public.product_categories FOR ALL
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

-- Fix product_images policies
DROP POLICY IF EXISTS "Authenticated users can manage product images" ON public.product_images;
CREATE POLICY "Admins can manage product images"
  ON public.product_images FOR ALL
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

-- Fix product_tags policies
DROP POLICY IF EXISTS "Authenticated users can manage product tags" ON public.product_tags;
CREATE POLICY "Admins can manage product tags"
  ON public.product_tags FOR ALL
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

-- Fix products insert policy
DROP POLICY IF EXISTS "Authenticated users can insert products" ON public.products;
CREATE POLICY "Admins can insert products"
  ON public.products FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = (select auth.uid())
      AND role_id IN (SELECT id FROM roles WHERE slug = 'admin')
    )
  );

-- Fix stripe_connections policies
DROP POLICY IF EXISTS "Authenticated users can manage stripe connections" ON public.stripe_connections;
CREATE POLICY "Admins can manage stripe connections"
  ON public.stripe_connections FOR ALL
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

-- Fix tags policies
DROP POLICY IF EXISTS "Authenticated users can manage tags" ON public.tags;
CREATE POLICY "Admins can manage tags"
  ON public.tags FOR ALL
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

-- Fix theme_settings policies
DROP POLICY IF EXISTS "Authenticated users can manage theme settings" ON public.theme_settings;
CREATE POLICY "Admins can manage theme settings"
  ON public.theme_settings FOR ALL
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
