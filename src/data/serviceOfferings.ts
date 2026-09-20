export interface ServiceOffering {
  slug: string;
  name: string;
  shortName: string;
  model: 'Project' | 'Retainer' | 'Hourly';
  status: 'Review' | 'On hold' | 'Existing clients';
  price: string;
  pricingNote?: string;
  timeline: string;
  promise: string;
  summary: string;
  audience: string[];
  included: string[];
  excluded: string[];
  steps: { title: string; body: string }[];
  terms: string;
  cta: string;
  next: string[];
  diagram: [string, string, string];
}

export const WEEKLY_RATE_USD = 8000;
export const PRICING_DISCLAIMER = '$8,000 per week is the median pricing reference for Audit and Build engagements, not a fixed rate. Rates may vary by client and scope of work. Final pricing is confirmed in a written proposal before work begins.';
const usd = (amount: number) => `$${amount.toLocaleString('en-US')}`;
const weekRange = (min: number, max: number) => `${usd(WEEKLY_RATE_USD * min)} to ${usd(WEEKLY_RATE_USD * max)}`;

export const serviceOfferings: ServiceOffering[] = [
  {
    slug: 'agentic-ux-audit', name: 'Agentic UX / Trust Audit', shortName: 'Trust Audit', model: 'Project', status: 'Review',
    price: weekRange(1, 2), timeline: '1 to 2 weeks',
    pricingNote: PRICING_DISCLAIMER,
    promise: 'Find the gaps in trust before you commit to a redesign.',
    summary: 'A focused review of how your AI product communicates, supports decisions, and keeps people in control. Receive ranked findings and a prioritized roadmap. Using a median pricing reference of $8,000 per week, a one-to-two-week engagement is estimated at $8,000 to $16,000. Final rates vary by client and scope of work.',
    audience: ['Product and design leaders who want an expert review before funding a redesign.', 'Teams seeing unclear AI actions, confusing confidence signals, or low adoption.', 'Organizations seeking a second opinion without committing to a larger engagement.'],
    included: ['Review of trust calibration, human oversight, and design-system consistency.', 'Written findings ranked by importance, with the reasoning behind each priority.', 'A roadmap identifying what to address first.', 'One 60-minute walkthrough of the findings.'],
    excluded: ['Implementation or product redesign.', 'Recruitment, user research, or usability testing sessions.', 'Ongoing monitoring after the report is delivered.'],
    steps: [{ title: 'Agree the focus', body: 'Confirm the product area, access, questions, and fixed fee.' }, { title: 'Review the experience', body: 'The review happens asynchronously, with clarification where needed.' }, { title: 'Receive the findings', body: 'Read a ranked report and a practical set of priorities.' }, { title: 'Decide what comes next', body: 'Walk through the recommendations in a 60-minute call. There is no obligation to continue.' }],
    terms: 'At the median pricing reference of $8,000 per allocated week, a one-week audit is estimated at $8,000 and a two-week audit at $16,000. These are planning estimates. The scope and total fee are agreed before booking.', cta: 'Request an Audit',
    next: ['agentic-design-system-build', 'fractional-agentic-ai-director'], diagram: ['Experience review', 'Ranked findings', 'Clear priorities'],
  },
  {
    slug: 'agentic-design-system-build', name: 'Agentic Design System Build', shortName: 'Design System Build', model: 'Project', status: 'Review',
    price: weekRange(4, 12), timeline: '4 to 12 weeks',
    pricingNote: PRICING_DISCLAIMER,
    promise: 'Give your AI product a consistent experience foundation.',
    summary: 'A scoped design-system engagement for teams building agentic products. Bring components, interaction patterns, and adoption guidance into a shared foundation. Using a median pricing reference of $8,000 per week, four to twelve allocated weeks are estimated at $32,000 to $96,000. Final rates vary by client and scope of work.',
    audience: ['AI-native teams building their first shared experience foundation.', 'Enterprise design leaders extending an existing system to support AI.', 'Product teams whose AI experiences behave inconsistently across surfaces.'],
    included: ['A component library aligned to the agreed product scope.', 'Experience patterns for confidence, oversight, and traceability.', 'Documentation and contribution guidance for team adoption.', 'Milestone reviews and a handoff aligned with the delivery team.'],
    excluded: ['An unlimited library or a redesign of every product surface.', 'Model development, backend infrastructure, or production engineering unless separately agreed.', 'Ongoing maintenance after the agreed handoff.'],
    steps: [{ title: 'Scope the foundation', body: 'Review the product context and agree the boundaries of the system.' }, { title: 'Set milestones', body: 'Define deliverables, review points, dependencies, and milestone fees.' }, { title: 'Build and review', body: 'Develop the agreed system with regular feedback from your team.' }, { title: 'Enable adoption', body: 'Hand over the documentation and clarify how teams will use the system.' }],
    terms: 'Milestone-based project pricing estimated using a median reference of $8,000 per allocated week. Four weeks are estimated at $32,000 and twelve weeks at $96,000. Final pricing and milestones are agreed in the proposal. Elapsed calendar time may differ from allocated working time.', cta: 'Discuss the Build',
    next: ['agentic-ops-governance', 'fractional-agentic-ai-director'], diagram: ['Shared foundation', 'Consistent patterns', 'Team adoption'],
  },
  {
    slug: 'fractional-agentic-ai-director', name: 'Fractional Agentic AI Design Director', shortName: 'Fractional Director', model: 'Retainer', status: 'Review',
    price: '$4,000 to $8,000 / week', timeline: 'Ongoing',
    pricingNote: 'USD weekly pricing varies by client, scope of work, and reserved capacity. Final pricing, billing cadence, and minimum term are confirmed in a written proposal before work begins.',
    promise: 'Senior design leadership, embedded in your team.',
    summary: 'An ongoing leadership engagement for teams shipping AI products without a full-time design director. Combine strategic direction, design reviews, and team enablement for $4,000 to $8,000 per week. Your retainer is based on the capacity reserved for your team, with access, billing cadence, and minimum commitment agreed before work begins.',
    audience: ['Product leaders needing experienced design direction for AI initiatives.', 'Growing teams with strong execution but a gap in senior design leadership.', 'Organizations aligning several teams around a shared AI experience.'],
    included: ['Strategic direction for the agreed AI product priorities.', 'Recurring design reviews and decision support.', 'Team enablement and collaboration with product and engineering.', 'A defined monthly capacity and working cadence.'],
    excluded: ['Unlimited availability or round-the-clock response.', 'A full-time employee commitment.', 'Unbounded production design or engineering delivery.'],
    steps: [{ title: 'Share the priorities', body: 'Discuss the team, product context, and leadership gap.' }, { title: 'Define the engagement', body: 'Agree monthly capacity, access, cadence, and minimum term.' }, { title: 'Work with the team', body: 'Join the agreed planning and review rhythm.' }, { title: 'Review the fit', body: 'Reassess priorities and capacity together as the product evolves.' }],
    terms: 'Retainer pricing ranges from $4,000 to $8,000 per week, based on agreed capacity and scope. The weekly fee, billing cadence, access, response expectations, and any minimum commitment are agreed before work begins.', cta: 'Discuss Leadership',
    next: ['workshops-team-enablement', 'agentic-design-system-build'], diagram: ['Product direction', 'Team decisions', 'Shared ownership'],
  },
  {
    slug: 'agentic-ops-governance', name: 'Agentic Ops & Governance Retainer', shortName: 'Ops & Governance', model: 'Retainer', status: 'On hold',
    price: '$2,500 to $5,000 / month', timeline: 'Not currently offered',
    promise: 'Keep the experience coherent as your AI product evolves.',
    summary: 'A proposed post-launch engagement for teams maintaining an agentic experience over time. The concept covers experience monitoring and periodic pattern-library updates as product behavior changes. It is currently on hold and is not accepting bookings. The indicative core retainer is $2,500 to $5,000 per month, with additional scope priced separately.',
    audience: ['Teams with an already-shipped agentic product.', 'Design-system owners planning for long-term consistency.', 'Organizations exploring support after a design-system build.'],
    included: ['Proposed review of changing product behaviors and experience consistency.', 'Periodic recommendations for maintaining the pattern library.', 'A defined core scope, with new work agreed separately.'],
    excluded: ['A currently available service or a confirmed start date.', '24/7 operational support, security monitoring, or compliance certification.', 'Unlimited new workflows or implementation work.'],
    steps: [{ title: 'Availability review', body: 'This concept will be revisited when post-launch client needs are established.' }, { title: 'Scope confirmation', body: 'Any future engagement would require an agreed scope, cadence, and pricing model.' }],
    terms: 'Planning estimate only. Core retainer plus separately scoped additions. Availability and contract terms are not finalized.', cta: 'Ask a Question',
    next: ['agentic-design-system-build', 'fractional-agentic-ai-director'], diagram: ['Experience health', 'Pattern review', 'Continued clarity'],
  },
  {
    slug: 'workshops-team-enablement', name: 'Workshops / Team Enablement', shortName: 'Workshops', model: 'Project', status: 'Review',
    price: '$2,500 half-day / $4,500 full-day', timeline: 'Half or full day + prep',
    promise: 'Build a shared language for trustworthy AI experiences.',
    summary: 'A facilitated working session for teams designing agentic products or adopting a design system. Build a shared understanding of trust, human oversight, and consistent experience decisions. Indicative fees are $2,500 for a half-day or $4,500 for a full day, plus agreed preparation time within the scoped engagement.',
    audience: ['Design and product teams developing their AI experience practice.', 'Organizations preparing to adopt or extend a design system.', 'Agencies seeking focused team enablement for AI product work.'],
    included: ['Preparation around an agreed topic and team context.', 'A facilitated half-day or full-day working session.', 'Shared exercises and discussion grounded in experience principles.', 'A concise set of takeaways and next steps.'],
    excluded: ['A finished product design or component library.', 'Formal certification or a licensed proprietary curriculum.', 'Ongoing advisory support outside the agreed session.'],
    steps: [{ title: 'Choose the focus', body: 'Agree the topic, participants, and what the team should take away.' }, { title: 'Prepare together', body: 'Share the necessary context and confirm the session format.' }, { title: 'Work through the ideas', body: 'Use facilitated discussion and exercises to build shared understanding.' }, { title: 'Take the next step', body: 'Leave with a concise set of actions for the team.' }],
    terms: 'Fixed-fee session. Format, preparation, participant count, and any travel requirements are confirmed in advance.', cta: 'Request a Workshop',
    next: ['agentic-ux-audit', 'fractional-agentic-ai-director'], diagram: ['Shared language', 'Working session', 'Team capability'],
  },
  {
    slug: 'advisory-hours', name: 'Advisory Hours', shortName: 'Advisory Hours', model: 'Hourly', status: 'Existing clients',
    price: '$250 to $350 / hour', timeline: 'By agreement',
    promise: 'Focused advice when an existing engagement needs more.',
    summary: 'Capped advisory blocks for existing project or retainer clients who need strategic input outside the current scope. Indicative rates range from $250 to $350 per hour. The question, time allocation, and spending cap are agreed before work begins. This is not a standalone entry offer for new clients.',
    audience: ['Existing project clients with a focused follow-up question.', 'Retainer clients needing additional capacity outside their agreement.', 'Established collaborators who need a limited strategic review.'],
    included: ['Advice on a clearly defined question or decision.', 'An agreed block of time with a spending cap.', 'A concise record of the recommendations relevant to the session.'],
    excluded: ['Open-ended hourly availability for new engagements.', 'A substitute for a design-system project or ongoing leadership role.', 'Production delivery without an additional scoped agreement.'],
    steps: [{ title: 'Identify the question', body: 'Reference your existing engagement and describe the decision at hand.' }, { title: 'Agree a cap', body: 'Confirm the rate, time block, and scope before the session.' }, { title: 'Get focused input', body: 'Work through the question and capture the next decision.' }],
    terms: 'Existing clients only. Sold in capped blocks, subject to availability and a separate scope agreement.', cta: 'Request Advisory',
    next: ['agentic-ux-audit', 'workshops-team-enablement'], diagram: ['Focused question', 'Expert review', 'Next decision'],
  },
];

