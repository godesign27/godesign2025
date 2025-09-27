import React from 'react';
import { ArrowRight } from 'lucide-react';

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

  const saasProducts = [
    {
      title: "Z5-Field Deployment",
      description: "Redesigned a Salesforce deployment tool that major healthcare companies use to management territory sales.",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg",
      tags: ["Enterprise", "SaaS", "UX/UI Design"]
    },
    {
      title: "Atom Manager Product",
      description: "Redesigned a SaaS product Tax professionals Client Management tool.",
      image: "https://images.pexels.com/photos/8567472/pexels-photo-8567472.jpeg",
      tags: ["Finance", "SaaS", "UX/UI Design"]
    },
    {
      title: "UL Complaint Product MVP",
      description: "Designed a white label UL tool for their clients to identify and handled customer complaints.",
      image: "https://images.pexels.com/photos/8567482/pexels-photo-8567482.jpeg",
      tags: ["Enterprise", "SaaS", "UX/UI Design"]
    }
  ];

  const webDesigns = [
    {
      title: "Accenture - Onboarding Redesign",
      description: "Redesigned Accenture's onboarding site to create a welcoming first impression. Provided clear, timely info to help new hires prepare for their start date and strengthen their connection to the company.",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      tags: ["Enterprise", "Web Design", "UX/UI"]
    },
    {
      title: "Dremel.com Redesign",
      description: "Designed a responsive, user-friendly site that works seamlessly on desktop and mobile. We transformed the experience to focus on what users need, rather than just how the business operates.",
      image: "https://images.pexels.com/photos/3182813/pexels-photo-3182813.jpeg",
      tags: ["E-commerce", "Web Design", "UX/UI"]
    },
    {
      title: "Aramark Redesign",
      description: "Focused on users, we redesigned Aramark's site with clear navigation, bold visuals, and storytelling that showcased their services while staying true to their brand pillars.",
      image: "https://images.pexels.com/photos/3182814/pexels-photo-3182814.jpeg",
      tags: ["Enterprise", "Web Design", "UX/UI"]
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
              Our Solutions<br />in Action.
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

      {/* SaaS Product Solutions */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">SaaS Product Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasProducts.map((product, index) => (
              <CaseStudyCard
                key={index}
                {...product}
                onClick={() => handleCaseStudyClick(product.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Web Design Solutions */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Web Design Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webDesigns.map((design, index) => (
              <CaseStudyCard
                key={index}
                {...design}
                onClick={() => handleCaseStudyClick(design.title)}
              />
            ))}
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