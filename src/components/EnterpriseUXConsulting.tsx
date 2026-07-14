import React from 'react';
import { ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import EnterpriseDashboardIllustration from './illustrations/EnterpriseDashboardIllustration';

interface EnterpriseUXConsultingProps {
  setCurrentPage: (page: string) => void;
}

const capabilities = [
  { label: 'Platform Redesign', body: 'End-to-end redesign of enterprise platforms with complex user roles, multi-tenant data models, and cross-functional workflows. From IA to interaction patterns to component systems.' },
  { label: 'UX Audit & Research', body: 'Heuristic audits, user interviews, usability testing, and quantitative analysis to identify where your product is losing users, and why. Prioritized findings with clear next steps.' },
  { label: 'Design Systems', body: 'Building scalable component libraries and design systems that increase shipping velocity, reduce inconsistency, and create the shared language design and engineering need to move fast.' },
  { label: 'Stakeholder Alignment', body: 'Facilitating design reviews, roadmap workshops, and cross-functional sessions to build consensus. Design decisions that stick because the right people were in the room.' },
  { label: 'AI/UX Strategy', body: 'Defining the experience strategy for AI features and agentic workflows. Trust models, interaction patterns, and human oversight design for enterprise AI products.' },
  { label: 'Design Leadership', body: 'Acting design director capacity: setting standards, reviewing work, mentoring junior designers, and providing the senior judgment that scales a team without adding headcount.' },
];

const process = [
  { step: '01', label: 'Discovery', body: 'Stakeholder interviews, user research, and a thorough review of existing product and analytics. Build a shared picture of the problem before touching any design tools.' },
  { step: '02', label: 'Definition', body: 'Frame the design problem correctly: user needs, business constraints, success criteria. The most valuable work in any project happens here.' },
  { step: '03', label: 'Design', body: 'From low-fidelity concept through high-fidelity specification. Tight feedback loops with product and engineering throughout, not a final handoff at the end.' },
  { step: '04', label: 'Delivery', body: 'Dev-ready specifications, component documentation, and continued support through implementation. Design does not end at Figma export.' },
];

const EnterpriseUXConsulting: React.FC<EnterpriseUXConsultingProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Enterprise UX Consulting' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Senior UX expertise for complex enterprise products.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
                We partner with enterprise product teams to redesign complex platforms, align stakeholders around design decisions, and build systems that scale with the business. Engagements range from focused audits to multi-month embedded partnerships.
              </p>
              <button
                onClick={() => { window.scrollTo(0, 0); setCurrentPage('contact'); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Discuss your project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <EnterpriseDashboardIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: '15+', label: 'Years enterprise UX' },
                  { stat: 'Sr/Dir', label: 'Seniority level' },
                  { stat: 'Remote', label: 'Collaboration model' },
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
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              What we bring to an enterprise engagement.
            </h2>
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
            <Eyebrow className="mb-3">How it works</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug">A process built around real collaboration.</h2>
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

      {/* Who this is for */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow className="mb-6">Who this is for</Eyebrow>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">The right fit for this engagement.</h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>Enterprise SaaS companies going through a platform redesign, modernization, or major feature expansion. Teams that need senior design judgment but not a full-time hire.</p>
                <p>Product organizations that have outgrown their current design capacity, where decisions are piling up, consistency is breaking down, and the design team needs a senior partner rather than more junior resources.</p>
                <p>Companies adopting AI into their product who need a partner that understands both the UX and the specific trust and interaction design challenges AI introduces.</p>
              </div>
            </div>
            <div>
              <Eyebrow className="mb-6">Engagement models</Eyebrow>
              <div className="space-y-px bg-line dark:bg-white/10">
                {[
                  { label: 'Project-based', body: 'Defined scope, timeline, and deliverables. Best for platform redesigns, design system builds, and bounded initiatives.' },
                  { label: 'Retainer', body: 'Ongoing access at a fixed weekly or monthly cadence. Best for teams that need steady senior design capacity across multiple initiatives.' },
                  { label: 'Audit + Roadmap', body: 'A focused engagement to review the current product and deliver a prioritized roadmap. Best as a starting point before a larger commitment.' },
                ].map((item) => (
                  <div key={item.label} className="bg-white dark:bg-neutral-950 p-6">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-2">{item.label}</p>
                    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related services"
        items={[
          { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design for software platforms.' },
          { id: 'agentic-experience', eyebrow: 'Service', label: 'Agentic Experience', description: 'AI & agent experience design service.' },
          { id: 'fractional-saas-designer', eyebrow: 'Service', label: 'Fractional SaaS Designer', description: 'Embedded senior design leadership on retainer.' },
        ]}
      />

      <SectionCTA
        heading="Ready to discuss your project?"
        body="We work with a limited number of enterprise clients at a time. Tell us about your product and what you're trying to accomplish."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="See Our Work"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default EnterpriseUXConsulting;
