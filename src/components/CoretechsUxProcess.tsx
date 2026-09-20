import React from 'react';
import { ChevronRight } from 'lucide-react';

type UserType = 'A' | 'B' | 'C' | 'D' | 'E';
type Filter = UserType | 'all';
type NeedGroup = 'organization' | 'programs' | 'care';

const USER_TYPES: { id: UserType; role: string }[] = [
  { id: 'A', role: 'Org leader' },
  { id: 'B', role: 'Program owner' },
  { id: 'C', role: 'Contract clinician' },
  { id: 'D', role: 'Care manager' },
  { id: 'E', role: 'Outreach' },
];

const NEEDS: {
  want: string;
  value: string;
  types: UserType[];
  group: NeedGroup;
}[] = [
  {
    group: 'organization',
    want: 'See an organization dashboard with the key measures and KPIs we track',
    value: 'Understand performance against strategic objectives, and see the gaps',
    types: ['A', 'B'],
  },
  {
    group: 'organization',
    want: 'See performance drivers, especially for underperforming indicators',
    value: 'Know where to focus improvement activity',
    types: ['A', 'B'],
  },
  {
    group: 'organization',
    want: 'Drill into entities and business units behind each KPI',
    value: 'See how each side of the business is performing on its own',
    types: ['A', 'B'],
  },
  {
    group: 'organization',
    want: 'Compare performance across entities and drill-downs',
    value: 'Spot patterns and the units that need help',
    types: ['A', 'B'],
  },
  {
    group: 'programs',
    want: 'See a program dashboard with outcome and process measures tied to org KPIs',
    value: 'Track program performance, improvement, and ROI',
    types: ['B'],
  },
  {
    group: 'programs',
    want: 'Drill from organizational KPIs into relevant program performance',
    value: 'Connect strategy to the programs I actually run',
    types: ['B'],
  },
  {
    group: 'programs',
    want: 'See drivers for underperforming program measures',
    value: 'Focus improvement work on the programs that are slipping',
    types: ['B'],
  },
  {
    group: 'programs',
    want: 'Drill into entities and business units for a program',
    value: 'See which units are carrying or dragging the program',
    types: ['B'],
  },
  {
    group: 'programs',
    want: 'Compare program performance across entities',
    value: 'Find the units that need intervention',
    types: ['B'],
  },
  {
    group: 'programs',
    want: 'Explore population needs to find members who require intervention',
    value: 'Inform program design, workflow, and resource allocation',
    types: ['B'],
  },
  {
    group: 'programs',
    want: 'Create and save member lists by specific characteristics',
    value: 'Prioritize resources, design programs, and track results',
    types: ['B'],
  },
  {
    group: 'care',
    want: 'Track my performance on key contract measures against targets',
    value: 'Know where to focus as I treat this population',
    types: ['C'],
  },
  {
    group: 'care',
    want: 'Drill into member lists with needs and gaps aligned to the measures',
    value: 'See which members and measures I need to manage better',
    types: ['C', 'D', 'E'],
  },
  {
    group: 'care',
    want: 'Create and save lists of patients who need interventions and gap closure',
    value: 'Address member needs and close performance gaps',
    types: ['C', 'D', 'E'],
  },
  {
    group: 'care',
    want: 'See a prioritized list of members who need outreach in a given period',
    value: 'Spend time on the right members',
    types: ['C', 'D', 'E'],
  },
  {
    group: 'care',
    want: 'See prioritized interventions for each member',
    value: 'Do the right activity, aligned to organizational goals',
    types: ['C', 'D', 'E'],
  },
];

function groupLabel(group: NeedGroup): string {
  switch (group) {
    case 'organization':
      return 'Organization';
    case 'programs':
      return 'Programs';
    case 'care':
      return 'Care delivery';
    default: {
      const _exhaustive: never = group;
      throw new Error(`Unhandled group: ${_exhaustive}`);
    }
  }
}

function SitemapNode({
  id,
  title,
  note,
}: {
  id: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="group relative w-full overflow-hidden border border-line dark:border-white/10 bg-white dark:bg-neutral-950 transition-transform duration-500 ease-out hover:-translate-y-0.5">
      <div className="px-4 py-4">
        <p className="text-sm font-medium text-ink dark:text-white leading-snug">{title}</p>
        {note ? (
          <p className="mt-1 text-[11px] text-muted dark:text-neutral-500 leading-snug">{note}</p>
        ) : null}
      </div>
      <div className="border-t border-line dark:border-white/10 bg-tan-100 dark:bg-neutral-900 px-4 py-1.5">
        <p className="font-mono text-[10px] tracking-widest text-muted dark:text-neutral-500">{id}</p>
      </div>
    </div>
  );
}

function FlowLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center gap-1 min-w-[7.5rem] shrink-0">
      <p className="text-[10px] uppercase tracking-widest text-muted dark:text-neutral-500 text-center leading-tight max-w-[7.5rem]">
        {children}
      </p>
      <ChevronRight className="w-3.5 h-3.5 text-blue" strokeWidth={1.5} aria-hidden />
    </div>
  );
}

