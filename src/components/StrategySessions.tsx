import React from 'react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import StrategySessionIllustration from './illustrations/StrategySessionIllustration';

interface StrategySessionsProps {
  setCurrentPage: (page: string) => void;
}

const sessions = [
  {
    label: 'Design Audit',
    duration: '90 min',
    body: "A focused review of your existing product with prioritized recommendations for improvement. You bring the product, we bring 15 years of pattern recognition. You leave with a clear list of what to fix first and why.",
    best: 'Teams preparing for a redesign or needing an outside perspective before investing further.',
  },
  {
    label: 'AI UX Strategy',
    duration: '2 hours',
    body: 'A deep-dive on how to approach AI product design: trust models, human-in-the-loop patterns, explainability, and what your team should prioritize in the next 90 days. Grounded in real AI product work, not theory.',
    best: 'Product teams shipping AI features who need a senior design perspective on the experience strategy.',
  },
  {
    label: 'Advisory Session',
    duration: '60 min',
    body: "A structured conversation on a specific design challenge: roadmap prioritization, team structure, hiring decisions, or how to approach a thorny UX problem. You bring a focused question, we bring a direct answer.",
    best: 'Founders, heads of product, and design leads who need a senior sounding board without a long engagement.',
  },
  {
    label: 'Team Workshop',
    duration: 'Half or full day',
    body: "A facilitated working session for your design or product team. Topics include AI-native UX, design systems strategy, enterprise UX principles, or a custom topic matched to your team's current challenges.",
    best: 'Teams that want to upskill together or align on a design direction in a structured format.',
  },
];

const whatToExpect = [
  { step: '01', label: 'Share context', body: 'Before any session, we ask for a brief written summary of the challenge, a product link or screenshots, and any relevant background. No decks required, just enough to come prepared.' },
  { step: '02', label: 'The session', body: 'Sessions are focused and direct. We come with a point of view, not a list of open questions. Expect candor: we will tell you what we actually think, not what is comfortable to say.' },
  { step: '03', label: 'Written follow-up', body: 'After every session, we send a concise written summary: key decisions, recommendations, and suggested next steps. Something you can share with your team and act on immediately.' },
];

const StrategySessions: React.FC<StrategySessionsProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Strategy Sessions' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Focused time with a senior design mind.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
                Short, structured engagements for product teams and founders who need a clear perspective on a design challenge, without the overhead of a full engagement. Come with a specific question, leave with a direct answer and a written follow-up.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <StrategySessionIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: 'Remote', label: 'Video call' },
                  { stat: 'Fast', label: 'Same-week availability' },
                  { stat: 'Direct', label: 'No filler' },
                ].map((item) => (
                  <div key={item.label} className="bg-tan-100 dark:bg-neutral-900 px-5 py-4">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-0.5">{item.stat}</p>
                    <p className="text-xs text-muted dark:text-neutral-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session types */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Session Types</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Available formats.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {sessions.map((s) => (
              <div key={s.label} className="bg-white dark:bg-neutral-950 p-10">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-base font-semibold text-ink dark:text-white">{s.label}</h3>
                  <span className="text-xs font-medium text-muted dark:text-neutral-500 border border-line dark:border-white/10 px-2.5 py-1 flex-shrink-0 ml-4">
                    {s.duration}
                  </span>
                </div>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">{s.body}</p>
                <div className="border-t border-line dark:border-white/10 pt-4">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Best for</p>
                  <p className="text-xs text-muted dark:text-neutral-400 leading-relaxed">{s.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">What to expect</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">How a session works.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {whatToExpect.map((item) => (
              <div key={item.step} className="bg-white dark:bg-neutral-950 p-8">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">{item.step}</p>
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{item.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          { id: 'enterprise-ux-consulting', eyebrow: 'Service', label: 'Enterprise UX Consulting', description: 'Longer-form consulting for complex enterprise products.' },
          { id: 'fractional-saas-designer', eyebrow: 'Service', label: 'Fractional SaaS Designer', description: 'Embedded senior design leadership on retainer.' },
          { id: 'speaking-workshops', eyebrow: 'Service', label: 'Speaking & Workshops', description: 'Facilitated team workshops and conference talks.' },
        ]}
      />

      <SectionCTA
        heading="Book a session."
        body="Reach out with a brief description of your challenge and your preferred session type. We'll respond within 24 hours."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default StrategySessions;
