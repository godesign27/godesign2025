import React from 'react';

const css = `
  .rd-illus {
    --rd-stroke: rgba(17,17,17,0.60);
    --rd-soft:   rgba(17,17,17,0.25);
    --rd-line:   rgba(17,17,17,0.09);
    --rd-label:  rgba(17,17,17,0.35);
    --rd-fill:   rgba(255,255,255,0.90);
    --rd-subtle: rgba(17,17,17,0.05);
  }
  .dark .rd-illus {
    --rd-stroke: rgba(255,255,255,0.50);
    --rd-soft:   rgba(255,255,255,0.22);
    --rd-line:   rgba(255,255,255,0.07);
    --rd-label:  rgba(255,255,255,0.28);
    --rd-fill:   rgba(255,255,255,0.04);
    --rd-subtle: rgba(255,255,255,0.04);
  }
  @keyframes rd-fade  { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
  @keyframes rd-drift { 0%,100% { transform:translateY(0px) } 50% { transform:translateY(-2px) } }
  @keyframes rd-flow  { from { stroke-dashoffset:14 } to { stroke-dashoffset:0 } }

  .rd-mobile  { animation: rd-fade .4s ease both .05s, rd-drift 9s  ease-in-out infinite }
  .rd-tablet  { animation: rd-fade .4s ease both .2s,  rd-drift 8s  ease-in-out infinite .6s }
  .rd-desktop { animation: rd-fade .4s ease both .35s, rd-drift 7s  ease-in-out infinite 1.2s }
  .rd-conn    { stroke-dasharray: 3 3; animation: rd-flow 2.4s linear infinite }
`;

const BLUE  = '#2563EB';
const MONO  = 'ui-monospace,"SF Mono",Menlo,monospace';
const S     = 'var(--rd-stroke)';
const SS    = 'var(--rd-soft)';
const L     = 'var(--rd-line)';
const LAB   = 'var(--rd-label)';
const FILL  = 'var(--rd-fill)';
const SUB   = 'var(--rd-subtle)';

