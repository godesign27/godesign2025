import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Layers, BarChart3, GitBranch, ArrowUpRight, ChevronRight } from 'lucide-react';

interface FractionalSaasDesignerProps {
  setCurrentPage: (page: string) => void;
}

const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
    {children}
  </span>
);

const DashboardVisual: React.FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
    <div className="flex h-[420px] md:h-[480px]">
      {/* Sidebar */}
      <div className="hidden md:flex w-56 border-r border-slate-100 bg-slate-50/80 flex-col">
        <div className="p-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center">
              <span className="text-white text-xs font-bold">IG</span>
            </div>
            <span className="text-sm font-semibold text-slate-800">IG5 Platform</span>
          </div>
        </div>
        <div className="p-3 flex-1">
          <div className="space-y-0.5">
            {['Dashboard', 'Cases', 'Reports', 'Workflows', 'Analytics', 'Settings'].map((item, i) => (
              <div
                key={item}
                className={`px-3 py-2 rounded-md text-[13px] font-medium ${
                  i === 0
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-slate-200" />
            <div>
              <div className="text-xs font-medium text-slate-700">Admin User</div>
              <div className="text-[11px] text-slate-400">admin@gov.org</div>
            </div>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-5 md:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">Dashboard</h3>
            <p className="text-xs text-slate-400 mt-0.5">Overview of active cases and metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1.5 rounded-md border border-slate-200 text-xs text-slate-500 bg-white">Last 30 days</div>
            <div className="px-3 py-1.5 rounded-md bg-slate-800 text-xs text-white font-medium">Export</div>
          </div>
        </div>
        {/* Stats */}
        <div className="px-5 md:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Active Cases', value: '1,284', change: '+12%' },
              { label: 'Resolved', value: '856', change: '+8%' },
              { label: 'Avg. Resolution', value: '4.2d', change: '-15%' },
              { label: 'Satisfaction', value: '94%', change: '+3%' },
            ].map((stat) => (
              <div key={stat.label} className="p-3 md:p-4 rounded-lg border border-slate-100 bg-slate-50/50">
                <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
                <div className="text-lg md:text-xl font-semibold text-slate-800 mt-1">{stat.value}</div>
                <div className="text-[11px] text-emerald-600 font-medium mt-0.5">{stat.change}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Table */}
        <div className="px-5 md:px-8 flex-1 overflow-hidden">
          <div className="rounded-lg border border-slate-100 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left py-2.5 px-4 font-semibold text-slate-500 uppercase tracking-wide text-[10px]">Case ID</th>
                  <th className="text-left py-2.5 px-4 font-semibold text-slate-500 uppercase tracking-wide text-[10px]">Subject</th>
                  <th className="text-left py-2.5 px-4 font-semibold text-slate-500 uppercase tracking-wide text-[10px] hidden md:table-cell">Status</th>
                  <th className="text-left py-2.5 px-4 font-semibold text-slate-500 uppercase tracking-wide text-[10px] hidden md:table-cell">Priority</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'IG5-2847', subject: 'Compliance review Q4', status: 'In Progress', priority: 'High', color: 'bg-amber-100 text-amber-700' },
                  { id: 'IG5-2846', subject: 'Audit trail verification', status: 'Open', priority: 'Medium', color: 'bg-sky-100 text-sky-700' },
                  { id: 'IG5-2845', subject: 'Policy update notification', status: 'Resolved', priority: 'Low', color: 'bg-emerald-100 text-emerald-700' },
                  { id: 'IG5-2844', subject: 'Access control remediation', status: 'In Progress', priority: 'High', color: 'bg-amber-100 text-amber-700' },
                  { id: 'IG5-2843', subject: 'Quarterly risk assessment', status: 'Open', priority: 'Medium', color: 'bg-sky-100 text-sky-700' },
                ].map((row) => (
                  <tr key={row.id} className="border-b border-slate-50 last:border-0">
                    <td className="py-2.5 px-4 font-mono text-slate-500">{row.id}</td>
                    <td className="py-2.5 px-4 text-slate-700 font-medium">{row.subject}</td>
                    <td className="py-2.5 px-4 hidden md:table-cell">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${row.color}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-slate-500 hidden md:table-cell">{row.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WorkflowVisual: React.FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
    <div className="px-6 py-5 border-b border-slate-100">
      <h3 className="text-sm font-semibold text-slate-800">Case Submission Workflow</h3>
      <p className="text-xs text-slate-400 mt-0.5">Simplified 4-step process (previously 9 steps)</p>
    </div>
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        {['Case Details', 'Classification', 'Evidence', 'Review'].map((step, i) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${
                i <= 1 ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-400'
              }`}>
                {i + 1}
              </div>
              <span className={`text-[11px] mt-2 font-medium ${i <= 1 ? 'text-slate-700' : 'text-slate-400'}`}>{step}</span>
            </div>
            {i < 3 && (
              <div className={`flex-1 h-px mx-2 md:mx-4 ${i < 1 ? 'bg-slate-800' : 'bg-slate-200'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Classification Type</label>
          <div className="grid grid-cols-3 gap-2">
            {['Regulatory', 'Financial', 'Operational'].map((type, i) => (
              <div key={type} className={`px-3 py-2.5 rounded-lg border text-xs font-medium text-center ${
                i === 0 ? 'border-slate-800 bg-slate-800 text-white' : 'border-slate-200 text-slate-500'
              }`}>
                {type}
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Priority Level</label>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-slate-600 to-slate-800" />
            </div>
            <span className="text-xs font-semibold text-slate-700">High</span>
          </div>
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Description</label>
          <div className="w-full h-20 rounded-lg border border-slate-200 bg-slate-50/50 p-3">
            <div className="text-xs text-slate-400">Quarterly compliance review for fiscal year reporting...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DesignSystemVisual: React.FC = () => (
  <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
    <div className="px-6 py-5 border-b border-slate-100">
      <h3 className="text-sm font-semibold text-slate-800">Design System</h3>
      <p className="text-xs text-slate-400 mt-0.5">Standardized components and patterns</p>
    </div>
    <div className="p-6 md:p-8 space-y-8">
      {/* Color tokens */}
      <div>
        <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Color Tokens</h4>
        <div className="flex gap-2">
          {[
            { color: 'bg-slate-900', label: 'Primary' },
            { color: 'bg-slate-600', label: 'Secondary' },
            { color: 'bg-sky-500', label: 'Accent' },
            { color: 'bg-emerald-500', label: 'Success' },
            { color: 'bg-amber-500', label: 'Warning' },
            { color: 'bg-red-500', label: 'Error' },
          ].map(({ color, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className={`w-10 h-10 rounded-lg ${color}`} />
              <span className="text-[10px] text-slate-400 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Typography */}
      <div>
        <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Typography Scale</h4>
        <div className="space-y-2">
          <div className="flex items-baseline gap-4">
            <span className="text-[10px] text-slate-400 w-12 shrink-0">H1 / 32</span>
            <span className="text-[32px] font-semibold text-slate-800 leading-tight">Heading</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[10px] text-slate-400 w-12 shrink-0">H2 / 24</span>
            <span className="text-2xl font-semibold text-slate-800">Subheading</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[10px] text-slate-400 w-12 shrink-0">Body / 15</span>
            <span className="text-[15px] text-slate-600">Body text for general content and descriptions.</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="text-[10px] text-slate-400 w-12 shrink-0">Cap / 11</span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Caption Label</span>
          </div>
        </div>
      </div>
      {/* Components */}
      <div>
        <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Component Library</h4>
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-slate-800 text-white text-xs font-medium rounded-lg">Primary Action</button>
          <button className="px-4 py-2 border border-slate-300 text-slate-600 text-xs font-medium rounded-lg">Secondary</button>
          <button className="px-4 py-2 text-slate-500 text-xs font-medium rounded-lg underline underline-offset-2">Link Style</button>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700">Active</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-700">Pending</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-500">Archived</span>
        </div>
      </div>
    </div>
  </div>
);

const FractionalSaasDesigner: React.FC<FractionalSaasDesignerProps> = ({ setCurrentPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Fractional SaaS Designer | GO Design';
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-sky-100 to-slate-200 dark:from-slate-900 dark:via-sky-900 dark:to-slate-900"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <li className="text-gray-900 dark:text-white font-medium">Fractional SaaS Designer</li>
            </ol>
          </nav>

          <div className="py-16">
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white mb-6">
              Senior Product Design<br />
              for SaaS Teams
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
              SaaS teams don't usually have a product problem—they have a UX and system evolution problem. I help teams modernize their product UX and design systems without slowing down engineering or requiring a full-time hire.
            </p>
            <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl">
              Through a flexible, embedded model, I work directly with product and engineering teams to simplify workflows, improve usability, and evolve the product experience in a way that compounds over time.
            </p>
            <div className="mt-10">
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Common Problem */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <SectionLabel>The Problem</SectionLabel>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug">
                Strong product. Eroding experience.
              </h2>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed">
                Many SaaS products reach a point where the product is strong—but the user experience starts to lag behind. As features are added over time, teams often run into the same challenges.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Workflows become more complex and harder to navigate',
                'Information architecture becomes fragmented across the product',
                'UI patterns drift and become inconsistent',
                'The overall look and feel starts to feel outdated',
                'Design systems exist, but are not actively evolving',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  <p className="text-[15px] text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
              <p className="text-[15px] text-slate-400 leading-relaxed pt-2">
                The product continues to grow—but usability, clarity, and consistency begin to erode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Approach */}
      <section className="py-20 md:py-28 bg-slate-50/60">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <SectionLabel>The Approach</SectionLabel>
          <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug max-w-[600px]">
            Lightweight. Embedded. Incremental.
          </h2>
          <p className="mt-5 text-[15px] text-slate-500 leading-relaxed max-w-[600px]">
            Instead of a full redesign or heavy process, I work in a lightweight, embedded model alongside product and engineering teams. The focus is on identifying high-impact improvements and implementing them incrementally.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: 'Analyze workflows', desc: 'Identify friction and inefficiencies in core user paths' },
              { icon: Layers, title: 'Simplify navigation', desc: 'Reduce cognitive load through clearer task flows' },
              { icon: GitBranch, title: 'Refine architecture', desc: 'Improve information clarity across the product' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl border border-slate-200 bg-white">
                <Icon className="w-5 h-5 text-slate-400 mb-4" />
                <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
                <p className="text-[13px] text-slate-500 mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-slate-400 leading-relaxed max-w-[540px]">
            This approach prioritizes progress over perfection—small improvements that compound into meaningful change.
          </p>
        </div>
      </section>

      {/* Dashboard Visual */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <SectionLabel>Product UI</SectionLabel>
          <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug max-w-[600px] mb-10">
            Redesigned for clarity, speed, and confidence.
          </h2>
          <DashboardVisual />
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <SectionLabel><span className="text-slate-500">Client Context</span></SectionLabel>
          <p className="text-[15px] text-slate-400 leading-relaxed max-w-[600px] mb-12">
            This approach was applied in partnership with Agate Software, a SaaS company building government-focused products, including the IG5 platform. The product had strong functionality and domain depth, but the experience had become more complex and less cohesive over time.
          </p>
          <SectionLabel><span className="text-slate-500">Impact</span></SectionLabel>
          <h2 className="text-[22px] md:text-[26px] font-semibold text-white leading-snug max-w-[600px] mb-10">
            Measurable improvements across the board.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { metric: '~30%', label: 'Improvement in overall user experience' },
              { metric: 'Faster', label: 'More intuitive task completion' },
              { metric: 'Clearer', label: 'Navigation and reduced user friction' },
              { metric: 'Stronger', label: 'Alignment between design and business goals' },
            ].map(({ metric, label }) => (
              <div key={label} className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/50">
                <div className="text-2xl md:text-3xl font-semibold text-white">{metric}</div>
                <p className="text-[13px] text-slate-400 mt-2 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[14px] text-slate-500 leading-relaxed max-w-[540px]">
            Just as importantly, the product established a stronger foundation for continued evolution.
          </p>
        </div>
      </section>

      {/* Workflow Section (split) */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <SectionLabel>Workflow Simplification</SectionLabel>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug">
                From 9 steps to 4.
              </h2>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed">
                Complex multi-step processes were analyzed, consolidated, and redesigned to reduce cognitive load while maintaining the depth required for compliance workflows.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'Consolidated redundant form fields',
                  'Progressive disclosure of advanced options',
                  'Smart defaults based on case type',
                  'Inline validation and contextual guidance',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-[14px] text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <WorkflowVisual />
          </div>
        </div>
      </section>

      {/* Design System Visual */}
      <section className="py-20 md:py-28 bg-slate-50/60">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionLabel>Design System Evolution</SectionLabel>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug">
                Evolve—don't replace.
              </h2>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed">
                A key part of this work is evolving the existing design system rather than replacing it. This avoids the cost and disruption of a full system rebuild while still moving the product forward.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  'Standardize UI patterns across key areas',
                  'Improve consistency in components and interactions',
                  'Create a more scalable foundation for future features',
                  'Modernize look and feel incrementally',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span className="text-[14px] text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <DesignSystemVisual />
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="max-w-[600px]">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug">
              Fractional. Embedded. No overhead.
            </h2>
            <p className="mt-5 text-[15px] text-slate-500 leading-relaxed">
              I operate as a fractional, embedded product design partner. This model works well for teams that need senior design support without committing to a full-time hire.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden border border-slate-200">
            {[
              { title: 'Part-time engagement', desc: 'Aligned to team capacity and priorities' },
              { title: 'Direct collaboration', desc: 'Work side-by-side with product and engineering' },
              { title: 'No heavy process', desc: 'Minimal overhead, maximum output' },
              { title: 'No disruption', desc: 'Fits within existing workflows and timelines' },
              { title: 'High-impact focus', desc: 'Targeted improvements, not broad redesigns' },
              { title: 'Senior perspective', desc: 'Systems thinking applied to product decisions' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-6 bg-white">
                <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
                <p className="text-[13px] text-slate-500 mt-1.5 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forward-Looking */}
      <section className="py-20 md:py-28 bg-slate-50/60">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <SectionLabel>Forward-Looking</SectionLabel>
              <h2 className="text-[22px] md:text-[26px] font-semibold text-slate-900 leading-snug">
                Building for what's next.
              </h2>
              <p className="mt-5 text-[15px] text-slate-500 leading-relaxed">
                Beyond immediate improvements, the work positioned the product for what's next. The focus was on practical decisions that support long-term product growth.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Flexible design system', desc: 'A more scalable foundation that adapts as the product evolves' },
                { title: 'Modern product experience', desc: 'Aligned with current SaaS expectations and interaction patterns' },
                { title: 'AI-ready foundation', desc: 'A structure that can support AI-assisted features where appropriate' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white">
                  <ArrowUpRight className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
                    <p className="text-[13px] text-slate-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 md:py-28 border-t border-slate-100">
        <div className="max-w-[1120px] mx-auto px-6 md:px-8 text-center">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-slate-900 leading-snug max-w-[680px] mx-auto">
            Small, focused improvements—applied consistently—can significantly improve both user experience and product velocity.
          </h2>
          <p className="mt-6 text-[15px] text-slate-500 leading-relaxed max-w-[540px] mx-auto">
            For SaaS teams where the product is strong but UX and systems need to catch up, this type of embedded, incremental approach provides a clear path forward.
          </p>
          <div className="mt-10">
            <button
              onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FractionalSaasDesigner;
