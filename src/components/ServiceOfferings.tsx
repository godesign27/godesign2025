import React from 'react';
import { ArrowRight, ArrowUpRight, Check, Minus } from 'lucide-react';
import Eyebrow from './Eyebrow';
import OfferingIllustration from './illustrations/OfferingIllustration';
import { serviceOfferings, existingServiceProducts, offeringPageId, offeringPath, ServiceOffering, ExistingServiceProduct, PRICING_DISCLAIMER } from '../data/serviceOfferings';

const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const body = 'text-muted dark:text-neutral-400 leading-relaxed';
const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue dark:focus-visible:outline-lavender';
const primary = `inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 bg-ink dark:bg-tan-500 text-white dark:text-ink text-sm font-semibold hover:bg-neutral-700 dark:hover:bg-tan-400 transition-colors ${focus}`;

interface LinkProps { to: string; page: string; navigate?: (page: string) => void; className?: string; children: React.ReactNode; label?: string }
const PageLink: React.FC<LinkProps> = ({ to, page, navigate, className, children, label }) => (
  <a href={to} aria-label={label} className={className} onClick={e => {
    if (navigate && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
      e.preventDefault(); navigate(page); window.scrollTo(0, 0);
    }
  }}>{children}</a>
);

export const OfferingCard: React.FC<{ offering: ServiceOffering | ExistingServiceProduct; index: number; navigate?: (page: string) => void }> = ({ offering, index, navigate }) => (
  <article className="flex flex-col bg-white dark:bg-neutral-950 p-6 sm:p-8">
    <div className="flex items-center justify-between gap-4 mb-8">
      <span className="text-sm text-muted dark:text-neutral-400">{String(index + 1).padStart(2, '0')}</span>
      <span className="px-3 py-1 text-xs border border-line dark:border-white/20 text-muted dark:text-neutral-300">{offering.model}</span>
    </div>
    <h3 className="text-2xl font-semibold leading-tight text-ink dark:text-tan-500 mb-4">{offering.name}</h3>
    <p className={`${body} mb-8`}>{offering.promise}</p>
    <div className="mt-auto">
      <p className="text-lg font-semibold text-ink dark:text-white">{offering.price}</p>
      <p className="text-sm text-muted dark:text-neutral-400 mt-2">{offering.timeline}{'path' in offering ? '' : 'pricingNote' in offering ? ' · USD' : ' · Indicative USD'}</p>
      <PageLink to={'path' in offering ? offering.path : offeringPath(offering.slug)} page={'page' in offering ? offering.page : offeringPageId(offering.slug)} navigate={navigate} label={`View details: ${offering.name}`} className={`mt-6 pt-5 border-t border-line dark:border-white/10 flex min-h-12 items-center justify-between text-sm font-semibold text-blue dark:text-lavender hover:underline ${focus}`}>
        View details <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
      </PageLink>
    </div>
  </article>
);

function Inquiry({ offering, navigate }: { offering?: ServiceOffering; navigate: (page: string) => void }) {
  return <section className="py-16 sm:py-24 border-t border-line dark:border-white/10 bg-tan dark:bg-neutral-900">
    <div className={`${container} grid lg:grid-cols-2 gap-8 items-center`}>
      <div><Eyebrow>Start a conversation</Eyebrow><h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink dark:text-tan-500">{offering?.status === 'On hold' ? 'Plan the next step.' : 'Start with the question that matters.'}</h2></div>
      <div><p className={`${body} mb-6`}>{offering?.status === 'On hold' ? 'This offering is on hold. We can help you identify an available engagement that fits your current needs.' : 'Tell us about your product, team, and priorities. We will confirm the fit, scope, and availability before making a commitment.'}</p><PageLink to="/contact" page="contact" navigate={navigate} className={primary}>{offering?.cta ?? "Let's Talk"}<ArrowRight size={18} aria-hidden="true" /></PageLink><p className="text-xs text-muted dark:text-neutral-400 mt-4">Opens the contact page. No payment or booking is taken here.</p></div>
    </div>
  </section>;
}

