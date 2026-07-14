import React from 'react';

const css = `
  .mp-illus {
    --mp-stroke: rgba(17,17,17,0.60);
    --mp-soft:   rgba(17,17,17,0.25);
    --mp-line:   rgba(17,17,17,0.09);
    --mp-label:  rgba(17,17,17,0.35);
    --mp-fill:   rgba(255,255,255,0.90);
    --mp-subtle: rgba(17,17,17,0.05);
  }
  .dark .mp-illus {
    --mp-stroke: rgba(255,255,255,0.50);
    --mp-soft:   rgba(255,255,255,0.22);
    --mp-line:   rgba(255,255,255,0.07);
    --mp-label:  rgba(255,255,255,0.28);
    --mp-fill:   rgba(255,255,255,0.04);
    --mp-subtle: rgba(255,255,255,0.04);
  }
  @keyframes mp-fade  { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
  @keyframes mp-drift { 0%,100% { transform:translateY(0px) } 50% { transform:translateY(-2px) } }
  @keyframes mp-flow  { from { stroke-dashoffset:16 } to { stroke-dashoffset:0 } }

  .mp-page   { animation: mp-fade .4s ease both .05s, mp-drift 9s ease-in-out infinite }
  .mp-funnel { animation: mp-fade .4s ease both .3s,  mp-drift 7s ease-in-out infinite .6s }
  .mp-conn   { stroke-dasharray: 3 4; animation: mp-flow 2.8s linear infinite }
`;

const BLUE  = '#2563EB';
const MONO  = 'ui-monospace,"SF Mono",Menlo,monospace';
const S     = 'var(--mp-stroke)';
const SS    = 'var(--mp-soft)';
const L     = 'var(--mp-line)';
const LAB   = 'var(--mp-label)';
const FILL  = 'var(--mp-fill)';
const SUB   = 'var(--mp-subtle)';

