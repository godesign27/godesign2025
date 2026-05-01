import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

function getSessionId(): string {
  const key = 'go_session_id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export function usePageTracking() {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (location.pathname === lastPath.current) return;
    lastPath.current = location.pathname;

    if (location.pathname === '/analytics') return;

    supabase.from('page_views').insert({
      path: location.pathname,
      referrer: document.referrer || '',
      user_agent: navigator.userAgent || '',
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      language: navigator.language || '',
      session_id: getSessionId(),
    });
  }, [location.pathname]);
}