function Breadcrumb({ offering, navigate }: { offering?: ServiceOffering; navigate: (page: string) => void }) {
  return <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-xs mb-12 text-muted dark:text-neutral-400">
    <PageLink to="/" page="home" navigate={navigate} className={`py-2 hover:underline ${focus}`}>Home</PageLink><span aria-hidden="true">/</span>
    {offering ? <><PageLink to="/service-offerings" page="service-offerings" navigate={navigate} className={`py-2 hover:underline ${focus}`}>Service Offerings</PageLink><span aria-hidden="true">/</span><span aria-current="page" className="text-blue dark:text-lavender">{offering.shortName}</span></> : <span aria-current="page" className="text-blue dark:text-lavender">Service Offerings</span>}
  </nav>;
}

const ServiceOfferings: React.FC<{ slug?: string; setCurrentPage: (page: string) => void }> = ({ slug, setCurrentPage: navigate }) => {
  const offering = serviceOfferings.find(item => item.slug === slug);
  const active = serviceOfferings.filter(item => item.status === 'Review');
  const restricted = serviceOfferings.filter(item => item.status !== 'Review');
  return <main className="bg-tan-100 dark:bg-neutral-950 text-ink dark:text-white min-h-screen pt-24">
    <section className="pt-8 pb-16 sm:pb-24">
      <div className={container}>
        <Breadcrumb offering={offering} navigate={navigate} />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div><Eyebrow>{offering ? `${offering.model} engagement` : 'Agentic AI + Design Systems'}</Eyebrow>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-ink dark:text-tan-500 mb-6">{offering?.name ?? 'Ways to work together.'}</h1>
            <p className={`text-lg ${body} mb-8`}>{offering?.summary ?? 'From a focused diagnostic to embedded leadership. Choose the level of involvement that fits your product, your team, and the decisions ahead.'}</p>
            {offering ? <><span className="inline-flex border-l-4 border-blue dark:border-lavender pl-4 text-sm font-medium">{offering.status === 'Review' ? 'Scope agreed before commitment' : offering.status}</span></> : <a href="#engagements" className={primary}>Explore Offerings <ArrowRight size={18} aria-hidden="true" /></a>}
          </div>
          <div>
            <OfferingIllustration labels={offering?.diagram} active={offering?.model === 'Retainer' ? 2 : 1} />
            <div className="mt-8 grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
              <div className="p-5 bg-tan dark:bg-neutral-900"><p className="text-xs text-muted dark:text-neutral-400 mb-2">{offering ? offering.pricingNote ? 'Investment basis · USD' : 'Indicative investment · USD' : 'One practice'}</p><p className="text-sm font-semibold">{offering?.price ?? 'Direct collaboration with GO Design'}</p></div>
              <div className="p-5 bg-tan dark:bg-neutral-900"><p className="text-xs text-muted dark:text-neutral-400 mb-2">{offering ? 'Typical timeline' : 'A clear starting point'}</p><p className="text-sm font-semibold">{offering?.timeline ?? 'Defined scope. Shared expectations.'}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {!offering ? <>
      <section id="engagements" className="py-16 sm:py-24 scroll-mt-24 border-t border-line dark:border-white/10">
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-8 mb-12"><div><Eyebrow>The engagement collection</Eyebrow><h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Different needs. Clear ways forward.</h2></div><p className={`${body} lg:pt-8`}>Start with a diagnosis, build a shared system, bring in design leadership, or develop your team's capability. These are distinct engagements, not a required sequence.</p></div>
          <div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">{active.map((item, index) => <OfferingCard key={item.slug} offering={item} index={index} navigate={navigate} />)}</div>
          <p className={`${body} text-sm mt-6`}>{PRICING_DISCLAIMER} Fractional leadership is scoped to reserved capacity, not an assumed calendar month.</p>
        </div>
      </section>
      <section id="more-services" className="py-16 sm:py-24 border-t border-line dark:border-white/10 bg-tan dark:bg-neutral-900">
        <div className={container}>
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div><Eyebrow>The wider practice</Eyebrow><h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">More ways to work together.</h2></div>
            <p className={`${body} lg:pt-8`}>Explore our consulting, product design, leadership, and speaking engagements. Each offering links to its full service page. Scope, timing, and fees are agreed around the work.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            {existingServiceProducts.map((item, index) => <OfferingCard key={item.slug} offering={item} index={active.length + index} navigate={navigate} />)}
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white dark:bg-neutral-900 border-t border-line dark:border-white/10"><div className={`${container} grid lg:grid-cols-3 gap-12`}>
        <div><Eyebrow>A useful starting point</Eyebrow><h2 className="text-3xl font-semibold tracking-tight">Not sure what needs to change?</h2></div>
        <div className="lg:col-span-2 border-l-4 border-blue dark:border-lavender pl-6 sm:pl-8"><p className="text-2xl leading-snug mb-6">Start with an audit when the problem is unclear. Build when the foundation is missing. Bring in leadership when the decisions need an owner.</p><PageLink to="/services/agentic-ux-audit" page="offering-agentic-ux-audit" navigate={navigate} className={`inline-flex min-h-12 items-center gap-2 text-blue dark:text-lavender font-medium ${focus}`}>Explore the audit <ArrowRight size={18} /></PageLink></div>
      </div></section>
      <section className="py-16 sm:py-24 border-t border-line dark:border-white/10"><div className={container}><Eyebrow>Additional arrangements</Eyebrow><h2 className="text-3xl font-semibold mb-4">Different availability. Clear boundaries.</h2><p className={`${body} mb-10`}>These are not open-entry engagements. Availability is stated before you inquire.</p>
        <div className="divide-y divide-line dark:divide-white/10 border-y border-line dark:border-white/10">{restricted.map(item => <div key={item.slug} className="grid md:grid-cols-3 gap-6 py-8"><div><span className="text-xs uppercase tracking-wider text-muted dark:text-neutral-400">{item.status}</span><h3 className="text-xl font-semibold mt-2">{item.name}</h3></div><p className={body}>{item.status === 'On hold' ? 'A proposed post-launch relationship. Not accepting bookings while scope and demand are evaluated.' : 'Capped strategic support outside an existing project or retainer. Not a new-client entry offer.'}</p><PageLink to={offeringPath(item.slug)} page={offeringPageId(item.slug)} navigate={navigate} className={`inline-flex items-center gap-3 min-h-12 text-blue dark:text-lavender md:justify-self-end ${focus}`}>View scope <ArrowUpRight size={18} /></PageLink></div>)}</div>
      </div></section>
    </> : <>
      <section className="py-16 sm:py-24 border-t border-line dark:border-white/10 bg-white dark:bg-neutral-900"><div className={`${container} grid lg:grid-cols-3 gap-12`}><div><Eyebrow>The right fit</Eyebrow><h2 className="text-3xl font-semibold">Who is this for?</h2></div><ul className="lg:col-span-2 divide-y divide-line dark:divide-white/10">{offering.audience.map((item, i) => <li key={item} className="flex gap-6 py-5 first:pt-0"><span className="text-sm text-blue dark:text-lavender pt-1">0{i + 1}</span><p className="text-lg leading-relaxed">{item}</p></li>)}</ul></div></section>
      <section className="py-16 sm:py-24 border-t border-line dark:border-white/10"><div className={container}><Eyebrow>Scope, made explicit</Eyebrow><div className="grid lg:grid-cols-2 gap-12 lg:gap-16"><div><h2 className="text-3xl font-semibold mb-8">What is included?</h2><ul className="space-y-5">{offering.included.map(item => <li key={item} className="flex gap-4"><Check size={20} strokeWidth={1.5} className="text-blue dark:text-lavender shrink-0 mt-1" aria-hidden="true" /><span className={body}>{item}</span></li>)}</ul></div><div className="bg-tan dark:bg-neutral-900 p-8"><h2 className="text-2xl font-semibold mb-6">What is not included?</h2><ul className="space-y-5">{offering.excluded.map(item => <li key={item} className="flex gap-4"><Minus size={20} className="shrink-0 mt-1 text-muted dark:text-neutral-400" aria-hidden="true" /><span className={body}>{item}</span></li>)}</ul></div></div></div></section>
      <section className="py-16 sm:py-24 bg-white dark:bg-neutral-900 border-t border-line dark:border-white/10"><div className={`${container} grid lg:grid-cols-2 gap-12`}><div><Eyebrow>Investment + timing</Eyebrow><h2 className="text-3xl font-semibold mb-6">How much does it cost?</h2><p className="text-3xl font-semibold text-blue dark:text-lavender mb-4">{offering.price}</p><p className={body}>{offering.terms}</p><p className="text-xs text-muted dark:text-neutral-400 mt-6">{offering.pricingNote ?? 'Indicative USD pricing from the September 2026 planning brief. Not a binding quote.'}</p></div><div className="border-l-4 border-blue dark:border-lavender pl-8"><h2 className="text-2xl font-semibold mb-4">What is the timeline?</h2><p className="text-2xl font-semibold mb-4">{offering.timeline}</p><p className={body}>Scheduling depends on agreed scope, access, and available capacity. The start date and delivery expectations are confirmed before work begins.</p></div></div></section>
      <section className="py-16 sm:py-24 border-t border-line dark:border-white/10"><div className={container}><Eyebrow>Working together</Eyebrow><h2 className="text-3xl font-semibold mb-10">{offering.status === 'On hold' ? 'What happens before this opens?' : offering.model === 'Retainer' ? 'How does the retainer work?' : 'What happens next?'}</h2><ol className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">{offering.steps.map((step, i) => <li key={step.title} className="bg-tan-100 dark:bg-neutral-950 p-8"><span className="inline-block text-blue dark:text-lavender text-sm mb-6">0{i + 1}</span><h3 className="text-xl font-semibold mb-3">{step.title}</h3><p className={body}>{step.body}</p></li>)}</ol></div></section>
      <section className="py-16 sm:py-24 bg-tan dark:bg-neutral-900 border-t border-line dark:border-white/10"><div className={container}><Eyebrow>Where it can lead</Eyebrow><h2 className="text-3xl font-semibold mb-4">The next engagement is a choice.</h2><p className={`${body} mb-10`}>Continue only when the next step addresses a real need. Each engagement has its own scope.</p><div className="grid md:grid-cols-2 gap-px bg-line dark:bg-white/10">{offering.next.map(slug => { const next = serviceOfferings.find(item => item.slug === slug)!; return <div key={slug} className="p-8 bg-white dark:bg-neutral-950"><p className="text-xs text-muted dark:text-neutral-400 mb-3">{next.status === 'Review' ? next.model : next.status}</p><h3 className="text-xl font-semibold mb-3">{next.name}</h3><p className={`${body} mb-5`}>{next.promise}</p><PageLink to={offeringPath(slug)} page={offeringPageId(slug)} navigate={navigate} className={`inline-flex gap-2 items-center min-h-12 text-blue dark:text-lavender ${focus}`}>Explore scope <ArrowRight size={18} /></PageLink></div>; })}</div>
        {offering.slug === 'agentic-design-system-build' && <p className={`${body} mt-8`}>For broader context, <PageLink to="/case-studies" page="case-studies" navigate={navigate} className={`underline text-blue dark:text-lavender ${focus}`}>explore the published portfolio</PageLink>. New build-specific case studies will be linked when available.</p>}
      </div></section>
    </>}
    <Inquiry offering={offering} navigate={navigate} />
  </main>;
};

export default ServiceOfferings;
