import React from 'react';

interface Props { labels?: readonly string[]; active?: number }

/** Public engagement outcomes only. No client implementation or private methodology. */
const OfferingIllustration: React.FC<Props> = ({ labels = ['Diagnose', 'Build', 'Lead'], active = 1 }) => (
  <svg viewBox="0 0 480 290" fill="none" className="w-full text-ink dark:text-tan-500" role="img" aria-label={`${labels.join(', ')}: connected engagement outcomes`}>
    <g className="stroke-line dark:stroke-white/10" strokeWidth="0.75">
      {[32, 80, 128, 176, 224, 272, 320, 368, 416, 448].map(x => <path key={x} d={`M${x} 24V266`} />)}
      {[40, 88, 136, 184, 232, 264].map(y => <path key={y} d={`M24 ${y}H456`} />)}
    </g>
    <text x="32" y="32" fontSize="10" letterSpacing="2" className="fill-muted dark:fill-neutral-400">EXPERIENCE / CONTINUITY</text>
    {labels.map((label, i) => {
      const x = 32 + i * 144;
      const y = 64 + i * 24;
      return <g key={label} transform={`translate(${x},${y})`}>
        <rect width="128" height="128" className="fill-white dark:fill-neutral-900 stroke-line dark:stroke-white/20" />
        <rect width="128" height="3" className={i === active ? 'fill-blue dark:fill-lavender' : 'fill-line dark:fill-neutral-700'} />
        <text x="12" y="26" fontSize="10" className="fill-muted dark:fill-neutral-400">0{i + 1}</text>
        <g className={i === active ? 'stroke-blue dark:stroke-lavender' : 'stroke-current'} strokeWidth="1">
          {i === 0 && <><rect x="16" y="40" width="66" height="40" /><path d="M26 52H64M26 62H53M26 72H60" /><rect x="72" y="64" width="30" height="24" className="fill-white dark:fill-neutral-900" /><path d="m80 76 5 5 10-12" /></>}
          {i === 1 && <><rect x="16" y="40" width="40" height="18" /><rect x="70" y="40" width="40" height="18" /><rect x="16" y="70" width="40" height="18" /><rect x="70" y="70" width="40" height="18" /><path d="M56 49H70M36 58V70M90 58V70M56 79H70" /></>}
          {i === 2 && <><path d="M20 84V48H102M20 66H102" className="stroke-line dark:stroke-white/20" /><path d="m24 80 24-12 24 4 28-28" /><rect x="96" y="40" width="8" height="8" className="fill-blue dark:fill-lavender stroke-none" /></>}
        </g>
        <text x="12" y="112" fontSize="11" fontWeight="500" fill="currentColor">{label}</text>
        {i < 2 && <path d="M128 64h16m-4-4 4 4-4 4" className="stroke-blue dark:stroke-lavender" strokeWidth="1" />}
      </g>;
    })}
    <path d="M32 250H448" className="stroke-line dark:stroke-white/20" />
    <rect x="32" y="246" width="8" height="8" className="fill-blue dark:fill-lavender" />
    <text x="48" y="270" fontSize="10" className="fill-muted dark:fill-neutral-400">CLEAR SCOPE</text>
    <text x="448" y="270" textAnchor="end" fontSize="10" className="fill-muted dark:fill-neutral-400">HUMAN JUDGMENT, THROUGHOUT</text>
  </svg>
);

export default OfferingIllustration;
