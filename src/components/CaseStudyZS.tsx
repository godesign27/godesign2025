import React from 'react';
import { ArrowLeft, ArrowRight, Play, Plus } from 'lucide-react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

/**
 * Disclosure boundary: see docs/11-intellectual-property.md.
 * Copy here stays at the level of principle and outcome. Product names, internal
 * terminology, and feature specifics are deliberately kept out of the written copy.
 */

type Asset =
  | { kind: 'image'; src: string; alt: string; caption: string }
  | { kind: 'video'; src: string; poster?: string; label: string; caption: string };

type WorkExample = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  assets: Asset[];
};

// ZS media is intentionally excluded from the public source repositories. Reuse
// the disclosure-reviewed assets from the canonical Timothy McGuire deployment.
const BASE = 'https://timothymcguire.com/case-studies/zs';

const workExamples: WorkExample[] = [
  {
    id: 'foundations',
    eyebrow: 'Example 01',
    title: 'Foundations built as a contract, not a suggestion',
    body: 'Enterprise components fail at the edges. The default state is easy, and every team gets it right. What breaks consistency is the small state nobody specified: the disabled tag, the inverse tooltip on a dark toolbar, the label that runs long. So the libraries were built to leave nothing to interpretation.',
    points: [
      'Every size, mode, direction, and interaction state drawn and named',
      'Inverse variants designed for dark surfaces rather than recolored later',
      'Semantic intent encoded in the component, so meaning survives reuse',
      'One set of names carrying more than one visual identity',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/01-tooltip-library.png`,
        alt: 'Tooltip component library showing 48 variants across size, arrow direction, arrow position, and mode, plus popover and confirmation masters.',
        caption: '48 tooltip variants across size, arrow direction, arrow position, and mode, with popover and confirmation patterns built from the same parts.',
      },
      {
        kind: 'image',
        src: `${BASE}/02-tag-library.png`,
        alt: 'Rounded tag component library showing 120 variants across type, size, state, and semantic meaning.',
        caption: '120 tag variants covering type, size, interaction state, and semantic meaning.',
      },
      {
        kind: 'video',
        src: `${BASE}/v1-component-library.mp4`,
        poster: `${BASE}/v1-poster.jpg`,
        label: 'Guided tour of the component library, moving through components, patterns, and design tokens.',
        caption: 'A guided tour of the library. Each component is shown with its variants, the properties that drive them, and the semantic variables underneath.',
      },
      {
        kind: 'video',
        src: `${BASE}/v4-theme-tokens.mp4`,
        poster: `${BASE}/v4-poster.jpg`,
        label: 'Walkthrough comparing two composable themes built on the same semantic token names, shown across components in both light and dark.',
        caption: 'The payoff of naming things by meaning rather than appearance: one system carries two visual identities. A new personality costs a theme file, not a fork of the components, and it composes with light and dark instead of fighting them.',
      },
    ],
  },
  {
    id: 'specification',
    eyebrow: 'Example 02',
    title: 'Specifying behavior, not just pixels',
    body: 'A screenshot tells engineering what something looks like. It does not say what happens on hover, what the keyboard does, what closes the menu, or what the cursor should be doing halfway through a drag. Those answers get invented during a sprint unless the design states them. Every interaction was annotated as a contract.',
    points: [
      'Keyboard shortcuts specified alongside their on click equivalents',
      'Dismissal rules written out, including what other components must yield',
      'Composed patterns traced back to the library primitives they reuse',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/03-action-menu-spec.webp`,
        alt: 'Annotated specification of a right click action menu, with lettered callouts covering header truncation, keyboard shortcuts, selected marker state, dismissal, and cursor behavior.',
        caption: 'One interaction, fully specified: truncation rules, keyboard equivalents, selection state, dismissal behavior, cursor handling, and the primitives the pattern composes from.',
      },
    ],
  },
  {
    id: 'workflow',
    eyebrow: 'Example 03',
    title: 'Consequential changes need a way back',
    body: 'Some actions in enterprise software move real money and real responsibility. Reassigning territory is one of them. The design treats the change as a proposal rather than a commitment: the system states plainly what it did, in the language of the business, and the user reviews and submits before anything becomes true.',
    points: [
      'Confirmation written in the user vocabulary, not system vocabulary',
      'A review step between the action and the commit',
      'Submission held in a disabled, in progress state until the system settles',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/04-map-align-success.webp`,
        alt: 'Map based territory alignment view showing a green success confirmation banner and a preview and submit bar, with annotations describing the notification and button states.',
        caption: 'The confirmation says what changed and points to the review step. Nothing commits until the person submits.',
      },
      {
        kind: 'video',
        src: `${BASE}/v2-alignment-flow.mp4`,
        poster: `${BASE}/v2-poster.jpg`,
        label: 'Prototype walkthrough of selecting multiple accounts on the map and reviewing the change before committing it.',
        caption: 'The same principle across a bulk change: select on the map, see exactly what is in scope and what it is worth, then review before anything is sent.',
      },
    ],
  },
  {
    id: 'reporting',
    eyebrow: 'Example 04',
    title: 'Configuration without a manual',
    body: 'Reporting tools tend to fail in one of two directions: too rigid to answer the real question, or so open that people cannot tell which settings matter. The pattern here separates what is required from what is optional, keeps the configuration next to the thing it configures, and states its limits in place rather than in documentation.',
    points: [
      'Mandatory parameters separated from optional ones at the layout level',
      'Ordering, visibility, and search handled in a single list',
      'System limits surfaced at the point of decision, not after the error',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/05-report-columns-annotated.png`,
        alt: 'Report parameters screen with a column settings panel open, annotated with lettered callouts explaining search, reordering, apply, reset, scrolling, and selection limits.',
        caption: 'A single list for columns and metrics, with reordering, search, reset, and the selection limit all explained in place.',
      },
      {
        kind: 'image',
        src: `${BASE}/06-report-autolayout-a.png`,
        alt: 'The same column settings panel shown in Figma with auto layout properties visible on the right.',
        caption: 'Built with auto layout so the panel holds its structure as content changes.',
      },
      {
        kind: 'image',
        src: `${BASE}/07-report-autolayout-b.png`,
        alt: 'The column settings panel in Figma showing a different auto layout configuration with vertical flow and fixed height.',
        caption: 'Resizing behavior resolved in the file, so engineering inherits the rules instead of guessing them.',
      },
      {
        kind: 'video',
        src: `${BASE}/v3-report-templates.mp4`,
        poster: `${BASE}/v3-poster.jpg`,
        label: 'Report template library showing saved report configurations with preview and download actions.',
        caption: 'Configuration becomes reusable. A saved template carries its own parameters, dates, and scope, so the work of setting it up happens once.',
      },
    ],
  },
  {
    id: 'flows',
    eyebrow: 'Example 05',
    title: 'Designing the journey, then versioning it',
    body: 'Screens are easy to review in isolation and easy to get wrong in sequence. Work was organized against the user stories it served, so every branch, empty state, and recovery path had somewhere to live. When the approach changed, the flow was versioned rather than quietly overwritten.',
    points: [
      'Flows mapped directly to the user stories they satisfy',
      'Alternate approaches kept side by side for comparison',
      'Hover, selection, and undo paths designed as part of the flow',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/08-user-story-flows.webp`,
        alt: 'Flow boards grouped by user story, showing two versions of a report customization journey stacked for comparison.',
        caption: 'Flows grouped by the user story they serve, with successive versions stacked so the change in thinking stays visible.',
      },
      {
        kind: 'image',
        src: `${BASE}/09-prototype-flow-board.webp`,
        alt: 'Prototype flow board showing menu, hover, shared state, first time message, state change, and undo paths connected with flow arrows.',
        caption: 'One interaction expanded into every branch it produces, including the path back out.',
      },
    ],
  },
  {
    id: 'agentic',
    eyebrow: 'Example 06',
    title: 'A design system an agent can be held to',
    body: 'Generative tools will produce interface whether or not a system governs them. The question is what they are held to. This work makes the repository the authoritative source: components, tokens, and behavioral rules live as checked in code, so a person and an agent asking the same question get the same answer. The system also names what is specific to AI, including confidence, autonomy, and where a human stays in the loop.',
    points: [
      'The repository as the single source of truth for design and generation',
      'AI specific states treated as first class, not bolted on afterward',
      'Every unit carrying its own anatomy, tokens, and compliance record',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/10-zds-overview.webp`,
        alt: 'Agentic design system overview page with the headline Designing With AI Without Losing Control.',
        caption: 'The thesis the system is built to defend.',
      },
      {
        kind: 'image',
        src: `${BASE}/13-zds-repo-truth.webp`,
        alt: 'Executive briefing page stating that the repository is the single source of truth for every agent that touches the design system.',
        caption: 'Governance stated as a position, then enforced by where the answers actually live.',
      },
      {
        kind: 'image',
        src: `${BASE}/11-zds-pattern-library.webp`,
        alt: 'Pattern library index showing 93 catalogued units across 33 atomic, 15 molecules, 37 organisms, and 8 pages.',
        caption: 'A catalogued library, structured so both people and agents can navigate it by level.',
      },
      {
        kind: 'image',
        src: `${BASE}/12-zds-ai-dialog.webp`,
        alt: 'Documentation page for an AI dialog component with a live preview, tiered attributes for autonomy and confidence, and tabs for anatomy, state variations, tokens, code, and compliance.',
        caption: 'Each unit documented with live preview, tiering for autonomy and confidence, and its own token and compliance record.',
      },
    ],
  },
];

