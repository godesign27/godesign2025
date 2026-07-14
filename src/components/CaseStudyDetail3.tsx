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

const CaseStudyDetail3: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Solutions', pageId: 'solutions' }, { label: 'Jim Beam' }]}
            setCurrentPage={(p) => { setSelectedCaseStudy(null); setCurrentPage(p); }}
          />

          <Eyebrow className="mb-4">Case Study</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6 max-w-4xl">
            A frictionless journey that seduces and entices patrons to create cocktails.
          </h1>
          <p className="text-xl text-muted dark:text-neutral-400 max-w-4xl mb-12">
            Mobile-led cards, trending rails, and contextual CTAs guide exploration. The recipe page spotlights essentials (glass type, skill level, main spirit) with one-tap actions to save, share, or print, designed to move users from browse to pick to pour in just a few taps.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9 relative border border-line dark:border-white/10 overflow-hidden aspect-[4/3] lg:aspect-auto">
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg"
                alt="The Cocktail Project by Jim Beam"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>

            <div className="lg:col-span-3 border border-line dark:border-white/10 p-6">
              <h2 className="text-lg font-semibold text-ink dark:text-white mb-4">New Site Responsive Design</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Role(s)</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Principal UX Designer + UX Director + Creative Visionary</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">The Client</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Suntory Lab + Jim Beam</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Tools</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Sketch, InVision Prototyping, Zeplin, MS Word, Slack, PowerPoint, Adobe Suite</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Services</h4>
                  <ul className="text-sm text-muted dark:text-neutral-400 space-y-1">
                    <li>User Experience Design</li>
                    <li>User Research</li>
                    <li>Content Strategy</li>
                    <li>Design Library Creation</li>
                    <li>Prototype</li>
                    <li>Brand Development</li>
                    <li>Logo Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-1">Duration</h4>
                  <p className="text-sm text-muted dark:text-neutral-400">Sept 2016 - Sept 2017</p>
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
            The right path for every palate.
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 max-w-3xl">
            Build the homepage as a gateway for Recipe Searchers, Cocktail Lifestylists, and Spirits Enthusiasts. When the audience sees themselves instantly, they stay, explore, and make a drink, exactly the behavior we designed for.
          </p>
        </div>
      </section>

      {/* Built from scratch / UX Design / Persona */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-6 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-4 left-4 z-10"><Tag>Built from Scratch</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/04-TCP_desktop_wireframe2.png"
                alt="Before"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="lg:col-span-3 bg-tan dark:bg-neutral-900 p-8">
              <Tag>UX Design</Tag>
              <h3 className="text-lg font-semibold text-ink dark:text-white mt-6 mb-3">Principal UX/UI Designer</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Principal UX/UI Designer, we shaped the solution by driving the complete design journey, translating business needs into a user-centered solution. We created a sitemap, wireframes, and moved through problem-solving, empathy, design iteration, and prototyping via user testing research.
              </p>
            </div>
            <div className="lg:col-span-3 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-4 left-4 z-10"><Tag>Persona</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/persona2.png"
                alt="Cocktail Lifestylist"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategy / Site Map */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UX Strategy</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/strategy_b.png"
                alt="Strategy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10 flex gap-2"><Tag>UX Design</Tag><Tag>Site Map</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/sitemap.png"
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

      {/* Wireframe / User Testing */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>UX Design</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/04-TCP_desktop_wireframe.jpg"
                alt="Wireframe"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3]">
              <span className="absolute top-4 left-4 z-10"><Tag>User Testing</Tag></span>
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/user_testing_quotes.png"
                alt="User Testing Quotes"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Home Page Solution */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tag>UI Design</Tag>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mt-6 mb-6">Home Page Solution</h2>
          <div className="border border-line dark:border-white/10">
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg"
              alt="Home Page Solution"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Recipe Detail */}
      <section className="py-16 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 mb-6">
            <Tag>UI Design</Tag>
            <Tag>Final Design</Tag>
          </div>
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6">Recipe Detail</h2>
          <div className="border border-line dark:border-white/10">
            <ImageWithSkeleton
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_recipe_basic_v1.jpg"
              alt="Recipe Detail"
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
              { src: 'cp_mybar.png', alt: 'My Bar', wide: true },
              { src: 'TCP_desktop_registration_0002_Layer%20Comp%203.jpg', alt: 'Registration' },
              { src: 'TCP_desktop_brand_landing_simple_v1.jpg', alt: 'Brand Landing' },
              { src: 'TCP_desktop_recipe_results_0004_Layer%20Comp%205.jpg', alt: 'Recipe Results' },
              { src: '10-TCP_mobile_recipe.jpg', alt: 'Mobile Recipe' },
            ].map((img) => (
              <div key={img.alt} className="border border-line dark:border-white/10">
                <ImageWithSkeleton
                  src={`https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/${img.src}`}
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

export default CaseStudyDetail3;