const ResponsiveDevicesIllustration: React.FC = () => (
  <svg
    className="rd-illus w-full"
    viewBox="0 0 480 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="rd-mask-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="8%"   stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="rd-mask"><rect width="480" height="290" fill="url(#rd-mask-g)" /></mask>
    </defs>

    <g mask="url(#rd-mask)">
      {/* Grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="290" style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[58,116,174,232].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* ── MOBILE frame ── */}
      <g transform="translate(28, 28)">
        <g className="rd-mobile">
          <text x="27" y="8" fontSize="5" letterSpacing="1.2" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>MOBILE</text>

          {/* Phone shell */}
          <rect x="0" y="14" width="54" height="96" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Status bar */}
          <rect x="0" y="14" width="54" height="10" style={{ fill: SUB }} />
          <rect x="8" y="17" width="14" height="2.5" style={{ fill: L }} />
          <circle cx="44" cy="19" r="2" style={{ fill: L }} />

          {/* Nav bar */}
          <rect x="0" y="24" width="54" height="12" style={{ fill: SUB }} />
          <rect x="8" y="28" width="18" height="3" style={{ fill: SS }} />
          <rect x="40" y="27" width="7" height="5" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />

          {/* Hero section */}
          <rect x="4" y="42" width="46" height="24" style={{ fill: SUB }} />
          <rect x="6" y="44" width="36" height="4" style={{ fill: SS }} />
          <rect x="6" y="51" width="28" height="3" style={{ fill: L }} />
          <rect x="6" y="57" width="30" height="8" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="9" y="60" width="20" height="2.5" fill={BLUE} fillOpacity="0.5" />

          {/* Card stack */}
          {[0,1].map(i => (
            <g key={i}>
              <rect x="4" y={72 + i * 16} width="46" height="12" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
              <rect x="8" y={75 + i * 16} width="28" height="3" style={{ fill: SUB }} />
              <rect x="8" y={80 + i * 16} width="18" height="2.5" style={{ fill: L }} />
            </g>
          ))}

          {/* Bottom tab bar */}
          <rect x="0" y="102" width="54" height="8" style={{ fill: SUB, stroke: L }} strokeWidth="0.4" />
          {[8,20,33,46].map(x => (
            <circle key={x} cx={x} cy="106" r="2.5" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
          ))}
          <rect x="18" y="104" width="6" height="5" style={{ fill: L }} />

          {/* Breakpoint label */}
          <rect x="6" y="116" width="42" height="8" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
          <text x="27" y="122" fontSize="5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>375px</text>
        </g>
      </g>

      {/* ── TABLET frame ── */}
      <g transform="translate(108, 28)">
        <g className="rd-tablet">
          <text x="63" y="8" fontSize="5" letterSpacing="1.2" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>TABLET</text>

          {/* Tablet shell */}
          <rect x="0" y="14" width="126" height="96" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Status bar */}
          <rect x="0" y="14" width="126" height="10" style={{ fill: SUB }} />
          <rect x="8" y="17" width="20" height="2.5" style={{ fill: L }} />

          {/* Nav */}
          <rect x="0" y="24" width="126" height="12" style={{ fill: SUB }} />
          <rect x="8" y="28" width="24" height="3" style={{ fill: SS }} />
          {[60,80,100].map(x => <rect key={x} x={x} y={28} width={14} height="3" style={{ fill: L }} />)}
          <rect x="108" y="27" width="10" height="5" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.4" />

          {/* 2-col layout */}
          {/* Left col */}
          <rect x="4" y="42" width="56" height="36" style={{ fill: SUB }} />
          <rect x="8" y="46" width="40" height="5" style={{ fill: SS }} />
          <rect x="8" y="55" width="44" height="3.5" style={{ fill: L }} />
          <rect x="8" y="61" width="36" height="3" style={{ fill: L }} />
          <rect x="8" y="68" width="30" height="8" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="11" y="71" width="20" height="2.5" fill={BLUE} fillOpacity="0.5" />

          {/* Right col — image */}
          <rect x="68" y="42" width="54" height="36" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <line x1="68" y1="42" x2="122" y2="78" style={{ stroke: L }} strokeWidth="0.4" />
          <line x1="122" y1="42" x2="68" y2="78" style={{ stroke: L }} strokeWidth="0.4" />

          {/* Feature row */}
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={4 + i * 40} y="86" width="36" height="18" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
              <rect x={8 + i * 40} y="90" width="8" height="6" style={{ fill: SUB }} />
              <rect x={8 + i * 40} y="99" width={22 - i * 2} height="2.5" style={{ fill: L }} />
            </g>
          ))}

          {/* Breakpoint label */}
          <rect x="30" y="116" width="66" height="8" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
          <text x="63" y="122" fontSize="5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>768px</text>
        </g>
      </g>

      {/* ── DESKTOP frame ── */}
      <g transform="translate(262, 28)">
        <g className="rd-desktop">
          <text x="99" y="8" fontSize="5" letterSpacing="1.2" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>DESKTOP</text>

          {/* Desktop shell */}
          <rect x="0" y="14" width="198" height="126" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Nav bar */}
          <rect x="0" y="14" width="198" height="14" style={{ fill: SUB }} />
          <rect x="8" y="18" width="22" height="5" style={{ fill: SS }} />
          {[44,66,88,110].map(x => <rect key={x} x={x} y={20} width={14} height="3" style={{ fill: L }} />)}
          <rect x="168" y="17" width="22" height="9" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="172" y="20.5" width="14" height="3" fill={BLUE} fillOpacity="0.5" />

          {/* Sidebar */}
          <rect x="0" y="28" width="34" height="112" style={{ fill: SUB }} />
          {[0,1,2,3,4].map(i => (
            <g key={i}>
              {i === 0 && <rect x="2" y={36 + i * 17} width="30" height="12" style={{ fill: 'var(--rd-subtle)' }} fillOpacity="2" />}
              {i === 0 && <rect x="2" y={36} width="2" height="12" fill={BLUE} fillOpacity="0.6" />}
              <circle cx="10" cy={42 + i * 17} r="4" style={{ stroke: i === 0 ? SS : L }} strokeWidth="0.4" fill="none" />
              <rect x="18" y={40 + i * 17} width={12 - i} height="3" style={{ fill: i === 0 ? SS : L }} />
            </g>
          ))}

          {/* Main content */}
          {/* Metrics row */}
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={38 + i * 52} y="30" width="46" height="24" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
              <rect x={42 + i * 52} y="35" width={18 + i * 4} height="5" style={{ fill: i === 1 ? SS : SUB }} />
              <rect x={42 + i * 52} y="43" width="26" height="3" style={{ fill: L }} />
              {/* Mini chart line */}
              <polyline
                points={`${42 + i * 52},50 ${48 + i * 52},47 ${54 + i * 52},48 ${60 + i * 52},44 ${66 + i * 52},45 ${72 + i * 52},42 ${78 + i * 52},44`}
                style={{ stroke: i === 1 ? SS : L }} strokeWidth="0.75" fill="none"
              />
            </g>
          ))}

          {/* Table */}
          <rect x="38" y="60" width="156" height="8" style={{ fill: SUB }} />
          {[8,14,20,26,32,38].map((_, i) => (
            <g key={i}>
              <line x1="38" y1={68 + i * 10} x2="194" y2={68 + i * 10} style={{ stroke: L }} strokeWidth="0.4" />
              <circle cx="50" cy={73 + i * 10} r="3.5" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
              <rect x="58" y={71 + i * 10} width={30 + (i % 3) * 8} height="3" style={{ fill: SUB }} />
              <rect x="104" y={71 + i * 10} width={20 + i * 2} height="3" style={{ fill: SUB }} />
              <rect x="154" y={71 + i * 10} width="28" height="5" style={{ stroke: L, fill: FILL }} strokeWidth="0.3" />
              <rect x="156" y={72.5 + i * 10} width="18" height="2" style={{ fill: L }} />
            </g>
          ))}

          {/* Breakpoint label */}
          <rect x="66" y="148" width="66" height="8" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
          <text x="99" y="154" fontSize="5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>1280px</text>
        </g>
      </g>

      {/* Connection arrows between devices */}
      <line x1="84" y1="76" x2="108" y2="76"
        style={{ stroke: SS }} strokeWidth="0.75" className="rd-conn" />
      <polyline points="86,72 94,76 86,80"
        style={{ stroke: SS }} strokeWidth="0.75" fill="none" />

      <line x1="236" y1="76" x2="262" y2="76"
        style={{ stroke: SS }} strokeWidth="0.75" className="rd-conn" />
      <polyline points="238,72 246,76 238,80"
        style={{ stroke: SS }} strokeWidth="0.75" fill="none" />
    </g>
  </svg>
);

export default ResponsiveDevicesIllustration;
