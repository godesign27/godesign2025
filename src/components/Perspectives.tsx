import React from 'react';
import Eyebrow from './Eyebrow';
import { BookOpen, Workflow, Bot, PenLine, Mic2, ArrowRight } from 'lucide-react';
import SectionCTA from './SectionCTA';

interface PerspectivesProps {
  setCurrentPage: (page: string) => void;
}

const items = [
  {
    id: 'perspectives-our-philosophy',
    label: 'Our Philosophy',
    description: 'The principles that guide how we approach every design problem, from first principles to final pixel.',
    icon: BookOpen,
  },
  {
    id: 'perspectives-how-we-work',
    label: 'How We Work',
    description: 'Our process, collaboration style, and tools, from discovery through handoff.',
    icon: Workflow,
  },
  {
    id: 'perspectives-ai-native-design',
    label: 'AI-Native Design',
    description: 'How we think about designing products where AI is a first-class participant, not a feature.',
    icon: Bot,
  },
  {
    id: 'perspectives-writing',
    label: 'Writing',
    description: 'Essays, articles, and short-form thinking on design, AI, and building digital products.',
    icon: PenLine,
  },
  {
    id: 'speaking-workshops',
    label: 'Speaking',
    description: 'Conference talks, workshops, and panel discussions on AI product design and enterprise UX.',
    icon: Mic2,
  },
];

const Perspectives: React.FC<PerspectivesProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (id: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(id);
  };

  return (
    <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <Eyebrow className="mb-4">Perspectives</Eyebrow>
            <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6">
              How we think about design.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              A collection of essays, frameworks, and working principles built from 15+ years designing complex digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-neutral-900 transition-colors"
                >
                  <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-lg font-semibold text-ink dark:text-white mb-3">
                    {item.label}
                  </h2>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-tan dark:bg-neutral-900 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-2xl font-semibold text-ink dark:text-white leading-relaxed italic">
              "Design is not what it looks like and feels like. Design is how it works, and who it works for."
            </p>
            <p className="mt-6 text-sm text-muted dark:text-neutral-500">GO Design</p>
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Interested in working together?"
        body="We take on a limited number of engagements each quarter. Let's see if we're a fit."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="View Services"
        secondaryPage="services"
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Perspectives;
