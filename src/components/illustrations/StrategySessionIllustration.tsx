import React from 'react';

const css = `
  .ss-illus {
    --ss-stroke: rgba(17,17,17,0.60);
    --ss-soft:   rgba(17,17,17,0.25);
    --ss-line:   rgba(17,17,17,0.09);
    --ss-label:  rgba(17,17,17,0.35);
    --ss-fill:   rgba(255,255,255,0.90);
    --ss-subtle: rgba(17,17,17,0.05);
  }
  .dark .ss-illus {
    --ss-stroke: rgba(255,255,255,0.50);
    --ss-soft:   rgba(255,255,255,0.22);
    --ss-line:   rgba(255,255,255,0.07);
    --ss-label:  rgba(255,255,255,0.28);
    --ss-fill:   rgba(255,255,255,0.04);
    --ss-subtle: rgba(255,255,255,0.04);
  }
  @keyframes ss-fade   { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
  @keyframes ss-drift  { 0%,100% { transform:translateY(0px) } 50% { transform:translateY(-2px) } }
  @keyframes ss-pulse  { 0%,100% { opacity:0.25 } 50% { opacity:0.9 } }
  @keyframes ss-blink  { 0%,49%  { opacity:1 } 50%,100% { opacity:0 } }
  @keyframes ss-flow   { from { stroke-dashoffset:16 } to { stroke-dashoffset:0 } }

  .ss-call   { animation: ss-fade .4s ease both .05s, ss-drift 9s ease-in-out infinite }
  .ss-board  { animation: ss-fade .4s ease both .25s, ss-drift 8s ease-in-out infinite .6s }
  .ss-notes  { animation: ss-fade .4s ease both .45s, ss-drift 7s ease-in-out infinite 1.2s }
  .ss-dot    { animation: ss-pulse 2.4s ease-in-out infinite }
  .ss-cursor { animation: ss-blink 1.1s step-start infinite }
  .ss-conn   { stroke-dasharray: 3 4; animation: ss-flow 2.4s linear infinite }
`;

const BLUE  = '#2563EB';
const MONO  = 'ui-monospace,"SF Mono",Menlo,monospace';
const S     = 'var(--ss-stroke)';
const SS    = 'var(--ss-soft)';
const L     = 'var(--ss-line)';
const LAB   = 'var(--ss-label)';
const FILL  = 'var(--ss-fill)';
const SUB   = 'var(--ss-subtle)';

