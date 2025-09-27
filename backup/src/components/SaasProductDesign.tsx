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

      {/* Featured Solutions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Featured Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg" 
                alt="ZS-Field Deployment" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  ZS-Field Deployment
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Redesigned a Salesforce deployment tool that major healthcare companies use to management territory sales.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/8567472/pexels-photo-8567472.jpeg" 
                alt="Atom Manager Product" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Atom Manager Product
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Redesigned a SaaS product Tax professionals Client Management tool.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm">
              <img 
                src="https://images.pexels.com/photos/8567482/pexels-photo-8567482.jpeg" 
                alt="UL Complaint Product MVP" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  UL Complaint Product MVP
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designed a white label UL tool for their clients to identify and handled customer complaints.
                </p>
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

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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

export default SaasProductDesign;