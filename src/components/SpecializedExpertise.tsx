import React from 'react';

interface SpecializedExpertiseProps {
  setCurrentPage: (page: string) => void;
}

const items = [
  {
    id: 'agentic-experience',
    title: 'Agentic Experience',
    description: 'Design AI and agent-powered interfaces that earn user trust through transparency, control, and clear mental models, from strategy through launch.',
  },
  {
    id: 'marketing-web-design',
    title: 'Marketing Web Design',
    description: 'Create impactful web experiences that convert visitors into customers. Marketing-focused design combining aesthetics with strategic user journeys.',
  },
  {
    id: 'saas-product-design',
    title: 'SaaS Product Design',
    description: 'Build powerful, scalable software solutions with comprehensive design expertise. Intuitive interfaces that drive user engagement and business growth.',
  },
];

const SpecializedExpertise: React.FC<SpecializedExpertiseProps> = ({ setCurrentPage }) => {
  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="w-8 h-[3px] bg-blue mb-4" />
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">
              Specialized Expertise
            </h2>
          </div>
          <button
            onClick={() => navigate('services')}
            className="text-sm font-medium text-blue dark:text-lavender hover:underline"
          >
            All services →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-10 bg-white dark:bg-neutral-950 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
              <button
                onClick={() => navigate(item.id)}
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender hover:underline self-start"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;
