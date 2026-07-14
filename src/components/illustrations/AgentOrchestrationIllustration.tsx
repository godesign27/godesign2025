import React from 'react';

const css = `
  .ao-illus {
    --ao-stroke: rgba(17,17,17,0.65);
    --ao-soft:   rgba(17,17,17,0.28);
    --ao-line:   rgba(17,17,17,0.10);
    --ao-label:  rgba(17,17,17,0.38);
    --ao-fill:   rgba(255,255,255,0.92);
    --ao-subtle: rgba(17,17,17,0.04);
  }
  .dark .ao-illus {
    --ao-stroke: rgba(255,255,255,0.52);
    --ao-soft:   rgba(255,255,255,0.24);
    --ao-line:   rgba(255,255,255,0.08);
    --ao-label:  rgba(255,255,255,0.30);
    --ao-fill:   rgba(255,255,255,0.04);
    --ao-subtle: rgba(255,255,255,0.04);
  }

  @keyframes ao-flow   { from { stroke-dashoffset: 20 } to { stroke-dashoffset: 0  } }
  @keyframes ao-flow-r { from { stroke-dashoffset: 0  } to { stroke-dashoffset: 20 } }
  @keyframes ao-pulse  { 0%,100% { opacity: 0.3 } 50% { opacity: 1 } }
  @keyframes ao-drift  { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-2px) } }
  @keyframes ao-fade   { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: translateY(0px) } }

  .ao-conn       { stroke-dasharray: 4 4; animation: ao-flow 2s linear infinite }
  .ao-conn-r     { stroke-dasharray: 4 4; animation: ao-flow-r 2.4s linear infinite }
  .ao-conn-blue  { stroke-dasharray: 4 4; animation: ao-flow 1.6s linear infinite }
  .ao-pulse      { animation: ao-pulse 2.8s ease-in-out infinite }
  .ao-pulse-2    { animation: ao-pulse 2.8s ease-in-out infinite 1.4s }

  .ao-node-intent  { animation: ao-fade .5s ease both .1s, ao-drift 8s ease-in-out infinite .3s }
  .ao-node-planner { animation: ao-fade .5s ease both .3s, ao-drift 7s ease-in-out infinite }
  .ao-node-tools   { animation: ao-fade .5s ease both .5s, ao-drift 9s ease-in-out infinite .5s }
  .ao-node-review  { animation: ao-fade .5s ease both .7s, ao-drift 8s ease-in-out infinite 1s }
  .ao-node-output  { animation: ao-fade .5s ease both .9s, ao-drift 7.5s ease-in-out infinite .2s }
`;

const BLUE   = '#2563EB';
const MONO   = 'ui-monospace, "SF Mono", Menlo, monospace';
const SANS   = 'system-ui, -apple-system, sans-serif';
const S      = 'var(--ao-stroke)';
const SS     = 'var(--ao-soft)';
const L      = 'var(--ao-line)';
const LAB    = 'var(--ao-label)';
const FILL   = 'var(--ao-fill)';
const SUBTLE = 'var(--ao-subtle)';

