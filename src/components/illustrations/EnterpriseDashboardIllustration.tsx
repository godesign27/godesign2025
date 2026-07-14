import React from 'react';

const css = `
  .ed-illus {
    --ed-stroke: rgba(17,17,17,0.60);
    --ed-soft:   rgba(17,17,17,0.25);
    --ed-line:   rgba(17,17,17,0.09);
    --ed-label:  rgba(17,17,17,0.35);
    --ed-fill:   rgba(255,255,255,0.90);
    --ed-subtle: rgba(17,17,17,0.05);
    --ed-active: rgba(37,99,235,0.10);
  }
  .dark .ed-illus {
    --ed-stroke: rgba(255,255,255,0.50);
    --ed-soft:   rgba(255,255,255,0.22);
    --ed-line:   rgba(255,255,255,0.07);
    --ed-label:  rgba(255,255,255,0.28);
    --ed-fill:   rgba(255,255,255,0.04);
    --ed-subtle: rgba(255,255,255,0.04);
    --ed-active: rgba(37,99,235,0.18);
  }
  @keyframes ed-fade { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
  @keyframes ed-drift { 0%,100% { transform:translateY(0px) } 50% { transform:translateY(-2px) } }
  @keyframes ed-flow  { from { stroke-dashoffset:16 } to { stroke-dashoffset:0 } }

  .ed-sidebar  { animation: ed-fade .4s ease both .05s, ed-drift 9s ease-in-out infinite }
  .ed-table    { animation: ed-fade .4s ease both .2s,  ed-drift 8s ease-in-out infinite .4s }
  .ed-detail   { animation: ed-fade .4s ease both .35s, ed-drift 7s ease-in-out infinite .8s }
  .ed-conn     { stroke-dasharray: 3 4; animation: ed-flow 2.4s linear infinite }
`;

const BLUE  = '#2563EB';
const MONO  = 'ui-monospace,"SF Mono",Menlo,monospace';
const S     = 'var(--ed-stroke)';
const SS    = 'var(--ed-soft)';
const L     = 'var(--ed-line)';
const LAB   = 'var(--ed-label)';
const FILL  = 'var(--ed-fill)';
const SUB   = 'var(--ed-subtle)';
const ACT   = 'var(--ed-active)';

