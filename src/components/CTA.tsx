import React from 'react';

interface CTAProps {
  setCurrentPage: (page: string) => void;
}

export default function CTA({ setCurrentPage }: CTAProps) {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-400 via-brand-500 to-brand-600"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's create something beautiful.
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          We'd love to learn more about how we can help your business.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="inline-block px-8 py-4 bg-white text-brand-600 font-medium rounded-full hover:bg-neutral-50 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          Make Contact
        </button>
      </div>
    </section>
  );
}
