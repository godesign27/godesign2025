import React from 'react';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';
import Eyebrow from './Eyebrow';
import EnterpriseDashboardIllustration from './illustrations/EnterpriseDashboardIllustration';
import AgentOrchestrationIllustration from './illustrations/AgentOrchestrationIllustration';
import TokenArchitectureIllustration from './illustrations/TokenArchitectureIllustration';
import ClinicalWorkflowIllustration from './illustrations/ClinicalWorkflowIllustration';
import FintechDashboardIllustration from './illustrations/FintechDashboardIllustration';
import ModernizationIllustration from './illustrations/ModernizationIllustration';

const solutionIllustrations: Record<string, React.ReactNode> = {
  'solutions-enterprise-saas': <EnterpriseDashboardIllustration />,
  'solutions-ai-native-products': <AgentOrchestrationIllustration />,
  'solutions-design-systems': <TokenArchitectureIllustration />,
  'solutions-healthcare-ux': <ClinicalWorkflowIllustration />,
  'solutions-fintech-ux': <FintechDashboardIllustration />,
  'solutions-product-modernization': <ModernizationIllustration />,
};

interface SolutionDetailProps {
  page: string;
  setCurrentPage: (page: string) => void;
}

interface SolutionPattern {
  label: string;
  body: string;
}

interface SolutionSpotlight {
  eyebrow: string;
  heading: string;
  body: string;
  stats: { stat: string; label: string }[];
}

interface SolutionConfig {
  label: string;
  eyebrow: string;
  subtitle: string;
  heroBody: string;
  challengeHeading: string;
  challenge: string;
  approachHeading: string;
  approach: string;
  patterns: SolutionPattern[];
  evidenceLabel: string;
  evidence: { stat: string; label: string }[];
  ctaHeading: string;
  ctaBody: string;
  related: { id: string; eyebrow: string; label: string; description: string }[];
  spotlight?: SolutionSpotlight;
}

