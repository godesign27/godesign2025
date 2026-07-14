import React from 'react';
import { Layers, Eye, GitBranch, Search, BookOpen, Workflow, Bot, PenLine, Mic2, ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';

interface HomeEditorialProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}

const perspectives = [
  { id: 'perspectives-our-philosophy', label: 'Our Philosophy', description: 'The principles that guide every design decision.', icon: BookOpen },
  { id: 'perspectives-how-we-work', label: 'How We Work', description: 'Our process, collaboration style, and tools.', icon: Workflow },
  { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How we design products where AI is a first-class participant.', icon: Bot },
  { id: 'perspectives-writing', label: 'Writing', description: 'Essays and articles on design, AI, and building products.', icon: PenLine },
  { id: 'speaking-workshops', label: 'Speaking', description: 'Talks and workshops on AI design and enterprise UX.', icon: Mic2 },
];

const writing = [
  { title: 'The trust calibration problem in AI interfaces', category: 'AI-Native Design' },
  { title: 'Why design systems fail, and how to fix them before they do', category: 'Design Systems' },
  { title: 'Designing for people who hate using your product', category: 'Enterprise UX' },
];

const HomeEditorial: React.FC<HomeEditorialProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleCaseStudyClick = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy('CoreTechs SaaS Healthcare Product');
    setCurrentPage('case-study-1');
  };

  return (
    <>
      {/* AI Experience Architecture Manifesto */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow className="mb-6">AI Experience Architecture™</Eyebrow>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                A new discipline for a new era.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
                AI is being deployed into enterprise products faster than it can be designed. Organizations have model capabilities. What they don't have is a framework for the experience layer that makes those capabilities usable, trustworthy, and governable.
              </p>
              <blockquote className="border-l-2 border-blue pl-6 text-base text-ink dark:text-white leading-relaxed mb-8">
                It is not a UI methodology. It is an architecture, the structural discipline that makes AI systems legible, trustworthy, and governable.
              </blockquote>
              <button
                onClick={() => navigate('ai-experience-architecture')}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue dark:text-lavender hover:underline"
              >
                Explore the framework <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="space-y-px bg-line dark:bg-white/10">
              {[
                { n: '01', label: 'Signal Architecture' },
                { n: '02', label: 'Human Oversight Design' },
                { n: '03', label: 'Agentic Design Systems', highlight: true },
                { n: '04', label: 'Trust Architecture' },
                { n: '05', label: 'AI Governance UX' },
              ].map((p) => (
                <div
                  key={p.n}
                  className={`flex items-center gap-4 p-5 ${p.highlight ? 'bg-blue/5 dark:bg-lavender/[0.06]' : 'bg-white dark:bg-neutral-950'}`}
                >
                  <span className="text-xs font-semibold text-blue dark:text-lavender">{p.n}</span>
                  <span className="text-sm font-medium text-ink dark:text-white">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Design Principles</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Trust is a design material.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { icon: Layers, label: 'Systems Before Screens', body: 'The architecture of an AI feature matters more than any single screen it produces.' },
              { icon: Eye, label: 'Trust Is a Design Material', body: 'Trust is built or broken in the interface, one decision point at a time.' },
              { icon: GitBranch, label: 'Governance Is a Design Problem', body: 'Who can override the AI, and how, is an interaction design question, not just a policy one.' },
              { icon: Search, label: 'Human-in-the-Loop Is a Pattern', body: 'Where humans stay in control is a deliberate design decision, not an afterthought.' },
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-neutral-950 p-8">
                <item.icon className="w-5 h-5 text-blue dark:text-lavender mb-5" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{item.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Eyebrow className="mb-3">Case Study</Eyebrow>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-tight">Featured Work</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white dark:bg-neutral-900 border border-line dark:border-white/10 p-2">
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
                alt="CoreTechs Dashboard"
                className="w-full h-72 object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium text-blue dark:text-lavender uppercase tracking-widest mb-4">Healthcare SaaS</p>
              <h3 className="text-2xl font-semibold text-ink dark:text-white mb-5 leading-snug">CoreTechs</h3>
              <p className="text-base text-muted dark:text-neutral-400 mb-8 leading-relaxed">
                Over five years, we transformed CoreTechs from a developer-centric tool into a fully realized SaaS product supporting payors and providers through Gray Matter Analytics' solutions. Work spanned the full UX/UI lifecycle: a scalable design component library, page templates, user flows, and site maps, aligning user personas with business goals through testing and iteration.
              </p>
              <button
                onClick={handleCaseStudyClick}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors self-start"
              >
                View case study <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Perspectives */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <Eyebrow className="mb-3">Perspectives</Eyebrow>
              <h2 className="text-2xl font-semibold text-ink dark:text-white">How we think about design.</h2>
            </div>
            <button
              onClick={() => navigate('perspectives')}
              className="text-sm font-medium text-blue dark:text-lavender hover:underline"
            >
              All perspectives →
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line dark:bg-white/10">
            {perspectives.map((p) => (
              <button
                key={p.id}
                onClick={() => navigate(p.id)}
                className="group text-left bg-white dark:bg-neutral-950 p-6 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <p.icon className="w-5 h-5 text-blue dark:text-lavender mb-4" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-ink dark:text-white mb-2 group-hover:text-blue dark:group-hover:text-lavender transition-colors">{p.label}</p>
                <p className="text-xs text-muted dark:text-neutral-400 leading-relaxed">{p.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Writing */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <Eyebrow className="mb-3">Writing</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Latest thinking.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {writing.map((w) => (
              <button
                key={w.title}
                onClick={() => navigate('perspectives-writing')}
                className="group text-left bg-white dark:bg-neutral-950 p-8 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">{w.category}</p>
                <p className="text-base font-semibold text-ink dark:text-white leading-snug group-hover:text-blue dark:group-hover:text-lavender transition-colors">{w.title}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeEditorial;
