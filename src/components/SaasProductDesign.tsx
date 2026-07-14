import React from 'react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import SaasDashboardIllustration from './illustrations/SaasDashboardIllustration';

interface SaasProductDesignProps {
  setCurrentPage: (page: string) => void;
}

const capabilities = [
  { label: 'User Research', body: 'Interviews, usability testing, and analytics review to understand how users actually work, not how we think they work. Research that leads to decisions, not decks.' },
  { label: 'Information Architecture', body: 'Logical structure and navigation flow built around user mental models and task frequency. Role-based IA for multi-tenant platforms with different user types.' },
  { label: 'Interaction Design', body: 'Micro-interactions, workflow patterns, and progressive disclosure that make complex functionality feel intuitive and reduce cognitive load on repeat tasks.' },
  { label: 'Design Systems', body: 'Scalable component libraries with token architecture, consistent interaction patterns, and documentation that design and engineering both actually use.' },
  { label: 'Prototyping', body: 'Interactive prototypes for testing and stakeholder alignment, from low-fidelity concept through high-fidelity specification, matched to what each stage needs.' },
  { label: 'Developer Handoff', body: 'Detailed specifications, component documentation, and continued support through implementation. Design does not end at Figma export.' },
];

const process = [
  { step: '01', label: 'Research & Strategy', body: 'Stakeholder interviews, user research, and analytics review to build a shared picture of what users need and where the product is currently failing them.' },
  { step: '02', label: 'UX Architecture', body: 'Design the core information architecture and workflow patterns. The structural work that determines whether the product makes sense, before any visual design.' },
  { step: '03', label: 'UI Design & Systems', body: 'High-fidelity interfaces built within or alongside a design system. Consistency enforced through components, not manual review.' },
  { step: '04', label: 'Testing & Iteration', body: 'Usability testing against real tasks with real users. Findings fed directly back into design, not filed and forgotten.' },
];

const portfolio = [
  {
    tag: 'Enterprise',
    image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Ion-SaaS-design.png',
    alt: 'UL SaaS Tool',
    title: 'UL SaaS Tool',
    description: 'An MVP design for UL clients to perform compliance analysis.',
  },
  {
    tag: 'Government',
    image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Atom-Manager.png',
    alt: 'Atom Manager',
    title: 'Atom Manager SaaS Application Tool',
    description: 'Redesigned a user-friendly SaaS tool. Improved the UX/UI design patterns being used to make user tasks more intuitive, predictable, and easy to use.',
  },
  {
    tag: 'Healthcare',
    image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/ZS-Deployment.png',
    alt: 'ZS SaaS Redesign',
    title: 'ZS SaaS Product',
    description: 'Spent eight years helping ZS transform their SaaS deployment platform, advocating for a modern design system and shaping user-focused experiences that aligned client needs with business goals.',
  },
];

const SaasProductDesign: React.FC<SaasProductDesignProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'SaaS Product Design' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                SaaS product design that drives growth.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                We design intuitive, scalable SaaS products through deep user research, strategic information architecture, and tight collaboration with engineering, from the first wireframe to the last component spec.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <SaasDashboardIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: '15+', label: 'Years SaaS UX' },
                  { stat: 'B2B', label: 'Enterprise focus' },
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

      {/* Capabilities */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Capabilities</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">What's included.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {capabilities.map((cap) => (
              <div key={cap.label} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{cap.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Process</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">How we approach a SaaS design engagement.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {process.map((p) => (
              <div key={p.step} className="bg-white dark:bg-neutral-950 p-8">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">{p.step}</p>
                <h3 className="text-sm font-semibold text-blue dark:text-lavender uppercase tracking-wider mb-3">{p.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Sample Work</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">A sample of SaaS design solutions.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {portfolio.map((item) => (
              <div key={item.title} className="bg-white dark:bg-neutral-950">
                <div className="aspect-[4/3] bg-tan dark:bg-neutral-900 relative overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest border border-blue/30 dark:border-lavender/30 px-2 py-1 bg-white dark:bg-neutral-950">
                    {item.tag}
                  </span>
                  <img src={item.image} alt={item.alt} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-ink dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          { id: 'enterprise-ux-consulting', eyebrow: 'Service', label: 'Enterprise UX Consulting', description: 'Senior UX expertise for complex enterprise products.' },
          { id: 'agentic-experience', eyebrow: 'Service', label: 'Agentic Experience', description: 'AI-native product design and UX leadership.' },
          { id: 'fractional-saas-designer', eyebrow: 'Service', label: 'Fractional SaaS Designer', description: 'Embedded senior design leadership on retainer.' },
        ]}
      />

      <SectionCTA
        heading="Ready to improve your SaaS product?"
        body="Tell us about your product, your users, and where things are breaking down. We'll tell you what good looks like and how to get there."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="See Solutions"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default SaasProductDesign;
