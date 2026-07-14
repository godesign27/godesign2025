import { ArrowRight } from 'lucide-react';

interface CTAProps {
  setCurrentPage: (page: string) => void;
}

export default function CTA({ setCurrentPage }: CTAProps) {
  return (
    <section className="bg-ink dark:bg-neutral-900 py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="w-8 h-[3px] bg-blue mb-8" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            Let's create something beautiful.
          </h2>
          <p className="text-base text-white/60 mb-10 leading-relaxed">
            We'd love to learn more about your project and how we can help your business.
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors"
          >
            Make Contact
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
