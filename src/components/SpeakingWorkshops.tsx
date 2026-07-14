import React from 'react';
import Eyebrow from './Eyebrow';
import { ArrowRight } from 'lucide-react';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';

interface SpeakingWorkshopsProps {
  setCurrentPage: (page: string) => void;
}

const talks = [
  {
    title: 'AI-Native UX: Designing for Systems That Think',
    description: 'What changes when the product makes decisions? A practical framework for trust, explainability, and human override in AI-powered interfaces.',
    formats: ['Conference keynote', 'Workshop (half-day)', 'Internal team session'],
    duration: '30-60 min',
  },
  {
    title: 'Agentic Workflow Design: When the AI Acts',
    description: 'The UX of autonomous agents is unlike anything we have designed before. This talk covers feedback loops, approval flows, error recovery, and the design decisions that determine whether an agentic system earns trust.',
    formats: ['Conference talk', 'Executive briefing'],
    duration: '25-45 min',
  },
  {
    title: 'Design Systems That Last',
    description: 'Most design systems fail in year two. This talk covers what separates systems that get adopted from systems that get abandoned, with specific attention to enterprise and multi-team environments.',
    formats: ['Conference talk', 'Workshop (full-day)'],
    duration: '30-45 min',
  },
  {
    title: 'Enterprise UX at Scale',
    description: 'Enterprise software is hard to design not because of bad intent, but because of structural complexity. A talk on the IA patterns and design principles that make complex systems feel manageable.',
    formats: ['Conference talk', 'Internal team session', 'Executive offsite'],
    duration: '30-50 min',
  },
];

const workshops = [
  { label: 'AI-Native Design Workshop', duration: 'Half-day (3-4 hrs)', body: 'A hands-on working session for product and design teams shipping AI features. Covers trust calibration, interaction pattern selection, explainability design, and graceful failure.' },
  { label: 'Design Systems Strategy', duration: 'Full-day (6-7 hrs)', body: 'From token architecture to adoption strategy. Teams leave with a concrete roadmap for building or rescuing their design system, and shared vocabulary for the work ahead.' },
  { label: 'Enterprise UX Principles', duration: 'Half-day (3-4 hrs)', body: 'Core design principles for complex, multi-role software. Covers role-based IA, progressive disclosure, high-density data design, and designing for expert users.' },
  { label: 'Custom Workshop', duration: 'Custom scope', body: "We develop custom workshop content around your team's specific challenges. Past custom topics include agentic AI oversight design, cross-functional design reviews, and UX maturity assessment." },
];

const SpeakingWorkshops: React.FC<SpeakingWorkshopsProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Speaking & Workshops' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Talks and workshops on AI design, enterprise UX, and design systems.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
                Conference talks grounded in real product work, not trend-chasing. Facilitated workshops that leave teams with concrete decisions made and shared vocabulary built.
              </p>
              <button
                onClick={() => { window.scrollTo(0, 0); setCurrentPage('contact'); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Book a talk or workshop <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                { stat: '4', label: 'Core talk topics' },
                { stat: '4', label: 'Workshop formats' },
                { stat: 'Remote', label: 'or in-person' },
                { stat: 'Custom', label: 'Content development available' },
              ].map((item) => (
                <div key={item.label} className="bg-tan dark:bg-neutral-900 p-6">
                  <p className="text-xl font-semibold text-ink dark:text-white mb-1">{item.stat}</p>
                  <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talks */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Talk Topics</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Available talks.</h2>
          </div>
          <div className="space-y-px bg-line dark:bg-white/10">
            {talks.map((talk) => (
              <div key={talk.title} className="grid lg:grid-cols-3 bg-white dark:bg-neutral-950">
                <div className="lg:col-span-2 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-line dark:border-white/10">
                  <h3 className="text-base font-semibold text-ink dark:text-white mb-3 leading-snug">{talk.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{talk.description}</p>
                </div>
                <div className="p-8 lg:p-10 bg-tan dark:bg-neutral-900">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Duration</p>
                  <p className="text-sm text-ink dark:text-white mb-4">{talk.duration}</p>
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Formats</p>
                  <ul className="space-y-1">
                    {talk.formats.map((f) => <li key={f} className="text-sm text-ink dark:text-white">{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Workshops</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Facilitated team workshops.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {workshops.map((w) => (
              <div key={w.label} className="bg-white dark:bg-neutral-950 p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-sm font-semibold text-ink dark:text-white leading-snug pr-4">{w.label}</h3>
                  <span className="text-xs text-muted dark:text-neutral-500 border border-line dark:border-white/10 px-2 py-1 flex-shrink-0">{w.duration}</span>
                </div>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          { id: 'perspectives', eyebrow: 'Perspectives', label: 'How We Think', description: 'Our editorial thinking on AI design and enterprise UX.' },
          { id: 'strategy-sessions', eyebrow: 'Service', label: 'Strategy Sessions', description: 'Focused one-on-one sessions for design challenges.' },
          { id: 'enterprise-ux-consulting', eyebrow: 'Service', label: 'Enterprise UX Consulting', description: 'Longer-form consulting for complex product teams.' },
        ]}
      />

      <SectionCTA
        heading="Book a talk or workshop."
        body="Tell us about your event, team size, and what you want the audience to walk away with. We'll respond within 48 hours."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default SpeakingWorkshops;
