import React, { useState } from 'react';
import { Lock } from 'lucide-react';

/**
 * Soft passphrase gate for client case studies.
 *
 * SCOPE OF PROTECTION — read before putting confidential material behind this.
 * This gate keeps a page out of casual view: it is not indexed, not linked, and
 * not readable without the passphrase in a normal browser. It is NOT a security
 * boundary. Everything the wrapped component renders is compiled into the public
 * JS bundle, and this repository (including the built `dist/`) is public, so a
 * determined reader can recover the content without the passphrase.
 *
 * Only place material here that would be acceptable — if awkward — to publish.
 * Anything genuinely confidential must be fetched after server-side
 * authorization, the way `AnalyticsAccess` relies on Supabase RLS as its real
 * boundary.
 *
 * To change the passphrase, regenerate the digest:
 *   printf '%s' 'your-new-passphrase' | shasum -a 256
 */
const PASSPHRASE_SHA256 = '25da7e550f5ed0e084bce0a18c424126c71929e5ec161d05ba6624e007485370';

const STORAGE_KEY = 'case-study-access';

const digest = async (value: string) => {
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

interface CaseStudyAccessProps {
  /** Identifies the unlock in session storage, so studies unlock independently. */
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const CaseStudyAccess: React.FC<CaseStudyAccessProps> = ({ id, title, description, children }) => {
  const storageKey = `${STORAGE_KEY}:${id}`;

  const [unlocked, setUnlocked] = useState(() => {
    try {
      return sessionStorage.getItem(storageKey) === 'true';
    } catch {
      return false;
    }
  });
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      if ((await digest(value.trim())) === PASSPHRASE_SHA256) {
        try {
          sessionStorage.setItem(storageKey, 'true');
        } catch {
          /* Private browsing or blocked storage — unlock for this view only. */
        }
        setUnlocked(true);
      } else {
        setError('That passphrase does not match. Check the note we sent you, or email us for access.');
      }
    } catch {
      setError('Unable to verify the passphrase in this browser. Try a different one, or email us for access.');
    } finally {
      setBusy(false);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="inline-flex items-center justify-center w-12 h-12 border border-line dark:border-white/10 mb-8">
          <Lock className="w-5 h-5 text-muted dark:text-neutral-400" strokeWidth={1.5} />
        </div>

        <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">
          Protected Case Study
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-5">
          {title}
        </h1>
        <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
          {description ??
            'This case study covers client work and is shared by request. Enter the passphrase to continue.'}
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div>
            <label
              htmlFor="case-study-passphrase"
              className="block text-sm font-medium text-ink dark:text-white mb-2"
            >
              Passphrase
            </label>
            <input
              id="case-study-passphrase"
              type="password"
              autoComplete="off"
              autoFocus
              required
              value={value}
              onChange={(e) => setValue(e.target.value)}
              aria-describedby={error ? 'case-study-passphrase-error' : undefined}
              aria-invalid={error ? true : undefined}
              className="w-full px-4 py-3 border border-line dark:border-white/10 bg-white dark:bg-transparent text-ink dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors"
              placeholder="Enter passphrase"
            />
          </div>

          {error && (
            <p
              id="case-study-passphrase-error"
              role="alert"
              className="text-sm text-ink dark:text-white border border-line dark:border-white/10 bg-white dark:bg-white/[0.05] p-4"
            >
              {error}
            </p>
          )}

          <button type="submit" disabled={busy || !value.trim()} className="btn-primary w-full">
            {busy ? 'Checking…' : 'View Case Study'}
          </button>
        </form>

        <p className="mt-8 text-sm text-muted dark:text-neutral-500">
          Need access?{' '}
          <a
            href="mailto:godesigngo@gmail.com?subject=Case%20study%20access"
            className="text-blue dark:text-lavender underline"
          >
            Email us
          </a>
          .
        </p>
      </div>
    </main>
  );
};

export default CaseStudyAccess;
