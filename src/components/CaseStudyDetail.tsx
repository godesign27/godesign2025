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

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Solutions', pageId: 'solutions' }, { label: 'CoreTechs' }]}
            setCurrentPage={(p) => { setSelectedCaseStudy(null); setCurrentPage(p); }}
          />

          <Eyebrow className="mb-4">Case Study</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6 max-w-4xl">
            Transform Healthcare Decisions with Data-Driven Insights.
          </h1>
          <p className="text-xl text-muted dark:text-neutral-400 max-w-4xl mb-12">
            Unlock contract value, optimize performance, and manage population risk, all in one platform.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9 relative border border-line dark:border-white/10 overflow-hidden aspect-[4/3] lg:aspect-auto">
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/core-hero.png"
                alt="Healthcare Dashboard"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="lg:col-span-3 border border-line dark:border-white/10 p-6">
              <h2 className="text-lg font-semibold text-ink dark:text-white mb-4">SaaS Product Solution</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Role(s)</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Principal UX Designer + UX Director + Creative Director</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">The Client</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Gray Matter Analytics</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Tools</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Sketch, Figma, Zeplin, Teams, Jira, InVision</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Services</h4>
                  <ul className="text-sm text-muted dark:text-neutral-400 space-y-1">
                    <li>User Experience Design</li>
                    <li>User Interface Design</li>
                    <li>Design Library Creation</li>
                    <li>Prototype</li>
                    <li>Brand Development</li>
                    <li>Logo Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Duration</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Sept 2016 - Sept 2022</p>
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
            Provide patient management through intuitive design and powerful functionality.
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 max-w-3xl">
            A comprehensive solution that puts healthcare professionals first.
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
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/before.png"
                alt="Before"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-3 bg-tan dark:bg-neutral-900 p-8">
              <Tag>UX Design</Tag>
              <h3 className="text-lg font-semibold text-ink dark:text-white mt-6 mb-3">Principal UX/UI Designer</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Principal UX/UI Designer, we shaped CoreTechs' MVP by driving the complete design journey, translating business needs into a user-centered product through research, problem-solving, empathy, design iteration, and prototyping.
              </p>
            </div>
            <div className="lg:col-span-3 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-4 left-4 z-10"><Tag>Persona</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/healthcare-user.png"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements / Site Map */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UX Strategy</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/requirements.png"
                alt="Requirements"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10 flex gap-2"><Tag>UX Design</Tag><Tag>Site Map</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/site-map.png"
                alt="Site Map"
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

      {/* Wireframe / Color Harmony */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UX Design</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/wireframe.png"
                alt="Wireframe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UI Design</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/color-harmony%20(1).png"
                alt="Color Harmony"
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
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/colorpalette2.png"
              alt="Color Palette"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Button Component */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-6">
            <Tag>UI Design</Tag>
            <Tag>Component Definition</Tag>
          </div>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6">Button Component</h2>
          <div className="border border-line dark:border-white/10">
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/button-component.png"
              alt="Button Component"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Page Designs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-6">
            <Tag>UI Design</Tag>
            <Tag>Final Designs</Tag>
          </div>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6">Page Designs</h2>
          <div className="space-y-6">
            {[
              { src: 'Dashboard%20-%20Summary.png', alt: 'Dashboard Summary' },
              { src: 'Measure-detail-overview.png', alt: 'Measure Detail Overview' },
              { src: 'Measure-detailcard-practices.png', alt: 'Measure Detail Card Practices' },
              { src: 'Members.detail.png', alt: 'Members Detail' },
              { src: 'Population%20Builder%20Landing%20Page.png', alt: 'Population Builder Landing Page' },
            ].map((img) => (
              <div key={img.alt} className="border border-line dark:border-white/10">
                <ImageWithSkeleton
                  src={`https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/${img.src}`}
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

export default CaseStudyDetail;