export const AgentOrchestrationIllustration: React.FC = () => (
  <svg
    className="ao-illus w-full"
    viewBox="0 0 480 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      {/* Left-edge fade */}
      <linearGradient id="ao-fade-mask" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="10%"  stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="ao-mask">
        <rect width="480" height="300" fill="url(#ao-fade-mask)" />
      </mask>
    </defs>

    <g mask="url(#ao-mask)">

      {/* Background grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="300"
          style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[60,120,180,240].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y}
          style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* ── CONNECTIONS (drawn under nodes) ── */}

      {/* Intent → Planner */}
      <line x1="128" y1="70" x2="200" y2="116"
        style={{ stroke: SS }} strokeWidth="0.75" className="ao-conn" />

      {/* Planner → Tool A */}
      <line x1="232" y1="148" x2="132" y2="198"
        stroke={BLUE} strokeWidth="0.75" strokeOpacity="0.5" className="ao-conn-blue" />

      {/* Planner → Tool B */}
      <line x1="240" y1="150" x2="240" y2="196"
        stroke={BLUE} strokeWidth="0.75" strokeOpacity="0.5" className="ao-conn-blue" />

      {/* Planner → Tool C */}
      <line x1="248" y1="148" x2="348" y2="198"
        stroke={BLUE} strokeWidth="0.75" strokeOpacity="0.5" className="ao-conn-blue" />

      {/* Tool A → Output */}
      <line x1="140" y1="222" x2="362" y2="248"
        style={{ stroke: SS }} strokeWidth="0.75" className="ao-conn-r" />

      {/* Tool B → Output */}
      <line x1="240" y1="222" x2="370" y2="248"
        style={{ stroke: SS }} strokeWidth="0.75" className="ao-conn-r" />

      {/* Tool C → Output */}
      <line x1="348" y1="222" x2="378" y2="248"
        style={{ stroke: SS }} strokeWidth="0.75" className="ao-conn-r" />

      {/* Output → Review (feedback loop arc) */}
      <path d="M 400 258 C 430 258 440 100 380 70"
        style={{ stroke: SS }} strokeWidth="0.75"
        strokeDasharray="3 4" fill="none" className="ao-conn" />

      {/* ── NODE: Human Intent (top-left) ── */}
      <g transform="translate(30, 32)">
        <g className="ao-node-intent">
          <text x="0" y="8" fontSize="5.5" letterSpacing="1.5"
            style={{ fill: LAB }} fontFamily={MONO}>HUMAN INTENT</text>
          <rect x="0" y="14" width="98" height="44"
            style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Person icon */}
          <circle cx="18" cy="30" r="5"
            style={{ stroke: SS }} strokeWidth="0.75" fill="none" />
          <path d="M 10 44 C 10 38 26 38 26 44"
            style={{ stroke: SS }} strokeWidth="0.75" fill="none" />

          {/* Text lines */}
          <rect x="30" y="26" width="56" height="4"
            style={{ fill: SUBTLE }} />
          <rect x="30" y="34" width="44" height="4"
            style={{ fill: SUBTLE }} />
          <rect x="30" y="42" width="50" height="4"
            style={{ fill: SUBTLE }} />
        </g>
      </g>

      {/* ── NODE: AI Planner (center — blue accent) ── */}
      <g transform="translate(185, 100)">
        <g className="ao-node-planner">
          <text x="0" y="8" fontSize="5.5" letterSpacing="1.5"
            fill={BLUE} fontFamily={MONO} opacity="0.75">AI PLANNER</text>

          {/* Blue-accented border */}
          <rect x="0" y="14" width="110" height="52"
            stroke={BLUE} strokeWidth="1" fill="none" strokeOpacity="0.35" />
          <rect x="0" y="14" width="110" height="52"
            style={{ fill: SUBTLE }} />

          {/* Blue top bar */}
          <rect x="0" y="14" width="110" height="3"
            fill={BLUE} fillOpacity="0.55" />

          {/* Pulsing AI indicator */}
          <circle cx="12" cy="34" r="5"
            stroke={BLUE} strokeWidth="0.75" fill="none" className="ao-pulse-2" />
          <circle cx="12" cy="34" r="2"
            fill={BLUE} className="ao-pulse" />

          {/* "Thinking" text lines */}
          <rect x="22" y="29" width="76" height="3.5" style={{ fill: SUBTLE }} />
          <rect x="22" y="36" width="58" height="3.5" style={{ fill: SUBTLE }} />

          {/* Step counter */}
          <text x="4" y="60" fontSize="5.5"
            style={{ fill: LAB }} fontFamily={MONO}>step 1 of 3 · planning</text>
        </g>
      </g>

      {/* ── NODES: Tools row ── */}

      {/* Tool A */}
      <g transform="translate(84, 188)">
        <g className="ao-node-tools">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2"
            style={{ fill: LAB }} fontFamily={MONO}>SEARCH</text>
          <rect x="0" y="12" width="72" height="36"
            style={{ stroke: SS, fill: FILL }} strokeWidth="0.5" />
          <circle cx="20" cy="30" r="7"
            style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <line x1="25" y1="35" x2="29" y2="39"
            style={{ stroke: SS }} strokeWidth="0.75" />
          <rect x="34" y="26" width="30" height="3.5" style={{ fill: SUBTLE }} />
          <rect x="34" y="32" width="22" height="3.5" style={{ fill: SUBTLE }} />
        </g>
      </g>

      {/* Tool B */}
      <g transform="translate(196, 188)">
        <g className="ao-node-tools">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2"
            style={{ fill: LAB }} fontFamily={MONO}>ANALYZE</text>
          <rect x="0" y="12" width="72" height="36"
            style={{ stroke: SS, fill: FILL }} strokeWidth="0.5" />
          {/* mini bar chart */}
          {[
            { x: 10, h: 16 },
            { x: 22, h: 22 },
            { x: 34, h: 12 },
            { x: 46, h: 20 },
          ].map(b => (
            <rect key={b.x} x={b.x} y={48 - b.h - 12} width="8" height={b.h}
              style={{ fill: SUBTLE, stroke: SS }} strokeWidth="0.4" />
          ))}
        </g>
      </g>

      {/* Tool C */}
      <g transform="translate(308, 188)">
        <g className="ao-node-tools">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2"
            style={{ fill: LAB }} fontFamily={MONO}>EXECUTE</text>
          <rect x="0" y="12" width="72" height="36"
            style={{ stroke: SS, fill: FILL }} strokeWidth="0.5" />
          {/* Code lines */}
          <rect x="8" y="22" width="30" height="3" style={{ fill: SUBTLE }} />
          <rect x="14" y="28" width="42" height="3" style={{ fill: SUBTLE }} />
          <rect x="14" y="34" width="22" height="3" style={{ fill: SUBTLE }} />
          <rect x="8" y="40" width="38" height="3" style={{ fill: SUBTLE }} />
        </g>
      </g>

      {/* ── NODE: Output ── */}
      <g transform="translate(348, 240)">
        <g className="ao-node-output">
          <text x="0" y="8" fontSize="5.5" letterSpacing="1.5"
            style={{ fill: LAB }} fontFamily={MONO}>OUTPUT</text>
          <rect x="0" y="12" width="96" height="36"
            style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />
          {/* Checkmark area */}
          <rect x="8" y="20" width="14" height="14"
            style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <polyline points="11,27 14,30 19,23"
            style={{ stroke: SS }} strokeWidth="0.75" fill="none" />
          <rect x="28" y="22" width="56" height="3.5" style={{ fill: SUBTLE }} />
          <rect x="28" y="29" width="40" height="3.5" style={{ fill: SUBTLE }} />
          <rect x="28" y="36" width="48" height="3.5" style={{ fill: SUBTLE }} />
        </g>
      </g>

      {/* ── NODE: Human Review (top-right — oversight) ── */}
      <g transform="translate(332, 32)">
        <g className="ao-node-review">
          <text x="0" y="8" fontSize="5.5" letterSpacing="1.5"
            style={{ fill: LAB }} fontFamily={MONO}>HUMAN REVIEW</text>

          <rect x="0" y="14" width="110" height="44"
            style={{ stroke: S, fill: FILL }} strokeWidth="0.75" />

          {/* Blue left-border oversight indicator */}
          <rect x="0" y="14" width="3" height="44"
            fill={BLUE} fillOpacity="0.5" />

          {/* Approve / flag row */}
          <rect x="10" y="22" width="36" height="14"
            style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <text x="28" y="32" fontSize="6.5" textAnchor="middle"
            style={{ fill: SS }} fontFamily={SANS}>Approve</text>

          <rect x="52" y="22" width="50" height="14"
            style={{ stroke: SS }} strokeWidth="0.5" fill="none" />
          <text x="77" y="32" fontSize="6.5" textAnchor="middle"
            style={{ fill: SS }} fontFamily={SANS}>Flag for review</text>

          <rect x="10" y="42" width="90" height="4" style={{ fill: SUBTLE }} />
        </g>
      </g>

      {/* ── LABEL: feedback loop arc ── */}
      <text x="432" y="168" fontSize="5" letterSpacing="1"
        style={{ fill: LAB }} fontFamily={MONO}
        transform="rotate(90, 432, 168)">FEEDBACK LOOP</text>

    </g>
  </svg>
);

export default AgentOrchestrationIllustration;
