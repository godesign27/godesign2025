import React from 'react';
import { Globe, Box, Bot } from 'lucide-react';

interface SpecializedExpertiseProps {
  setCurrentPage: (page: string) => void;
}

const SpecializedExpertise: React.FC<SpecializedExpertiseProps> = ({ setCurrentPage }) => {
  const handleMarketingWebDesignClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('marketing-web-design');
  };

  const handleAgenticExperienceClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('agentic-experience');
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16">Specialized Expertise</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Marketing Web Design */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Marketing Web Design</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Create impactful web experiences that convert visitors into customers. Our marketing-focused design approach combines aesthetics with strategic user journeys.
            </p>
            <button
              onClick={handleMarketingWebDesignClick}
              className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 rounded-full"
            >
              Learn More →
            </button>
          </div>

          {/* SaaS Product Design */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
              <Box className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">SaaS Product Design</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Build powerful, scalable software solutions with our comprehensive SaaS design expertise. We focus on creating intuitive interfaces that drive user engagement and business growth.
            </p>
            <button
              onClick={() => setCurrentPage('saas-product-design')}
              className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 rounded-full"
            >
              Learn More →
            </button>
          </div>

          {/* Agentic Experience */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-6">
              <Bot className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Agentic Experience</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Director-level UX leadership for teams shipping AI-powered products. Build interfaces that feel transparent, controllable, and genuinely helpful — not just technically impressive.
            </p>
            <button
              onClick={handleAgenticExperienceClick}
              className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 rounded-full"
            >
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;