const EnterpriseDashboardIllustration: React.FC = () => (
  <svg
    className="ed-illus w-full"
    viewBox="0 0 480 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="ed-mask-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="8%"   stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="ed-mask"><rect width="480" height="290" fill="url(#ed-mask-g)" /></mask>
    </defs>

    <g mask="url(#ed-mask)">
      {/* Grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="290" style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[58,116,174,232].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* ── SIDEBAR ── */}
      <g transform="translate(22, 20)">
        <g className="ed-sidebar">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>PLATFORM</text>
          <rect x="0" y="14" width="70" height="256" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Logo area */}
          <rect x="8" y="22" width="20" height="8" style={{ fill: SUB, stroke: SS }} strokeWidth="0.4" />
          <rect x="32" y="24" width="28" height="3.5" style={{ fill: SUB }} />

          {/* Divider */}
          <line x1="8" y1="36" x2="62" y2="36" style={{ stroke: L }} strokeWidth="0.5" />

          {/* Nav items */}
          {[
            { y: 44, label: 'Dashboard', active: true },
            { y: 57, label: 'Users', active: false },
            { y: 70, label: 'Analytics', active: false },
            { y: 83, label: 'Reports', active: false },
            { y: 96, label: 'Settings', active: false },
          ].map(({ y, label, active }) => (
            <g key={label}>
              {active && <rect x="8" y={y - 3} width="54" height="12" fill={ACT} />}
              {active && <rect x="8" y={y - 3} width="2" height="12" fill={BLUE} fillOpacity="0.7" />}
              <circle cx="16" cy={y + 3} r="3" style={{ stroke: active ? SS : L }} strokeWidth={active ? '0.6' : '0.4'} fill="none" />
              <rect x="22" y={y + 1} width={active ? 36 : 28} height="3" style={{ fill: active ? SUB : L }} />
            </g>
          ))}

          {/* Role section */}
          <line x1="8" y1="112" x2="62" y2="112" style={{ stroke: L }} strokeWidth="0.5" />
          <text x="8" y="122" fontSize="4.5" letterSpacing="1" style={{ fill: LAB }} fontFamily={MONO}>ROLES</text>
          {['Admin', 'Editor', 'Viewer'].map((r, i) => (
            <g key={r}>
              <rect x="8" y={128 + i * 13} width="54" height="10" style={{ fill: SUB }} />
              <rect x="10" y={130 + i * 13} width={r.length * 3.5} height="3" style={{ fill: L }} />
            </g>
          ))}

          {/* Bottom user */}
          <line x1="8" y1="174" x2="62" y2="174" style={{ stroke: L }} strokeWidth="0.5" />
          <circle cx="18" cy="186" r="6" style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <rect x="28" y="183" width="28" height="3" style={{ fill: SUB }} />
          <rect x="28" y="189" width="20" height="2.5" style={{ fill: L }} />
        </g>
      </g>

      {/* ── MAIN TABLE AREA ── */}
      <g transform="translate(102, 20)">
        <g className="ed-table">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>DATA TABLE</text>

          {/* Tabs */}
          <rect x="0" y="14" width="260" height="256" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />
          <rect x="0" y="14" width="260" height="18" style={{ fill: SUB }} />
          {['All Users', 'Active', 'Pending'].map((tab, i) => (
            <g key={tab}>
              {i === 0 && <rect x={i * 55 + 6} y="14" width="50" height="18" fill={FILL} style={{ stroke: L }} strokeWidth="0.4" />}
              <text x={i * 55 + 31} y="26" fontSize="5.5" textAnchor="middle" style={{ fill: i === 0 ? S : LAB }} fontFamily={MONO}>{tab}</text>
            </g>
          ))}

          {/* Search bar */}
          <rect x="8" y="38" width="148" height="12" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />
          <rect x="12" y="42" width="60" height="3" style={{ fill: SUB }} />
          {/* Filter button */}
          <rect x="162" y="38" width="36" height="12" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />
          <rect x="167" y="42" width="24" height="3" style={{ fill: SUB }} />
          {/* Add button */}
          <rect x="204" y="38" width="46" height="12" fill={BLUE} fillOpacity="0.12" style={{ stroke: SS }} strokeWidth="0.5" />
          <rect x="210" y="42" width="30" height="3" style={{ fill: SS }} />

          {/* Table header */}
          <rect x="0" y="56" width="260" height="14" style={{ fill: SUB }} />
          {[
            { x: 8,   w: 50, label: 'Name' },
            { x: 68,  w: 50, label: 'Role' },
            { x: 126, w: 44, label: 'Status' },
            { x: 178, w: 36, label: 'Last seen' },
            { x: 222, w: 30, label: 'Actions' },
          ].map(col => (
            <rect key={col.label} x={col.x} y={60} width={col.w * 0.55} height="3" style={{ fill: L }} />
          ))}

          {/* Table rows */}
          {[0,1,2,3,4,5,6].map(i => {
            const y = 70 + i * 20;
            const statuses = [BLUE, 'var(--ed-soft)', 'var(--ed-soft)', BLUE, 'var(--ed-line)', BLUE, 'var(--ed-soft)'];
            return (
              <g key={i}>
                <line x1="0" y1={y} x2="260" y2={y} style={{ stroke: L }} strokeWidth="0.4" />
                {/* Avatar circle */}
                <circle cx="16" cy={y + 8} r="4" style={{ stroke: SS }} strokeWidth="0.4" fill="none" />
                {/* Name */}
                <rect x="24" y={y + 5.5} width={28 + (i % 3) * 8} height="3" style={{ fill: SUB }} />
                {/* Role */}
                <rect x="68" y={y + 5.5} width={20 + (i % 2) * 10} height="3" style={{ fill: SUB }} />
                {/* Status badge */}
                <rect x="126" y={y + 4} width="28" height="8" fill={i % 3 === 2 ? 'none' : statuses[i]} fillOpacity="0.12" style={{ stroke: statuses[i] }} strokeWidth="0.4" />
                {/* Last seen */}
                <rect x="178" y={y + 5.5} width="26" height="3" style={{ fill: L }} />
                {/* Action dots */}
                {[0,1,2].map(d => <circle key={d} cx={226 + d * 6} cy={y + 8} r="1.5" style={{ fill: L }} />)}
              </g>
            );
          })}

          {/* Pagination */}
          <rect x="0" y="210" width="260" height="18" style={{ fill: SUB }} />
          <rect x="8" y="215" width="50" height="3" style={{ fill: L }} />
          {[1,2,3].map((p, i) => (
            <rect key={p} x={188 + i * 14} y="212" width="10" height="10"
              style={{ stroke: i === 0 ? S : L, fill: i === 0 ? SUB : 'none' }} strokeWidth="0.4" />
          ))}
          <rect x="240" y="212" width="12" height="10" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
        </g>
      </g>

      {/* ── DETAIL PANEL ── */}
      <g transform="translate(372, 20)">
        <g className="ed-detail">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>DETAIL</text>
          <rect x="0" y="14" width="92" height="256" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Header */}
          <rect x="0" y="14" width="92" height="24" style={{ fill: SUB }} />
          <circle cx="16" cy="26" r="7" style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <rect x="27" y="22" width="40" height="3.5" style={{ fill: SUB }} />
          <rect x="27" y="29" width="28" height="2.5" style={{ fill: L }} />

          {/* Blue accent badge */}
          <rect x="66" y="20" width="20" height="8" fill={BLUE} fillOpacity="0.15" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="68" y="23" width="14" height="2.5" fill={BLUE} fillOpacity="0.5" />

          {/* Fields */}
          {[
            { label: 'Email', valW: 70 },
            { label: 'Role', valW: 42 },
            { label: 'Department', valW: 56 },
            { label: 'Joined', valW: 38 },
            { label: 'Last active', valW: 50 },
            { label: 'Permissions', valW: 64 },
          ].map(({ label, valW }, i) => (
            <g key={label}>
              <rect x="8" y={46 + i * 22} width={label.length * 3.2} height="3" style={{ fill: LAB === 'var(--ed-label)' ? L : L }} />
              <rect x="8" y={52 + i * 22} width={valW} height="4" style={{ fill: SUB }} />
              <line x1="8" y1={60 + i * 22} x2="84" y2={60 + i * 22} style={{ stroke: L }} strokeWidth="0.4" />
            </g>
          ))}

          {/* Action buttons */}
          <rect x="8" y="182" width="76" height="12" fill={BLUE} fillOpacity="0.12" style={{ stroke: SS }} strokeWidth="0.5" />
          <rect x="24" y="186" width="40" height="3" style={{ fill: SS }} />
          <rect x="8" y="198" width="36" height="10" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <rect x="10" y="201" width="24" height="3" style={{ fill: L }} />
        </g>
      </g>

      {/* Connection lines between panels */}
      <line x1="93" y1="155" x2="102" y2="155"
        style={{ stroke: SS }} strokeWidth="0.6" strokeDasharray="3 3" />
      <line x1="362" y1="155" x2="372" y2="155"
        style={{ stroke: SS }} strokeWidth="0.6" strokeDasharray="3 3" />
    </g>
  </svg>
);

export default EnterpriseDashboardIllustration;
