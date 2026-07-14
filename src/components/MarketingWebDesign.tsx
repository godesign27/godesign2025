import React from 'react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import MarketingPageIllustration from './illustrations/MarketingPageIllustration';

interface MarketingWebDesignProps {
  setCurrentPage: (page: string) => void;
}

const deliverables = [
  { label: 'Messaging architecture', body: 'Before any design begins: what are we saying, to whom, in what order. Mapping the narrative structure that the visual design will express.' },
  { label: 'Page design & layout', body: 'High-fidelity page designs for homepage, product pages, pricing, and supporting pages. Every layout decision made with the conversion goal in mind.' },
  { label: 'Design system for web', body: 'A component-based design system sized for the marketing site: reusable sections, consistent tokens, and documentation the team can extend.' },
  { label: 'Responsive across breakpoints', body: 'Desktop, tablet, and mobile designed in full, not desktop first with mobile as an afterthought.' },
  { label: 'CTA and conversion design', body: 'Primary and secondary CTAs designed with intent. Button hierarchy, form design, and conversion flow optimization as part of the core work.' },
  { label: 'Dev-ready handoff', body: 'Figma files organized for component-based development. Annotated with spacing, interaction, and animation specs that engineers can build from directly.' },
];

const MarketingWebDesign: React.FC<MarketingWebDesignProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Marketing Web Design' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Conversion-focused websites that tell your story.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Marketing site design that starts with narrative architecture: what you are saying and why it should matter to the reader, before any pixel is placed. The result is websites that convert because they communicate clearly, not because they look impressive.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <MarketingPageIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: 'Story', label: 'Narrative-first approach' },
                  { stat: 'Convert', label: 'Conversion design focus' },
                  { stat: 'Ship', label: 'Dev-ready handoff' },
                ].map((item) => (
                  <div key={item.label} className="bg-tan-100 dark:bg-neutral-900 px-5 py-4">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-0.5">{item.stat}</p>
                    <p className="text-xs text-muted dark:text-neutral-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">What's included</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">What we deliver.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {deliverables.map((d) => (
              <div key={d.label} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{d.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-6">Approach</Eyebrow>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                A website is a narrative, not a page layout.
              </h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>Most marketing sites are designed section by section: hero, features, testimonials, pricing, CTA. The sections are fine in isolation, the problem is they do not add up to an argument. Visitors leave because they did not get a clear answer to the question they came with.</p>
                <p>We start every marketing site engagement with a narrative architecture phase: mapping the questions a visitor arrives with, the order in which they need to be answered, and the moment they have enough information to act. The page layout is the expression of that architecture, not the other way around.</p>
              </div>
            </div>
            <div className="space-y-px bg-line dark:bg-white/10">
              {[
                { label: 'Who this is for', body: 'SaaS companies and professional services firms that need a website that sells a specific value proposition to a specific buyer, not a generic presence that says nothing to no one.' },
                { label: 'What we are not', body: 'A generic web shop. We design and specify with strategy behind every decision, and every engagement includes dev-ready handoff that any front-end team can build from.' },
                { label: 'Timeline', body: 'A typical marketing site engagement runs 4-8 weeks depending on scope. Strategy and messaging first, then design, then handoff.' },
              ].map((item) => (
                <div key={item.label} className="bg-white dark:bg-neutral-950 p-6">
                  <p className="text-sm font-semibold text-ink dark:text-white mb-2">{item.label}</p>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design for software platforms.' },
          { id: 'mobile-web-design', eyebrow: 'Service', label: 'Mobile & Web Design', description: 'Responsive experiences across all devices.' },
          { id: 'fractional-saas-designer', eyebrow: 'Service', label: 'Fractional SaaS Designer', description: 'Embedded senior design leadership on retainer.' },
        ]}
      />

      <SectionCTA
        heading="Ready to redesign your marketing site?"
        body="Tell us about your product, your buyers, and what story you need to tell. We'll tell you how we would approach it."
        primaryLabel="Let's Talk"
        primaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default MarketingWebDesign;
