import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  pageId?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbItem[];
  setCurrentPage?: (page: string) => void;
}

const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({ items, setCurrentPage }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <React.Fragment key={i}>
              {i > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-line dark:text-white/20 flex-shrink-0"
                  aria-hidden="true"
                />
              )}
              <li>
                {!isLast && item.pageId && setCurrentPage ? (
                  <button
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setCurrentPage(item.pageId as string);
                    }}
                    className="text-xs font-medium text-muted dark:text-neutral-500 hover:text-ink dark:hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={`text-xs font-medium uppercase tracking-wider ${
                      isLast
                        ? 'text-blue dark:text-lavender'
                        : 'text-muted dark:text-neutral-500'
                    }`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default PageBreadcrumb;
