import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionCTA from './SectionCTA';

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
    className="group cursor-pointer bg-white dark:bg-neutral-950 border border-line dark:border-white/10 overflow-hidden transition-all hover:border-neutral-400 dark:hover:border-white/20"
    onClick={onClick}
  >
    <div className="aspect-[4/3] overflow-hidden border-b border-line dark:border-white/10">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />
    </div>
    <div className="p-6 space-y-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium px-2.5 py-1 border border-line dark:border-white/10 text-muted dark:text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-ink dark:text-white">{title}</h3>
      <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{description}</p>
      <span className="inline-flex items-center gap-1 text-xs font-medium text-blue dark:text-lavender">
        View case study <ArrowRight className="w-3 h-3" />
      </span>
    </div>
  </div>
);

const titleToCaseStudyPage: Record<string, string> = {
  'CoreTechs SaaS Healthcare Product': 'case-study-1',
  'Accenture - Employee Onboarding': 'case-study-2',
  'Jim Beam - The Cocktail Project': 'case-study-3',
};

const Solutions: React.FC<SolutionsProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const featuredCaseStudies = [
    {
      title: 'CoreTechs SaaS Healthcare Product',
      description: 'Improving value-based healthcare patient management through an intuitive interface design.',
      image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/core-hero.png',
      tags: ['Healthcare', 'UX/UI Design', 'Web App'],
    },
    {
      title: 'Accenture - Employee Onboarding',
      description: 'Designed an intuitive onboarding experience that guides new employees through common tasks and pain points.',
      image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/onboarding-accenture-hero.png',
      tags: ['Enterprise', 'UX/UI Design', 'Service Design'],
    },
    {
      title: 'Jim Beam - The Cocktail Project',
      description: 'Designed a new recipe responsive web site that seduces and entices patrons to create cocktails.',
      image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg',
      tags: ['Beverage', 'UX/UI Design', 'Service Design'],
    },
  ];

  const handleCaseStudyClick = (title: string) => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(title);
    const pageKey = titleToCaseStudyPage[title];
    if (pageKey) setCurrentPage(pageKey);
  };

  return (
    <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Solutions</p>
              <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6">
                Our Solutions in Action.
              </h1>
              <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
                Explore case studies to see how we've helped businesses across industries transform their digital presence, from enterprise SaaS to consumer web.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
              {[
                { stat: '3', label: 'Featured case studies' },
                { stat: '6+', label: 'Portfolio projects' },
                { stat: '15+', label: 'Years of work' },
              ].map((item) => (
                <div key={item.label} className="bg-tan dark:bg-neutral-900 p-6">
                  <p className="text-xl font-semibold text-ink dark:text-white mb-1">{item.stat}</p>
                  <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Case Studies</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Featured Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
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

      {/* Design Solutions portfolio */}
      <section className="py-24 bg-tan dark:bg-neutral-900 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Portfolio</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Design Solutions</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {[
              { title: 'Accenture - Onboarding Redesign', description: "Redesigned Accenture's onboarding site to create a welcoming first impression. Provided clear, timely info to help new hires prepare.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/accenture.png', tags: ['Enterprise', 'Web Design'] },
              { title: 'TransUnion Redesign', description: 'Designed a responsive, user-friendly site that works seamlessly on desktop and mobile. Focused on what users need.', image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/TransUnion.png', tags: ['Enterprise', 'Web Design'] },
              { title: 'Aramark Redesign', description: "Redesigned Aramark's site with clear navigation, bold visuals, and storytelling that showcased their services.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/aramark.png', tags: ['Enterprise', 'Web Design'] },
              { title: 'Chrysler Redesign', description: "Reimagined Chrysler's site with user-first design, reorganizing content to match user needs with bold typography and dynamic photography.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Chrysler-web-design.png', tags: ['Automotive', 'Web Design'] },
              { title: 'Accenture - Leave of Absence', description: "Redesigned Accenture's leave of absence experience with a responsive, user-centered solution and custom design patterns.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/accenture-employeeleave.png', tags: ['HR Solutions', 'Web App'] },
              { title: 'Atom Manager Redesign', description: 'Reimagined the Atom Manager marketing site with a new logo and CRM form flow for lead generation.', image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Atom-Manager.png', tags: ['SaaS', 'Web Design'] },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-neutral-950 overflow-hidden">
                <div className="aspect-[4/3] bg-tan dark:bg-neutral-900 relative overflow-hidden border-b border-line dark:border-white/10">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 border border-line dark:border-white/10 text-muted dark:text-neutral-500">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-ink dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Let's create something beautiful."
        body="We'd love to learn more about how we can help your business achieve its goals through thoughtful design."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="View Services"
        secondaryPage="services"
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Solutions;
