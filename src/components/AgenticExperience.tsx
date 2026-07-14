import React from 'react';
import { Eye, Shield, SlidersHorizontal, AlertCircle, Bot, Zap, BarChart3, Users, ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import AgentOrchestrationIllustration from './illustrations/AgentOrchestrationIllustration';

interface AgenticExperienceProps {
  setCurrentPage: (page: string) => void;
}

const AgenticExperience: React.FC<AgenticExperienceProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[
              { label: 'Services', pageId: 'services' },
              { label: 'Agentic Experience' },
            ]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">AI & Agent Experience Design</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Design how AI works, inside your team and inside your product.
              </h1>
              <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
                From improving how teams use AI tools to designing AI-native product experiences, we help SaaS and enterprise companies turn AI into something usable, controlled, and built for the real world.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <AgentOrchestrationIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: '15+', label: 'Years enterprise UX' },
                  { stat: 'Sr/Dir', label: 'Seniority level' },
                  { stat: 'Remote', label: 'Collaboration model' },
                ].map(({ stat, label }) => (
                  <div key={stat} className="bg-tan-100 dark:bg-neutral-900 px-5 py-4">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-0.5">{stat}</p>
                    <p className="text-xs text-muted dark:text-neutral-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes AI-native design different */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <Eyebrow className="mb-6">Context</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                Why AI products need a different design approach.
              </h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>
                  For most of software history, systems were deterministic. Inputs produced predictable outputs. You could write interface copy that accurately described what the system would do next.
                </p>
                <p>
                  AI breaks that contract. The system makes probabilistic decisions, surfaces uncertain conclusions, and fails in novel ways that don't map to traditional error handling. Users can't build accurate mental models from deterministic experience.
                </p>
                <p>
                  AI-native design is the discipline of making that probabilistic behavior legible, not by making it technically accurate, but by making it <strong className="text-ink dark:text-white">calibrated to how users will actually use and trust it</strong>.
                </p>
              </div>
            </div>
            <div className="space-y-px bg-line dark:bg-white/10">
              {[
                { label: 'Traditional UX', body: 'Deterministic systems. Users learn rules, build habits, expect consistency. Design for efficiency and learnability.' },
                { label: 'AI-Native UX', body: 'Probabilistic systems. Users need calibrated trust, not learned rules. Design for appropriate confidence, graceful failure, and human oversight.' },
                { label: 'The gap', body: 'Most teams apply traditional UX patterns to AI products and wonder why adoption is low. The problem is not the model, it is the interface contract.' },
              ].map((item) => (
                <div key={item.label} className="bg-white dark:bg-neutral-950 p-8">
                  <Eyebrow className="mb-3">{item.label}</Eyebrow>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why most AI products fail */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-6">The Trust-by-Design Framework</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                Why most AI products fail at the interface layer.
              </h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>
                  The bottleneck in AI adoption is not model performance, it is interface design. Teams invest heavily in training sophisticated models, then wrap them in UX that either hides how they work or overwhelms users with technical explanations they do not need.
                </p>
                <p>
                  The result is predictable: users abandon AI features. Not because the technology fails, but because the interface never taught them what to expect, how to course-correct, or when to intervene. They return to manual workflows because those feel more controllable, even if they are slower.
                </p>
                <p>
                  Good AI product design solves this by building <strong className="text-ink dark:text-white">accurate mental models</strong>, helping users develop an intuitive understanding of what the AI can and cannot do, without requiring them to understand the architecture.
                </p>
              </div>
            </div>
            <div>
              <Eyebrow className="mb-6">Common failure modes</Eyebrow>
              <div className="space-y-px bg-line dark:bg-white/10">
                {[
                  { label: 'Hidden reasoning', body: 'The AI makes a recommendation with no signal about how confident it is or why. Users either over-trust or under-trust, both are problems.' },
                  { label: 'No graceful failure', body: 'Error states that say "Something went wrong" for AI-specific failures. Users learn nothing and cannot self-correct.' },
                  { label: 'Forced automation', body: 'The system acts without asking. Users feel out of control and create workarounds that bypass the AI entirely.' },
                  { label: 'False precision', body: 'Confidence scores shown as percentages when the underlying probability is deeply uncertain. Precise numbers breed false certainty.' },
                ].map((item) => (
                  <div key={item.label} className="bg-white dark:bg-neutral-950 p-6">
                    <p className="text-xs font-semibold text-ink dark:text-white mb-2">{item.label}</p>
                    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Layers of AI Trust */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Framework</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-4 max-w-2xl leading-snug">
              The four layers of AI trust.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 max-w-2xl leading-relaxed">
              Trust in AI systems is not binary. It is built across four distinct layers, each requiring different design interventions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {[
              {
                icon: Eye,
                label: 'Predictability',
                body: "Can users anticipate what the AI will do? Clear interaction patterns, copilot vs. agent vs. classifier, set expectations before outputs appear.",
              },
              {
                icon: Shield,
                label: 'Transparency',
                body: "Can users see why the AI did what it did? Not full explainability, contextual signals at decision points that build confidence without cognitive overload.",
              },
              {
                icon: SlidersHorizontal,
                label: 'Control',
                body: "Can users redirect, refine, or reject AI outputs? Agency is not about saying no to everything, it is about keeping humans in the loop where judgment matters.",
              },
              {
                icon: AlertCircle,
                label: 'Accountability',
                body: "When things go wrong, is there a clear path to correction? Error states, feedback loops, and escalation paths complete the trust loop.",
              },
            ].map(({ icon: Icon, label, body }) => (
              <div key={label} className="bg-white dark:bg-neutral-950 p-10">
                <div className="w-10 h-10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3">{label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interaction Patterns */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Design Patterns</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-4 leading-snug">
              Interaction patterns that match the model.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 max-w-2xl leading-relaxed">
              Not all AI features need the same UX. The interaction model should match the task and the model's capabilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10 mb-12">
            {[
              { icon: Users, label: 'Copilot', body: "AI suggests, human decides. Best for creative or judgment-heavy work where users want to stay in control." },
              { icon: Bot, label: 'Agent', body: "Users set goals, AI executes autonomously. Requires clear boundaries, progress visibility, and interrupt affordances." },
              { icon: Zap, label: 'Classifier', body: "AI sorts, routes, and flags; human handles exceptions. Optimizes for speed while maintaining oversight on edge cases." },
              { icon: BarChart3, label: 'Advisor', body: "AI surfaces insights, human synthesizes. Information-dense dashboards with confidence indicators and decision support." },
            ].map(({ icon: Icon, label, body }) => (
              <div key={label} className="bg-white dark:bg-neutral-950 p-8">
                <div className="w-8 h-8 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-base text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
            We help teams choose the right pattern for their use case, then design the full interaction model, including edge cases, errors, and feedback loops most teams skip in v1.
          </p>
        </div>
      </section>

      {/* Mental Model Mapping */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <Eyebrow className="mb-6">Methodology</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                Mental model mapping: the missing step.
              </h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>
                  Most AI projects jump straight from "what should the model do" to "what should the screen look like." They skip the critical middle step: <strong className="text-ink dark:text-white">what should users believe the model does?</strong>
                </p>
                <p>
                  Mental model mapping documents the gap between how the AI actually works and how users think it works. This is not about dumbing things down, it is about designing for the model users will inevitably build, whether you plan for it or not.
                </p>
                <p>
                  A well-designed mental model means users know when to trust the AI, when to double-check it, and when to override it, without needing to read documentation or understand the architecture.
                </p>
              </div>
            </div>
            <div className="space-y-px bg-line dark:bg-white/10">
              {[
                { step: '01', label: 'Document the actual model behavior', body: 'What does the AI actually do, under what conditions, with what confidence? This is often underdocumented even internally.' },
                { step: '02', label: 'Map user beliefs', body: 'Research how users conceptualize the AI. What do they think it is doing? Where are the gaps and misconceptions?' },
                { step: '03', label: 'Design the bridge', body: 'Interface patterns that close the gap, progressive disclosure, contextual explanations, confidence signals, without overwhelming.' },
                { step: '04', label: 'Validate and iterate', body: 'Test whether users develop accurate trust calibration. Not "do they like it" but "do they know when to trust it."' },
              ].map((item) => (
                <div key={item.step} className="bg-white dark:bg-neutral-950 p-8 flex gap-6">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 w-6 flex-shrink-0 mt-0.5">{item.step}</p>
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-white mb-2">{item.label}</p>
                    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Service Offerings</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              How we can work together.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {[
              {
                number: '01',
                title: 'AI/AX Strategy & Assessment',
                description: 'Comprehensive audit of your AI product or feature set. Evaluate trust layers, mental model gaps, and interaction pattern fit. Leave with a prioritized roadmap grounded in user research and UX heuristics.',
                timeline: '4-6 weeks',
                deliverables: ['Trust-by-Design audit across all four layers', 'Mental model gap analysis', 'Interaction pattern recommendations', 'Prioritized improvement roadmap', 'Stakeholder workshop + deck'],
              },
              {
                number: '02',
                title: 'AI Product Design Sprint',
                description: 'Rapid, collaborative sprint to design a new AI feature from scratch. Define interaction model, design key flows with edge cases, and prototype before engineering commits to an architecture.',
                timeline: '6-8 weeks',
                deliverables: ['AI interaction pattern definition', 'Core user flows + error states', 'High-fidelity clickable prototype', 'Design system AI components', 'Handoff documentation'],
              },
              {
                number: '03',
                title: 'Fractional AI Design Leadership',
                description: 'Embedded design leadership for a major AI initiative. Own the full UX strategy from product definition through launch, working directly with product and engineering.',
                timeline: '6-12 months',
                deliverables: ['End-to-end product strategy', 'Complete design system', 'All screens and edge cases', 'Iterative user testing (3+ rounds)', 'Post-launch metrics framework'],
              },
              {
                number: '04',
                title: 'Responsible AI Workshop',
                description: 'Structured workshop series to help your team navigate ethical, legal, and trust challenges. Design patterns for transparency, consent, and user control grounded in responsible AI principles.',
                timeline: '4 weeks',
                deliverables: ['Responsible AI design framework', 'Transparency pattern library', 'User control + consent flows', 'Risk assessment matrix', 'Team training session'],
              },
            ].map((service) => (
              <div key={service.number} className="bg-white dark:bg-neutral-950 p-10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">
                  {service.number}
                </p>
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-line dark:border-white/10 pt-6">
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="text-muted dark:text-neutral-500 uppercase tracking-wider">Timeline</span>
                    <span className="font-semibold text-ink dark:text-white">{service.timeline}</span>
                  </div>
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-wider mb-3">
                    Deliverables
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-blue dark:text-lavender mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted dark:text-neutral-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Recent AI/AX Work</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Case examples.
            </h2>
          </div>
          <div className="space-y-px bg-line dark:bg-white/10">
            {[
              {
                meta: 'Euphonic AI · Startup · SaaS 2024',
                title: 'Brand and interface design for an AI-led product',
                description: "Partnered with the Euphonic AI founding team to define the brand identity and design the end-to-end interface for their AI-led SaaS platform. Established a visual system that signaled trust and intelligence without leaning on tired AI tropes, then translated it into a product UI where the model's reasoning, confidence, and limits are surfaced naturally inside the workflow. The result was a launch-ready product with a coherent voice across marketing site, onboarding, and core experience, and a design system the team could keep extending as the product matured.",
              },
              {
                meta: 'ZS · Agentic AI · Strategy 2026',
                title: 'Agentic AI experience strategy for an enterprise consultancy',
                description: "Led the experience strategy for ZS's agentic AI initiative, helping product and consulting leadership define how autonomous agents should fit into existing client workflows. Mapped the spectrum of human-in-the-loop, human-on-the-loop, and fully delegated patterns against real engagement scenarios, then specified the trust signals, escalation paths, and interruption affordances each pattern required. Delivered a strategy framework, prioritized opportunity map, and reference interaction models that gave the org a shared language for designing agentic features without compromising client trust or compliance posture.",
              },
              {
                meta: 'ZS · Agentic AI · Design System Evaluation 2026',
                title: 'Design system evaluation for agentic AI surfaces',
                description: "Audited ZS's existing design system against the demands of agentic AI interfaces: streaming outputs, in-progress reasoning, tool use, confidence and provenance, and recoverable error states. Identified gaps where current components quietly broke down under agent behavior, then proposed a layered set of new primitives and patterns (agent status, intent capture, plan preview, action approvals, audit trails) that extend the system rather than fork it. The output gave their design and engineering teams a clear roadmap for evolving the system without losing the consistency they'd already invested in.",
              },
            ].map((item, i) => (
              <div key={i} className="grid lg:grid-cols-4 bg-white dark:bg-neutral-950">
                <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-line dark:border-white/10">
                  <p className="text-xs text-muted dark:text-neutral-500 leading-relaxed">{item.meta}</p>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <h3 className="text-base font-semibold text-ink dark:text-white mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
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
            id: 'perspectives-ai-native-design',
            eyebrow: 'Perspectives',
            label: 'AI-Native Design',
            description: 'Our editorial thinking on designing products where AI is a first-class participant.',
          },
          {
            id: 'saas-product-design',
            eyebrow: 'Service',
            label: 'SaaS Product Design',
            description: 'Case studies and solution patterns for AI-powered enterprise products.',
          },
          {
            id: 'strategy-sessions',
            eyebrow: 'Service',
            label: 'Strategy Sessions',
            description: 'Focused engagements to audit your AI UX and define a path forward.',
          },
        ]}
      />

      <SectionCTA
        heading="Ready to design AI that users actually trust?"
        body="Tell us about your product, your AI features, and where users are struggling. We'll respond with an honest assessment of what we think we can help with."
        primaryLabel="Let's Talk"
        primaryPage="contact"
        secondaryLabel="See Our Work"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default AgenticExperience;
