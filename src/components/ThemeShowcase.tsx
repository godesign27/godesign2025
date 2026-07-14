import React from 'react';
import { ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';

interface ColorToken {
  name: string;
  varName: string;
}

const surfaceTokens: ColorToken[] = [
  { name: 'Ink', varName: '--color-ink' },
  { name: 'Muted', varName: '--color-muted' },
  { name: 'Line', varName: '--color-line' },
  { name: 'Tan', varName: '--color-tan' },
  { name: 'Tan 100', varName: '--color-tan-100' },
  { name: 'Tan 500', varName: '--color-tan-500' },
  { name: 'Blue', varName: '--color-blue' },
  { name: 'Lavender', varName: '--color-lavender' },
];

const darkSurfaceTokens: ColorToken[] = [
  { name: 'Neutral 950 (page bg)', varName: '--color-neutral-950' },
  { name: 'Neutral 900 (card bg)', varName: '--color-neutral-900' },
  { name: 'Neutral 500 (muted text)', varName: '--color-neutral-500' },
  { name: 'Neutral 400 (muted text)', varName: '--color-neutral-400' },
];

const editorialHex: Record<string, string> = {
  '--color-ink': '#111111',
  '--color-muted': '#666666',
  '--color-line': '#DDD5C4',
  '--color-tan': '#F3EFE7',
  '--color-tan-100': '#FAF8F4',
  '--color-tan-500': '#DDD5C4',
  '--color-blue': '#2563EB',
  '--color-lavender': '#A29BFE',
  '--color-neutral-950': '#19181B',
  '--color-neutral-900': '#3B3941',
  '--color-neutral-500': '#777384',
  '--color-neutral-400': '#94919F',
};

const graphiteHex: Record<string, string> = {
  '--color-ink': '#26384A',
  '--color-muted': '#6E6A64',
  '--color-line': '#D7D3CC',
  '--color-tan': '#F4F2EF',
  '--color-tan-100': '#FAF9F7',
  '--color-tan-500': '#F2F4F6',
  '--color-blue': '#B34518',
  '--color-lavender': '#CD5C2C',
  '--color-neutral-950': '#12191F',
  '--color-neutral-900': '#182229',
  '--color-neutral-500': '#8B959D',
  '--color-neutral-400': '#9BA6B0',
};

const Swatch: React.FC<{ token: ColorToken; hexMap: Record<string, string> }> = ({ token, hexMap }) => (
  <div className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-950">
    <div
      className="w-12 h-12 flex-shrink-0 border border-line dark:border-white/10"
      style={{ backgroundColor: `var(${token.varName})` }}
      aria-hidden="true"
    />
    <div className="min-w-0">
      <p className="text-sm font-medium text-ink dark:text-white">{token.name}</p>
      <p className="text-xs text-muted dark:text-neutral-500 font-mono truncate">{token.varName}</p>
      <p className="text-xs text-muted dark:text-neutral-500 font-mono">{hexMap[token.varName]}</p>
    </div>
  </div>
);

const ThemeColumn: React.FC<{ theme: 'editorial' | 'graphite'; label: string; hexMap: Record<string, string> }> = ({
  theme,
  label,
  hexMap,
}) => (
  <div data-color-theme={theme} className="bg-white dark:bg-neutral-950">
    <div className="p-8 border-b border-line dark:border-white/10">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue dark:text-lavender mb-1">{label}</p>
      <p className="text-sm text-muted dark:text-neutral-500">
        {theme === 'editorial' ? 'Current default palette' : 'Opt-in alternate palette'}
      </p>
    </div>
    <div className="divide-y divide-line dark:divide-white/10">
      {surfaceTokens.map((token) => (
        <Swatch key={token.varName} token={token} hexMap={hexMap} />
      ))}
    </div>
    <div className="p-8 pt-6 pb-2">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted dark:text-neutral-500">Dark mode surfaces</p>
    </div>
    <div className="divide-y divide-line dark:divide-white/10">
      {darkSurfaceTokens.map((token) => (
        <Swatch key={token.varName} token={token} hexMap={hexMap} />
      ))}
    </div>
  </div>
);

const ThemeShowcase: React.FC = () => {
  const [activeTheme, setActiveTheme] = React.useState<'editorial' | 'graphite'>('editorial');

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const read = () =>
      setActiveTheme(document.documentElement.getAttribute('data-color-theme') === 'graphite' ? 'graphite' : 'editorial');
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-color-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow className="mb-4">Internal / Design System</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6 max-w-2xl">
            Color theme showcase.
          </h1>
          <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
            Two color themes share one design system, typography, spacing, and component set stay identical, only the
            token values change. Use the palette icon in the navbar to switch the live site between them. Currently
            active: <span className="font-semibold text-ink dark:text-white">{activeTheme === 'editorial' ? 'Editorial' : 'Graphite'}</span>.
          </p>
        </div>
      </section>

      {/* Palette comparison */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-8 h-[3px] bg-blue mb-8" />
          <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">
            Palette comparison
          </h2>
          <p className="text-muted dark:text-neutral-400 max-w-2xl mb-12">
            These two columns force their own theme regardless of the live toggle, so you can compare every token
            side by side.
          </p>
          <div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            <ThemeColumn theme="editorial" label="Editorial" hexMap={editorialHex} />
            <ThemeColumn theme="graphite" label="Graphite" hexMap={graphiteHex} />
          </div>
        </div>
      </section>

      {/* Live typography */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-8 h-[3px] bg-blue mb-8" />
          <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">
            Typography, live
          </h2>
          <p className="text-muted dark:text-neutral-400 max-w-2xl mb-12">
            This section follows the live theme toggle in the navbar, not a forced column, toggle it to see these
            styles update in place.
          </p>
          <div className="bg-white dark:bg-neutral-950 p-8 md:p-12 space-y-6">
            <Eyebrow>Eyebrow label</Eyebrow>
            <h3 className="text-4xl font-semibold text-ink dark:text-white leading-tight">Heading, semibold.</h3>
            <p className="text-lg text-muted dark:text-neutral-400 max-w-xl leading-relaxed">
              Body copy in the muted token. It carries page introductions and longer explanatory paragraphs across
              the site.
            </p>
            <p className="text-sm text-ink dark:text-white">Small text in the ink token, used for labels and list items.</p>
            <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-blue dark:text-lavender">
              A link in the accent token <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Live buttons + cards */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-8 h-[3px] bg-blue mb-8" />
          <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-12">
            Components, live
          </h2>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <button className="btn-primary">
              Primary Button <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-primary btn-sm">Small</button>
            <button className="btn-primary btn-lg">Large</button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {[
              { heading: 'Card one', body: 'Divider-grid cells use the tan hover state and ink text token.' },
              { heading: 'Card two', body: 'Every card shares the same border, spacing, and radius rules.' },
              { heading: 'Card three', body: 'Only the underlying token values change between themes.' },
            ].map((card) => (
              <div
                key={card.heading}
                className="bg-white dark:bg-neutral-950 p-8 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{card.heading}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ink CTA sample */}
      <section className="bg-ink dark:bg-white/[0.03] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 dark:text-neutral-500 mb-4">
            Ink-background section
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white dark:text-white leading-tight max-w-xl">
            Section CTAs sit on the ink token and stay legible in both themes.
          </h2>
        </div>
      </section>
    </main>
  );
};

export default ThemeShowcase;
