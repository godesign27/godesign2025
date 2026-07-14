import React from 'react';

const css = `
  .sb-illus {
    --sb-stroke: rgba(17,17,17,0.60);
    --sb-soft:   rgba(17,17,17,0.25);
    --sb-line:   rgba(17,17,17,0.09);
    --sb-label:  rgba(17,17,17,0.35);
    --sb-fill:   rgba(255,255,255,0.90);
    --sb-subtle: rgba(17,17,17,0.05);
  }
  .dark .sb-illus {
    --sb-stroke: rgba(255,255,255,0.50);
    --sb-soft:   rgba(255,255,255,0.22);
    --sb-line:   rgba(255,255,255,0.07);
    --sb-label:  rgba(255,255,255,0.28);
    --sb-fill:   rgba(255,255,255,0.04);
    --sb-subtle: rgba(255,255,255,0.04);
  }
  @keyframes sb-fade  { from { opacity:0; transform:translateY(4px) } to { opacity:1; transform:translateY(0) } }
  @keyframes sb-drift { 0%,100% { transform:translateY(0px) } 50% { transform:translateY(-2px) } }
  @keyframes sb-pulse { 0%,100% { opacity:0.3 } 50% { opacity:1 } }

  .sb-col-a { animation: sb-fade .4s ease both .05s, sb-drift 9s  ease-in-out infinite }
  .sb-col-b { animation: sb-fade .4s ease both .2s,  sb-drift 8s  ease-in-out infinite .5s }
  .sb-col-c { animation: sb-fade .4s ease both .35s, sb-drift 7s  ease-in-out infinite 1s }
  .sb-dot   { animation: sb-pulse 2.8s ease-in-out infinite }
  .sb-dot-2 { animation: sb-pulse 2.8s ease-in-out infinite 1.4s }
`;

const BLUE  = '#2563EB';
const MONO  = 'ui-monospace,"SF Mono",Menlo,monospace';
const S     = 'var(--sb-stroke)';
const SS    = 'var(--sb-soft)';
const L     = 'var(--sb-line)';
const LAB   = 'var(--sb-label)';
const FILL  = 'var(--sb-fill)';
const SUB   = 'var(--sb-subtle)';

const Card: React.FC<{
  x: number; y: number; titleW: number; tagW?: number; hasAvatar?: boolean;
  blue?: boolean; annotation?: boolean; progress?: number;
}> = ({ x, y, titleW, tagW, hasAvatar, blue, annotation, progress }) => (
  <g transform={`translate(${x},${y})`}>
    <rect x="0" y="0" width="126" height={tagW ? 52 : 44}
      style={{ stroke: blue ? SS : L, fill: FILL }}
      strokeWidth={blue ? '0.75' : '0.5'} />
    {blue && <rect x="0" y="0" width="3" height={tagW ? 52 : 44} fill={BLUE} fillOpacity="0.6" />}

    {/* Title lines */}
    <rect x="10" y="10" width={titleW} height="3.5" style={{ fill: blue ? SS : SUB }} />
    <rect x="10" y="17" width={titleW * 0.7} height="3" style={{ fill: L }} />

    {tagW && <rect x="10" y="25" width={tagW} height="8" style={{ stroke: L, fill: SUB }} strokeWidth="0.4" />}
    {tagW && <rect x="13" y="28" width={tagW - 6} height="2.5" style={{ fill: L }} />}

    {annotation && (
      <g>
        <circle cx="110" cy="10" r="6" stroke={BLUE} strokeWidth="0.75" fill="none" fillOpacity="0.5" />
        <line x1="110" y1="18" x2="110" y2="25" stroke={BLUE} strokeWidth="0.75" strokeOpacity="0.5" />
      </g>
    )}

    {progress !== undefined && (
      <g>
        <rect x="10" y={tagW ? 38 : 30} width="106" height="3" style={{ fill: SUB }} />
        <rect x="10" y={tagW ? 38 : 30} width={106 * progress / 100} height="3" fill={BLUE} fillOpacity="0.4" />
      </g>
    )}

    {hasAvatar && (
      <g>
        {[0, 1].map(i => (
          <circle key={i} cx={102 - i * 10} cy={tagW ? 43 : 35} r="4"
            style={{ stroke: S, fill: FILL }} strokeWidth="0.5" />
        ))}
      </g>
    )}
  </g>
);

