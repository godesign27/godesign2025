import React from 'react';
import Eyebrow from './Eyebrow';
import { Globe, Box, Bot, ArrowRight, ClipboardList, Sparkles, Briefcase } from 'lucide-react';
import SectionCTA from './SectionCTA';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <Eyebrow className="mb-4">Services</Eyebrow>
              <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6">
                Solving Real Problems. Designing Exceptional Experiences.
              </h1>
              <p className="text-xl text-muted dark:text-neutral-400 max-w-3xl">
                We bring clarity and simplicity to complexity. Our suite of Experience Design services combines deep expertise with human-centered design principles.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                { stat: '15+', label: 'Years of experience' },
                { stat: '50+', label: 'Products shipped' },
                { stat: '3', label: 'Core service areas' },
                { stat: 'Team', label: 'Senior designers, not account managers' },
              ].map((item) => (
                <div key={item.label} className="bg-tan dark:bg-neutral-900 p-6">
                  <p className="text-xl font-semibold text-ink dark:text-white mb-1">{item.stat}</p>
                  <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Core Services</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">What we do best.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <ClipboardList className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-ink dark:text-white mb-4">UX/UI Design Consulting</h3>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Transform your digital presence with user-focused solutions. From crafting intuitive user flows to building robust design systems.
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-neutral-500">
                <li>User Flow</li>
                <li>Information Architecture</li>
                <li>UX/UI Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-ink dark:text-white mb-4">AI + Agentic Experience</h3>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Design AI-powered products people actually trust. We bridge the gap between powerful models and interfaces users understand.
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-neutral-500">
                <li>Trust-by-Design Framework</li>
                <li>Mental Model Mapping</li>
                <li>AI Interaction Patterns</li>
                <li>Responsible AI Design</li>
                <li>Human-in-the-Loop Workflows</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-ink dark:text-white mb-4">Brand & Identity Design</h3>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Develop a strong, cohesive brand identity that resonates with your audience. Comprehensive brand systems that stand out.
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-neutral-500">
                <li>Logo Design</li>
                <li>Color Definition</li>
                <li>Typography</li>
                <li>Graphic Imagery</li>
                <li>Brand Guidelines</li>
                <li>Visual Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-24 bg-tan dark:bg-neutral-900 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">Specialized Services</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Focused expertise for specific needs.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-ink dark:text-white mb-3">Marketing Web Design</h3>
              <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Create impactful web experiences that convert visitors into customers with strategic user journeys.
              </p>
              <button
                onClick={() => handleNav('marketing-web-design')}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue dark:text-lavender hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <Box className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-ink dark:text-white mb-3">SaaS Product Design</h3>
              <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Build powerful, scalable software solutions with comprehensive SaaS design expertise.
              </p>
              <button
                onClick={() => handleNav('saas-product-design')}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue dark:text-lavender hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <Bot className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-ink dark:text-white mb-3">Agentic Experience</h3>
              <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Design AI and agent-powered interfaces that earn user trust through transparency and control.
              </p>
              <button
                onClick={() => handleNav('agentic-experience')}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue dark:text-lavender hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Eyebrow className="mb-3">How we work</Eyebrow>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">The process.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { step: '01', title: 'Discovery & Strategy', description: 'Understanding your business, goals, and target audience to create a strategic foundation.' },
              { step: '02', title: 'Design & Prototyping', description: 'Creating beautiful, functional layouts that align with your brand and optimize for your goals.' },
              { step: '03', title: 'Refinement & Testing', description: 'Validating with real users, iterating on feedback, ensuring the design works flawlessly.' },
              { step: '04', title: 'Handoff & Optimization', description: 'Developer-ready specs, support through launch, and data-driven improvements post-ship.' },
            ].map((phase) => (
              <div key={phase.step} className="bg-white dark:bg-neutral-950 p-8">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">{phase.step}</p>
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Ready to see solutions in action?"
        body="Explore how our services come to life through tailored solutions that solve real problems."
        primaryLabel="View Solutions"
        primaryPage="solutions"
        secondaryLabel="Get in Touch"
        secondaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Services;