/**
 * Video with a poster and an explicit play affordance, so a still frame of a UI
 * is not mistaken for a screenshot. Native controls appear once playback starts.
 */
const VideoFigure: React.FC<{ src: string; poster?: string; label: string }> = ({ src, poster, label }) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [started, setStarted] = React.useState(false);

  const start = () => {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    void el.play().catch(() => setStarted(false));
  };

  return (
    <div className="relative">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setStarted(true)}
        /* An in-flow video this size intermittently renders as a black rect in some
           Chromium compositors while still decoding normally. transform-gpu promotes
           it to its own layer; will-change-transform keeps it promoted, since a
           one-off transform alone let the layer get dropped again mid playback. */
        className="w-full bg-ink border border-line dark:border-white/10 transform-gpu will-change-transform"
      />

      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play video. ${label}`}
          className="group absolute inset-0 flex items-center justify-center bg-ink/5 hover:bg-ink/15 transition-colors"
        >
          <span className="flex items-center justify-center w-20 h-20 bg-ink/90 text-white transition-colors group-hover:bg-ink">
            {/* nudged right so the triangle reads optically centred in the square */}
            <Play className="w-7 h-7 translate-x-[2px]" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  );
};


const Diagram: React.FC<{ kind: 'system' | 'workflow' | 'mentorship' }> = ({ kind }) => {
  const items = kind === 'system'
    ? [['01', 'Product experience', 'Clarity · judgment · oversight'], ['02', 'Agentic workflows', 'Explore · prototype · refine'], ['03', 'Design system', 'Components · behavior · documentation'], ['04', 'Governance', 'Consistency · trust · human control']]
    : kind === 'workflow'
    ? [['01', 'Research & frame', 'Human judgment sets the direction'], ['02', 'Explore with AI', 'Expand and compare possibilities'], ['03', 'Prototype & refine', 'Make ideas tangible and reviewable'], ['04', 'Review & align', 'People assess quality and intent']]
    : [['01', 'Demonstrate', 'Make emerging methods tangible'], ['02', 'Practice', 'Explore patterns through hands-on work'], ['03', 'Share', 'Build a common language'], ['04', 'Apply', 'Carry the learning into product work']];
  return <figure className="border border-line dark:border-white/15 bg-tan-100 dark:bg-neutral-900 p-6 sm:p-10">
    <div className="flex justify-between gap-4 text-xs uppercase tracking-widest text-blue dark:text-lavender mb-8"><span>{kind === 'system' ? 'One connected transformation' : kind === 'workflow' ? 'AI-assisted design' : 'Leadership through craft'}</span><span>Conceptual model</span></div>
    <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/15 border border-line dark:border-white/15">{items.map(([n, title, body]) => <div key={n} className="bg-white dark:bg-neutral-950 p-6 sm:p-8"><span className="text-blue dark:text-lavender font-mono text-xs">{n} /</span><h3 className="text-xl font-semibold mt-6 mb-3 text-ink dark:text-white">{title}</h3><p className="text-sm text-muted dark:text-neutral-400">{body}</p></div>)}</div>
    <div className="mt-8 flex items-center gap-4 text-sm text-ink dark:text-white"><span className="w-3 h-3 bg-blue dark:bg-lavender shrink-0" /><span>{kind === 'system' ? 'Human judgment connects every layer.' : kind === 'workflow' ? 'Human review remains part of the process throughout.' : 'Scale the capability through shared practice.'}</span><div className="h-px bg-blue/30 flex-1" /><ArrowRight className="w-4 h-4" /></div>
    <figcaption className="mt-6 text-xs text-muted dark:text-neutral-400">Conceptual illustration of the approach.</figcaption>
  </figure>;
};

const artifactTitles: Record<string, string> = {
  '01-tooltip-library.png': 'Tooltip variants & states',
  '02-tag-library.png': 'Semantic tags & interaction states',
  'v1-component-library.mp4': 'Inside the component library',
  '03-action-menu-spec.webp': 'Action menu behavior specification',
  'v2-alignment-flow.mp4': 'Territory alignment prototype',
  '05-report-columns-annotated.png': 'Report configuration & column controls',
  '06-report-autolayout-a.png': 'Responsive panel structure',
  '07-report-autolayout-b.png': 'Panel sizing & layout rules',
  'v3-report-templates.mp4': 'Reusable report templates',
  '08-user-story-flows.webp': 'User stories & versioned journeys',
  '09-prototype-flow-board.webp': 'Interaction branches & recovery paths',
  '10-zds-overview.webp': 'Agentic design system overview',
  '13-zds-repo-truth.webp': 'Repository as source of truth',
};

const AssetFigure: React.FC<{ asset: Asset; caption?: string }> = ({ asset, caption }) => <figure>
  {asset.kind === 'video' ? <VideoFigure src={asset.src} poster={asset.poster} label={asset.label} /> : <ImageWithSkeleton src={asset.src} alt={asset.alt} className="w-full object-contain border border-line dark:border-white/10" loading="lazy" decoding="async" />}
  <figcaption className="mt-4 text-sm text-muted dark:text-neutral-400 leading-relaxed max-w-3xl">{caption || asset.caption}</figcaption>
</figure>;

const CaseStudyZS: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);
  const go = (page: string) => { setSelectedCaseStudy(null); setCurrentPage(page); window.scrollTo(0, 0); };
  const used = new Set(['04-map-align-success.webp', '12-zds-ai-dialog.webp', '11-zds-pattern-library.webp', 'v4-theme-tokens.mp4']);
  const archive = workExamples.flatMap(example => example.assets.filter(asset => !used.has(asset.src.split('/').pop()!)).map(asset => ({ asset, category: example.title })));
  const section = 'py-16 sm:py-24 border-b border-line dark:border-white/10';
  const wrap = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  const eyebrow = 'text-xs font-semibold uppercase tracking-widest text-blue dark:text-lavender mb-4';
  const heading = 'text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-ink dark:text-white mb-6';
  const body = 'text-base leading-relaxed text-muted dark:text-neutral-400';
  return <div className="min-h-screen bg-white dark:bg-neutral-950">
    <section className={`${section} bg-tan-100 dark:bg-neutral-950 pt-24`}>
      <div className={wrap}>
        <button onClick={() => go('case-studies')} className="inline-flex items-center gap-2 min-h-11 text-sm text-muted dark:text-neutral-400 mb-10"><ArrowLeft className="w-4 h-4" /> All Case Studies</button>
        <p className={eyebrow}>ZS Associates / Zaidyn · 2017–Present</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-ink dark:text-white max-w-5xl mb-8">From Enterprise UX to AI-Native Experience Architecture.</h1>
        <p className="text-lg leading-relaxed text-muted dark:text-neutral-400 max-w-3xl">Modernizing a healthcare SaaS ecosystem spanning more than 20 product modules through AI-powered product experiences, agentic design workflows, and a next-generation design system.</p>
        <a href="/contact" className="inline-flex items-center gap-3 bg-ink dark:bg-white text-white dark:text-ink px-6 py-4 mt-8 text-sm font-medium">Discuss your AI experience strategy <ArrowRight className="w-4 h-4" /></a>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-line dark:border-white/15 mt-12">{[['Role', 'UX Leader / Agentic Design Director / Design Engineer'], ['Scale', '20+ healthcare SaaS modules'], ['AI experience', 'Contributions to production AI experiences'], ['Current initiative', 'Design system redesign · ongoing']].map(([label,value]) => <div key={label} className="py-6 pr-8"><p className="uppercase tracking-widest text-xs text-muted dark:text-neutral-400 mb-2">{label}</p><p className="text-sm font-medium text-ink dark:text-white">{value}</p></div>)}</div>
        <Diagram kind="system" />
      </div>
    </section>
    <section className={section}><div className={`${wrap} grid lg:grid-cols-2 gap-12`}>
      <div><p className={eyebrow}>The challenge</p><h2 className={heading}>Evolving a platform.<br />Evolving how we design it.</h2><p className={body}>Large enterprise platforms support complex workflows, different user needs, and many products. As AI capabilities expanded, the challenge extended beyond individual screens: coherent AI interactions, human oversight, and trustworthy outcomes needed a foundation that could scale.</p><p className={`${body} mt-6`}>At ZS, our work evolved from enterprise product UX leadership into a broader transformation: helping teams design AI-native experiences, modernize the design process, and create a scalable foundation for future products.</p></div>
      <figure className="bg-tan-100 dark:bg-neutral-900 p-8 border border-line dark:border-white/10"><p className={eyebrow}>Platform scale</p><p className="text-6xl font-semibold text-ink dark:text-white mb-4">20+</p><p className={body}>Product modules. A shared experience challenge.</p><div className="grid grid-cols-5 gap-3 mt-8" aria-hidden="true">{Array.from({length:20},(_,i) => <div key={i} className={`aspect-square border ${i % 4 === 0 ? 'border-blue bg-blue/10' : 'border-line dark:border-white/20'} flex items-center justify-center`}><span className="w-2 h-2 bg-blue dark:bg-lavender" /></div>)}</div><figcaption className="text-xs text-muted dark:text-neutral-400 mt-6">Conceptual ecosystem illustration; module names and relationships are intentionally abstracted.</figcaption></figure>
    </div></section>
    <section id="product-experience" className={section}><div className={wrap}>
      <div className="grid lg:grid-cols-3 gap-10 mb-12"><div className="lg:col-span-2"><p className={eyebrow}>01 / AI-native product experiences</p><h2 className={heading}>Make intelligence understandable.<br />Keep people in control.</h2><p className={body}>We contributed to production AI experiences and advocated for patterns that account for human judgment, explainability, and clarity. The focus was making emerging capabilities usable within complex enterprise workflows.</p></div><div className="border-t border-line dark:border-white/15 pt-6"><p className="font-semibold text-ink dark:text-white mb-3">The enterprise UX foundation</p><p className={body}>Consequential changes need a way back. Clear feedback, explicit review, and deliberate confirmation are foundations for trustworthy interaction.</p></div></div>
      <div className="grid lg:grid-cols-2 gap-10 items-start"><AssetFigure asset={workExamples[5].assets[3]} caption="AI interaction documentation — exploring autonomy, confidence, and component states within the evolving design system." /><AssetFigure asset={workExamples[2].assets[0]} caption="Enterprise UX foundation — the alignment workflow makes a change visible and gives the person a review step before submission. Synthetic data." /></div>
    </div></section>
    <section className={`${section} bg-tan-100 dark:bg-neutral-950`}><div className={wrap}><div className="max-w-3xl mb-12"><p className={eyebrow}>02 / Agentic design workflows</p><h2 className={heading}>Transform the process<br />alongside the product.</h2><p className={body}>We introduced agentic AI approaches to rethink how design work moves from research and exploration through prototyping and execution. The goal was to help the team explore options, work across artifacts, and deliver consistent experiences.</p><p className={`${body} mt-6`}>The designer still frames the problem, evaluates the options, and owns the decisions. AI expands what can be explored and made tangible along the way.</p></div><Diagram kind="workflow" /></div></section>
    <section className={section}><div className={wrap}><div className="grid lg:grid-cols-3 gap-10 mb-12"><div className="lg:col-span-2"><p className={eyebrow}>03 / Next-generation design system</p><h2 className={heading}>Turn promising components<br />into lasting infrastructure.</h2><p className={body}>New AI-oriented components received strongly positive feedback from product managers. Their preference for the emerging approach over the legacy system helped build momentum for a broader redesign. We are currently leading that transformation, with an emphasis on reusable components, governance, documentation, and alignment between design and implementation.</p></div><div className="border-t border-line dark:border-white/15 pt-6"><span className="inline-block bg-blue/10 text-blue dark:text-lavender px-3 py-2 text-xs uppercase tracking-widest mb-4">Ongoing redesign</span><p className={body}>Specifying behavior, not just pixels: the system considers interaction states and human oversight alongside visual consistency.</p></div></div>
      <AssetFigure asset={workExamples[5].assets[2]} caption="Existing pattern-library artifact — a foundation for the ongoing redesign, rather than a claim of platform-wide rollout." />
      <div className="mt-12"><AssetFigure asset={workExamples[0].assets[3]} caption="Existing theme and token exploration — shared semantic foundations supporting different visual identities. The broader design system transformation remains in progress." /></div>
    </div></section>
    <section className={`${section} bg-tan-100 dark:bg-neutral-950`}><div className={`${wrap} grid lg:grid-cols-2 gap-12 items-center`}><div><p className={eyebrow}>Mentorship & influence</p><h2 className={heading}>Scale through shared practice.</h2><p className={body}>Alongside hands-on product work, we mentor the design team in emerging AI-assisted methods, experience patterns, and scalable design system practices. Our leadership combines strategic direction with craft: making approaches tangible and helping others apply them in their own work.</p><p className={`${body} mt-6`}>The aim is to make emerging methods usable beyond our own projects, giving designers a shared foundation they can build on.</p></div><Diagram kind="mentorship" /></div></section>
    <section className={section}><div className={wrap}><p className={eyebrow}>The decisions behind the design</p><h2 className={heading}>Where judgment shaped the work.</h2><div className="grid md:grid-cols-2 gap-x-12">{[
      ['01', 'Recognize needs before they become requests.', 'We recommended capabilities approximately a year before similar needs surfaced in customer and client requests. Initially deprioritized, those recommendations reinforced the value of preserving research rationale and revisiting assumptions as evidence changes.'],
      ['02', 'Demonstrate the emerging experience.', 'Concrete AI-oriented components gave product managers something to evaluate. Their positive response helped build momentum for the ongoing design system redesign.'],
      ['03', 'Treat the system as product infrastructure.', 'The redesign considers interaction behavior, tokens, governance, documentation, and repository-based sources of truth. The ambition extends beyond visual consistency.'],
      ['04', 'Scale through mentorship.', 'Hands-on exploration and shared design practices help the broader team build capability with AI-assisted methods and contemporary design systems.'],
    ].map(([n,title,text]) => <article key={n} className="py-8 border-t border-line dark:border-white/15"><p className="font-mono text-xs text-blue dark:text-lavender mb-5">{n}</p><h3 className="text-xl font-semibold text-ink dark:text-white mb-4">{title}</h3><p className={body}>{text}</p></article>)}</div></div></section>
    <section className="bg-ink dark:bg-neutral-900 py-16 sm:py-24 text-white"><div className={wrap}><p className="text-xs uppercase tracking-widest text-lavender mb-4">Impact & signals of change</p><h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Product direction. Team capability. Platform evolution.</h2><div className="grid md:grid-cols-3 gap-8">{[['Product direction', 'Strong product-manager preference for new AI-oriented components helped create momentum for the redesign.'], ['Team capability', 'Ongoing mentorship and adoption of agentic design practices support a new way of working.'], ['Platform evolution', 'Strategic UX leadership and hands-on design connect the needs of a large, multi-product healthcare ecosystem.']].map(([title,text]) => <div key={title} className="border-t border-white/20 pt-6"><h3 className="text-lg font-semibold mb-4">{title}</h3><p className="text-neutral-300 text-sm leading-relaxed">{text}</p></div>)}</div><div className="border-t border-white/20 mt-12 pt-8 max-w-3xl"><p className="text-xs uppercase tracking-widest text-lavender mb-4">Business context</p><p className="text-4xl sm:text-5xl font-semibold mb-4">$35M → $150M</p><p className="text-sm text-neutral-300 leading-relaxed">Product growth reported in an SME presentation during our tenure. The metric definition and reporting period are not specified here. This is business context, not a measure of design attribution.</p></div><div className="border-t border-white/20 mt-10 pt-8"><h3 className="text-lg font-semibold mb-3">How success should be evaluated</h3><p className="text-sm text-neutral-300 leading-relaxed max-w-3xl">Component adoption, workflow quality, prototype-to-implementation friction, user task success, and trust in AI interactions. These are recommended evaluation measures, not claimed measured results.</p></div></div></section>
    <section className={section} id="other-sources"><div className={wrap}><div className="flex flex-wrap justify-between items-end gap-6 mb-12"><div className="max-w-2xl"><p className={eyebrow}>Other Sources / Supporting artifacts</p><h2 className={heading}>A closer look at the craft.</h2><p className={body}>Component studies, interaction specifications, flow boards, and prototype walkthroughs from the existing collection. Explore the details behind the broader narrative.</p></div><span className="font-mono text-xs text-muted dark:text-neutral-400">{String(archive.length).padStart(2,'0')} ARTIFACTS · SYNTHETIC DATA</span></div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">{archive.map(({asset,category},i) => <details key={asset.src} className="group border border-line dark:border-white/15 bg-tan-100 dark:bg-neutral-900"><summary className="list-none cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue"><div className="aspect-[16/10] bg-white dark:bg-neutral-950 overflow-hidden relative"><img src={asset.kind === 'image' ? asset.src : asset.poster} alt="" loading="lazy" className="w-full h-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]" />{asset.kind === 'video' && <span className="absolute top-3 right-3 bg-ink text-white p-2"><Play className="w-4 h-4" /></span>}</div><div className="p-5"><div className="flex justify-between text-xs uppercase tracking-widest text-blue dark:text-lavender mb-3"><span>{String(i+1).padStart(2,'0')} / {asset.kind === 'video' ? 'Walkthrough' : 'Reference'}</span><Plus className="w-4 h-4 group-open:rotate-45 transition-transform" /></div><h3 className="text-base font-semibold text-ink dark:text-white leading-snug">{artifactTitles[asset.src.split('/').pop()!] || category}</h3><p className="text-xs text-muted dark:text-neutral-400 mt-3">Open artifact & notes</p></div></summary><div className="border-t border-line dark:border-white/15 p-5"><AssetFigure asset={asset} />{asset.kind === 'image' && <a href={asset.src} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-blue dark:text-lavender mt-5 min-h-11">View full-size reference <ArrowRight className="w-4 h-4" /></a>}</div></details>)}</div>
    </div></section>
    <section className="bg-tan-100 dark:bg-neutral-950 py-16 sm:py-24"><div className={wrap}><p className={eyebrow}>Work with us</p><h2 className={`${heading} max-w-3xl`}>Building an AI-native product<br />or modernizing a design system?</h2><p className={`${body} max-w-2xl`}>We help enterprise teams design understandable AI experiences, establish scalable design system foundations, and evolve how product teams work with AI.</p><div className="flex flex-wrap gap-4 mt-8"><a href="/contact" className="inline-flex items-center gap-3 px-6 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium">Let's discuss your product <ArrowRight className="w-4 h-4" /></a><a href="/ai-experience-architecture" className="inline-flex items-center gap-3 px-6 py-4 border border-line dark:border-white/15 text-ink dark:text-white text-sm">AI Experience Architecture™ <ArrowRight className="w-4 h-4" /></a></div></div></section>
  </div>;
};
export default CaseStudyZS;
