/*
  # Revoke Remaining Anon Table Privileges

  ## Summary
  Removes leftover TRUNCATE, TRIGGER, and REFERENCES privileges from the
  `anon` role on all public tables. These were not caught in the previous
  migration and represent unnecessary access for unauthenticated users.

  ## Changes
  - Revoke TRUNCATE, REFERENCES, TRIGGER from `anon` on all 15 public tables
*/

REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.business_settings FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.categories FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.order_items FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.orders FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.pages FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.product_categories FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.product_images FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.product_tags FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.products FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.role_change_audit FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.roles FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.stripe_connections FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.tags FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.theme_settings FROM anon;
REVOKE TRUNCATE, REFERENCES, TRIGGER ON public.user_profiles FROM anon;

ALTER DEFAULT PRIVILEGES IN SCHEMA public
  REVOKE TRUNCATE, REFERENCES, TRIGGER ON TABLES FROM anon;