const MarketingPageIllustration: React.FC = () => (
  <svg
    className="mp-illus w-full"
    viewBox="0 0 480 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="mp-mask-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="8%"   stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="mp-mask"><rect width="480" height="290" fill="url(#mp-mask-g)" /></mask>
    </defs>

    <g mask="url(#mp-mask)">
      {/* Grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="290" style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[58,116,174,232].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* ── PAGE WIREFRAME ── */}
      <g transform="translate(22, 20)">
        <g className="mp-page">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>MARKETING PAGE</text>

          {/* Page shell */}
          <rect x="0" y="14" width="288" height="260" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Nav bar */}
          <rect x="0" y="14" width="288" height="18" style={{ fill: SUB }} />
          {/* Logo */}
          <rect x="10" y="19" width="18" height="8" style={{ fill: L }} />
          {/* Nav links */}
          {[52, 76, 100, 124].map(x => (
            <rect key={x} x={x} y={21} width={16} height="3" style={{ fill: L }} />
          ))}
          {/* CTA in nav */}
          <rect x="242" y="18" width="36" height="12" fill={BLUE} fillOpacity="0.15" style={{ stroke: SS }} strokeWidth="0.5" />
          <rect x="248" y="22" width="22" height="3" fill={BLUE} fillOpacity="0.5" />

          {/* Hero section */}
          <rect x="0" y="32" width="288" height="76" style={{ fill: SUB }} />

          {/* Hero copy */}
          <rect x="14" y="42" width="120" height="7" style={{ fill: SS }} />
          <rect x="14" y="53" width="140" height="6" style={{ fill: SS }} />
          <rect x="14" y="63" width="96" height="6" style={{ fill: SS }} />
          <rect x="14" y="75" width="168" height="3.5" style={{ fill: L }} />
          <rect x="14" y="81" width="144" height="3.5" style={{ fill: L }} />

          {/* Hero CTA buttons */}
          <rect x="14" y="90" width="64" height="13" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.5" />
          <rect x="22" y="94.5" width="46" height="3.5" fill={BLUE} fillOpacity="0.6" />
          <rect x="84" y="90" width="48" height="13" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />
          <rect x="90" y="94.5" width="34" height="3.5" style={{ fill: L }} />

          {/* Hero image box */}
          <rect x="178" y="36" width="98" height="66" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />
          {/* Image placeholder X */}
          <line x1="178" y1="36" x2="276" y2="102" style={{ stroke: L }} strokeWidth="0.4" />
          <line x1="276" y1="36" x2="178" y2="102" style={{ stroke: L }} strokeWidth="0.4" />

          {/* Metrics bar */}
          <rect x="0" y="108" width="288" height="30" style={{ fill: FILL, stroke: L }} strokeWidth="0.4" />
          {[
            { x: 30,  val: '3.2×', label: 'Avg conv. lift' },
            { x: 126, val: '47%',  label: 'Lower bounce' },
            { x: 214, val: '12d',  label: 'Avg to launch' },
          ].map(({ x, val }) => (
            <g key={val}>
              <text x={x} y="120" fontSize="7" fontWeight="600" textAnchor="middle" style={{ fill: S }} fontFamily={MONO}>{val}</text>
              <rect x={x - 22} y="124" width="44" height="3" style={{ fill: L }} />
            </g>
          ))}

          {/* Feature section label */}
          <rect x="80" y="146" width="128" height="4" style={{ fill: L }} />
          <rect x="96" y="153" width="96" height="3" style={{ fill: SUB }} />

          {/* 3 feature cards */}
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={14 + i * 88} y="162" width="78" height="60" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
              {/* Icon box */}
              <rect x={22 + i * 88} y="170" width="14" height="14" style={{ stroke: L, fill: SUB }} strokeWidth="0.4" />
              {/* Text */}
              <rect x={22 + i * 88} y="190" width={52 - i * 4} height="3.5" style={{ fill: SUB }} />
              <rect x={22 + i * 88} y="197" width={44 - i * 3} height="3" style={{ fill: L }} />
              <rect x={22 + i * 88} y="203" width={38 - i * 2} height="3" style={{ fill: L }} />
            </g>
          ))}

          {/* CTA section */}
          <rect x="0" y="228" width="288" height="46" fill={BLUE} fillOpacity="0.06" style={{ stroke: L }} strokeWidth="0.4" />
          <rect x="64" y="236" width="160" height="6" style={{ fill: SS }} />
          <rect x="80" y="246" width="128" height="3.5" style={{ fill: L }} />
          <rect x="106" y="254" width="76" height="12" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.5" />
          <rect x="116" y="258.5" width="54" height="3.5" fill={BLUE} fillOpacity="0.5" />
        </g>
      </g>

      {/* ── FUNNEL ANNOTATION ── */}
      <g transform="translate(326, 40)">
        <g className="mp-funnel">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>CONVERSION</text>

          {/* Funnel stages */}
          {[
            { y: 18,  w: 110, label: 'Visitor', pct: '100%' },
            { y: 58,  w: 88,  label: 'Engaged', pct: '42%' },
            { y: 98,  w: 66,  label: 'Lead', pct: '18%' },
            { y: 138, w: 44,  label: 'Customer', pct: '7%' },
          ].map(({ y, w, label, pct }, i) => {
            const x = (110 - w) / 2;
            return (
              <g key={label}>
                <rect x={x} y={y} width={w} height="32"
                  fill={BLUE} fillOpacity={0.06 + i * 0.06}
                  style={{ stroke: SS }} strokeWidth="0.5" />
                <text x="55" y={y + 14} fontSize="5.5" textAnchor="middle" style={{ fill: S }} fontFamily={MONO}>{label}</text>
                <text x="55" y={y + 24} fontSize="5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>{pct}</text>
                {i < 3 && (
                  <line x1="55" y1={y + 32} x2="55" y2={y + 40}
                    style={{ stroke: SS }} strokeWidth="0.6" className="mp-conn" />
                )}
              </g>
            );
          })}

          {/* Arrow indicating bottom conversion */}
          <polyline points="40,178 55,188 70,178"
            style={{ stroke: SS }} strokeWidth="0.75" fill="none" />
        </g>
      </g>
    </g>
  </svg>
);

export default MarketingPageIllustration;
