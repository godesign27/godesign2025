import React from 'react';

import ImageWithSkeleton from './ui/ImageWithSkeleton';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const handleBackClick = () => {
    // Scroll to top first
    window.scrollTo(0, 0);
    // Clear the selected case study first
    setSelectedCaseStudy(null);
    // Then navigate back to solutions
    setCurrentPage('solutions');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Solutions Button */}
          <div className="py-4">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Solutions
            </button>
          </div>
        
          <div className="py-2">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white tracking-tight mb-6">
              A frictionless, journey that seduces and entices patrons to create cocktails.  <br />
              
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-200 max-w-4xl">
              Mobile-led cards, trending rails, and contextual CTAs guide exploration; the recipe page spotlights essentials (glass type, skill level, main spirit) with one-tap actions to save, share, or print. It's designed to move users from browse → pick → pour in just a few taps.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 lg:py-12">
            {/* Dashboard Image - 9 columns (75%) on desktop */}
            <div className="lg:col-span-9 relative bg-white rounded-lg shadow-lg overflow-hidden h-[700px]">
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg"
                alt="The Cocktail Project by Jim Beam"
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Content - 3 columns (25%) on desktop */}
            <div className="lg:col-span-3 flex flex-col items-start self-start">
              {/* Project Details Card */}
              <div className="mt-4 lg:mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-6 lg:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">New Site Responsive Design</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-600 text-sm">ROLE(s)</h4>
                    <p className="text-gray-900 font-bold text-sm">Principal UX Designer + UX Director + Creative Visionary</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">THE CLIENT</h4>
                    <p className="text-gray-900 font-bold text-sm">Suntory Lab + Jim Beam</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">TOOLS</h4>
                    <p className="text-gray-900 font-bold text-sm">Sketch, InVision Prototyping, Zeplin, MS Word, Slack, PowerPoint, Adobe Suite </p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">SERVICES</h4>
                    <ul className="text-gray-900 font-bold text-sm space-y-1">
                      <li>• User Experience Design</li>
                      <li>• User Research</li>
                      <li>• Content Strategy</li>
                      <li>• Design Library Creation</li>
                      <li>• Prototype</li>
                      <li>• Brand Development</li>
                      <li>• Logo Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">DURATION</h4>
                    <p className="text-gray-900 font-bold text-sm">Sept 2016 - Sept 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2 - Strategy Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-12">
            <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full mb-6 lg:mb-8">
              The Strategy
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              The right path for every palate.
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Build the homepage as a gateway for Recipe Searchers, Cocktail Lifestylists, and Spirits Enthusiasts. When the audience sees themselves instantly, they stay, explore, and make a drink—exactly the behavior we designed for.
            </p>
          </div>
        </div>
      </section>

      {/* Row 3 - Three Card Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* First Card - full width on mobile, 6 columns on desktop */}
            <div className="lg:col-span-6 bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden h-[600px]">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                Built from Skratch
              </span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/04-TCP_desktop_wireframe2.png"
                alt="Before"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card - full width on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 lg:p-8">
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full mb-6 lg:mb-8">
                UX Design
              </span>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
                Principle UX/UI Designer
              </h3>
              <p className="text-sm lg:text-base text-gray-600">
                As Principal UX/UI Designer, I shaped the solution by driving the complete design journey—translating business needs into a user-centered solution. I created, a sitemape, wireframes, problem-solving, empathy, design iteration, prototyping through user testing research.
              </p>
            </div>

            {/* Third Card - full width on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                Persona
              </span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/persona2.png"
                alt="Cocktail Lifestylist"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 4 - Two Card Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* First Card */}
            <div className="bg-white rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UX Strategy
              </span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/strategy_b.png"
                alt="Strategy"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <div className="flex space-x-2 absolute top-6 lg:top-8 left-6 lg:left-8 z-10">
                <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                  UX Design
                </span>
                <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                  Site Map
                </span>
              </div>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/sitemap.png"
                alt="Site Map"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 5 - Design Principles Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full mb-6">
            Design Direction
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-12">Design Principles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Top Row */}
            <div className="bg-purple-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Empowering</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-gray-700">Insightful</span>
                <span className="text-base lg:text-xl text-gray-700">Meaningful</span>
                <span className="text-base lg:text-xl text-gray-700">Useful</span>
              </div>
            </div>
            <div className="bg-yellow-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Harmonious</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-gray-700">Intentional</span>
                <span className="text-base lg:text-xl text-gray-700">Minimal</span>
                <span className="text-base lg:text-xl text-gray-700">Elegant</span>
              </div>
            </div>
            {/* Bottom Row */}
            <div className="bg-blue-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Simple</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-gray-700">Focused</span>
                <span className="text-base lg:text-xl text-gray-700">Efficient</span>
                <span className="text-base lg:text-xl text-gray-700">Prioritized</span>
                <span className="text-base lg:text-xl text-gray-700">Progressive Disclosure</span>
              </div>
            </div>
            <div className="bg-orange-100 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">Learnable</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-gray-700">Intuitive</span>
                <span className="text-base lg:text-xl text-gray-700">Familiar</span>
                <span className="text-base lg:text-xl text-gray-700">Predictable</span>
                <span className="text-base lg:text-xl text-gray-700">Usable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 6 - Two Image Cards */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* First Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UX Design
              </span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/04-TCP_desktop_wireframe.jpg"
                alt="Wireframe"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card */}
            <div className="bg-white rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                User Testing
              </span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/user_testing_quotes.png"
                alt="Color Harmony"
                className="w-full h-full object-center max-w-[500px]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 7 - Color Palette Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl border border-gray-300 relative overflow-hidden p-6 lg:p-8">
            <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full mb-4">
              UI Design
            </span>
            <h2 className="text-2xl lg:text-4xl font-regular text-gray-900 mb-6">Home Page Solution</h2>
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg"
              alt="Color Palette"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Row 8 - Button Component Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl border border-gray-300 relative overflow-hidden p-6 lg:p-8">
            <div className="flex space-x-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UI Design
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-regular rounded-full">
                Final Design
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-regular text-gray-900 mb-6">Recipe Detail</h2>
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_recipe_basic_v1.jpg"
              alt="Button Component"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Row 9 - Page Designs Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-300 relative overflow-hidden p-6 lg:p-8">
            <div className="flex space-x-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UI Design
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-regular rounded-full">
                Final Designs
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-regular text-gray-900 mb-6">Page Designs</h2>
            <div className="space-y-6">
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/cp_mybar.png"
                alt="Measure Detail Overview"
                className="max-w-full h-auto rounded-lg"
                loading="lazy"
                decoding="async"
              />
              
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_registration_0002_Layer%20Comp%203.jpg"
                alt="Measure Detail Card Practices"
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_brand_landing_simple_v1.jpg"
                alt="Members Detail"
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_recipe_results_0004_Layer%20Comp%205.jpg"
                alt="Population Builder Landing Page"
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/10-TCP_mobile_recipe.jpg"
                alt="Dashboard Summary"
                className="w-full rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;