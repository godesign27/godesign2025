import React from 'react';
import { ChevronRight, LayoutGrid, Workflow, Users } from 'lucide-react';

interface SaasProductDesignProps {
  setCurrentPage: (page: string) => void;
}

const SaasProductDesign: React.FC<SaasProductDesignProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  const handleSolutionsClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('solutions');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Breadcrumb */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900"></div>
        
        {/* Breadcrumb */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <li className="text-gray-900 dark:text-white font-medium">SaaS Product Design</li>
            </ol>
          </nav>

          <div className="py-16">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white mb-6">
              SaaS Product Design<br />
              That Drives Growth
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              We design intuitive, scalable SaaS products that users love. Our approach 
              combines deep user research, strategic thinking, and beautiful design to 
              create products that drive engagement and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                User-Centric Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We create intuitive interfaces that make complex functionality feel simple and natural to your users.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <LayoutGrid className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Design Systems
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Build scalable products with consistent, reusable components that grow with your business.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Workflow Optimization
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Streamline user workflows to improve efficiency and reduce friction in key tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">User Research</h3>
                  <p className="text-gray-600 dark:text-gray-300">Deep understanding of user needs and behaviors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Information Architecture</h3>
                  <p className="text-gray-600 dark:text-gray-300">Logical structure and navigation flow</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Interaction Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">Intuitive and engaging user interactions</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Design Systems</h3>
                  <p className="text-gray-600 dark:text-gray-300">Scalable component libraries and guidelines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Prototyping</h3>
                  <p className="text-gray-600 dark:text-gray-300">Interactive prototypes for testing and validation</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Developer Handoff</h3>
                  <p className="text-gray-600 dark:text-gray-300">Detailed specifications and assets for development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Process</h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Research & Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We start by understanding your users, market, and business goals to create a strategic foundation for your product.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  UX Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Design the core structure and workflows of your product, ensuring a logical and efficient user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  UI Design & Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create beautiful, consistent interfaces and establish a scalable design system for future growth.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Testing & Iteration
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Validate designs through user testing and iterate based on real feedback to ensure product success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions CTA Section */}
      {/* Design Solutions Grid */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">A Sample of SaaS Design Solutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mopar Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  Enterprise
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Mopar-web-design.png"
                  alt="Mopar Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  UL SaaS Tool
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  An MVP Design for UL Clients to assess product leaks.
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

            {/* Atom Manager Web Redesign */}
            <div className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
              <div className="aspect-[4/3] bg-white dark:bg-gray-600 relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-gray-700 dark:text-purple-400 dark:border-purple-400">
                  FinTech
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Atomanger-web-design.png" 
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

      {/* Solutions CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to See the Solutions in Action?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore how our services come to life through tailored solutions that solve real problems.
          </p>
          <button 
            onClick={handleSolutionsClick}
            className="px-8 py-4 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            View Our Solutions
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seen enough? Let's create<br />something beautiful.
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

export default SaasProductDesign;