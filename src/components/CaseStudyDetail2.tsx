import React from 'react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';
import PageBreadcrumb from './PageBreadcrumb';
import Eyebrow from './Eyebrow';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1.5 bg-ink dark:bg-white text-white dark:text-ink text-xs font-medium">
    {children}
  </span>
);

const CaseStudyDetail2: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Solutions', pageId: 'solutions' }, { label: 'Accenture' }]}
            setCurrentPage={(p) => { setSelectedCaseStudy(null); setCurrentPage(p); }}
          />

          <Eyebrow className="mb-4">Case Study</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6 max-w-4xl">
            Redesigning the Onboarding Journey to Inspire Confidence from Day One.
          </h1>
          <p className="text-xl text-muted dark:text-neutral-400 max-w-4xl mb-12">
            The Accenture Employee Onboarding experience for its 500K employees was reimagined to provide clarity, connection, and confidence for every new hire.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9 relative border border-line dark:border-white/10 overflow-hidden aspect-[4/3] lg:aspect-auto">
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/onboarding-accenture-hero.png"
                alt="Employee Onboarding"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="lg:col-span-3 border border-line dark:border-white/10 p-6">
              <h2 className="text-lg font-semibold text-ink dark:text-white mb-4">Website Redesign</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Role(s)</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Senior UX/UI Designer</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">The Client</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Accenture</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Tools</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Figma, Teams, Jira, PowerPoint</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Services</h4>
                  <ul className="text-sm text-muted dark:text-neutral-400 space-y-1">
                    <li>User Experience Design</li>
                    <li>User Interface Design</li>
                    <li>Design Library New Pattern Creation</li>
                    <li>Prototype</li>
                    <li>Brand Extension</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Duration</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">October 2016 - October 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-16 bg-tan dark:bg-neutral-900 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tag>The Strategy</Tag>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mt-6 mb-4">
            Provide employee onboarding through intuitive design and powerful functionality.
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 max-w-3xl">
            The redesigned onboarding platform for Accenture aimed to simplify complexity and enhance the employee journey from offer to day one. Through clear task flows, accessible design, and personalized content, the solution helped new hires feel prepared, welcomed, and connected, while driving operational efficiency for HR stakeholders.
          </p>
        </div>
      </section>

      {/* Before / UX Design / Persona */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-4 left-4 z-10"><Tag>Before</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/before-acc.png"
                alt="Before"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-3 bg-tan dark:bg-neutral-900 p-8">
              <Tag>UX Design</Tag>
              <h3 className="text-lg font-semibold text-ink dark:text-white mt-6 mb-3">Senior UX/UI Designer</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Senior UX Designer, we reimagined Accenture's onboarding site to make the new hire experience clearer, faster, and more welcoming. We streamlined task navigation, improved key messaging, and built a consistent, accessible design system, backed by user research and high-fidelity prototypes to support a smooth pre-boarding journey.
              </p>
            </div>
            <div className="lg:col-span-3 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-4 left-4 z-10"><Tag>Persona</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/accenture-persona.png"
                alt="New Hire Persona"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Map / Photography */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UX Strategy</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/empathy-map-acc.png"
                alt="Empathy Map"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UI Design</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/photography.png"
                alt="Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-tan dark:bg-neutral-900 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tag>Design Direction</Tag>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mt-6 mb-12">Design Principles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {[
              { title: 'Empowering', tags: ['Insightful', 'Meaningful', 'Useful'] },
              { title: 'Harmonious', tags: ['Intentional', 'Minimal', 'Elegant'] },
              { title: 'Simple', tags: ['Focused', 'Efficient', 'Prioritized', 'Progressive Disclosure'] },
              { title: 'Learnable', tags: ['Intuitive', 'Familiar', 'Predictable', 'Usable'] },
            ].map((p) => (
              <div key={p.title} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-2xl font-semibold text-ink dark:text-white mb-6">{p.title}</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-base text-muted dark:text-neutral-400">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframe / Photography */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UX Design</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/wireframe-site.png"
                alt="Wireframe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UI Design</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/photography.png"
                alt="Photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tag>UI Design</Tag>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mt-6 mb-6">Color Palette</h2>
          <div className="border border-line dark:border-white/10">
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/color-palette.png"
              alt="Color Palette"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Task Card Component */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-6">
            <Tag>UI Design</Tag>
            <Tag>Component Definition</Tag>
          </div>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6">Task Card Component</h2>
          <div className="border border-line dark:border-white/10">
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/task-cards3.png"
              alt="Task Cards Component"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Page Designs — corrected to Accenture screenshots, not the leftover CoreTechs ones */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-6">
            <Tag>UI Design</Tag>
            <Tag>Final Designs</Tag>
          </div>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6">Page Designs</h2>
          <div className="space-y-6">
            {[
              { src: 'Countdown-Home-29-left-get.png', alt: 'Onboarding Home' },
              { src: 'Countdown-Home-Redefine-1f.png', alt: 'Onboarding Redefine' },
              { src: 'Countdown-Home-Redefine-1a.png', alt: 'Onboarding Redefine Detail' },
              { src: 'Countdown-SSO.png', alt: 'Single Sign-On' },
              { src: 'Countdown-Task%20list-inprogress-toast.png', alt: 'Task List In Progress' },
              { src: 'onboarding-accenture-hero.png', alt: 'Onboarding Hero' },
            ].map((img) => (
              <div key={img.alt} className="border border-line dark:border-white/10">
                <ImageWithSkeleton
                  src={`https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/${img.src}`}
                  alt={img.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail2;