const CoretechsUxProcess: React.FC = () => {
  const [filter, setFilter] = React.useState<Filter>('all');

  const groups = (['organization', 'programs', 'care'] as const).filter((group) =>
    NEEDS.some((need) => need.group === group && (filter === 'all' || need.types.includes(filter))),
  );

  return (
    <section className="bg-tan-100 dark:bg-neutral-950 py-24 md:py-32 border-b border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-5xl">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">UX Process</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-ink dark:text-white leading-tight tracking-tight">
            From research to architecture.
          </h2>
        </div>

        <div className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Requirements</p>
            <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
              Mapped before a wireframe existed. Filter by who needed the capability — five roles, one product surface.
            </p>
          </div>
          <div className="flex flex-wrap gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            <button
              type="button"
              onClick={() => setFilter('all')}
              aria-pressed={filter === 'all'}
              className={`px-3 py-2 text-xs font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-ink text-white dark:bg-white dark:text-ink'
                  : 'bg-white dark:bg-neutral-950 text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white'
              }`}
            >
              All roles
            </button>
            {USER_TYPES.map((type) => {
              const selected = filter === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setFilter(type.id)}
                  aria-pressed={selected}
                  className={`px-3 py-2 text-xs font-medium transition-colors ${
                    selected
                      ? 'bg-blue text-white'
                      : 'bg-white dark:bg-neutral-950 text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white'
                  }`}
                >
                  <span className="font-semibold">{type.id}</span>
                  <span className="hidden sm:inline"> · {type.role}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden border border-line dark:border-white/10 bg-white dark:bg-neutral-950 mb-20">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left border-collapse">
              <thead>
                <tr className="border-b border-line dark:border-white/10 bg-tan-100 dark:bg-neutral-900">
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 w-[38%]">
                    As a user, I want to
                  </th>
                  <th className="px-5 py-3 text-[10px] font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 w-[32%]">
                    So that
                  </th>
                  {USER_TYPES.map((type) => (
                    <th key={type.id} className="px-2 py-3 text-center w-[6%]">
                      <span className="text-[10px] font-semibold tracking-widest text-ink dark:text-white">{type.id}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups.map((group) => {
                  const rows = NEEDS.filter(
                    (need) => need.group === group && (filter === 'all' || need.types.includes(filter)),
                  );
                  return (
                    <React.Fragment key={group}>
                      <tr className="bg-tan-100 dark:bg-neutral-900">
                        <td colSpan={7} className="px-5 py-2">
                          <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-blue">
                            <span className="w-4 h-[2px] bg-blue" aria-hidden />
                            {groupLabel(group)}
                          </span>
                        </td>
                      </tr>
                      {rows.map((need) => (
                        <tr
                          key={need.want}
                          className="border-t border-line dark:border-white/10 hover:bg-tan-100/70 dark:hover:bg-white/[0.03] transition-colors"
                        >
                          <td className="px-5 py-3.5 text-sm text-ink dark:text-white leading-snug align-top">
                            {need.want}
                          </td>
                          <td className="px-5 py-3.5 text-sm text-muted dark:text-neutral-400 leading-snug align-top">
                            {need.value}
                          </td>
                          {USER_TYPES.map((type) => {
                            const active = need.types.includes(type.id);
                            const emphasized = filter === 'all' || filter === type.id;
                            return (
                              <td key={type.id} className="px-2 py-3.5 text-center align-top">
                                <span
                                  className={`inline-block size-2 ${
                                    active && emphasized
                                      ? 'bg-blue'
                                      : active
                                        ? 'bg-line dark:bg-white/20'
                                        : 'bg-transparent'
                                  }`}
                                  aria-label={active ? `Needed by ${type.role}` : undefined}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Information architecture</p>
          <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
            Six modules arranged around how clinical leaders think about the data — not how the database was structured.
          </p>
        </div>

        <div className="border border-line dark:border-white/10 bg-white dark:bg-neutral-950 p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0">
            <SitemapNode id="0.0" title="Log in" />
            <FlowLabel>License check configuration</FlowLabel>
            <SitemapNode id="0.1" title="Two-factor authentication" note="First sign-on, or after 30 days" />
            <FlowLabel>Role-based view of information</FlowLabel>
            <SitemapNode id="1.0" title="Role-based & personal dashboard" />
          </div>

          <div className="hidden lg:flex justify-end pr-[calc(16.66%-0.5rem)] my-2" aria-hidden>
            <div className="w-px h-8 bg-line dark:bg-white/20" />
          </div>
          <div className="hidden lg:block h-px bg-line dark:bg-white/20 mx-[16.66%] mb-2" aria-hidden />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
            <div className="flex flex-col gap-3">
              <div className="hidden lg:flex justify-center" aria-hidden>
                <div className="w-px h-6 bg-line dark:bg-white/20" />
              </div>
              <SitemapNode id="2.0" title="Provider Performance Analytics" />
              <div className="hidden lg:flex justify-center" aria-hidden>
                <div className="w-px h-6 bg-line dark:bg-white/20" />
              </div>
              <SitemapNode id="5.0" title="Solution 1 detail" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="hidden lg:flex justify-center" aria-hidden>
                <div className="w-px h-6 bg-line dark:bg-white/20" />
              </div>
              <SitemapNode id="3.0" title="Population Health Analytics" />
              <div className="hidden lg:flex justify-center" aria-hidden>
                <div className="w-px h-6 bg-line dark:bg-white/20" />
              </div>
              <SitemapNode id="5.2" title="Solution 2 detail" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="hidden lg:flex justify-center" aria-hidden>
                <div className="w-px h-6 bg-line dark:bg-white/20" />
              </div>
              <SitemapNode id="4.0" title="Solution 3 landing" />
              <div className="hidden lg:flex justify-center" aria-hidden>
                <div className="w-px h-6 bg-line dark:bg-white/20" />
              </div>
              <SitemapNode id="5.3" title="Solution 3 detail" />
            </div>
          </div>

          <div className="hidden lg:block h-px bg-line dark:bg-white/20 mx-[16.66%] mt-2" aria-hidden />
          <div className="hidden lg:flex justify-center my-2" aria-hidden>
            <div className="w-px h-8 bg-line dark:bg-white/20" />
          </div>

          <div className="mt-4 lg:max-w-sm lg:mx-auto">
            <SitemapNode id="6.0" title="Member 360" note="Patients or physicians" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoretechsUxProcess;
