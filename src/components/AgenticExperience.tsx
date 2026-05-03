import React from 'react';
import {
  ChevronRight,
  Sparkles,
  Eye,
  SlidersHorizontal,
  ShieldCheck,
  Bot,
  UserCog,
  Filter,
  LineChart,
  ArrowRight,
} from 'lucide-react';

interface AgenticExperienceProps {
  setCurrentPage: (page: string) => void;
}

const trustLayers = [
  {
    title: 'Predictability',
    description:
      'Can users anticipate what the AI will do? Clear interaction patterns (copilot vs. agent vs. classifier) set expectations before outputs appear.',
    icon: Sparkles,
  },
  {
    title: 'Transparency',
    description:
      'Can users see why the AI did what it did? Not full explainability — contextual signals at decision points.',
    icon: Eye,
  },
  {
    title: 'Control',
    description:
      'Can users redirect, refine, or reject AI outputs? Agency keeps humans in the loop where judgment matters.',
    icon: SlidersHorizontal,
  },
  {
    title: 'Accountability',
    description:
      'When things go wrong, is there a clear path to correction? Error states, feedback loops, and escalation paths complete the trust loop.',
    icon: ShieldCheck,
  },
];

const interactionPatterns = [
  {
    title: 'Copilot patterns',
    description:
      'For augmentation — AI suggests, human decides. Best for creative or judgment-heavy work where users want to stay in control.',
    icon: UserCog,
  },
  {
    title: 'Agent patterns',
    description:
      'For delegation — users set goals, AI executes autonomously. Requires clear boundaries, progress visibility, and interrupt affordances.',
    icon: Bot,
  },
  {
    title: 'Classifier patterns',
    description:
      'For triage — AI sorts, routes, and flags while humans handle exceptions. Optimizes for speed while maintaining oversight.',
    icon: Filter,
  },
  {
    title: 'Advisor patterns',
    description:
      'For decision support — AI surfaces insights, human synthesizes. Information-dense dashboards with confidence indicators.',
    icon: LineChart,
  },
];

const services = [
  {
    number: '01',
    title: 'AI/AX Strategy & Assessment',
    description:
      'Comprehensive audit of your AI product or feature set. Evaluate trust layers, mental model gaps, and interaction pattern fit. Leave with a prioritized roadmap grounded in user research and UX heuristics.',
    timeline: '4–6 weeks',
    format: 'Remote (async + live sessions)',
    deliverables: [
      'Trust-by-Design audit across all four layers',
      'Mental model gap analysis (user belief vs. system behavior)',
      'Interaction pattern recommendations (copilot/agent/classifier fit)',
      'Prioritized improvement roadmap with effort/impact scoring',
      'Stakeholder workshop + recommendations deck',
    ],
  },
  {
    number: '02',
    title: 'AI Product Design Sprint',
    description:
      'Rapid, collaborative sprint to design a new AI feature from scratch. Define interaction model, design key flows with edge cases, and prototype before engineering commits to an architecture.',
    timeline: '6–8 weeks',
    format: 'Remote (embedded with team)',
    deliverables: [
      'AI interaction pattern definition + mental model specification',
      'Core user flows including error states and feedback loops',
      'High-fidelity clickable prototype (ready for user testing)',
      'Design system components for AI-specific patterns',
      'Handoff documentation with rationale for key decisions',
    ],
  },
  {
    number: '03',
    title: 'Fractional AI Design Leadership',
    description:
      'Embedded design leadership for a major AI initiative (3–6 months). Own the full UX strategy from product definition through launch, working directly with product and engineering.',
    timeline: '3–6 months',
    format: 'Remote (fractional Director role)',
    deliverables: [
      'End-to-end product strategy and interaction model definition',
      'Complete design system with AI-specific component library',
      'All screens, flows, edge cases, and error states designed',
      'Iterative user testing and refinement (3+ rounds)',
      'Ongoing engineering collaboration through launch',
      'Post-launch metrics framework and iteration plan',
    ],
  },
  {
    number: '04',
    title: 'Responsible AI Workshop',
    description:
      'Structured workshop series to help your team navigate ethical, legal, and trust challenges. Design patterns for transparency, consent, and user control grounded in responsible AI principles.',
    timeline: '4 weeks',
    format: 'Remote (live workshops + async work)',
    deliverables: [
      'Responsible AI design framework tailored to your context',
      'Transparency and explainability pattern library',
      'User control and consent flow designs',
      'Risk assessment matrix for AI features',
      'Team training session on ethical AI design',
    ],
  },
];

const caseSnippets = [
  {
    meta: 'Euphonic AI · Startup · SaaS 2024',
    title: 'Brand and interface design for an AI-led product',
    description:
      'Partnered with the Euphonic AI founding team to define the brand identity and design the end-to-end interface for their AI-led SaaS platform. Established a visual system that signaled trust and intelligence without leaning on tired AI tropes, then translated it into a product UI where the model\'s reasoning, confidence, and limits are surfaced naturally inside the workflow. The result was a launch-ready product with a coherent voice across marketing site, onboarding, and core experience — and a design system the team could keep extending as the product matured.',
  },
  {
    meta: 'ZS · Agentic AI · Strategy 2026',
    title: 'Agentic AI experience strategy for an enterprise consultancy',
    description:
      'Led the experience strategy for ZS\'s agentic AI initiative, helping product and consulting leadership define how autonomous agents should fit into existing client workflows. Mapped the spectrum of human-in-the-loop, human-on-the-loop, and fully delegated patterns against real engagement scenarios, then specified the trust signals, escalation paths, and interruption affordances each pattern required. Delivered a strategy framework, prioritized opportunity map, and reference interaction models that gave the org a shared language for designing agentic features without compromising client trust or compliance posture.',
  },
  {
    meta: 'ZS · Agentic AI · Design System Evaluation 2026',
    title: 'Design system evaluation for agentic AI surfaces',
    description:
      'Audited ZS\'s existing design system against the demands of agentic AI interfaces — streaming outputs, in-progress reasoning, tool use, confidence and provenance, and recoverable error states. Identified gaps where current components quietly broke down under agent behavior, then proposed a layered set of new primitives and patterns (agent status, intent capture, plan preview, action approvals, audit trails) that extend the system rather than fork it. The output gave their design and engineering teams a clear roadmap for evolving the system without losing the consistency they\'d already invested in.',
  },
];

