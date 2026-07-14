import React from 'react';
import { ChevronRight, Bot, ArrowRight } from 'lucide-react';

interface PerspectiveDetailProps {
  setCurrentPage: (page: string) => void;
}

const sections = [
  {
    heading: 'Trust is the core UX problem',
    body: "When AI makes a decision, the interface has to make that decision legible. Trust cannot be assumed just because a model is accurate. It has to be designed, through the signals the interface gives about confidence, reasoning, and limits.",
  },
  {
    heading: 'Human-in-the-loop is a design pattern',
    body: 'Knowing when to surface AI output for human review, and when to let the system act on its own, is one of the most consequential design decisions in an AI product. Getting it wrong in either direction erodes trust: too much friction and people bypass the AI, too little and they stop checking its work.',
  },
  {
    heading: 'Error UX matters more than success UX',
    body: 'AI systems fail in unfamiliar ways: partial answers, low-confidence guesses, requests that fall outside what the model can do. Designing for graceful degradation, clear error states, and simple recovery paths is not optional polish. It is where most of the trust in an AI product is actually won or lost.',
  },
  {
    heading: 'Mental models precede interfaces',
    body: "Before we design any screen, we map how users will conceptualize the AI's role, what they'll assume it can do, where they'll assume it can't be wrong. The interface is a layer over that mental model. Get the model wrong and no amount of UI polish will fix the confusion underneath it.",
  },
];

const related = [
  { id: 'agentic-experience', label: 'Agentic Experience', description: 'Our AI & agentic UX service offering.' },
  { id: 'perspectives-our-philosophy', label: 'Our Philosophy', description: 'Principles guiding our design approach.' },
  { id: 'saas-product-design', label: 'SaaS Product Design', description: 'AI product design case studies.' },
];

const PerspectiveDetail: React.FC<PerspectiveDetailProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">
      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage('perspectives')}
                  className="text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Perspectives
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-muted dark:text-neutral-400" />
              <li className="text-ink dark:text-white font-medium">AI-Native Design</li>
            </ol>
          </nav>

          <div className="py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center">
                <Bot className="w-5 h-5 text-blue dark:text-lavender" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue dark:text-lavender">
                Perspectives
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6">
              AI-Native Design
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400">
              How we think about designing products where AI is a first-class participant, not a feature.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-16">
            {sections.map((section, i) => (
              <div key={i} className="border-l-2 border-neutral-200 dark:border-white/[0.08] pl-8">
                <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20 bg-white dark:bg-neutral-950 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-10">
            Related
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setCurrentPage(item.id);
                }}
                className="group text-left p-6 bg-white dark:bg-white/[0.03] border border-line dark:border-white/[0.1] hover:border-neutral-400 dark:hover:border-white/[0.2] transition-all"
              >
                <div className="font-semibold text-ink dark:text-white mb-2 group-hover:underline">
                  {item.label}
                </div>
                <p className="text-sm text-muted dark:text-neutral-400 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-blue dark:text-lavender">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Want to talk through an idea?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            We're happy to discuss design challenges, AI product questions, or collaboration opportunities.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentPage('contact');
            }}
            className="btn-primary"
          >
            Get in touch
          </button>
        </div>
      </section>
    </main>
  );
};

export default PerspectiveDetail;
