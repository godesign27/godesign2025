import React from 'react';

const css = `
  .sd-illus {
    --sd-stroke: rgba(17,17,17,0.60);
    --sd-soft:   rgba(17,17,17,0.25);
    --sd-line:   rgba(17,17,17,0.09);
    --sd-label:  rgba(17,17,17,0.35);
    --sd-fill:   rgba(255,255,255,0.90);
    --sd-subtle: rgba(17,17,17,0.05);
  }
  .dark .sd-illus {
    --sd-stroke: rgba(255,255,255,0.50);
    --sd-soft:   rgba(255,255,255,0.22);
    --sd-line:   rgba(255,255,255,0.07);
    --sd-label:  rgba(255,255,255,0.28);
    --sd-fill:   rgba(255,255,255,0.04);
    --sd-subtle: rgba(255,255,255,0.04);
  }
  @keyframes sd-fade  { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
  @keyframes sd-drift { 0%,100% { transform:translateY(0px) } 50% { transform:translateY(-2px) } }
  @keyframes sd-pulse { 0%,100% { opacity:0.25 } 50% { opacity:0.75 } }

  .sd-sidebar  { animation: sd-fade .4s ease both .05s, sd-drift 9s ease-in-out infinite }
  .sd-metrics  { animation: sd-fade .4s ease both .2s,  sd-drift 8s ease-in-out infinite .4s }
  .sd-table    { animation: sd-fade .4s ease both .35s, sd-drift 7s ease-in-out infinite .8s }
  .sd-growth   { animation: sd-pulse 3s ease-in-out infinite }
`;

const BLUE  = '#2563EB';
const MONO  = 'ui-monospace,"SF Mono",Menlo,monospace';
const S     = 'var(--sd-stroke)';
const SS    = 'var(--sd-soft)';
const L     = 'var(--sd-line)';
const LAB   = 'var(--sd-label)';
const FILL  = 'var(--sd-fill)';
const SUB   = 'var(--sd-subtle)';

