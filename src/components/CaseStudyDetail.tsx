import React from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Monitor, Smartphone } from 'lucide-react';
import CoretechsUxProcess from './CoretechsUxProcess';
import CoretechsStartingPoint from './CoretechsStartingPoint';

const CORETECHS_PROD_SRC = 'https://coretechs.timothymcguire.workers.dev/v2';
const LIVE_SRC =
  import.meta.env.VITE_CORETECHS_LIVE_URL || CORETECHS_PROD_SRC;
const LIVE_DS_SRC = `${LIVE_SRC.replace(/\/$/, '')}/design-system/tokens/color`;
const PRODUCT_PREVIEW = '/coretechs-v2-dashboard.png';
const DESIGN_SYSTEM_PREVIEW =
  'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/button-component.png';

type Viewport = 'desktop' | 'phone';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

function ViewportToggle({
  current,
  value,
  label,
  icon,
  onSelect,
}: {
  current: Viewport;
  value: Viewport;
  label: string;
  icon: React.ReactNode;
  onSelect: (next: Viewport) => void;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(value)}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-colors ${
        selected
          ? 'bg-blue text-white'
          : 'text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ViewportToolbar({
  viewport,
  onSelect,
}: {
  viewport: Viewport;
  onSelect: (next: Viewport) => void;
}) {
  return (
    <div className="flex items-center gap-1 border border-line dark:border-white/10 p-0.5 self-start sm:self-auto">
      <ViewportToggle
        current={viewport}
        value="desktop"
        label="Desktop"
        icon={<Monitor className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden />}
        onSelect={onSelect}
      />
      <ViewportToggle
        current={viewport}
        value="phone"
        label="Phone"
        icon={<Smartphone className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden />}
        onSelect={onSelect}
      />
    </div>
  );
}