const solutionConfig: Record<string, SolutionConfig> = {
  'solutions-enterprise-saas': {
    label: 'Enterprise SaaS',
    eyebrow: 'Solution',
    subtitle: 'Designing complex, multi-tenant SaaS platforms that scale without sacrificing usability.',
    heroBody: "Enterprise software serves multiple user roles, complex permission models, and workflows that can span dozens of steps. Most fail at the interface layer — not because of bad technology, but because they were designed for procurement committees, not the people who use them every day.",
    challengeHeading: 'The challenge with enterprise software',
    challenge: "Enterprise SaaS has a structural problem: the people who buy it and the people who use it are not the same people. Procurement decisions are made on feature lists; usability is an afterthought. The result is products that are powerful but unusable — where training manuals replace good design and support tickets replace clear interfaces.\n\nThe irony is that enterprise software users are often the most capable people in any organization. They don't need to be protected from complexity. They need complexity to be organized, navigable, and responsive to their actual workflows.",
    approachHeading: 'How we approach enterprise SaaS',
    approach: "We start with the most complex workflow first. If we can make the hardest thing in the product simple, the rest follows. This means deep research into real user workflows — not job titles, but the actual 14-step sequence someone follows to accomplish their core task.\n\nRole-based information architecture, progressive disclosure, and contextual inline guidance are the core patterns we apply. The goal is a product that feels like consumer software: fast, obvious, and rewarding to use — even when the underlying logic is intricate.",
    patterns: [
      { label: 'Role-based IA', body: 'Different users need radically different interfaces. We map roles to real task frequency before designing navigation or information hierarchy.' },
      { label: 'Progressive disclosure', body: 'Show only what the user needs at each step. Complexity revealed on demand beats complexity shown all at once.' },
      { label: 'Inline contextual help', body: 'Documentation embedded at decision points — not in a help center three clicks away. Reduces support burden and improves first-time success.' },
      { label: 'Bulk action patterns', body: 'Enterprise users manage large data sets. Bulk selection, batch operations, and filtering patterns that scale to thousands of records.' },
      { label: 'Multi-tenant permissions', body: 'Designing the permission model UI: role assignment, scoped access, admin vs. user context switches, and access request flows.' },
      { label: 'Data density tuning', body: 'Enterprise users need information density. The skill is making dense interfaces scannable — not stripping them down to a consumer aesthetic.' },
    ],
    evidenceLabel: 'Work with this focus',
    evidence: [
      { stat: '5 yrs', label: 'CoreTechs healthcare SaaS engagement' },
      { stat: '15+', label: 'Years of enterprise UX practice' },
      { stat: '4', label: 'Industries: healthcare, fintech, pharma, media' },
      { stat: 'Sr/Dir', label: 'Seniority level across all engagements' },
    ],
    ctaHeading: "Let's make your enterprise product usable.",
    ctaBody: "Tell us about your product and the users who struggle with it. We'll tell you what we think is fixable and how.",
    related: [
      { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design for software platforms.' },
      { id: 'solutions-design-systems', eyebrow: 'Solution', label: 'Design Systems', description: 'Scalable component and pattern libraries for enterprise teams.' },
      { id: 'solutions-product-modernization', eyebrow: 'Solution', label: 'Product Modernization', description: 'Redesigning legacy enterprise interfaces.' },
    ],
  },

  'solutions-ai-native-products': {
    label: 'AI-Native Products',
    eyebrow: 'Solution',
    subtitle: "Designing products where AI is foundational — not bolted on — and trust is built into every interaction.",
    heroBody: "AI-native design is not about adding a chatbot to an existing product. It is about rethinking the interaction model from the ground up for a system that makes probabilistic decisions, fails in novel ways, and requires users to calibrate trust continuously.",
    challengeHeading: 'The challenge with AI products',
    challenge: "Most teams treat UX as a wrapper around model output. Ship the model, add a UI, call it done. The result is products users don't trust — not because the model is wrong, but because the interface never told users what to expect, when to double-check, or how to recover when something goes wrong.\n\nAI products introduce new categories of UX debt: trust calibration failures, automation surprises, and the 'black box' problem where users can't understand why the system did what it did. These are not engineering problems — they are design problems.",
    approachHeading: 'How we design for AI',
    approach: "We apply a trust-by-design framework that works across four layers: predictability (does the user know what the AI will do?), transparency (can they see why?), control (can they redirect or reject?), and accountability (is there a clear recovery path when things go wrong?).\n\nBefore any screen is designed, we map the gap between how the AI actually behaves and how users will conceptualize it. That mental model gap is where most AI UX failures live — and designing the bridge between system behavior and user belief is the most consequential design work in any AI product.",
    patterns: [
      { label: 'Confidence signaling', body: 'Showing AI certainty calibrated to the stakes of the decision. High-confidence signals for routine output; explicit uncertainty for judgment calls.' },
      { label: 'Human-in-the-loop flows', body: 'Knowing when to pause for human review — and designing that pause moment to be fast, informative, and easy to act on.' },
      { label: 'Graceful AI failure', body: 'Error states designed for AI-specific failure modes: out-of-distribution inputs, low-confidence outputs, and model limitations.' },
      { label: 'Agentic oversight UI', body: 'For autonomous agents: progress visibility, plan preview, interrupt affordances, and audit trails that let users stay in the loop without micromanaging.' },
      { label: 'Explainability on demand', body: 'Progressive disclosure of AI reasoning — not buried in a modal, but accessible at the moment of decision without cluttering the default view.' },
      { label: 'Correction and feedback loops', body: "Easy mechanisms for users to correct AI output — which both improves trust and generates training signal. 'Was this helpful?' is the floor, not the ceiling." },
    ],
    evidenceLabel: 'Relevant experience',
    evidence: [
      { stat: '2026', label: 'ZS agentic AI experience strategy' },
      { stat: '2024', label: 'Euphonic AI brand + product UI' },
      { stat: '4', label: 'AI interaction patterns: copilot, agent, classifier, advisor' },
      { stat: 'Deep', label: 'Human-in-the-loop system design expertise' },
    ],
    ctaHeading: 'Ready to design AI that users trust?',
    ctaBody: "Tell us about your AI product and where users are losing confidence. We'll respond with what we think needs to change.",
    related: [
      { id: 'agentic-experience', eyebrow: 'Service', label: 'Agentic Experience', description: 'Full AI & agent experience design service offering.' },
      { id: 'perspectives-ai-native-design', eyebrow: 'Perspectives', label: 'AI-Native Design', description: 'Our editorial thinking on designing for intelligent systems.' },
      { id: 'solutions-enterprise-saas', eyebrow: 'Solution', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.' },
    ],
  },

  'solutions-design-systems': {
    label: 'Design Systems',
    eyebrow: 'Solution',
    subtitle: 'Building the shared language that lets teams design and ship faster without sacrificing consistency.',
    heroBody: "A design system is not a component library. It is a living governance structure — the agreement between designers and engineers about how the product should look, feel, and behave across every surface, for every team, indefinitely.",
    challengeHeading: 'Why most design systems fail',
    challenge: "Most design systems fail in year two, not year one. They are built with enthusiasm, documented thoroughly, and then quietly abandoned as teams work around components that don't quite fit their needs. The symptoms are familiar: designers duplicating patterns because 'the system doesn't have what we need,' engineers implementing the same thing four different ways, and a growing divergence between what's in Figma and what ships in code.\n\nThe root cause is almost always the same: the system was built for Figma, not for teams. It optimized for completeness over usability, and it shipped without the governance model that keeps it alive.",
    approachHeading: 'How we build systems that last',
    approach: "We build design systems around usage patterns, not components. Before a single token is defined, we map the real usage patterns across the product — the workflows that repeat, the layouts that recur, the decisions designers make ten times a week. The system is built to answer those decisions, not to enumerate every possible component.\n\nGovernance and adoption are design problems, not process problems. We build the feedback loops, contribution pathways, and decision records that give a system institutional memory — so it grows with the product instead of calcifying around it.",
    patterns: [
      { label: 'Token architecture', body: "Semantic token layers (primitive → semantic → component) that let you retheme the entire product without touching component code. Built for scale from day one." },
      { label: 'Component API design', body: 'Props, slots, and variants designed for the full range of real usage — not just the happy path. Components that flex without breaking.' },
      { label: 'Figma-to-code parity', body: "Components that match between design and engineering — same names, same props, same behavior. Handoff friction is a governance failure." },
      { label: 'Accessibility baseline', body: "Accessibility baked into every component spec: focus management, ARIA roles, keyboard patterns, and contrast ratios — not handled at the page level." },
      { label: 'Contribution model', body: "A documented path for teams to propose, prototype, and contribute new patterns — so the system grows from real usage rather than speculation." },
      { label: 'Interactive documentation', body: "Not just component specs — copy-to-use functionality lets teams drop any pattern into an agentic product without re-engineering from source. Adoption friction from weeks to minutes." },
    ],
    evidenceLabel: 'Design system experience',
    evidence: [
      { stat: '5 yrs', label: 'CoreTechs design system from scratch' },
      { stat: 'WCAG', label: 'AA accessibility compliance built in' },
      { stat: 'Figma', label: 'Dev Mode + Storybook handoff process' },
      { stat: 'Multi', label: 'Team adoption and governance experience' },
    ],
    ctaHeading: 'Ready to build a system that actually gets used?',
    ctaBody: "Whether you're starting from scratch or inheriting a system that needs rescuing, we can help.",
    related: [
      { id: 'solutions-enterprise-saas', eyebrow: 'Solution', label: 'Enterprise SaaS', description: 'Scalable product design at enterprise scale.' },
      { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design service.' },
      { id: 'solutions-product-modernization', eyebrow: 'Solution', label: 'Product Modernization', description: 'Upgrading legacy interfaces and systems.' },
    ],
    spotlight: {
      eyebrow: 'Featured Work',
      heading: 'Agentic Design System, Built at Enterprise Scale',
      body: "We led the end-to-end design of a full agentic design system for ZS — a Fortune 500 pharmaceutical SaaS company whose products run on AI agents. Every layer built from scratch: semantic token architecture for AI states, a component library for agentic UI patterns, an interaction pattern library for human-in-the-loop moments, and contribution governance for cross-team adoption.\n\nThe documentation site ships with live copy-to-use components — product teams can adopt any agentic pattern in one click without re-engineering from source. Led by our Design Director, with execution delegated across the team. The result is a design system that scales agentic product decisions across the entire organization.",
      stats: [
        { stat: 'Director', label: 'Director-led, team-delivered' },
        { stat: 'ZS', label: 'Fortune 500 pharmaceutical SaaS' },
        { stat: 'End-to-end', label: 'Tokens → components → patterns → governance → docs' },
        { stat: 'Copy-to-use', label: 'Interactive documentation with one-click component adoption' },
      ],
    },
  },

  'solutions-healthcare-ux': {
    label: 'Healthcare UX',
    eyebrow: 'Solution',
    subtitle: 'Designing clinical and patient-facing experiences where clarity, trust, and compliance are non-negotiable.',
    heroBody: "Healthcare products must be accurate under pressure, compliant with regulation, and usable by people whose primary job is not using software. The design constraints are strict and the stakes are real — which makes good design both harder and more important.",
    challengeHeading: 'The challenge with healthcare products',
    challenge: "Clinical workflows are complex, time-constrained, and high-stakes. The users — clinicians, care coordinators, billing staff — are expert practitioners who need software that respects their expertise and gets out of their way. Most healthcare software does the opposite: it demands attention, requires workarounds, and generates the kind of alert fatigue that creates real risk.\n\nPatient-facing products have a different but related problem: they must translate clinical complexity into language that non-specialist users can act on — accurately, without oversimplifying, and under conditions of anxiety and uncertainty.",
    approachHeading: 'How we design for healthcare',
    approach: "We design for high-stakes environments by reducing cognitive load at the moment of decision. The goal is not to simplify the domain — healthcare is genuinely complex — but to surface the right information at the right moment, with the right emphasis, so users can act correctly without having to fight the interface.\n\nSafeguards against common errors are designed as part of the flow, not bolted on as warning dialogs. Compliance requirements are treated as design constraints from the start, not reviewed at the end. And accessibility is non-negotiable — clinical settings include users with visual, motor, and cognitive needs that must be accommodated.",
    patterns: [
      { label: 'Clinical workflow mapping', body: "Deep research into real clinical workflows — not idealized process diagrams, but the actual sequence of steps under real time pressure." },
      { label: 'Alert fatigue reduction', body: "Designing notification hierarchies that reserve high-attention alerts for genuinely high-priority events — and make low-priority information scannable, not interruptive." },
      { label: 'Error prevention by design', body: "Confirmation patterns, undo affordances, and input validation designed to catch common errors before they propagate — not after." },
      { label: 'HIPAA-aware IA', body: "Information architecture that respects data sensitivity: what is shown by default, what requires explicit access, and how PHI is surfaced in context." },
      { label: 'Accessibility in clinical settings', body: "WCAG 2.1 AA compliance as a baseline, with attention to clinical-specific needs: high-contrast modes for poor lighting, large tap targets for gloved hands." },
      { label: 'Patient-facing translation', body: "Designing clinical information for lay users: plain language, progressive complexity, and decision-support patterns that inform without overwhelming." },
    ],
    evidenceLabel: 'Relevant experience',
    evidence: [
      { stat: '5 yrs', label: 'CoreTechs healthcare analytics platform' },
      { stat: 'Payor', label: 'Both payor and provider workflow design' },
      { stat: 'HIPAA', label: 'Privacy-aware IA and access patterns' },
      { stat: 'Real', label: 'Clinical research and user testing experience' },
    ],
    ctaHeading: "Let's build healthcare software people can actually use.",
    ctaBody: "Clinical users deserve better interfaces. Tell us about your product and the workflows that are creating friction.",
    related: [
      { id: 'solutions-enterprise-saas', eyebrow: 'Solution', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.' },
      { id: 'solutions-fintech-ux', eyebrow: 'Solution', label: 'Fintech UX', description: 'Design for regulated, high-stakes financial products.' },
      { id: 'agentic-experience', eyebrow: 'Service', label: 'Agentic Experience', description: 'AI in high-stakes clinical decision environments.' },
    ],
  },

  'solutions-fintech-ux': {
    label: 'Fintech UX',
    eyebrow: 'Solution',
    subtitle: 'Designing financial products that are trustworthy, compliant, and genuinely easy to use.',
    heroBody: "Financial products carry high stakes and high anxiety. Users need to trust the product before they'll act on it — and that trust is earned not through branding, but through clarity, consistency, and an interface that never makes them wonder if they made a mistake.",
    challengeHeading: 'The challenge with financial products',
    challenge: "The central UX problem in fintech is not complexity — it is anxiety. Users making financial decisions are operating in a heightened state of attention. They notice inconsistencies, they second-guess ambiguous labels, and they abandon flows that feel uncertain. Every piece of friction in a financial interface has a cost measured in drop-off rates and support volume.\n\nAt the enterprise level, fintech products face additional challenges: data density, regulatory requirements, multi-role workflows, and the need to surface complex analytical information in a way that supports decision-making rather than overwhelming it.",
    approachHeading: 'How we design for fintech',
    approach: "We design financial UX around progressive disclosure of complexity: start with the information the user needs to act, reveal depth when they ask for it. Dense data should be scannable — organized by decision priority, not by database schema.\n\nTrust signals are explicit design decisions: confirmation patterns, transparent fee disclosure, error messages that say what went wrong and what to do about it. We treat every moment of user uncertainty as a design failure to be traced and fixed.",
    patterns: [
      { label: 'Progressive complexity', body: "Start with the summary. Reveal the detail on demand. Users who want to dig in should be able to; users who just need to act should not be made to." },
      { label: 'Trust-building microcopy', body: "Form labels, button copy, and error messages that are specific, honest, and actionable. Never 'Something went wrong.' Always 'What happened and what to do next.'" },
      { label: 'Data-dense dashboard design', body: "Financial analytics dashboards that are scannable at a glance, drillable on demand, and organized around the questions users actually ask." },
      { label: 'Compliance-integrated UX', body: "Regulatory disclosures and consent flows designed as part of the experience — not as legal text bolted on at the end of a flow." },
      { label: 'Error prevention in transactions', body: "Confirmation patterns, summary screens, and explicit undo/cancel affordances for high-consequence actions. No user should feel uncertain about what they just did." },
      { label: 'Multi-role financial workflows', body: "Designing for the analyst, the approver, and the executive who all need different views of the same financial data." },
    ],
    evidenceLabel: 'Relevant experience',
    evidence: [
      { stat: 'TU', label: 'TransUnion credit product design' },
      { stat: 'BofA', label: 'Bank of America auto loans integration' },
      { stat: 'Dense', label: 'Data-heavy dashboard and analytics expertise' },
      { stat: '15+', label: 'Years of high-stakes product design practice' },
    ],
    ctaHeading: "Let's design financial products users trust.",
    ctaBody: "Whether it's a consumer flow or an enterprise analytics platform, we can help reduce anxiety and improve confidence.",
    related: [
      { id: 'solutions-healthcare-ux', eyebrow: 'Solution', label: 'Healthcare UX', description: 'Design for regulated, high-stakes clinical environments.' },
      { id: 'solutions-enterprise-saas', eyebrow: 'Solution', label: 'Enterprise SaaS', description: 'Complex product design at enterprise scale.' },
      { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design service.' },
    ],
  },

  'solutions-product-modernization': {
    label: 'Product Modernization',
    eyebrow: 'Solution',
    subtitle: 'Redesigning legacy products that have accumulated years of complexity, debt, and user frustration.',
    heroBody: "Modernizing a product is different from designing one. You're not starting from a blank slate — you're inheriting years of decisions, user habits, technical constraints, and institutional knowledge. The design work begins with understanding what you're working with before you touch anything.",
    challengeHeading: 'The challenge with legacy products',
    challenge: "Legacy products are a design challenge unlike any other. Every element that looks like a usability problem might be load-bearing — a workaround for a technical limitation, a behavior users have built muscle memory around, or a feature that serves an edge case your research didn't surface yet.\n\nThe risk of modernization is not moving too slowly. It's moving too fast and breaking things users depend on — or, more subtly, introducing a 'clean' redesign that is aesthetically improved but functionally worse because it didn't account for real usage patterns.",
    approachHeading: 'How we approach modernization',
    approach: "We treat modernization as an archaeological dig before it is a design project. Understanding why things are the way they are — through user interviews, analytics review, and stakeholder mapping — shapes every design decision that follows. Features that look broken often exist for reasons that matter.\n\nModernization requires careful sequencing to manage transition risk. We design for continuity: preserving what works, replacing what doesn't, and communicating change to users who have established workflows. The goal is a product that feels dramatically better without making existing users feel lost.",
    patterns: [
      { label: 'Legacy audit first', body: "A structured review of existing patterns before any redesign begins. Documenting what works, what doesn't, and what can't be changed for technical or organizational reasons." },
      { label: 'Parallel path design', body: "Designing new experiences alongside existing ones, with clear transition paths. Users migrate on their own timeline, not the product team's." },
      { label: 'Change communication', body: "Designing the communication of change: what's moving, why, and what users should do. Treats user education as a design surface, not a support problem." },
      { label: 'Feature parity before novelty', body: "Every workflow users depend on must be accounted for before new capabilities are introduced. Modernization that removes functionality without replacement erodes trust." },
      { label: 'Incremental rollout patterns', body: "Feature flags, beta access, and staged rollouts designed to gather signal and build confidence before full migration." },
      { label: 'Technical constraint design', body: "Working within real implementation constraints — performance budgets, legacy system dependencies, migration timelines — to design solutions that actually ship." },
    ],
    evidenceLabel: 'Relevant experience',
    evidence: [
      { stat: 'Agate', label: 'Legacy SaaS modernization, Agate Software' },
      { stat: '5 yrs', label: 'CoreTechs platform evolution from v1 to mature product' },
      { stat: 'Gray', label: 'Gray Matter Analytics product redesign' },
      { stat: 'Real', label: 'Constraint-aware design with live codebases' },
    ],
    ctaHeading: "Let's modernize your product without breaking it.",
    ctaBody: "Tell us about your legacy product — what users love, what they hate, and what you're afraid to touch. That's where we start.",
    related: [
      { id: 'solutions-enterprise-saas', eyebrow: 'Solution', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.' },
      { id: 'solutions-design-systems', eyebrow: 'Solution', label: 'Design Systems', description: 'Shared language for teams designing at scale.' },
      { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design service.' },
    ],
  },
};

const SolutionDetail: React.FC<SolutionDetailProps> = ({ page, setCurrentPage }) => {
  const config = solutionConfig[page];
  const illustration = solutionIllustrations[page];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!config) return null;

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[
              { label: 'Solutions', pageId: 'solutions' },
              { label: config.label },
            ]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">{config.eyebrow}</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                {config.subtitle}
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                {config.heroBody}
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              {illustration}
              <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
                {config.evidence.map((item) => (
                  <div key={item.label} className="bg-tan dark:bg-neutral-900 px-5 py-4">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-0.5">{item.stat}</p>
                    <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Eyebrow className="mb-6">The challenge</Eyebrow>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                {config.challengeHeading}
              </h2>
              <div className="space-y-4">
                {config.challenge.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <Eyebrow className="mb-6">Our approach</Eyebrow>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                {config.approachHeading}
              </h2>
              <div className="space-y-4">
                {config.approach.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patterns */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Key Patterns</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug">
              How this shows up in the work.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {config.patterns.map((pattern) => (
              <div key={pattern.label} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{pattern.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{pattern.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight — optional featured work callout */}
      {config.spotlight && (
        <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <p className="text-xs font-semibold tracking-widest uppercase text-blue mb-4">{config.spotlight.eyebrow}</p>
                <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">{config.spotlight.heading}</h2>
                <div className="space-y-4">
                  {config.spotlight.body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-base text-muted dark:text-neutral-400 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
                {config.spotlight.stats.map((item) => (
                  <div key={item.label} className="bg-white dark:bg-neutral-900 px-6 py-6">
                    <p className="text-lg font-semibold text-ink dark:text-white mb-1">{item.stat}</p>
                    <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={config.related}
      />

      <SectionCTA
        heading={config.ctaHeading}
        body={config.ctaBody}
        primaryLabel="Let's Talk"
        primaryPage="contact"
        secondaryLabel="See All Solutions"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default SolutionDetail;