const AgenticExperience: React.FC<AgenticExperienceProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400 dark:from-amber-900 dark:via-orange-900 dark:to-rose-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-900 hover:text-black"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-900" />
              <li className="text-gray-900 font-medium">Agentic Experience</li>
            </ol>
          </nav>

          <div className="py-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/40 backdrop-blur-sm text-gray-900 text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4" />
              AI &amp; Agentic Experience Design
            </div>
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 mb-6 max-w-4xl">
              We help design how AI works—inside your team and inside your product.
            </h1>
            <p className="text-xl text-gray-900 max-w-3xl">
              From improving how teams use AI tools to designing AI-native product experiences,
              we help SaaS and enterprise companies turn AI into something usable, controlled,
              and built for the real world.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {[
                { label: 'Experience', value: '12+ years product design' },
                { label: 'Level', value: 'Senior / Director' },
                { label: 'Engagement', value: 'Remote collaboration' },
              ].map((meta) => (
                <div
                  key={meta.label}
                  className="bg-white/40 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="text-xs uppercase tracking-widest text-gray-900 mb-1">
                    {meta.label}
                  </div>
                  <div className="text-base font-semibold text-gray-900">{meta.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AI products fail */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            The Trust-by-Design framework
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-regular text-gray-900 dark:text-white">
            Why most AI products fail at the interface layer.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              The bottleneck in AI adoption isn't model performance — it's interface design.
              Teams invest heavily in training sophisticated models, then wrap them in UX that
              either hides how they work ("just trust us") or overwhelms users with technical
              explanations they don't need.
            </p>
            <p>
              The result is predictable: users abandon AI features. Not because the technology
              fails, but because the interface never taught them what to expect, how to
              course-correct, or when to intervene. They return to manual workflows because
              those feel more controllable, even if they're slower.
            </p>
            <p>
              Good AI product design solves this by building{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                accurate mental models
              </span>{' '}
              — helping users develop an intuitive understanding of what the AI can and can't
              do, without requiring them to understand transformers or training data.
            </p>
          </div>
        </div>
      </section>

      {/* Four trust layers */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-regular text-gray-900 dark:text-white mb-6">
              The four layers of AI trust.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Trust in AI systems isn't binary. It's built across four distinct layers, each
              requiring different design interventions. Our framework systematically addresses
              each layer through specific design patterns, ensuring trust compounds rather than
              fragments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {trustLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.title}
                  className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm"
                >
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/60 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {layer.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interaction patterns */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-5xl font-regular text-gray-900 dark:text-white mb-6">
              Interaction patterns that match the model.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Not all AI features need the same UX. The interaction model should match the task
              and the model's capabilities. We help teams choose the right pattern, then design
              the full interaction model — including the edge cases, errors, and feedback loops
              most teams skip in v1.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactionPatterns.map((pattern) => {
              const Icon = pattern.icon;
              return (
                <div
                  key={pattern.title}
                  className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
                >
                  <Icon className="w-8 h-8 text-amber-600 dark:text-amber-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {pattern.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {pattern.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mental model mapping */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-regular text-gray-900 dark:text-white mb-8">
            Mental model mapping: the missing step.
          </h2>
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Most AI projects jump straight from "what should the model do" to "what should
              the screen look like." They skip the critical middle step:{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                what should users believe the model does?
              </span>
            </p>
            <p>
              Mental model mapping documents the gap between how the AI actually works and how
              users think it works. This isn't about dumbing things down — it's about designing
              for the model users will inevitably build, whether you plan for it or not.
            </p>
            <p>
              A well-designed mental model means users know when to trust the AI, when to
              double-check it, and when to override it — without needing to read documentation
              or understand the architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Service offerings
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-regular text-gray-900 dark:text-white">
              How we can work together.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 transition-colors"
              >
                <div className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">
                  {service.number}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="border-t border-gray-200 dark:border-gray-600 pt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Timeline</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {service.timeline}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Format</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {service.format}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-amber-600 dark:text-amber-400 select-none">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case snippets */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Recent AI/AX work
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-regular text-gray-900 dark:text-white mb-12">
            Case examples.
          </h2>

          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {caseSnippets.map((snippet) => (
              <article key={snippet.title} className="py-10 first:pt-0 last:pb-0">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {snippet.meta}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {snippet.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {snippet.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 dark:from-amber-900 dark:via-orange-900 dark:to-rose-900"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-regular text-white mb-4">
            Let's build AI that earns trust.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            If you're shipping AI products and want interfaces that feel transparent,
            controllable, and genuinely helpful — not just technically impressive — let's
            talk.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-colors font-medium"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgenticExperience;