function LiveViewport({
  viewport,
  src,
  pathLabel,
  title,
  fallbackImage,
}: {
  viewport: Viewport;
  src: string;
  pathLabel: string;
  title: string;
  fallbackImage: string;
}) {
  const canEmbed = typeof window !== 'undefined'
    && [
      'timothymcguire.com',
      'www.timothymcguire.com',
      'godesign.one',
      'www.godesign.one',
    ].includes(window.location.hostname);
  let frameClass: string;
  switch (viewport) {
    case 'desktop':
      frameClass = 'h-[min(80vh,860px)] min-h-[480px] w-full';
      break;
    case 'phone':
      frameClass = 'mx-auto h-[min(80vh,760px)] min-h-[560px] w-full max-w-[390px]';
      break;
    default: {
      const _exhaustive: never = viewport;
      throw new Error(`Unhandled viewport: ${_exhaustive}`);
    }
  }

  return (
    <div className={viewport === 'phone' ? 'mx-auto w-full max-w-[390px]' : 'w-full'}>
      <div className="overflow-hidden border border-line dark:border-white/10">
        <div className="flex items-center gap-2 border-b border-line dark:border-white/10 bg-tan-100 dark:bg-neutral-900 px-3 py-2">
          <span className="size-2.5 rounded-full bg-line dark:bg-white/20" aria-hidden />
          <span className="size-2.5 rounded-full bg-line dark:bg-white/20" aria-hidden />
          <span className="size-2.5 rounded-full bg-line dark:bg-white/20" aria-hidden />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-full bg-white dark:bg-neutral-950 px-3 py-1 text-xs text-muted dark:text-neutral-400">
            {pathLabel}
          </span>
        </div>
        {canEmbed ? (
          <iframe
            title={title}
            src={src}
            allow="fullscreen"
            className={`block border-0 bg-white ${frameClass}`}
          />
        ) : (
          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className={`group relative flex items-center justify-center overflow-hidden bg-white ${frameClass}`}
            aria-label={`Open ${title} in a new tab`}
          >
            <img
              src={fallbackImage}
              alt={`${title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-ink px-4 py-2 text-xs font-semibold text-white shadow-lg">
              Open live experience <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const [viewport, setViewport] = React.useState<Viewport>('desktop');
  const [dsViewport, setDsViewport] = React.useState<Viewport>('desktop');

  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('case-studies');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 pt-24 pb-0 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Case Studies
          </button>

          <div className="max-w-4xl mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">
              Case Study · Healthcare SaaS · 2016 – 2022
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              CoreTechs — Turning an initial POC into an enterprise product.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              Five years as Principal UX Designer and Director, transforming a raw analytics platform into a trusted SaaS product used by healthcare payors and providers.
            </p>
          </div>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { label: 'Role', value: 'Principal UX Designer & Director' },
              { label: 'Client', value: 'Gray Matter Analytics' },
              { label: 'Duration', value: 'Sept 2016 – Sept 2022' },
              { label: 'Industry', value: 'Healthcare SaaS' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-tan-100 dark:bg-neutral-950 px-6 py-5">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-medium text-ink dark:text-white leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Live product ─────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest">Live product</p>
            <ViewportToolbar viewport={viewport} onSelect={setViewport} />
          </div>
          <LiveViewport
            viewport={viewport}
            src={LIVE_SRC}
            pathLabel="/v2"
            title="CoreTechs V2 live product"
            fallbackImage={PRODUCT_PREVIEW}
          />
          <p className="mt-4 text-xs text-muted dark:text-neutral-500">
            Preview shown here for reliability. Open the live product to use its navigation, drawers, responsive layouts, and theme controls.{' '}
            <a
              href={LIVE_SRC}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-blue hover:text-ink dark:hover:text-lavender transition-colors"
            >
              Open in new tab <ExternalLink className="w-3 h-3" strokeWidth={1.5} aria-hidden />
            </a>
          </p>
        </div>
      </section>

      {/* ── Overview: Challenge / Approach / Outcome ──────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">The Challenge</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Gray Matter Analytics needed to transform complex value-based care data into a platform any clinical leader could use. Existing tools required specialist interpretation. The goal was to make population risk management and contract performance analysis genuinely accessible — without sacrificing depth.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                We led the complete design journey from MVP through maturity: user research with healthcare administrators, information architecture for multi-dimensional data, progressive disclosure to surface insight without overwhelming users, and an iterative design system that scaled with the engineering team.
              </p>
            </div>
            <div className="bg-tan-100 dark:bg-neutral-900 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                A full-featured SaaS healthcare analytics platform — role-based dashboards, contract performance tracking, population risk tools, and a component library that allowed a lean engineering team to ship complex, consistent UI at pace across six years of product growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Principles ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Design Direction</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Four principles that shaped every decision.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { title: 'Empowering', desc: 'Every view surfaces meaningful, actionable insight — not raw data.', values: ['Insightful', 'Meaningful', 'Useful'] },
              { title: 'Harmonious', desc: 'Consistent patterns and visual language across every surface.', values: ['Intentional', 'Minimal', 'Elegant'] },
              { title: 'Simple', desc: 'Progressive disclosure keeps complexity out of the way until needed.', values: ['Focused', 'Efficient', 'Prioritized'] },
              { title: 'Learnable', desc: 'Familiar patterns and predictable behavior reduce training overhead.', values: ['Intuitive', 'Familiar', 'Predictable'] },
            ].map((p) => (
              <div key={p.title} className="bg-white dark:bg-neutral-950 p-8">
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {p.values.map((v) => (
                    <span key={v} className="text-xs font-medium text-blue">{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoretechsStartingPoint />

      <CoretechsUxProcess />

      {/* ── Wireframe + UI Design ─────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">UI Design</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              From wireframe to visual system.
            </h2>
          </div>
          <div className="bg-white dark:bg-neutral-950 mb-px">
            <div className="overflow-hidden">
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/wireframe.png"
                alt="Wireframes"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-8">
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Wireframes</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Low-fidelity wireframes validated information hierarchy and navigation flow with clinical stakeholders before committing to visual design.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 mt-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Color System</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A healthcare-appropriate palette built for data-dense interfaces — high contrast for status indicators, calm neutrals for primary surfaces, accessible at every level. Click through the live design system to explore tokens, components, and patterns.
              </p>
            </div>
            <ViewportToolbar viewport={dsViewport} onSelect={setDsViewport} />
          </div>
          <LiveViewport
            viewport={dsViewport}
            src={LIVE_DS_SRC}
            pathLabel="/v2/design-system/tokens/color"
            title="CoreTechs color system"
            fallbackImage={DESIGN_SYSTEM_PREVIEW}
          />
          <p className="mt-4 text-xs text-muted dark:text-neutral-500">
            Preview shown here for reliability. Open the live design system on the color tokens and browse categories from its sidebar.{' '}
            <a
              href={LIVE_DS_SRC}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-medium text-blue hover:text-ink dark:hover:text-lavender transition-colors"
            >
              Open in new tab <ExternalLink className="w-3 h-3" strokeWidth={1.5} aria-hidden />
            </a>
          </p>
        </div>
      </section>

      {/* ── Component Library ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Design System</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
                A component library built for scale.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
                With a small engineering team and a growing product surface, we needed a component library that was both flexible and opinionated enough to keep the UI consistent without constant design review.
              </p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Every component was documented with states, variants, usage rules, and handoff specs — allowing engineers to build independently while maintaining visual integrity across six product modules.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8">
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-6">Button Component</p>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/button-component.png"
                alt="Button Component Documentation"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Prototype ────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Interactive Prototype</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-4">
              Build a population — live.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              A working rebuild of the Population Builder flow. Start on the dashboard, open <span className="font-medium text-ink dark:text-white">Population</span> from the left rail, toggle the elements that define a cohort, name it, and generate the member population — the same interaction payors used to segment members without engineering support.
            </p>
          </div>
          <div className="overflow-hidden shadow-xl bg-white dark:bg-neutral-950">
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Population%20Builder%20Landing%20Page.png"
              alt="CoreTechs Population Builder prototype"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-xs text-muted dark:text-neutral-500">
            Population Builder landing view from the original product · best viewed on a larger screen.
          </p>
        </div>
      </section>

      {/* ── Services delivered ───────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Scope of Work</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
                Full-lifecycle design leadership.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Over six years we led design end-to-end — from initial user research through design-system governance — providing hands-on practice and senior direction as the product matured.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                'User Experience Design',
                'User Interface Design',
                'Design Library Creation',
                'Prototyping',
                'Brand Development',
                'Logo Design',
              ].map((s) => (
                <div key={s} className="bg-white dark:bg-neutral-950 px-6 py-5">
                  <div className="w-4 h-[2px] bg-blue mb-3" />
                  <p className="text-sm font-medium text-ink dark:text-white">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Next project CTA ─────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">What's Next</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
                Interested in working together?
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <button
                onClick={() => { window.scrollTo(0,0); setSelectedCaseStudy(null); setCurrentPage('case-studies'); }}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> All case studies
              </button>
              <button
                onClick={() => { window.scrollTo(0,0); setCurrentPage('work-with-me'); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Work with us <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail;