const StrategySessionIllustration: React.FC = () => (
  <svg
    className="ss-illus w-full"
    viewBox="0 0 480 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="ss-mask-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="8%"   stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="ss-mask"><rect width="480" height="290" fill="url(#ss-mask-g)" /></mask>
    </defs>

    <g mask="url(#ss-mask)">
      {/* Grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="290" style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[58,116,174,232].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* ── VIDEO CALL ── */}
      <g transform="translate(22, 20)">
        <g className="ss-call">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>SESSION</text>

          {/* Call container */}
          <rect x="0" y="14" width="176" height="130" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Call header bar */}
          <rect x="0" y="14" width="176" height="14" style={{ fill: SUB }} />
          <circle cx="10" cy="21" r="3" fill={BLUE} fillOpacity="0.6" className="ss-dot" />
          <text x="18" y="24" fontSize="5.5" style={{ fill: S }} fontFamily={MONO}>Live · 00:43:17</text>

          {/* Main speaker tile */}
          <rect x="4" y="32" width="112" height="78" style={{ stroke: L, fill: SUB }} strokeWidth="0.5" />
          {/* Speaker avatar */}
          <circle cx="60" cy="62" r="12" style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <path d="M 40 86 C 40 74 80 74 80 86" style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          {/* Active speaking indicator */}
          <rect x="4" y="32" width="112" height="1.5" fill={BLUE} fillOpacity="0.6" />
          <rect x="4" y="108" width="112" height="2" style={{ fill: SUB }} />
          <rect x="6" y="108.5" width="32" height="1.5" style={{ fill: L }} />

          {/* Participant tile */}
          <rect x="120" y="32" width="52" height="36" style={{ stroke: L, fill: SUB }} strokeWidth="0.4" />
          <circle cx="146" cy="46" r="7" style={{ stroke: SS }} strokeWidth="0.4" fill="none" />
          <path d="M 136 58 C 136 52 156 52 156 58" style={{ stroke: L }} strokeWidth="0.4" fill="none" />

          {/* Second participant (small self-view) */}
          <rect x="120" y="72" width="52" height="36" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <circle cx="146" cy="86" r="7" style={{ stroke: SS }} strokeWidth="0.4" fill="none" />
          <path d="M 136 98 C 136 92 156 92 156 98" style={{ stroke: L }} strokeWidth="0.4" fill="none" />

          {/* Controls bar */}
          <rect x="0" y="116" width="176" height="28" style={{ fill: SUB }} />
          {[24, 52, 80, 108, 150].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="130" r="7"
                style={{ stroke: i === 4 ? SS : L, fill: i === 4 ? FILL : 'none' }}
                strokeWidth={i === 4 ? '0.5' : '0.4'} />
              <rect x={x - 4} y="127" width="8" height="5" style={{ fill: i === 4 ? L : L }} fillOpacity={i === 4 ? '0.5' : '0.4'} />
            </g>
          ))}
          {/* End call button */}
          <rect x="152" y="122" width="18" height="14" fill="rgba(220,38,38,0.15)" style={{ stroke: 'rgba(220,38,38,0.3)' }} strokeWidth="0.5" />
          <rect x="155" y="127" width="11" height="3" fill="rgba(220,38,38,0.5)" />

          {/* Agenda below call */}
          <text x="0" y="154" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>AGENDA</text>
          <rect x="0" y="158" width="176" height="96" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />
          {[
            { label: '01  Problem framing', done: true },
            { label: '02  Current state audit', done: true },
            { label: '03  Design critique', done: false, active: true },
            { label: '04  Recommendations', done: false },
            { label: '05  Next steps', done: false },
          ].map(({ done, active }, i) => (
            <g key={i}>
              {active && <rect x="0" y={162 + i * 18} width="176" height="16" fill={BLUE} fillOpacity="0.05" />}
              {active && <rect x="0" y={162 + i * 18} width="2" height="16" fill={BLUE} fillOpacity="0.7" />}
              <circle cx="10" cy={170 + i * 18} r="3"
                fill={done ? BLUE : 'none'} fillOpacity={done ? '0.5' : '0'}
                style={{ stroke: done ? SS : L }} strokeWidth="0.5" />
              {done && <line x1="8" y1={170 + i * 18} x2="10" y2={172 + i * 18} stroke={FILL} strokeWidth="0.75" />}
              {done && <line x1="10" y1={172 + i * 18} x2="13.5" y2={167.5 + i * 18} stroke={FILL} strokeWidth="0.75" />}
              <rect x="18" y={167.5 + i * 18} width={active ? 110 : 90 - i * 4} height="3.5"
                style={{ fill: active ? SS : (done ? L : SUB) }} />
              {active && (
                <rect x="130" y="166" width="1.5" height="8" style={{ fill: S }} className="ss-cursor" />
              )}
            </g>
          ))}
        </g>
      </g>

      {/* ── SHARED DESIGN ARTIFACT ── */}
      <g transform="translate(210, 20)">
        <g className="ss-board">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>SHARED SCREEN</text>

          {/* Artifact container */}
          <rect x="0" y="14" width="248" height="134" style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Header */}
          <rect x="0" y="14" width="248" height="14" style={{ fill: SUB }} />
          <rect x="8" y="19" width="60" height="3.5" style={{ fill: SS }} />
          <rect x="200" y="18" width="40" height="8" style={{ fill: L }} />

          {/* Design screen mockup */}
          <rect x="8" y="32" width="140" height="108" style={{ stroke: L, fill: SUB }} strokeWidth="0.5" />
          {/* Nav */}
          <rect x="8" y="32" width="140" height="12" style={{ fill: 'var(--ss-subtle)' }} fillOpacity="2" />
          <rect x="14" y="35.5" width="24" height="4" style={{ fill: SS }} />
          {/* Hero */}
          <rect x="14" y="50" width="80" height="8" style={{ fill: SS }} />
          <rect x="14" y="62" width="60" height="5" style={{ fill: L }} />
          <rect x="14" y="71" width="36" height="9" fill={BLUE} fillOpacity="0.2" style={{ stroke: SS }} strokeWidth="0.4" />
          {/* Image area */}
          <rect x="100" y="50" width="40" height="48" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
          <line x1="100" y1="50" x2="140" y2="98" style={{ stroke: L }} strokeWidth="0.3" />
          <line x1="140" y1="50" x2="100" y2="98" style={{ stroke: L }} strokeWidth="0.3" />
          {/* Cards row */}
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={14 + i * 44} y="88" width="38" height="44" style={{ stroke: L, fill: FILL }} strokeWidth="0.4" />
              <rect x={18 + i * 44} y="94" width="10" height="8" style={{ fill: SUB }} />
              <rect x={18 + i * 44} y="106" width={22 - i * 2} height="3.5" style={{ fill: SUB }} />
              <rect x={18 + i * 44} y="113" width={16 - i} height="3" style={{ fill: L }} />
            </g>
          ))}

          {/* Annotation marks */}
          {/* Mark 1: headline */}
          <circle cx="56" cy="54" r="6" stroke={BLUE} strokeWidth="0.75" fill="none" fillOpacity="0.5" />
          <line x1="62" y1="50" x2="158" y2="40" stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
          <rect x="158" y="34" width="80" height="12" fill={BLUE} fillOpacity="0.06" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="162" y="38" width="60" height="2.5" style={{ fill: SS }} />
          <rect x="162" y="43" width="44" height="2" style={{ fill: L }} />

          {/* Mark 2: CTA */}
          <circle cx="32" cy="76" r="5" stroke={BLUE} strokeWidth="0.75" fill="none" fillOpacity="0.5" />
          <line x1="37" y1="74" x2="158" y2="66" stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
          <rect x="158" y="60" width="80" height="12" fill={BLUE} fillOpacity="0.06" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="162" y="64" width="52" height="2.5" style={{ fill: SS }} />
          <rect x="162" y="69" width="36" height="2" style={{ fill: L }} />

          {/* Mark 3: card */}
          <circle cx="33" cy="110" r="5" stroke={BLUE} strokeWidth="0.75" fill="none" fillOpacity="0.5" />
          <line x1="38" y1="110" x2="158" y2="96" stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.5" strokeDasharray="2 2" />
          <rect x="158" y="90" width="80" height="12" fill={BLUE} fillOpacity="0.06" style={{ stroke: SS }} strokeWidth="0.4" />
          <rect x="162" y="94" width="44" height="2.5" style={{ fill: SS }} />
          <rect x="162" y="99" width="62" height="2" style={{ fill: L }} />
        </g>

        {/* ── NOTES / TRANSCRIPT ── */}
        <g className="ss-notes" transform="translate(0, 158)">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>SESSION NOTES</text>
          <rect x="0" y="14" width="248" height="96" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />

          {/* Two-column notes */}
          {[0, 126].map((col, ci) => (
            <g key={ci}>
              <text x={col + 8} y="26" fontSize="4.5" letterSpacing="1" style={{ fill: LAB }} fontFamily={MONO}>
                {ci === 0 ? 'KEY FINDINGS' : 'ACTION ITEMS'}
              </text>
              {[0,1,2,3].map(i => (
                <g key={i}>
                  <rect x={col + 8} y={32 + i * 16} width="3" height="3" style={{ fill: ci === 0 ? L : SS }} />
                  <rect x={col + 15} y={32 + i * 16} width={90 - i * 8} height="3.5" style={{ fill: ci === 0 ? SUB : SUB }} />
                  <rect x={col + 15} y={38 + i * 16} width={70 - i * 6} height="2.5" style={{ fill: L }} />
                </g>
              ))}
            </g>
          ))}
        </g>
      </g>
    </g>
  </svg>
);

export default StrategySessionIllustration;
