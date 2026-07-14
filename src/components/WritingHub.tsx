import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';

interface WritingHubProps {
  setCurrentPage: (page: string) => void;
}

const articles = [
  {
    category: 'AI-Native Design',
    title: 'The trust calibration problem in AI interfaces',
    description: "When an AI makes a recommendation, the interface must help users calibrate how much to trust it, not too much, not too little. This is harder than it sounds, and most products get it wrong.",
    readTime: '8 min read',
  },
  {
    category: 'Design Systems',
    title: 'Why design systems fail, and how to fix them before they do',
    description: "Most design systems die of the same causes: poor adoption, governance debt, and the gap between what's in Figma and what ships in code. Here's what we've learned from building and inheriting both.",
    readTime: '12 min read',
  },
  {
    category: 'Enterprise UX',
    title: 'Designing for people who hate using your product',
    description: "Enterprise software users rarely chose your tool. They were assigned it. Designing with that constraint in mind changes everything, from onboarding to error states to documentation strategy.",
    readTime: '7 min read',
  },
  {
    category: 'AI-Native Design',
    title: 'Explainability is not a feature. It is a design discipline.',
    description: "Bolting an \"explain this\" button onto an AI product is not explainability. It's a checkbox. Real explainability is woven into information architecture, feedback loops, and how the interface handles uncertainty.",
    readTime: '10 min read',
  },
  {
    category: 'Design Leadership',
    title: 'How to present design work to executives',
    description: "Executives don't care about your process. They care about risk and outcomes. Here's how to reframe design presentations so the people who approve budgets actually understand what you're building.",
    readTime: '6 min read',
  },
  {
    category: 'Agentic UX',
    title: 'Designing the human override: when AI should ask permission',
    description: "Agentic systems that act autonomously are only useful if users trust them. That trust depends entirely on when and how the system hands control back to the human. The UX of that moment is underdesigned everywhere.",
    readTime: '9 min read',
  },
];

const topics = [
  'AI & Agentic UX',
  'Design Systems',
  'Enterprise Product Design',
  'Design Leadership',
  'Human-Centered AI',
  'Working with Engineers',
  'UX Maturity',
  'Stakeholder Alignment',
];

const WritingHub: React.FC<WritingHubProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[
              { label: 'Perspectives', pageId: 'perspectives' },
              { label: 'Writing' },
            ]}
            setCurrentPage={setCurrentPage}
          />
          <div className="pt-8 max-w-3xl">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">
              Writing
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
              Thinking out loud about design.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
              Essays and articles on AI-native design, enterprise UX, design systems, and the craft of building products that real people use. New pieces coming regularly.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-line dark:bg-white/10">
            {articles.map((article) => (
              <div
                key={article.title}
                className="grid lg:grid-cols-5 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="lg:col-span-1 p-8 border-b lg:border-b-0 lg:border-r border-line dark:border-white/10 flex flex-col justify-between">
                  <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest">
                    {article.category}
                  </p>
                  <p className="text-xs text-muted dark:text-neutral-500 mt-4">{article.readTime}</p>
                </div>
                <div className="lg:col-span-4 p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-base font-semibold text-ink dark:text-white mb-3 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted dark:text-neutral-500 border border-line dark:border-white/10">
                      Coming soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">
                Topics
              </p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-8 leading-snug">
                What we write about.
              </h2>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 text-xs font-medium text-ink dark:text-white border border-line dark:border-white/20 bg-white dark:bg-neutral-950"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">
                Stay informed
              </p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4 leading-snug">
                New pieces, no noise.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
                When a new article goes up, we'll send a short note. No newsletter cadence, no filler content, just the occasional piece worth reading.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          {
            id: 'speaking-workshops',
            eyebrow: 'Speaking',
            label: 'Speaking & Events',
            description: 'Talks and workshops on AI product design and enterprise UX.',
          },
          {
            id: 'perspectives-ai-native-design',
            eyebrow: 'AI-Native Design',
            label: 'Designing for Intelligent Systems',
            description: 'How we think about trust, explainability, and human oversight.',
          },
          {
            id: 'perspectives-our-philosophy',
            eyebrow: 'Philosophy',
            label: 'Our Philosophy',
            description: 'The principles behind every design decision we make.',
          },
        ]}
      />

      <SectionCTA
        heading="Have a topic you'd like us to write about?"
        body="We're always interested in questions worth thinking through publicly. Send us a note."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default WritingHub;
