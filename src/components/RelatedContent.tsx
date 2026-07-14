import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  id: string;
  label: string;
  description: string;
  eyebrow?: string;
}

interface RelatedContentProps {
  items: RelatedItem[];
  setCurrentPage: (page: string) => void;
  heading?: string;
}

const RelatedContent: React.FC<RelatedContentProps> = ({
  items,
  setCurrentPage,
  heading = 'Related',
}) => {
  const navigate = (id: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(id);
  };

  return (
    <section className="bg-white dark:bg-neutral-950 py-16 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-6">
          {heading}
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="group text-left p-6 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
            >
              {item.eyebrow && (
                <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-3">
                  {item.eyebrow}
                </p>
              )}
              <p className="text-base font-semibold text-ink dark:text-white mb-2 group-hover:text-blue dark:group-hover:text-lavender transition-colors">
                {item.label}
              </p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-4">
                {item.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                Read more <ArrowRight className="w-3 h-3" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedContent;
