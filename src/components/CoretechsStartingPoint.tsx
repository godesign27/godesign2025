import React from 'react';

const PORTRAIT =
  'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/healthcare-user.png';
const BEFORE =
  'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/before.png';

const GOALS = [
  'Brief quality committee on contract performance in ten minutes — without an analyst in the room.',
  'See which practices are dragging HEDIS and P4P measures, then send care management there.',
  'Leave every session with three actions, not another chart to interpret.',
];

const FRICTIONS = [
  'Lands in the same engineer view as everyone else. No role. No priority. No next step.',
  'Projected, previous, and current share a legend she has to decode every time.',
  'Exports to Excel to make the story make sense before she walks into a meeting.',
];

const CoretechsStartingPoint: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-24 md:py-32 border-b border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-5xl">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Starting Point</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-ink dark:text-white leading-tight tracking-tight">
            Understanding what we inherited.
          </h2>
        </div>

        <div className="grid grid-flow-dense grid-cols-1 lg:grid-cols-12 gap-px bg-line dark:bg-white/10">
          <div className="lg:col-span-4 lg:row-span-2 bg-tan-100 dark:bg-neutral-900 overflow-hidden">
            <div className="relative h-72 lg:h-full min-h-[420px] overflow-hidden group">
              <img
                src={PORTRAIT}
                alt="Amara Ellis, Director of Population Health"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/70">Primary persona</p>
                <p className="text-lg font-semibold text-white mt-1">Amara Ellis, RN, MHA</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white dark:bg-neutral-950 p-8 md:p-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Primary persona</p>
            <h3 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight">
              Amara Ellis, RN, MHA
            </h3>
            <p className="mt-2 text-sm text-muted dark:text-neutral-400">
              Director of Population Health · Regional health plan · 340k members
            </p>

            <blockquote className="mt-8 border-l-2 border-blue pl-5">
              <p className="text-lg md:text-xl font-medium text-ink dark:text-white leading-snug">
                I don&apos;t need more charts. I need to know which three things to do before Thursday&apos;s quality meeting.
              </p>
            </blockquote>

            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10">
              {[
                { label: 'Opens CoreTechs', value: '3–4× / week' },
                { label: 'Time to decide', value: '12 minutes' },
                { label: 'Backup tool', value: 'Excel' },
                { label: 'Reports to', value: 'VP of Quality' },
              ].map((item) => (
                <div key={item.label} className="bg-white dark:bg-neutral-950 px-4 py-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted dark:text-neutral-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink dark:text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-4 bg-white dark:bg-neutral-950 p-8 md:p-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-5">What she is trying to do</p>
            <ul className="space-y-4">
              {GOALS.map((goal) => (
                <li key={goal} className="flex gap-3">
                  <span className="mt-2 w-4 h-[2px] bg-blue shrink-0" aria-hidden />
                  <p className="text-sm text-ink dark:text-neutral-300 leading-relaxed">{goal}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 bg-tan-100 dark:bg-neutral-900 p-8 md:p-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-5">What the product did to her</p>
            <ul className="space-y-4">
              {FRICTIONS.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 w-4 h-[2px] bg-ink dark:bg-white shrink-0" aria-hidden />
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-px grid grid-cols-1 lg:grid-cols-12 gap-px bg-line dark:bg-white/10">
          <div className="lg:col-span-8 bg-white dark:bg-neutral-950 overflow-hidden">
            <div className="overflow-hidden">
              <img
                src={BEFORE}
                alt="Inherited CoreTechs dashboard — engineer-built charts and a generic navigation chrome"
                className="w-full object-cover object-top max-h-[420px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-4 bg-white dark:bg-neutral-950 p-8 md:p-10 flex flex-col justify-end">
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-3">
              The product she inherited
            </p>
            <p className="text-base text-ink dark:text-white leading-relaxed">
              A developer-built interface optimized for engineers, not clinical administrators. Dense, hard to interpret, and requiring expert context to extract any value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoretechsStartingPoint;