const SprintBoardIllustration: React.FC = () => (
  <svg
    className="sb-illus w-full"
    viewBox="0 0 480 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="sb-mask-g" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="white" stopOpacity="0" />
        <stop offset="8%"   stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="sb-mask"><rect width="480" height="290" fill="url(#sb-mask-g)" /></mask>
    </defs>

    <g mask="url(#sb-mask)">
      {/* Grid */}
      {[80,160,240,320,400].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="290" style={{ stroke: L }} strokeWidth="0.5" />
      ))}
      {[58,116,174,232].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} style={{ stroke: L }} strokeWidth="0.5" />
      ))}

      {/* Header bar */}
      <g transform="translate(22,20)">
        <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>SPRINT BOARD</text>
        <rect x="0" y="14" width="436" height="16" style={{ fill: SUB, stroke: L }} strokeWidth="0.5" />
        <text x="8" y="25" fontSize="6" style={{ fill: S }} fontFamily={MONO}>Sprint 4 · Week 2</text>
        {/* Sprint progress */}
        <rect x="200" y="20" width="140" height="4" style={{ fill: L }} />
        <rect x="200" y="20" width="84" height="4" fill={BLUE} fillOpacity="0.35" />
        <text x="346" y="24.5" fontSize="5" style={{ fill: LAB }} fontFamily={MONO}>60%</text>
        {/* Team avatars */}
        {[0,1,2,3].map(i => (
          <circle key={i} cx={408 + i * 10} cy="22" r="4"
            style={{ stroke: S, fill: FILL }} strokeWidth="0.5" />
        ))}
      </g>

      {/* ── COLUMN: Backlog ── */}
      <g transform="translate(22,46)">
        <g className="sb-col-a">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>BACKLOG</text>
          <rect x="52" y="2" width="14" height="8" style={{ fill: SUB, stroke: L }} strokeWidth="0.4" />
          <text x="59" y="8.5" fontSize="5.5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>4</text>

          <Card x={0} y={16} titleW={80} tagW={32} />
          <Card x={0} y={76} titleW={64} hasAvatar />
          <Card x={0} y={128} titleW={72} tagW={40} />

          {/* Add card */}
          <rect x="0" y="180" width="126" height="24" style={{ stroke: L, fill: SUB }} strokeWidth="0.4" strokeDasharray="3 3" />
          <text x="63" y="195" fontSize="6" textAnchor="middle" style={{ fill: L }} fontFamily={MONO}>+ Add card</text>
        </g>
      </g>

      {/* ── COLUMN: In Design ── */}
      <g transform="translate(165,46)">
        <g className="sb-col-b">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>IN DESIGN</text>
          <rect x="60" y="2" width="14" height="8" style={{ fill: SUB, stroke: L }} strokeWidth="0.4" />
          <text x="67" y="8.5" fontSize="5.5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>3</text>

          <Card x={0} y={16} titleW={90} blue hasAvatar progress={68} />
          <Card x={0} y={80} titleW={70} blue tagW={36} progress={45} />
          <Card x={0} y={148} titleW={60} blue />

          {/* Active indicator */}
          <circle cx="116" cy="8" r="3" fill={BLUE} fillOpacity="0.5" className="sb-dot" />
        </g>
      </g>

      {/* ── COLUMN: In Review ── */}
      <g transform="translate(308,46)">
        <g className="sb-col-c">
          <text x="0" y="8" fontSize="5" letterSpacing="1.2" style={{ fill: LAB }} fontFamily={MONO}>IN REVIEW</text>
          <rect x="64" y="2" width="14" height="8" style={{ fill: SUB, stroke: L }} strokeWidth="0.4" />
          <text x="71" y="8.5" fontSize="5.5" textAnchor="middle" style={{ fill: LAB }} fontFamily={MONO}>2</text>

          {/* Card with annotation — design review */}
          <Card x={0} y={16} titleW={76} annotation hasAvatar />
          <Card x={0} y={72} titleW={82} tagW={44} />

          {/* Comment thread */}
          <rect x="0" y="134" width="126" height="56" style={{ stroke: L, fill: FILL }} strokeWidth="0.5" />
          <text x="8" y="144" fontSize="4.5" letterSpacing="1" style={{ fill: LAB }} fontFamily={MONO}>FEEDBACK</text>
          {[0,1,2].map(i => (
            <g key={i}>
              <circle cx="14" cy={152 + i * 14} r="3.5" style={{ stroke: L }} strokeWidth="0.4" fill="none" />
              <rect x="22" y={149 + i * 14} width={55 - i * 8} height="3" style={{ fill: SUB }} />
              <rect x="22" y={155 + i * 14} width={40 - i * 5} height="2.5" style={{ fill: L }} />
            </g>
          ))}
        </g>
      </g>
    </g>
  </svg>
);

export default SprintBoardIllustration;
