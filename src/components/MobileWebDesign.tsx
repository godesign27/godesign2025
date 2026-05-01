import React from 'react';
import { ChevronRight, Smartphone, Users, Zap } from 'lucide-react';

interface MobileWebDesignProps {
  setCurrentPage: (page: string) => void;
}

const MobileWebDesign: React.FC<MobileWebDesignProps> = ({ setCurrentPage }) => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 dark:from-blue-900 dark:via-indigo-900 dark:to-violet-900"></div>

        {/* Breadcrumb */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-white/70 hover:text-white"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <li className="text-white font-medium">Mobile App Design</li>
            </ol>
          </nav>

          <div className="py-16">
            <h1 className="text-4xl md:text-7xl font-regular text-white mb-6">
              Mobile App Design<br />
              That Drives Engagement
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We create beautiful, intuitive mobile experiences that users love.
              Our designs are crafted to engage users, simplify interactions, and
              deliver exceptional value across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Native Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We design apps that feel natural and intuitive on every platform, following platform-specific guidelines and best practices.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                User-First Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every interaction is crafted with your users in mind, ensuring an engaging and seamless mobile experience.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Performance Optimized
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fast-loading, responsive apps that provide excellent user experience even in challenging network conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Design Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Fitness App",
                description: "Designed an intuitive fitness tracking app with personalized workout plans and progress monitoring.",
                image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg"
              },
              {
                title: "Food Delivery App",
                description: "Created a seamless food ordering experience with real-time order tracking and easy payment.",
                image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg"
              },
              {
                title: "Social Platform",
                description: "Developed a modern social platform focused on community engagement and content sharing.",
                image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Process</h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Research & Strategy",
                description: "We start by understanding your users, market, and business goals to create a strategic foundation for your mobile app."
              },
              {
                step: "02",
                title: "UX Design & Prototyping",
                description: "Our designers create intuitive flows and interactive prototypes that align with mobile platform guidelines."
              },
              {
                step: "03",
                title: "UI Design & Testing",
                description: "We craft beautiful interfaces and test them with real users to ensure optimal usability and engagement."
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "After launch, we monitor performance and user feedback to continuously improve the experience."
              }
            ].map((phase, index) => (
              <div key={index} className="flex gap-8">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center text-brand-600 dark:text-brand-400 font-semibold">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
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
                  <p className="text-gray-600 dark:text-gray-400">Deep understanding of mobile user behavior</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">UX Architecture</h3>
                  <p className="text-gray-600 dark:text-gray-400">Intuitive navigation and user flows</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Visual Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">Beautiful, platform-specific UI design</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Prototyping</h3>
                  <p className="text-gray-600 dark:text-gray-400">Interactive prototypes for testing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">User Testing</h3>
                  <p className="text-gray-600 dark:text-gray-400">Comprehensive usability testing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-brand-600 dark:bg-brand-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Design System</h3>
                  <p className="text-gray-600 dark:text-gray-400">Complete mobile design system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-600 dark:from-blue-900 dark:via-indigo-900 dark:to-violet-900"></div>
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

export default MobileWebDesign;
