import React from 'react';
import { ArrowRight, Building2, Bot, Palette, Heart, BarChart3, RefreshCcw, Briefcase } from 'lucide-react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

interface SolutionsLandingProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}

const titleToCaseStudyPage: Record<string, string> = {
  'CoreTechs SaaS Healthcare Product': 'case-study-1',
  'Accenture - Employee Onboarding': 'case-study-2',
  'Jim Beam - The Cocktail Project': 'case-study-3',
};

const caseStudies = [
  {
    title: 'CoreTechs SaaS Healthcare Product',
    eyebrow: 'Healthcare SaaS · 2016 – 2022',
    description: 'Five years transforming a raw analytics platform into a trusted enterprise SaaS product for healthcare payors and providers.',
    image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/core-hero.png',
    tags: ['Healthcare', 'UX/UI Design', 'Web App'],
  },
  {
    title: 'Accenture - Employee Onboarding',
    eyebrow: 'Enterprise HR · 2016 – 2018',
    description: 'Reimagining a fragmented pre-boarding experience into a unified platform that gave 500,000+ employees confidence from offer acceptance to day one.',
    image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/onboarding-accenture-hero.png',
    tags: ['Enterprise', 'UX/UI Design', 'Service Design'],
  },
  {
    title: 'Jim Beam - The Cocktail Project',
    eyebrow: 'Consumer Brand · 2016 – 2017',
    description: 'A frictionless cocktail destination built from the ground up — designed to move users from browse to pick to pour in just a few taps.',
    image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg',
    tags: ['Consumer Brand', 'UX/UI Design', 'Responsive Web'],
  },
];

const solutionAreas = [
  {
    id: 'solutions-enterprise-saas',
    icon: Building2,
    label: 'Enterprise SaaS',
    description: 'Designing complex, multi-tenant platforms that scale without sacrificing usability. Role-based access, dense information architecture, and enterprise-grade design systems.',
  },
  {
    id: 'solutions-ai-native-products',
    icon: Bot,
    label: 'AI-Native Products',
    description: 'Designing products where AI is a first-class participant — trust architecture, confidence signaling, human oversight interfaces, and agentic UX patterns.',
  },
  {
    id: 'solutions-design-systems',
    icon: Palette,
    label: 'Design Systems',
    description: 'Token architecture, component libraries, and pattern frameworks purpose-built for AI-native and agentic products. Shared language for teams shipping at speed.',
  },
  {
    id: 'solutions-healthcare-ux',
    icon: Heart,
    label: 'Healthcare UX',
    description: 'Clinical and patient-facing experiences where clarity, trust, and compliance are non-negotiable. HIPAA-aware design with human-centered workflows.',
  },
  {
    id: 'solutions-fintech-ux',
    icon: BarChart3,
    label: 'Fintech UX',
    description: 'Designing financial products that are trustworthy, compliant, and genuinely easy to use. Risk communication, regulatory UI, and explainable AI in financial contexts.',
  },
  {
    id: 'solutions-product-modernization',
    icon: RefreshCcw,
    label: 'Product Modernization',
    description: 'Redesigning legacy products that have accumulated years of complexity, debt, and user frustration — while keeping business continuity and stakeholder trust intact.',
  },
];

const SolutionsLanding: React.FC<SolutionsLandingProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleCaseStudyClick = (title: string) => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(title);
    const pageKey = titleToCaseStudyPage[title];
    if (pageKey) setCurrentPage(pageKey);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 pt-32 pb-0 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <p className="flex items-center gap-2 text-xs font-semibold text-blue uppercase tracking-widest mb-6">
              <span className="w-[7px] h-[7px] bg-blue flex-shrink-0" aria-hidden="true" />
              Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              Work that moves the needle.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              Case studies and solution areas across enterprise AI, healthcare SaaS, design systems, and complex product modernization — 15+ years of design leadership applied to real business problems.
            </p>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { stat: '3', label: 'Featured case studies' },
              { stat: '6', label: 'Solution areas' },
              { stat: '15+', label: 'Years of practice' },
            ].map(({ stat, label }) => (
              <div key={label} className="bg-tan-100 dark:bg-neutral-950 px-6 py-5">
                <p className="text-2xl font-semibold text-ink dark:text-white mb-1">{stat}</p>
                <p className="text-xs font-medium text-muted dark:text-neutral-500 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
                <span className="inline-flex items-center gap-1.5"><Briefcase className="w-3 h-3" /> Case Studies</span>
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
                Problems worth solving.
              </h2>
            </div>
            <button
              onClick={() => navigate('case-studies')}
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender hover:opacity-70 transition-opacity"
            >
              All case studies <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {caseStudies.map((study) => (
              <button
                key={study.title}
                onClick={() => handleCaseStudyClick(study.title)}
                className="group text-left bg-white dark:bg-neutral-950 flex flex-col hover:bg-tan-100 dark:hover:bg-white/[0.02] transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-line dark:border-white/10">
                  <ImageWithSkeleton
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">{study.eyebrow}</p>
                  <h3 className="text-base font-semibold text-ink dark:text-white mb-3 leading-snug group-hover:text-blue dark:group-hover:text-lavender transition-colors">{study.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6 flex-1">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 border border-line dark:border-white/10 text-muted dark:text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                    View case study <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex sm:hidden">
            <button
              onClick={() => navigate('case-studies')}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender"
            >
              All case studies <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Solution Areas ───────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="w-6 h-[3px] bg-blue mb-6" />
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Areas of Practice</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Where the work happens.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {solutionAreas.map((area) => {
              const Icon = area.icon;
              return (
                <button
                  key={area.id}
                  onClick={() => navigate(area.id)}
                  className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-8 h-8 bg-tan dark:bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-blue/10 dark:group-hover:bg-blue/10 transition-colors">
                    <Icon className="w-4 h-4 text-muted dark:text-neutral-400 group-hover:text-blue dark:group-hover:text-blue transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="w-6 h-[3px] bg-blue mb-4" />
                  <h3 className="text-sm font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors">
                    {area.label}
                  </h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-6 h-[3px] bg-blue mb-6" />
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Work With Us</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-4">
              Let's work on something worth building.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
              Whether you need a strategic partner for a complex AI product or a design leader to drive a full platform redesign — let's talk about what your product actually needs.
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

    </div>
  );
};

export default SolutionsLanding;
