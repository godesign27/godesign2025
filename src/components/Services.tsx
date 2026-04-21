import React from 'react';
import { Globe, Box, Smartphone, ClipboardList, Grid, Briefcase } from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  const handleSolutionsClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('solutions');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400 dark:from-emerald-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-32">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white tracking-tight mb-6">
              Solving Real Problems.<br />
              Designing Exceptional Experiences.
            </h1>
            <p className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl">
              At GO Design, we bring clarity and simplicity to complexity. Our suite of 
              Experience Design services combines deep expertise with human-centered 
              design principles to help businesses innovate, connect with users and grow 
              their audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-regular text-gray-900 dark:text-white mb-16">Services</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* UX/UI Design Consulting */}
            <div>
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <ClipboardList className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">UX/UI Design Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Transform your digital presence with user-focused solutions. From crafting intuitive user 
                flows to building robust design systems, our consulting ensures seamless, engaging, and 
                accessible user experiences.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• User Flow</li>
                <li>• Information Architecture</li>
                <li>• UX/UI Design</li>
                <li>• Wireframing</li>
                <li>• Prototyping</li>
                <li>• Design Systems</li>
              </ul>
            </div>

            {/* Experience Research */}
            <div>
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <Grid className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Experience Research</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Discover insights that matter. We combine heuristic evaluations, user personas, and 
                competitive analysis to understand your audience and refine your product for peak 
                usability.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Heuristic Analysis</li>
                <li>• Competitive Analysis</li>
                <li>• User Testing</li>
                <li>• User Personas</li>
                <li>• Research Analysis</li>
              </ul>
            </div>

            {/* Brand & Identity Design */}
            <div>
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Brand & Identity Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Develop a strong, cohesive brand identity that resonates with your audience. We create 
                comprehensive brand systems that stand out in today's digital landscape.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Logo Design</li>
                <li>• Color Definition</li>
                <li>• Typography</li>
                <li>• Graphic Imagery</li>
                <li>• Brand Guidelines</li>
                <li>• Visual Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-16">Specialized Services</h2>
          
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
                onClick={() => setCurrentPage('marketing-web-design')}
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

            {/* Mobile App Design */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mobile App Design</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Create exceptional mobile experiences that users love. Our mobile-first approach ensures your app is intuitive, engaging, and optimized for all devices.
              </p>
              <button 
                onClick={() => setCurrentPage('mobile-web-design')}
                className="text-brand-600 dark:text-brand-400 font-medium hover:text-brand-700 dark:hover:text-brand-300 rounded-full"
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Process</h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "We start by understanding your business, goals, and target audience to create a strategic foundation for your project."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Our designers create beautiful, functional layouts that align with your brand and optimize for your goals."
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We build your solution using modern technologies, ensuring it's fast, secure, and works flawlessly across all devices."
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "After launch, we monitor performance and make data-driven improvements to maximize results."
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
                  <p className="text-gray-600 dark:text-gray-300">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
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

export default Services;