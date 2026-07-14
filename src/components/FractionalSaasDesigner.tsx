import React from 'react';
import SprintBoardIllustration from './illustrations/SprintBoardIllustration';
import { BarChart3, Layers, GitBranch, Component, Workflow, ScanSearch, Sparkles, Combine, Network } from 'lucide-react';
import Eyebrow from './Eyebrow';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';

interface FractionalSaasDesignerProps {
  setCurrentPage: (page: string) => void;
}

function DashboardMockup() {
  const rows = [
    { name: 'User Onboarding Flow', status: 'Completed', priority: 'High', progress: 100 },
    { name: 'Settings Restructure', status: 'In Progress', priority: 'High', progress: 68 },
    { name: 'Navigation Audit', status: 'In Progress', priority: 'Medium', progress: 45 },
    { name: 'Component Library v2', status: 'Planned', priority: 'Medium', progress: 12 },
    { name: 'Dashboard Redesign', status: 'Planned', priority: 'Low', progress: 0 },
  ];

  return (
    <div className="border border-line dark:border-white/[0.06] bg-white dark:bg-white/[0.03] overflow-hidden">
      <div className="flex">
        <div className="w-52 border-r border-line dark:border-white/[0.06] bg-tan dark:bg-neutral-950/80 p-4 hidden md:block">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-6 h-6 bg-ink dark:bg-white" />
            <span className="text-sm font-semibold text-ink dark:text-white">IG5 Platform</span>
          </div>
          <nav className="space-y-1">
            {['Dashboard', 'Projects', 'Components', 'Analytics', 'Settings'].map((item, i) => (
              <div
                key={item}
                className={`px-3 py-2 text-[13px] font-medium ${
                  i === 0
                    ? 'bg-white dark:bg-white/[0.03] text-ink dark:text-white font-medium border border-line dark:border-white/[0.06]'
                    : 'text-muted dark:text-neutral-500'
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </div>
        <div className="flex-1 p-5 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-semibold text-ink dark:text-white">UX Improvement Backlog</h3>
              <p className="text-xs text-muted dark:text-neutral-500 mt-0.5">5 initiatives tracked</p>
            </div>
            <div className="flex space-x-2">
              <div className="px-3 py-1.5 text-xs font-medium bg-tan dark:bg-white/[0.08] text-muted dark:text-neutral-400">Filter</div>
              <div className="px-3 py-1.5 text-xs font-medium bg-tan dark:bg-white/[0.08] text-muted dark:text-neutral-400">Sort</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 text-xs text-muted dark:text-neutral-500 font-medium uppercase tracking-wider pb-3 border-b border-line dark:border-white/[0.06] px-1">
            <div className="col-span-5">Initiative</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 hidden sm:block">Priority</div>
            <div className="col-span-3">Progress</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-12 gap-3 items-center py-3.5 border-b border-line/50 dark:border-white/[0.04] px-1 last:border-0"
            >
              <div className="col-span-5 text-sm text-ink dark:text-neutral-200 font-medium truncate">
                {row.name}
              </div>
              <div className="col-span-2">
                <span
                  className={`inline-block px-2 py-0.5 text-xs font-medium ${
                    row.status === 'Completed'
                      ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                      : row.status === 'In Progress'
                      ? 'bg-blue/10 text-blue dark:text-lavender'
                      : 'bg-tan dark:bg-white/[0.08] text-muted dark:text-neutral-500'
                  }`}
                >
                  {row.status}
                </span>
              </div>
              <div className="col-span-2 hidden sm:block">
                <span className={`text-xs font-medium ${
                  row.priority === 'High' ? 'text-amber-600 dark:text-amber-400' : row.priority === 'Medium' ? 'text-muted dark:text-neutral-500' : 'text-muted dark:text-neutral-500'
                }`}>
                  {row.priority}
                </span>
              </div>
              <div className="col-span-3 flex items-center space-x-2">
                <div className="flex-1 h-1.5 bg-tan dark:bg-white/[0.08] overflow-hidden">
                  <div
                    className={`h-full ${
                      row.progress === 100 ? 'bg-emerald-500' : row.progress > 0 ? 'bg-blue' : 'bg-line dark:bg-white/[0.08]'
                    }`}
                    style={{ width: `${row.progress}%` }}
                  />
                </div>
                <span className="text-xs text-muted dark:text-neutral-500 w-8 text-right">{row.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkflowMockup() {
  const steps = [
    { label: 'Audit', desc: 'Workflow analysis', active: false, done: true },
    { label: 'Map', desc: 'User flows', active: false, done: true },
    { label: 'Design', desc: 'UI patterns', active: true, done: false },
    { label: 'Validate', desc: 'Usability test', active: false, done: false },
    { label: 'Ship', desc: 'Engineering handoff', active: false, done: false },
  ];

  return (
    <div className="border border-line dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-ink dark:text-white">Design Sprint Workflow</h3>
        <p className="text-xs text-muted dark:text-neutral-500 mt-0.5">Current iteration: Navigation Redesign</p>
      </div>
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="flex flex-col items-center">
              <div
                className={`w-9 h-9 flex items-center justify-center text-xs font-semibold ${
                  step.done
                    ? 'bg-emerald-500 text-white'
                    : step.active
                    ? 'bg-ink dark:bg-white text-white dark:text-ink'
                    : 'bg-tan dark:bg-white/[0.08] text-muted dark:text-neutral-500'
                }`}
              >
                {step.done ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span className={`text-xs mt-2 font-medium ${step.active ? 'text-ink dark:text-white' : 'text-muted dark:text-neutral-500'}`}>
                {step.label}
              </span>
              <span className="text-[10px] text-muted dark:text-neutral-500 hidden sm:block">{step.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 ${step.done ? 'bg-emerald-300 dark:bg-emerald-600' : 'bg-line dark:bg-white/[0.06]'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-tan dark:bg-neutral-950/60 p-5 border border-line dark:border-white/[0.06]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-medium text-ink dark:text-white">Design Phase</div>
          <span className="text-xs bg-ink dark:bg-white text-white dark:text-ink px-2.5 py-1">Active</span>
        </div>
        <div className="space-y-3">
          {[
            { task: 'Simplify navigation hierarchy', done: true },
            { task: 'Reduce sidebar items from 14 to 8', done: true },
            { task: 'Introduce contextual secondary nav', done: false },
            { task: 'Update breadcrumb patterns', done: false },
          ].map((task) => (
            <div key={task.task} className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 border flex items-center justify-center ${
                  task.done ? 'bg-emerald-500 border-emerald-500' : 'border-line dark:border-white/[0.06]'
                }`}
              >
                {task.done && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`text-sm ${task.done ? 'text-muted dark:text-neutral-500 line-through' : 'text-ink dark:text-neutral-400'}`}>
                {task.task}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesignSystemMockup() {
  return (
    <div className="border border-line dark:border-white/[0.06] bg-white dark:bg-white/[0.03] p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-ink dark:text-white">Design System</h3>
        <p className="text-xs text-muted dark:text-neutral-500 mt-0.5">Standardized component library</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted dark:text-neutral-500 font-medium mb-2">Primary</div>
          <div className="space-y-1.5">
            {['bg-ink', 'bg-neutral-700', 'bg-neutral-500', 'bg-neutral-300'].map((color) => (
              <div key={color} className={`h-6 ${color}`} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted dark:text-neutral-500 font-medium mb-2">Accent</div>
          <div className="space-y-1.5">
            {['bg-blue', 'bg-blue/70', 'bg-blue/40', 'bg-blue/20'].map((color) => (
              <div key={color} className={`h-6 ${color}`} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted dark:text-neutral-500 font-medium mb-2">Success</div>
          <div className="space-y-1.5">
            {['bg-emerald-600', 'bg-emerald-500', 'bg-emerald-400', 'bg-emerald-200'].map((color) => (
              <div key={color} className={`h-6 ${color}`} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted dark:text-neutral-500 font-medium mb-2">Neutral</div>
          <div className="space-y-1.5">
            {['bg-neutral-700', 'bg-neutral-400', 'bg-neutral-200', 'bg-tan'].map((color) => (
              <div key={color} className={`h-6 ${color}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line dark:border-white/[0.06] pt-5">
        <div className="text-[10px] uppercase tracking-wider text-muted dark:text-neutral-500 font-medium mb-3">Components</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-tan dark:bg-neutral-950/60 p-4 border border-line dark:border-white/[0.06]">
            <div className="text-[10px] text-muted dark:text-neutral-500 mb-2">Button</div>
            <div className="space-y-2">
              <div className="bg-ink dark:bg-white text-white dark:text-ink text-xs font-medium px-3 py-1.5 text-center">Primary</div>
              <div className="bg-white dark:bg-white/[0.03] text-ink dark:text-neutral-400 text-xs font-medium px-3 py-1.5 text-center border border-line dark:border-white/[0.06]">Secondary</div>
            </div>
          </div>
          <div className="bg-tan dark:bg-neutral-950/60 p-4 border border-line dark:border-white/[0.06]">
            <div className="text-[10px] text-muted dark:text-neutral-500 mb-2">Input</div>
            <div className="space-y-2">
              <div className="bg-white dark:bg-white/[0.03] text-xs text-muted dark:text-neutral-500 px-3 py-1.5 border border-line dark:border-white/[0.06]">Placeholder text</div>
              <div className="bg-white dark:bg-white/[0.03] text-xs text-ink dark:text-neutral-200 px-3 py-1.5 border-2 border-blue">Active state</div>
            </div>
          </div>
          <div className="bg-tan dark:bg-neutral-950/60 p-4 border border-line dark:border-white/[0.06]">
            <div className="text-[10px] text-muted dark:text-neutral-500 mb-2">Badge</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 text-[10px] font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">Active</span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400">Pending</span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-tan dark:bg-white/[0.08] text-muted dark:text-neutral-500">Draft</span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400">Error</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line dark:border-white/[0.06] pt-5 mt-5">
        <div className="text-[10px] uppercase tracking-wider text-muted dark:text-neutral-500 font-medium mb-3">Typography Scale</div>
        <div className="space-y-2">
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-muted dark:text-neutral-500 w-12">H1</span>
            <span className="text-lg font-semibold text-ink dark:text-white">Page Title</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-muted dark:text-neutral-500 w-12">H2</span>
            <span className="text-base font-medium text-ink dark:text-white">Section Header</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-muted dark:text-neutral-500 w-12">Body</span>
            <span className="text-sm text-muted dark:text-neutral-500">Standard paragraph text</span>
          </div>
          <div className="flex items-baseline space-x-4">
            <span className="text-[10px] text-muted dark:text-neutral-500 w-12">Caption</span>
            <span className="text-xs text-muted dark:text-neutral-500">Metadata and labels</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const FractionalSaasDesigner: React.FC<FractionalSaasDesignerProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">
      {/* Hero Section with Breadcrumb */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Fractional SaaS Designer' }]}
            setCurrentPage={setCurrentPage}
          />

          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <Eyebrow className="mb-4">Service</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Fractional SaaS Designer<br />
                Embedded With Your Team
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                SaaS teams don't usually have a product problem, they have a UX and system evolution problem. Through a flexible, embedded model, we work directly with product and engineering teams to simplify workflows, improve usability, and evolve the product experience in a way that compounds over time.
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-8">
              <SprintBoardIllustration />
              <div className="grid grid-cols-3 gap-px bg-line dark:bg-white/10">
                {[
                  { stat: 'Embed', label: 'In your workflow' },
                  { stat: 'Sprint', label: 'Cadence design' },
                  { stat: 'Ship', label: 'Dev-ready handoff' },
                ].map((item) => (
                  <div key={item.label} className="bg-tan-100 dark:bg-neutral-900 px-5 py-4">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-0.5">{item.stat}</p>
                    <p className="text-xs text-muted dark:text-neutral-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Common Problem */}
      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">The Problem</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug">
                Products grow. UX often doesn't keep up.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mb-8">
                Many SaaS products reach a point where the product is strong, but the user experience starts to lag behind. As features are added over time, teams often run into the same challenges:
              </p>
              <ul className="space-y-4">
                {[
                  'Workflows become more complex and harder to navigate',
                  'Information architecture becomes fragmented across the product',
                  'UI patterns drift and become inconsistent',
                  'The overall look and feel starts to feel outdated',
                  'Design systems exist, but are not actively evolving',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
                    <span className="text-base leading-relaxed text-muted dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mt-8">
                The product continues to grow, but usability, clarity, and consistency begin to erode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 md:py-24 bg-tan dark:bg-neutral-900 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mb-12 md:mb-16">
            <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">The Approach</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug mb-5">
              Lightweight. Embedded. Incremental.
            </h2>
            <p className="text-base leading-relaxed text-muted dark:text-neutral-400">
              Instead of a full redesign or heavy process, we work in a lightweight, embedded model alongside product and engineering teams. The focus is on identifying high-impact improvements and implementing them incrementally.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {[
              { icon: BarChart3, title: 'Analyze workflows', body: 'Identify friction and inefficiencies in core user paths' },
              { icon: Layers, title: 'Simplify navigation', body: 'Reduce cognitive load through clearer task flows' },
              { icon: GitBranch, title: 'Refine architecture', body: 'Improve information clarity across the product' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white dark:bg-neutral-950 p-6">
                <Icon className="w-5 h-5 text-blue dark:text-lavender mb-6" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-muted dark:text-neutral-400">{body}</p>
              </div>
            ))}
          </div>

          <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mt-12 max-w-[640px]">
            This approach prioritizes progress over perfection: small improvements that compound into meaningful change.
          </p>
        </div>
      </section>

      {/* Dashboard Visual */}
      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DashboardMockup />
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-24 bg-tan dark:bg-neutral-900 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mb-12 md:mb-16">
            <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">Impact</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug mb-4">
              Measurable improvements across the product.
            </h2>
            <p className="text-base leading-relaxed text-muted dark:text-neutral-400">
              Applied in partnership with Agate Software, a SaaS company building government-focused products including the IG5 platform. The product had strong functionality and domain depth, but the experience had become more complex and less cohesive over time.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { metric: '~30%', label: 'UX improvement' },
              { metric: 'Faster', label: 'Task completion' },
              { metric: 'Clearer', label: 'Navigation & flow' },
              { metric: 'Stronger', label: 'Design-to-business alignment' },
            ].map((item) => (
              <div key={item.label} className="bg-white dark:bg-neutral-950 p-6">
                <div className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-none mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-muted dark:text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted dark:text-neutral-400 mt-10 max-w-[640px]">
            Just as importantly, the product established a stronger foundation for continued evolution.
          </p>
        </div>
      </section>

      {/* Workflow Section (split) */}
      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">Process</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug mb-6">
                Structured sprints. Clear deliverables.
              </h2>
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mb-6">
                Each improvement goes through a focused design sprint: audit existing patterns, map user flows, design refined interactions, validate with users, and hand off to engineering.
              </p>
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400">
                This keeps the work scoped, measurable, and directly integrated with the team's delivery cadence.
              </p>
            </div>
            <div className="md:col-span-7">
              <WorkflowMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Design System Visual */}
      <section className="py-20 md:py-24 bg-tan dark:bg-neutral-900 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7 order-2 md:order-1">
              <DesignSystemMockup />
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">Design System</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug mb-6">
                Evolve the system. Don't replace it.
              </h2>
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mb-6">
                A key part of this work is evolving the existing design system rather than replacing it.
              </p>
              <ul className="space-y-3">
                {[
                  'Standardize UI patterns across key areas of the product',
                  'Improve consistency in components and interactions',
                  'Create a more scalable foundation for future features',
                  'Modernize the overall look and feel incrementally',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
                    <span className="text-sm leading-relaxed text-muted dark:text-neutral-400">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mt-6">
                This avoids the cost and disruption of a full system rebuild while still moving the product forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">Engagement</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug">
                How we work.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mb-8">
                We operate as a fractional, embedded product design partner.
              </p>
              <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
                {[
                  { title: 'Part-time engagement', desc: 'Aligned to team needs and capacity, not fixed overhead.' },
                  { title: 'Direct collaboration', desc: 'Working alongside product and engineering, not in isolation.' },
                  { title: 'No heavy process', desc: 'No unnecessary overhead or disruption to existing workflows.' },
                  { title: 'High-impact focus', desc: 'Targeted improvements rather than broad redesigns.' },
                ].map((item) => (
                  <div key={item.title} className="bg-white dark:bg-neutral-950 p-6">
                    <h3 className="text-sm font-semibold text-ink dark:text-white mb-1.5">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted dark:text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mt-8">
                This model works well for teams that need senior design support without committing to a full-time hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Work */}
      <section className="py-20 md:py-24 bg-tan dark:bg-neutral-900 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mb-12 md:mb-16">
            <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">The Work</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug mb-5">
              The work takes different forms.
            </h2>
            <p className="text-base leading-relaxed text-muted dark:text-neutral-400">
              Depending on where the product is, we draw on these services to improve experience, consistency, and velocity, without disrupting what's already working.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {[
              { icon: Component, title: 'Evolve design system', body: 'Standardize patterns and modernize components without a full rebuild' },
              { icon: Workflow, title: 'Redesign key flows', body: 'Rethink high-friction workflows end-to-end for clarity and speed' },
              { icon: ScanSearch, title: 'Audit UI consistency', body: 'Identify and resolve pattern drift across the product' },
              { icon: Sparkles, title: 'Modernize visual layer', body: 'Update the look and feel to match current SaaS expectations' },
              { icon: Combine, title: 'Align design + engineering', body: 'Bridge the gap between design intent and implementation' },
              { icon: Network, title: 'Map information architecture', body: 'Restructure how content and features are organized across the product' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white dark:bg-neutral-950 p-6">
                <Icon className="w-5 h-5 text-blue dark:text-lavender mb-6" strokeWidth={1.5} />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-muted dark:text-neutral-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forward-Looking */}
      <section className="py-20 md:py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px]">
            <p className="text-xs font-medium tracking-wide text-muted dark:text-neutral-400 uppercase mb-3">Looking Ahead</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white leading-snug mb-6">
              Building a foundation for what's next.
            </h2>
            <p className="text-base leading-relaxed text-muted dark:text-neutral-400 mb-6">
              Beyond immediate improvements, the work positioned the product for what's next:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'A more flexible and scalable design system',
                'A modernized product experience aligned with current SaaS expectations',
                'A foundation that can support AI-assisted features where appropriate',
              ].map((item) => (
                <li key={item} className="flex items-start space-x-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-neutral-300 dark:bg-neutral-600 flex-shrink-0" />
                  <span className="text-base leading-relaxed text-muted dark:text-neutral-400">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-muted dark:text-neutral-400">
              The focus was on practical decisions that support long-term product growth.
            </p>
          </div>
        </div>
      </section>

      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          { id: 'enterprise-ux-consulting', eyebrow: 'Service', label: 'Enterprise UX Consulting', description: 'Longer-form consulting for complex enterprise products.' },
          { id: 'saas-product-design', eyebrow: 'Service', label: 'SaaS Product Design', description: 'End-to-end product design for software platforms.' },
          { id: 'strategy-sessions', eyebrow: 'Service', label: 'Strategy Sessions', description: 'Focused one-on-one sessions for design challenges.' },
        ]}
      />

      <SectionCTA
        heading="Small improvements, consistently applied."
        body="For SaaS teams where the product is strong but UX and systems need to catch up, this embedded, incremental approach provides a clear path forward."
        primaryLabel="Let's Talk"
        primaryPage="contact"
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default FractionalSaasDesigner;
