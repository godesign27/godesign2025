import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Eyebrow from './Eyebrow';

const faqs = [
  {
    question: 'What does GO Design specialize in?',
    answer: "GO Design is a Chicago design agency specializing in agentic AI design, agentic design systems, and enterprise SaaS platforms. Founded and led by Timothy McGuire, an Agentic AI Design Director with 15+ years of experience, we design trust-by-design, human-in-the-loop AI products for healthcare, fintech, pharma, and enterprise software clients including Accenture, TransUnion, and CoreTechs.",
  },
  {
    question: 'What is an agentic AI designer?',
    answer: 'An agentic AI designer specializes in designing products where AI agents act autonomously — browsing, reasoning, executing multi-step tasks, and making decisions on a user\'s behalf. The discipline requires expertise in trust-by-design (making AI behavior predictable and transparent), human-in-the-loop patterns (knowing when to pause for human review), agentic oversight UI (plan preview, progress visibility, interrupt affordances, audit trails), and graceful AI failure design.',
  },
  {
    question: 'What are agentic design systems?',
    answer: 'Agentic design systems are component libraries, token architectures, and pattern frameworks purpose-built for AI-native and agentic products. Unlike traditional design systems that cover buttons, forms, and navigation, they include components for agent status indicators, confidence signaling, progress and plan visualization, human-in-the-loop decision checkpoints, interrupt and override affordances, and explainability panels.',
  },
  {
    question: 'Is GO Design available for agentic AI design consulting?',
    answer: 'Yes. We accept agentic AI design consulting engagements, fractional design director partnerships, and focused AI UX strategy sessions. Formats include full agentic experience strategy and design, fractional director retainer, agentic design system build-outs, AI UX strategy sessions, and team workshops on agentic UX and trust-by-design.',
  },
  {
    question: 'What industries has GO Design designed agentic AI products for?',
    answer: "We've designed agentic AI products and AI-native experiences for pharmaceutical and life sciences, healthcare analytics, financial services, and enterprise B2B SaaS. We bring domain expertise and regulatory awareness to every agentic AI engagement — critical in healthcare and fintech where AI trust failures carry real consequences.",
  },
  {
    question: 'What is a fractional SaaS design director?',
    answer: 'A fractional SaaS design director embeds with a product team part-time to provide Director-level design direction, design system stewardship, and product strategy without the cost of a full-time hire. We offer this engagement model for startups and enterprise teams that need experienced leadership to set design direction and guide complex product decisions.',
  },
  {
    question: 'How do I hire GO Design?',
    answer: "Contact us and describe your product, your users, and what you're trying to build. We respond to every inquiry and will let you know if the engagement fits.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-tan dark:bg-neutral-900 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-4">
              Common questions.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed max-w-md">
              What agentic AI design and agentic design systems actually mean, and how we work.
            </p>
          </div>

          <div className="divide-y divide-line dark:divide-white/10 border-t border-b border-line dark:border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex items-start justify-between w-full text-left py-5 gap-4"
                  >
                    <span className="text-sm font-semibold text-ink dark:text-white leading-snug">
                      {faq.question}
                    </span>
                    <Plus
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 text-blue dark:text-lavender transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <div className={`grid transition-all duration-200 ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