const SaasDashboardIllustration: React.FC = () => (
  <svg
    className="sd-illus w-full"
    viewBox="0 0 480 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="sd-mask-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="8%"   stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="sd-mask"><rect width="480" height="290" fill="url(#sd-mask-g)" /></mask>
    </defs>

    <g mask="url(#sd-mask)">
      {/* Grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="290" style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[58,116,174,232].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* ── SIDEBAR ── */}
      <g transform="translate(22, 20)">
        <g className="sd-sidebar">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>SAAS APP</text>

          <rect x="0" y="14" width="56" height="258" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* App logo */}
          <rect x="8" y="22" width="20" height="8" fill={BLUE} fillOpacity="0.15" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="12" y="25" width="10" height="2.5" fill={BLUE} fillOpacity="0.5" />

          <line x1="4" y1="36" x2="52" y2="36" style={{ stroke: L }} strokeWidth="0.4" />

          {/* Nav items */}
          {[
            { y: 44, active: true },
            { y: 59, active: false },
            { y: 74, active: false },
            { y: 89, active: false },
            { y: 104, active: false },
          ].map(({ y, active }) => (
            <g key={y}>
              {active && <rect x="4" y={y - 4} width="48" height="14" fill={BLUE} fillOpacity="0.08" />}
              {active && <rect x="4" y={y - 4} width="2" height="14" fill={BLUE} fillOpacity="0.7" />}
              <rect x="10" y={y} width="8" height="6" style={{ fill: active ? SUB : L }} />
              <rect x="22" y={y + 1.5} width={active ? 24 : 18} height="3" style={{ fill: active ? SS : L }} />
            </g>
          ))}

          <line x1="4" y1="124" x2="52" y2="124" style={{ stroke: L }} strokeWidth="0.4" />

          {/* Workspace section */}
          <text x="6" y="134" fontSize="4" letterSpacing="1" style={{ fill: LAB }} fontFamily={MONO}>WORKSPACES</text>
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x="8" y={140 + i * 14} width="42" height="10" style={{ fill: SUB }} />
              <rect x="10" y={143 + i * 14} width={20 - i * 2} height="3" style={{ fill: L }} />
            </g>
          ))}

          {/* Bottom avatar */}
          <line x1="4" y1="188" x2="52" y2="188" style={{ stroke: L }} strokeWidth="0.4" />
          <circle cx="20" cy="200" r="6" style={{ stroke: SS }} strokeWidth="0.4" fill="none" />
          <rect x="30" y="197" width="18" height="3" style={{ fill: SUB }} />
          <rect x="30" y="203" width="12" height="2" style={{ fill: L }} />
        </g>
      </g>

      {/* ── MAIN CONTENT ── */}
      <g transform="translate(88, 20)">
        {/* Page header */}
        <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>DASHBOARD</text>
        <line x1="0" y1="12" x2="370" y2="12" style={{ stroke: L }} strokeWidth="0.4" />

        {/* ── METRICS ROW ── */}
        <g className="sd-metrics">
          {[
            { label: 'Monthly Revenue', valW: 50, chartType: 'bar', highlight: false },
            { label: 'Active Users',    valW: 36, chartType: 'line', highlight: true  },
            { label: 'Churn Rate',      valW: 28, chartType: 'bar', highlight: false },
          ].map(({ label, valW, chartType, highlight }, i) => {
            const cx = i * 126;
            const barHeights = [10, 14, 8, 18, 12, 20, 16];
            return (
              <g key={label}>
                <rect x={cx} y="18" width="118" height="58"
                  style={{ stroke: highlight ? SS : L, fill: FILL }}
                  strokeWidth={highlight ? '0.75' : '0.5'} />
                {highlight && <rect x={cx} y="18" width="118" height="2" fill={BLUE} fillOpacity="0.5" />}

                <rect x={cx + 8} y="24" width={label.length * 2.8} height="3" style={{ fill: L }} />
                <rect x={cx + 8} y="31" width={valW} height="7" style={{ fill: highlight ? SS : SUB }} className={highlight ? 'sd-growth' : undefined} />

                {/* Change badge */}
                <rect x={cx + 8} y="42" width="22" height="7"
                  fill={highlight ? BLUE : 'none'} fillOpacity={highlight ? '0.12' : '0'}
                  style={{ stroke: highlight ? SS : L }} strokeWidth="0.4" />
                <rect x={cx + 10} y="44.5" width="14" height="2.5"
                  fill={highlight ? BLUE : 'var(--sd-line)'} fillOpacity={highlight ? '0.5' : '1'} />

                {/* Mini chart */}
                {chartType === 'bar' ? (
                  barHeights.map((h, j) => (
                    <rect key={j}
                      x={cx + 48 + j * 8} y={65 - h} width="5" height={h}
                      fill={BLUE} fillOpacity={highlight ? 0.25 : 0.1}
                      style={{ stroke: L }} strokeWidth="0.3" />
                  ))
                ) : (
                  <polyline
                    points={barHeights.map((h, j) => `${cx + 48 + j * 9},${65 - h}`).join(' ')}
                    stroke={BLUE} strokeWidth="1" strokeOpacity="0.4" fill="none"
                  />
                )}
              </g>
            );
          })}
        </g>

        {/* ── TABLE ── */}
        <g className="sd-table">
          {/* Table header bar */}
          <text x="0" y="88" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>ACCOUNTS</text>

          {/* Filter/search row */}
          <rect x="0" y="94" width="180" height="11" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <rect x="6" y="97.5" width="60" height="3" style={{ fill: SUB }} />
          <rect x="208" y="94" width="54" height="11" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <rect x="214" y="97.5" width="36" height="3" style={{ fill: SUB }} />
          <rect x="268" y="94" width="50" height="11" fill={BLUE} fillOpacity="0.1" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="274" y="97.5" width="34" height="3" fill={BLUE} fillOpacity="0.4" />
          <rect x="322" y="94" width="48" height="11" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <rect x="328" y="97.5" width="30" height="3" style={{ fill: L }} />

          {/* Table head */}
          <rect x="0" y="110" width="370" height="12" style={{ fill: SUB }} />
          {[0,72,150,220,286,336].map((x, i) => (
            <rect key={i} x={x + 6} y="115" width={[40,56,46,46,36,28][i]} height="2.5" style={{ fill: L }} />
          ))}

          {/* Rows */}
          {[0,1,2,3,4,5,6,7].map(i => {
            const y = 122 + i * 18;
            const statuses = [true, false, true, true, false, true, false, true];
            return (
              <g key={i}>
                <line x1="0" y1={y} x2="370" y2={y} style={{ stroke: L }} strokeWidth="0.3" />
                {/* Company name */}
                <rect x="6" y={y + 4} width={28 + (i % 4) * 8} height="3" style={{ fill: SUB }} />
                {/* Plan badge */}
                <rect x="78" y={y + 3} width={i % 2 === 0 ? 32 : 26} height="8"
                  fill={i % 3 === 0 ? BLUE : 'none'} fillOpacity={i % 3 === 0 ? '0.10' : '0'}
                  style={{ stroke: i % 3 === 0 ? SS : L }} strokeWidth="0.4" />
                <rect x="82" y={y + 5.5} width={i % 2 === 0 ? 22 : 16} height="2.5"
                  fill={i % 3 === 0 ? BLUE : 'var(--sd-line)'} fillOpacity={i % 3 === 0 ? '0.5' : '1'} />
                {/* MRR */}
                <rect x="156" y={y + 4} width={26 + i * 2} height="3" style={{ fill: SUB }} />
                {/* Users */}
                <rect x="226" y={y + 4} width={18 + i} height="3" style={{ fill: L }} />
                {/* Status dot */}
                <circle cx="300" cy={y + 6} r="3"
                  fill={statuses[i] ? BLUE : 'none'} fillOpacity={statuses[i] ? '0.4' : '0'}
                  style={{ stroke: statuses[i] ? SS : L }} strokeWidth="0.4" />
                {/* Last activity */}
                <rect x="342" y={y + 4} width="20" height="3" style={{ fill: L }} />
              </g>
            );
          })}

          {/* Pagination */}
          <rect x="0" y="266" width="370" height="14" style={{ fill: SUB }} />
          <rect x="6" y="271" width="64" height="3" style={{ fill: L }} />
          {[1,2,3,4].map((p, i) => (
            <rect key={p} x={290 + i * 16} y="268" width="12" height="8"
              style={{ stroke: i === 0 ? S : L, fill: i === 0 ? SUB : 'none' }} strokeWidth="0.4" />
          ))}
        </g>
      </g>
    </g>
  </svg>
);

export default SaasDashboardIllustration;
