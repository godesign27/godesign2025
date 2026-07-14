import React from 'react';

const items = [
  {
    title: 'Personalized Attention',
    description: "Your success directly impacts us. We take time to deeply understand your business, customers, challenges, and vision, ensuring a tailored approach from start to finish.",
  },
  {
    title: 'Agility and Speed',
    description: 'Our nimble team turns ideas into beautiful, working products quickly. Without layers of bureaucracy, we meet your goals more efficiently and deliver results at a pace larger firms cannot match.',
  },
  {
    title: 'Direct Collaboration',
    description: "You'll work with senior talent every step of the process. No account managers, no junior intermediaries, just direct creative partnership.",
  },
  {
    title: 'Focused Expertise',
    description: 'We specialize in what we do best: creating exceptional digital experiences. Our focused approach means you get experts who are invested in your project, not generalists.',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'Small does not mean less. With lower overhead costs, 90% of your budget goes directly into the creative work on your project, not corporate infrastructure.',
  },
  {
    title: 'Creative Flexibility',
    description: "Innovation thrives here. We're free to think boldly, explore unexpected approaches, and adapt quickly to your needs with maximum flexibility for process and execution.",
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <div
              className="p-10 border border-line dark:border-white/10"
              style={{ background: 'linear-gradient(135deg, #F3EFE7 0%, #ffffff 100%)' }}
            >
              <div className="w-8 h-[3px] bg-blue mb-8" />
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-6">
                Big Ideas. Small Studio. Better Results.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Discover why partnering with a boutique digital studio gives you the agility, creativity, and focus that big firms cannot deliver.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {items.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
