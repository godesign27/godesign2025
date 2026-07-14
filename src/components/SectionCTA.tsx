import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SectionCTAProps {
  heading?: string;
  body?: string;
  primaryLabel?: string;
  primaryPage?: string;
  secondaryLabel?: string;
  secondaryPage?: string;
  setCurrentPage: (page: string) => void;
}

const SectionCTA: React.FC<SectionCTAProps> = ({
  heading = "Let's create something meaningful.",
  body = "We'd love to learn about your project and how we can help your organization.",
  primaryLabel = "Let's Talk",
  primaryPage = 'contact',
  secondaryLabel,
  secondaryPage,
  setCurrentPage,
}) => {
  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <section className="bg-ink dark:bg-neutral-900 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="w-8 h-[3px] bg-blue mb-8" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            {heading}
          </h2>
          <p className="text-base text-white/60 mb-10 leading-relaxed">
            {body}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate(primaryPage)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
            {secondaryLabel && secondaryPage && (
              <button
                onClick={() => navigate(secondaryPage)}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium hover:bg-white/[0.06] transition-colors"
              >
                {secondaryLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
