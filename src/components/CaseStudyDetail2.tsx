import React from 'react';
import { ArrowLeft, Clock, Users, PenTool as Tool } from 'lucide-react';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage }) => {
  const handleBackClick = () => {
    setCurrentPage('solutions');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-2">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white tracking-tight mb-6">
              Redesigning the Onboarding Journey to Inspire Confidence from Day One.
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-200 max-w-4xl">
              The Accenture Employee Onboarding experience for it's 500K employees was reimagined to provide clarity, connection, and confidence for every new hire.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 lg:py-12">
            {/* Dashboard Image - 9 columns (75%) on desktop */}
            <div className="lg:col-span-9 relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/onboarding-accenture-hero.png"
                alt="Employee Onboarding"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Content - 3 columns (25%) on desktop */}
            <div className="lg:col-span-3 flex flex-col items-start">
              {/* Project Details Card */}
              <div className="mt-4 lg:mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-6 lg:p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Web site Redesign</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-gray-600 text-sm">ROLE(s)</h4>
                    <p className="text-gray-900 font-bold text-sm">Senior UX/UI Designer</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">THE CLIENT</h4>
                    <p className="text-gray-900 font-bold text-sm">Accenture</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">TOOLS</h4>
                    <p className="text-gray-900 font-bold text-sm">Figma, Teams, Jira, Powerpoint</p>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">SERVICES</h4>
                    <ul className="text-gray-900 font-bold text-sm space-y-1">
                      <li>• User Experience Design</li>
                      <li>• User Interface Design</li>
                      <li>• Design Library New Pattern Creation</li>
                      <li>• Prototype</li>
                      <li>• Brand Extension</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-600 text-sm">DURATION</h4>
                    <p className="text-gray-900 font-bold text-sm">October 2016 - October 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2 - Strategy Section */}
      <section className="py-4 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-12">
            <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full mb-6 lg:mb-8">
              The Strategy
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Provide patient management through intuitive design and powerful functionality.
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              The redesigned onboarding platform for Accenture aimed to simplify complexity and enhance the employee journey from offer to day one. Through clear task flows, accessible design, and personalized content, the solution helped new hires feel prepared, welcomed, and connected—while driving operational efficiency for HR stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Row 3 - Three Card Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* First Card - full width on mobile, 6 columns on desktop */}
            <div className="lg:col-span-6 bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                Before
              </span>
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/before-acc.png"
                alt="Before"
                className="w-full h-full object-cover"
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
                Senior UX/UI Designer
              </h3>
              <p className="text-sm lg:text-base text-gray-600">
                As Senior UX Designer, I reimagined Accenture's onboarding site to make the new hire experience clearer, faster, and more welcoming. I streamlined task navigation, improved key messaging, and built a consistent, accessible design system—backed by user research and high-fidelity prototypes to support a smooth pre-boarding journey.
              </p>
            </div>

            {/* Third Card - full width on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3 bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                Persona
              </span>
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/accenture-persona.png"
                alt="Healthcare Professional"
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
            <div className="bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UX Strategy
              </span>
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/empathy-map-acc.png"
                alt="Empathy Map"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UI Design
              </span>
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/photography.png"
                alt="Photography"
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
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/wireframe-site.png"
                alt="Wireframe"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card */}
            <div className="bg-gray-50 rounded-2xl border border-gray-300 relative overflow-hidden">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UI Design
              </span>
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/photography.png"
                alt="Photography"
                className="w-full h-full object-cover"
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
            <h2 className="text-2xl lg:text-4xl font-regular text-gray-900 mb-6">Color Palette</h2>
            <img 
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/color-palette.png"
              alt="Color Palette"
              className="w-full h-full object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Row 8 - Task cards Component Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 rounded-2xl border border-gray-300 relative overflow-hidden p-6 lg:p-8">
            <div className="flex space-x-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-medium rounded-full">
                UI Design
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-gray-700 text-white text-sm font-regular rounded-full">
                Component Definition
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-regular text-gray-900 mb-6">Task Card Component</h2>
            <img 
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/task-cards3.png"
              alt="Task Cards Component"
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
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
                alt="Dashboard Summary"
                className="w-full rounded-lg"
              />
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detail-overview.png"
                alt="Measure Detail Overview"
                className="w-full rounded-lg"
              />
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detailcard-practices.png"
                alt="Measure Detail Card Practices"
                className="w-full rounded-lg"
              />
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Members.detail.png"
                alt="Members Detail"
                className="w-full rounded-lg"
              />
              <img 
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Population%20Builder%20Landing%20Page.png"
                alt="Population Builder Landing Page"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;