const LAYERS = [
  { n: '01', label: 'Signal Architecture', output: 'Legible', signal: 0.78 },
  { n: '02', label: 'Human Oversight Design', output: 'Controllable', signal: 0.91 },
  { n: '03', label: 'Agentic Design Systems', output: 'Scalable', highlight: true, signal: 1.0 },
  { n: '04', label: 'Trust Architecture', output: 'Trustworthy', signal: 0.84 },
  { n: '05', label: 'AI Governance UX', output: 'Accountable', signal: 0.69 },
];

const LH = 38; // layer height
const LG = 8;  // gap between layers
const Y0 = 28; // first layer Y

export default function AIArchitectureIllustration() {
  return (
    <svg
      viewBox="0 0 480 290"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AI Experience Architecture™ — five-pillar framework diagram"
    >
      <defs>
        <style>{`
          .aia-bg { fill: #F3EFE7; }
          .dark .aia-bg { fill: #1c1c1c; }
          .aia-bg-hl { fill: #EEF2FF; }
          .dark .aia-bg-hl { fill: #0d1d3b; }
          .aia-bar { fill: #E5E0D8; }
          .dark .aia-bar { fill: #2e2e2e; }
          .aia-bar-hl { fill: #2563EB; }
          .dark .aia-bar-hl { fill: #3b82f6; }
          .aia-label { fill: #1a1a1a; }
          .dark .aia-label { fill: #ffffff; }
          .aia-label-hl { fill: #1d4ed8; }
          .dark .aia-label-hl { fill: #93c5fd; }
          .aia-muted { fill: #9ca3af; }
          .aia-sig-track { fill: #E5E0D8; }
          .dark .aia-sig-track { fill: #2e2e2e; }
          .aia-sig-fill { fill: #c7d2fe; }
          .dark .aia-sig-fill { fill: rgba(59,130,246,0.35); }
          .aia-sig-fill-hl { fill: #2563EB; }
          .dark .aia-sig-fill-hl { fill: #3b82f6; }
          .aia-dot { fill: #9ca3af; }
          .dark .aia-dot { fill: rgba(255,255,255,0.25); }
          .aia-dot-hl { fill: #2563EB; }
          .dark .aia-dot-hl { fill: #3b82f6; }
          .aia-out-hl { fill: #2563EB; }
          .dark .aia-out-hl { fill: #60a5fa; }
          .aia-stroke { stroke: #2563EB; fill: none; }
          .dark .aia-stroke { stroke: #3b82f6; }
          @keyframes aia-flow { to { stroke-dashoffset: -20; } }
          @keyframes aia-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
          .aia-anim { animation: aia-flow 2s linear infinite; }
          .aia-pulse { animation: aia-pulse 2s ease-in-out infinite; }
          @media (prefers-reduced-motion: reduce) { .aia-anim,.aia-pulse { animation: none; } }
        `}</style>
      </defs>

      {/* Section label */}
      <text
        x="16" y="16"
        className="aia-muted"
        fontSize="8"
        fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="1.2"
      >
        AI EXPERIENCE ARCHITECTURE™
      </text>

      {/* Five pillars */}
      {LAYERS.map((layer, i) => {
        const y = Y0 + i * (LH + LG);
        const cy = y + LH / 2 + 4;
        const hl = !!layer.highlight;
        const sigW = Math.round(80 * (layer.signal ?? 0.75));
        return (
          <g key={layer.n}>
            <rect x="16" y={y} width="448" height={LH} className={hl ? 'aia-bg-hl' : 'aia-bg'} />
            <rect x="16" y={y} width="4" height={LH} className={hl ? 'aia-bar-hl' : 'aia-bar'} />
            <text
              x="28" y={cy}
              className="aia-muted"
              fontSize="8" fontWeight="600"
              fontFamily="Inter, system-ui, sans-serif"
              letterSpacing="0.5"
            >
              {layer.n}
            </text>
            <text
              x="48" y={cy}
              className={hl ? 'aia-label-hl' : 'aia-label'}
              fontSize="11"
              fontWeight={hl ? '600' : '500'}
              fontFamily="Inter, system-ui, sans-serif"
            >
              {layer.label}
            </text>
            {/* Signal strength bar */}
            <rect x="240" y={y + LH / 2 - 3} width="80" height="5" rx="1" className="aia-sig-track" />
            <rect x="240" y={y + LH / 2 - 3} width={sigW} height="5" rx="1" className={hl ? 'aia-sig-fill-hl' : 'aia-sig-fill'} />
            {/* Status dot */}
            <circle cx="334" cy={y + LH / 2} r="4" className={hl ? `aia-dot-hl${hl ? ' aia-pulse' : ''}` : 'aia-dot'} />
            <text
              x="460" y={cy}
              className={hl ? 'aia-out-hl' : 'aia-muted'}
              fontSize="8" fontWeight="500"
              fontFamily="Inter, system-ui, sans-serif"
              textAnchor="end"
              letterSpacing="0.8"
            >
              {layer.output.toUpperCase()}
            </text>
          </g>
        );
      })}

      {/* Flow line: AI Input → Human Trust */}
      <text
        x="16" y="276"
        className="aia-muted"
        fontSize="8" fontWeight="500"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.6"
      >
        AI INPUT
      </text>
      <line
        x1="72" y1="272"
        x2="384" y2="272"
        strokeWidth="1"
        strokeDasharray="6 4"
        className="aia-stroke aia-anim"
      />
      <polyline
        points="381,269 386,272 381,275"
        strokeWidth="1"
        className="aia-stroke"
      />
      <text
        x="464" y="276"
        className="aia-out-hl"
        fontSize="8" fontWeight="600"
        fontFamily="Inter, system-ui, sans-serif"
        textAnchor="end"
        letterSpacing="0.6"
      >
        HUMAN TRUST
      </text>
    </svg>
  );
}
