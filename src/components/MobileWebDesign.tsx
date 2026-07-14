import React from 'react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import ResponsiveDevicesIllustration from './illustrations/ResponsiveDevicesIllustration';

interface MobileWebDesignProps {
  setCurrentPage: (page: string) => void;
}

const deliverables = [
  { label: 'Responsive web design', body: 'Pixel-precise layouts that work across breakpoints, not just desktop shrunk to mobile, but experiences designed from the smallest screen up.' },
  { label: 'Mobile app UX/UI', body: 'Native iOS and Android patterns applied with intention. Platform conventions respected where they serve the user, broken where they would limit the experience.' },
  { label: 'Cross-device user flows', body: 'Mapping how users move between devices across a session, starting on phone, completing on desktop, and designing the handoff moments that make multi-device use seamless.' },
  { label: 'Touch interaction design', body: 'Gesture patterns, touch targets, and interaction models designed for the constraints and capabilities of touch input: thumbs, gloves, one-handed use.' },
  { label: 'Performance-aware design', body: 'Design decisions that account for real-world network conditions, device memory constraints, and the performance budget engineering works within.' },
  { label: 'Component-ready specs', body: 'Design files structured for component-based development: named layers, consistent spacing tokens, interaction annotations, and dev-ready handoff.' },
];

const MobileWebDesign: React.FC<MobileWebDesignProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Mobile & Web Design' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Responsive experiences that shine on every device.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
                Mobile and responsive web design done with the same rigor we bring to enterprise products: real user research, performance-aware decisions, and component-ready handoff that engineering can actually build.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <ResponsiveDevicesIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: 'Mobile', label: 'First approach' },
                  { stat: 'iOS', label: 'and Android' },
                  { stat: 'All', label: 'Breakpoints covered' },
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
            <Eyebrow className="mb-3">Deliverables</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">What we bring to mobile and web projects.</h2>
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
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">Mobile-first is a constraint, not a checkbox.</h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>Starting from the smallest screen forces good information hierarchy decisions. If it works at 375px, it will work everywhere. If you have to hide content on mobile, you probably have too much of it.</p>
                <p>We design for the real conditions in which mobile products are used: outdoors in bright light, on a crowded train with one hand occupied, with slow network connections, with notifications interrupting the flow. Constraints that reveal which design decisions actually hold up.</p>
              </div>
            </div>
            <div className="space-y-px bg-line dark:bg-white/10">
              {[
                { label: 'Accessibility first', body: 'Touch targets, color contrast, and screen reader support are not afterthoughts. They are the starting conditions for every mobile design we build.' },
                { label: 'Real device testing', body: 'Designs are reviewed on physical devices, not just browser simulators. The difference matters more than most teams realize.' },
                { label: 'Platform conventions matter', body: 'iOS and Android users have different expectations. We apply platform patterns where they serve the user and diverge deliberately when the experience requires it.' },
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
          { id: 'marketing-web-design', eyebrow: 'Service', label: 'Marketing Web Design', description: 'Conversion-focused websites that tell your story.' },
          { id: 'agentic-experience', eyebrow: 'Service', label: 'Agentic Experience', description: 'AI-native product design and UX leadership.' },
        ]}
      />

      <SectionCTA
        heading="Building something for mobile or web?"
        body="Tell us about your product, your users, and what you're trying to accomplish. We'll tell you what good looks like."
        primaryLabel="Let's Talk"
        primaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default MobileWebDesign;
