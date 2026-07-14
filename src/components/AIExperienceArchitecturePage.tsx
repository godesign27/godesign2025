import React from 'react';
import { ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';
import AIATrustDashboardIllustration from './illustrations/AIATrustDashboardIllustration';

interface AIExperienceArchitecturePageProps {
  setCurrentPage: (page: string) => void;
}

const pillars = [
  {
    n: '01',
    label: 'Signal Architecture',
    body: 'Designing how AI systems communicate what they know, what they inferred, and how confident they are, before the human has to ask.',
  },
  {
    n: '02',
    label: 'Human Oversight Design',
    body: 'Defining the moments where humans must review, correct, or approve AI decisions, and designing those moments to be fast, clear, and trustworthy.',
  },
  {
    n: '03',
    label: 'Agentic Design Systems',
    body: 'Building the tokens, components, and patterns that encode AI-specific states into the design system, so agentic behavior is consistent, not improvised.',
  },
  {
    n: '04',
    label: 'Trust Architecture',
    body: 'Structuring how trust is earned, maintained, and repaired across an AI product, at the level of interaction, interface, and system.',
  },
  {
    n: '05',
    label: 'AI Governance UX',
    body: 'Designing the interfaces through which organizations configure, audit, and govern AI behavior, making governance legible to the people responsible for it.',
  },
];

const principles = [
  {
    label: 'Systems Before Screens',
    body: 'The interface is the surface. The architecture is the substance. Design the system first, the screen second.',
  },
  {
    label: 'Trust Is a Design Material',
    body: 'Trust is not a feature to add at the end. It is a material, like color or spacing, considered in every decision.',
  },
  {
    label: 'Governance Is a Design Problem',
    body: 'Who decides how the AI behaves? Design that answer before it is made for you.',
  },
  {
    label: 'Human-in-the-Loop Is a Pattern',
    body: 'Oversight is not a disclaimer. It is a designed moment, with a clear interface, a clear action, and a clear consequence.',
  },
];

const relatedPerspectives = [
  { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How designing for AI products requires a different set of priorities.' },
  { id: 'perspectives-our-philosophy', label: 'Our Philosophy', description: 'The beliefs that underlie the AI Experience Architecture™ framework.' },
  { id: 'perspectives-writing', label: 'Writing', description: 'Long-form essays on trust, governance, and intelligent systems.' },
];

const AIExperienceArchitecturePage: React.FC<AIExperienceArchitecturePageProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">
      {/* Hero */}
      <section className="bg-tan-100 dark:bg-neutral-950 pt-32 pb-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <Eyebrow className="mb-6">Framework</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
                AI Experience Architecture™
              </h1>
              <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
                A framework for designing intelligent enterprise products that people understand, trust, and confidently adopt.
              </p>
            </div>
            <div className="hidden lg:block">
              <AIATrustDashboardIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar strip */}
      <section className="bg-white dark:bg-neutral-900 py-6 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {pillars.map((p, i) => (
              <div key={p.n} className={`flex items-center gap-2 ${i === 2 ? 'text-blue dark:text-lavender' : ''}`}>
                <span className="text-xs text-muted dark:text-neutral-600 font-semibold tabular-nums">{p.n}</span>
                <span className={`text-sm font-medium ${i === 2 ? 'text-blue dark:text-lavender' : 'text-ink dark:text-neutral-400'}`}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What It Is + Why It Matters */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="w-8 h-[3px] bg-blue mb-6" />
              <Eyebrow className="mb-4">What It Is</Eyebrow>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                AI Experience Architecture™ is the discipline of designing AI systems that are legible, trustworthy, and governable by the humans who depend on them. It is the practice layer between AI capability and human understanding, the structural decisions that determine whether an AI product earns trust or destroys it.
              </p>
            </div>
            <div>
              <div className="w-8 h-[3px] bg-blue mb-6" />
              <Eyebrow className="mb-4">Why It Matters</Eyebrow>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                AI is being deployed into enterprise products faster than it can be designed. The result: products that make decisions users don't understand, with controls they can't find, in systems they can't trust. AI Experience Architecture™ addresses this gap, not as a feature, but as a structural discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Eyebrow className="mb-4">Core Principles</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              What the framework believes.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {principles.map((p) => (
              <div key={p.label} className="p-8 bg-white dark:bg-neutral-950">
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3 leading-snug">{p.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Layers (Five Pillars) */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-4">Experience Layers</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
                Five pillars. One architecture.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                The framework is organized across five experience layers, each addressing a different dimension of how humans and AI systems build shared understanding. Together, they form the structural architecture of a trustworthy AI product.
              </p>
            </div>
            <div className="flex flex-col gap-px bg-line dark:bg-white/10">
              {pillars.map((p) => (
                <div key={p.n} className="flex gap-6 p-6 bg-white dark:bg-neutral-950">
                  <span className="text-xs font-semibold text-muted dark:text-neutral-600 tabular-nums shrink-0 pt-0.5">{p.n}</span>
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-white mb-1">{p.label}</p>
                    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Eyebrow className="mb-4">Applications</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
              Where the framework applies.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              AI Experience Architecture™ applies wherever AI makes decisions that affect people, and wherever humans need to understand, trust, or override those decisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {[
              { label: 'Enterprise AI Products', body: 'SaaS platforms where AI drives decisions, recommendations, or automation that users depend on daily.' },
              { label: 'Agentic Systems', body: 'AI agents that act on behalf of users, where oversight, intervention, and auditability are foundational requirements.' },
              { label: 'Clinical Decision Support', body: 'Healthcare AI where legibility and human override are regulatory requirements and ethical imperatives.' },
              { label: 'Financial AI', body: 'Risk, underwriting, and advisory systems where explainability is required and trust is the product.' },
              { label: 'AI-Native Design Systems', body: 'Component and pattern libraries built specifically for agentic interfaces, where standard design systems break down.' },
              { label: 'AI Governance Platforms', body: 'Internal tools for configuring, auditing, and governing AI behavior across an organization.' },
            ].map((item) => (
              <div key={item.label} className="p-8 bg-white dark:bg-neutral-950">
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{item.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Thinking */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-4">Related Thinking</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Perspectives that inform the framework.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {relatedPerspectives.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  Read more <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6">Work With Us</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-4">
              Bring AI Experience Architecture™ to your organization.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
              We work with enterprise product teams, design leaders, and technology executives who are serious about the quality of their AI experience, not just its capability.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate('work-with-me')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                See engagement options <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => navigate('contact')}
                className="text-sm font-medium text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors"
              >
                Or get in touch directly →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIExperienceArchitecturePage;
