import React from 'react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';

interface HowIWorkProps {
  setCurrentPage: (page: string) => void;
}

const phases = [
  {
    number: '01',
    label: 'Discover',
    heading: 'Understand before designing',
    body: "We spend real time understanding the problem space before touching any design tools. This means stakeholder interviews, user research, competitive analysis, and a close read of existing data. The goal is to arrive at the first sketch with a well-formed point of view, not to discover the problem through pixels.",
    outputs: ['Stakeholder alignment map', 'User research synthesis', 'Opportunity framing', 'Design brief'],
  },
  {
    number: '02',
    label: 'Define',
    heading: 'Frame the right problem',
    body: "Most design failures are problem framing failures. Before moving to solutions, we define success criteria, user needs, constraints, and the edge cases that will determine whether the design holds up at scale. This is where information architecture and flow diagrams earn their keep.",
    outputs: ['Problem statement', 'User flow diagrams', 'IA mapping', 'Success metrics'],
  },
  {
    number: '03',
    label: 'Explore',
    heading: 'Think fast in low fidelity',
    body: "We work in low fidelity before committing to detail. Rough wireframes and concept sketches let the team stress-test direction without the friction of high-polish screens. This is intentionally disposable work, the point is to find the answer, not to produce artifacts.",
    outputs: ['Concept sketches', 'Wireframe exploration', 'Concept testing', 'Direction decision'],
  },
  {
    number: '04',
    label: 'Build',
    heading: 'Design with engineers, not for them',
    body: "We embed alongside engineers from the start. Handoff friction is a design failure we take personally. We treat implementation feasibility as a design constraint, not an afterthought, which means fewer surprises in development, better outcomes in production, and a team that trusts each other.",
    outputs: ['High-fidelity UI', 'Component specs', 'Interaction details', 'Dev-ready handoff'],
  },
  {
    number: '05',
    label: 'Ship & Learn',
    heading: 'Iterate from real signal',
    body: "Shipped and improved is better than perfect and delayed. We work in tight cycles, watch how real users interact with the product, gather signal from support channels and analytics, and refine continuously. The product is never done, the design practice should reflect that.",
    outputs: ['Launch review', 'Usage analysis', 'Iteration backlog', 'Next cycle brief'],
  },
];

const tools = [
  { category: 'Design', items: ['Figma', 'FigJam', 'Framer'] },
  { category: 'Research', items: ['Maze', 'Hotjar', 'UserTesting'] },
  { category: 'Collaboration', items: ['Notion', 'Linear', 'Slack'] },
  { category: 'Handoff', items: ['Figma Dev Mode', 'Storybook', 'Zeroheight'] },
];

const HowIWork: React.FC<HowIWorkProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[
              { label: 'Perspectives', pageId: 'perspectives' },
              { label: 'How We Work' },
            ]}
            setCurrentPage={setCurrentPage}
          />
          <div className="pt-8 max-w-3xl">
            <Eyebrow className="mb-4">Process</Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
              From ambiguous problem to shipped product.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
              Our process is not a waterfall. It's a set of disciplines we apply in order, at the right depth, for the problem at hand. Here's how a typical engagement moves from discovery to delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Process phases */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-px bg-line dark:bg-white/10">
            {phases.map((phase) => (
              <div
                key={phase.number}
                className="grid lg:grid-cols-5 gap-px bg-line dark:bg-white/10"
              >
                {/* Number + label */}
                <div className="bg-white dark:bg-neutral-950 p-8 lg:p-10 flex flex-col justify-between">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">
                    {phase.number}
                  </p>
                  <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest">
                    {phase.label}
                  </p>
                </div>
                {/* Content */}
                <div className="lg:col-span-2 bg-white dark:bg-neutral-950 p-8 lg:p-10">
                  <h2 className="text-lg font-semibold text-ink dark:text-white mb-4 leading-snug">
                    {phase.heading}
                  </h2>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                    {phase.body}
                  </p>
                </div>
                {/* Outputs */}
                <div className="lg:col-span-2 bg-tan dark:bg-neutral-900 p-8 lg:p-10">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">
                    Typical outputs
                  </p>
                  <ul className="space-y-2">
                    {phase.outputs.map((o) => (
                      <li key={o} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue dark:bg-lavender mt-2 flex-shrink-0" />
                        <span className="text-sm text-ink dark:text-white">{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration principles */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">How we collaborate</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white max-w-xl leading-snug">
              Design doesn't happen in isolation.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {[
              {
                heading: 'With product managers',
                body: "We treat the product brief as a starting hypothesis, not a spec. Our job is to pressure-test it, to find the gaps, surface the user needs the roadmap didn't account for, and help build the case for decisions that affect the experience.",
              },
              {
                heading: 'With engineers',
                body: "Engineers are design partners, not recipients of finished work. We share work in progress early, ask about constraints before committing to patterns, and stay available through implementation. The design is not done when Figma is done.",
              },
              {
                heading: 'With stakeholders',
                body: 'We communicate design decisions in business language. Not "the hierarchy is clearer" but "users found the action they needed 40% faster in testing." Stakeholder alignment is a design skill, not an interruption to design work.',
              },
            ].map((item) => (
              <div key={item.heading} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{item.heading}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Tooling</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">
              What we use.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {tools.map((group) => (
              <div key={group.category} className="bg-white dark:bg-neutral-950 p-8">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm font-medium text-ink dark:text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          {
            id: 'perspectives-our-philosophy',
            eyebrow: 'Philosophy',
            label: 'Our Philosophy',
            description: 'The principles behind every design decision we make.',
          },
          {
            id: 'strategy-sessions',
            eyebrow: 'Service',
            label: 'Strategy Sessions',
            description: 'Focused engagements to audit, align, or accelerate your design.',
          },
          {
            id: 'fractional-saas-designer',
            eyebrow: 'Service',
            label: 'Fractional Designer',
            description: 'Embedded design partnership without the full-time overhead.',
          },
        ]}
      />

      <SectionCTA
        heading="Ready to start something?"
        body="Tell us about your product and where you're stuck. We'll tell you honestly what we think we can help with."
        primaryLabel="Let's Talk"
        primaryPage="contact"
        secondaryLabel="See Our Work"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default HowIWork;
