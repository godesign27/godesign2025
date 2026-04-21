import React from 'react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
}

interface SolutionsProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, image, tags, onClick }) => (
  <div 
    className="group cursor-pointer bg-white dark:bg-white/10 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl flex flex-col"
    onClick={onClick}
  >
    <div className="p-6 space-y-4">
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
    <div className="mt-auto">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
    </div>
  </div>
);

const Solutions: React.FC<SolutionsProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const featuredCaseStudies = [
    {
      title: "CoreTechs SaaS Healthcare Product",
      description: "Improving value-based healthcare patient management through an intuitive interface design.",
      image: "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg",
      tags: ["Healthcare", "UX/UI Design", "Web App"]
    },
    {
      title: "Accenture - Employee Onboarding",
      description: "Designed an intuitive onboarding experience that guides new employees through common tasks and pain points to make their first days seamless and stress-free.",
      image: "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg",
      tags: ["Enterprise", "UX/UI Design", "Service Design"]
    },
    {
      title: "Jim Beam - The Cocktail Project",
      description: "Designed a new recipe responsive web site.",
      image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
      tags: ["Beverage", "UX/UI Design", "Service Design"]
    }
  ];

  const handleCaseStudyClick = (title: string) => {
    setSelectedCaseStudy(title);
  };

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-32">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white tracking-tight mb-6">
              Our Solutions in Action.
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl">
              Explore our case studies to see how we've helped businesses across various 
              industries transform their digital presence and achieve meaningful results.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Featured Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                {...study}
                onClick={() => handleCaseStudyClick(study.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Solutions */}
      <section className="pt-20 pb-12 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12"> Design Solutions</h2>
          

          {/* Dremel Bento Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Dremel.com Redesign</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[1000px]">
              {/* Dremel.com Title Card */}
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 dark:from-blue-900 dark:to-orange-900 rounded-2xl p-6 flex flex-col justify-center">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DREMEL.COM</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">E-commerce Redesign</p>
                <div className="mt-4">
                  <span className="text-xs bg-white dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-300">E-commerce</span>
                </div>
              </div>

              {/* Main Hero Image (2x height) */}
              <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Responsive Design
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Dremel/dremel.png"
                  alt="Dremel Homepage"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Conversion Stat */}
              <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-center items-center text-white">
                <div className="text-3xl font-bold mb-2">177%</div>
                <div className="text-sm text-gray-300">Desktop device increase</div>
              </div>

              {/* Dremel - before */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Before
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Dremel/dremel-before.png"
                  alt="Dremel Site Map"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sketches */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Sketches
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Dremel/dremel-sketch.png"
                  alt="Dremel Sketches"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Site Map */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Sitemap
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Dremel/dremel-sitemap.png"
                  alt="Dremel Site Map"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Performance Metric */}
              <div className="bg-blue-100 dark:bg-blue-900 rounded-2xl p-6 flex flex-col justify-center items-center">
                <div className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-2">242%</div>
                <div className="text-sm text-blue-700 dark:text-blue-300 text-center">Mobile device increase</div>
              </div>

              {/* Product Detail Page (2x height) */}
              <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Final Product Detail Design
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Dremel/dremel-product-detail.png"
                  alt="Dremel Product Detail"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* User Experience Description */}
              <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col justify-center">
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">User Experience</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">Intuitive User Centered Product Discovery</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">A responsive, user-friendly commerce site redesign that works seemlessly on desiktop and mobile. We transformed the experiece to focus on how users think in order to make the product finding and buying experience simple and easy rather than on how the business operates. </div>
              </div>
            </div>
          </div>

          {/* Aramark Bento Grid */}
        </div>
      </section>

      {/* Design Solutions Grid */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">More Design Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accenture - Onboarding Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Enterprise
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/accenture.png"
                  alt="Accenture Onboarding Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Accenture - Onboarding Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Redesigned Accenture's onboarding site to create a welcoming first impression. Provided clear, timely info to help new hires prepare for their start date and strengthen their connection to the company.
                </p>
              </div>
            </div>

            {/* TransUnion.com Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Enterprise
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/TransUnion.png" 
                  alt="TransUnion.com Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  TransUnion Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Designed a responsive, user-friendly site that works seamlessly on desktop and mobile. We transformed the experience to focus on what users need, rather than just how the business operates.
                </p>
              </div>
            </div>

            {/* Aramark Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Enterprise
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/aramark.png" 
                  alt="Aramark Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Aramark Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Focused on users, we redesigned Aramark's site with clear navigation, bold visuals, and storytelling that showcased their services while staying true to their brand pillars.
                </p>
              </div>
            </div>

            {/* Chrysler Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Automotive
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Chrysler-web-design.png" 
                  alt="Chrysler Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Chrysler Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We reimagined Chrylser's site with user-first design, reorganizing content to match user needs. Bold typography, dynamic photography, and rich storytelling highlighted services and aligned with brand strategy.
                </p>
              </div>
            </div>

            {/* Accenture - Leave of Absence */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  HR Solutions
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/accenture-employeeleave.png" 
                  alt="Accenture Leave of Absence" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Accenture - Leave of Absence
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We redesigned Accenture's leave of absence experience with a responsive, user-centered solution, creating custom design patterns for a consistent and engaging experience on all devices.
                </p>
              </div>
            </div>

            {/* Atom Manager Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  SaaS
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Atom-Manager.png" 
                  alt="Atom Manager Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Atom Manager Redesign
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I reimagined the Atom Manager marketing site, designing a new logo and a CRM form flow that integrates with the SaaS dashboard for lead generation. The responsive design ensured a seamless user experience across devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-regular text-white mb-6">
            Let's create<br />something beautiful.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We'd love to learn more about how we can help your business.
          </p>
          <button 
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-colors"
          >
            Make Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;