export const offeringPageId = (slug: string) => `offering-${slug}`;
export const offeringPath = (slug: string) => `/services/${slug}`;

/** Existing Work With Me pages remain the detail destinations; do not duplicate their content. */
export interface ExistingServiceProduct {
  slug: string;
  name: string;
  model: string;
  price: string;
  timeline: string;
  promise: string;
  page: string;
  path: string;
}

export const existingServiceProducts: ExistingServiceProduct[] = [
  { slug: 'agentic-experience', name: 'Agentic Experience', model: 'Project / Retainer', price: 'Scoped proposal', timeline: 'Agreed per engagement', promise: 'AI-native product design, experience strategy, and human oversight for intelligent products.', page: 'agentic-experience', path: '/agentic-experience' },
  { slug: 'enterprise-ux-consulting', name: 'Enterprise UX Consulting', model: 'Project / Retainer', price: 'Scoped proposal', timeline: 'Agreed per engagement', promise: 'Platform redesign, UX research, and stakeholder alignment for complex enterprise products.', page: 'enterprise-ux-consulting', path: '/services/enterprise-ux-consulting' },
  { slug: 'fractional-saas-designer', name: 'Fractional SaaS Designer', model: 'Retainer', price: 'Scoped proposal', timeline: 'Ongoing collaboration', promise: 'Embedded senior design capacity for SaaS teams, from workflow improvements to design-system evolution.', page: 'fractional-saas-designer', path: '/fractional-saas-designer' },
  { slug: 'saas-product-design', name: 'SaaS Product Design', model: 'Project', price: 'Scoped proposal', timeline: 'Agreed per engagement', promise: 'End-to-end product design, from information architecture and key flows to development-ready specifications.', page: 'saas-product-design', path: '/saas-product-design' },
  { slug: 'marketing-web-design', name: 'Marketing Web Design', model: 'Project', price: 'Scoped proposal', timeline: 'Agreed per engagement', promise: 'Narrative-led websites that make your offer clear and guide visitors toward the right next step.', page: 'marketing-web-design', path: '/marketing-web-design' },
  { slug: 'mobile-web-design', name: 'Mobile & Web Design', model: 'Project', price: 'Scoped proposal', timeline: 'Agreed per engagement', promise: 'Mobile-first experiences and responsive product design across devices, with development-ready specifications.', page: 'mobile-web-design', path: '/mobile-web-design' },
  { slug: 'speaking-workshops', name: 'Speaking & Workshops', model: 'Event / Team', price: 'Scoped proposal', timeline: 'Talk, half-day, or full-day', promise: 'Conference talks, executive briefings, and custom team workshops on AI design, design systems, and enterprise UX.', page: 'speaking-workshops', path: '/services/speaking-workshops' },
  { slug: 'strategy-sessions', name: 'Strategy Sessions', model: 'Session', price: 'Scoped proposal', timeline: '60, 90, or 120 minutes', promise: 'A focused conversation about a design challenge, with clear recommendations and a written follow-up.', page: 'strategy-sessions', path: '/services/strategy-sessions' },
];
