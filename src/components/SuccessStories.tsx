import React from 'react';

interface SuccessStoriesProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const handleCaseStudyClick = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy('CoreTechs SaaS Healthcare Product');
    setCurrentPage('case-study-1');
  };

  return (
    <section id="success-stories" className="bg-gray-50 dark:bg-gray-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Success Stories
        </h2>

        {/* First case study */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-24">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
              alt="CoreTechs Dashboard"
             className="rounded-lg w-full h-64 object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CoreTechs</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Over the course of five years, I transformed CoreTechs from a developer-centric tool into a fully realized SaaS product supporting payors and providers through Gray Matter's analytics solutions. My work spanned the full UX/UI lifecycle—crafting a scalable design component library, building page templates, user flows, and site maps, and aligning user personas with business goals through testing and iteration. The result: a robust platform that empowers healthcare organizations to monitor and manage value-based care performance, improve equity, and drive medical cost savings across both commercial and government contracts.
            </p>
            <button
              onClick={handleCaseStudyClick}
              className="px-6 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all"
            >
              View case study
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
