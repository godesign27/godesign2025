import React from 'react';

const AIATrustDashboardIllustration: React.FC = () => (
  <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <defs>
      <style>{`
        @keyframes ait-flow { to { stroke-dashoffset: -20; } }
        @keyframes ait-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .ait-flow { animation: ait-flow 2s linear infinite; }
        .ait-pulse { animation: ait-pulse 2s ease-in-out infinite; }
        @media(prefers-reduced-motion:reduce){.ait-flow,.ait-pulse{animation:none}}

        .ait-bg         { fill: #F3EFE7; }
        .dark .ait-bg   { fill: #111111; }
        .ait-panel      { fill: #FFFFFF; stroke: #E5E0D8; }
        .dark .ait-panel{ fill: #1a1a1a; stroke: rgba(255,255,255,0.08); }
        .ait-hdr        { fill: rgba(0,0,0,0.03); }
        .dark .ait-hdr  { fill: rgba(255,255,255,0.04); }
        .ait-lbl        { fill: rgba(0,0,0,0.25); }
        .dark .ait-lbl  { fill: rgba(255,255,255,0.3); }
        .ait-txt        { fill: #1a1a1a; }
        .dark .ait-txt  { fill: #ffffff; }
        .ait-sub        { fill: rgba(0,0,0,0.35); }
        .dark .ait-sub  { fill: rgba(255,255,255,0.35); }
        .ait-dim        { fill: rgba(0,0,0,0.4); }
        .dark .ait-dim  { fill: rgba(255,255,255,0.4); }
        .ait-faint      { fill: rgba(0,0,0,0.2); }
        .dark .ait-faint{ fill: rgba(255,255,255,0.2); }
        .ait-veryfaint  { fill: rgba(0,0,0,0.12); }
        .dark .ait-veryfaint { fill: rgba(255,255,255,0.12); }
        .ait-track      { fill: rgba(0,0,0,0.06); }
        .dark .ait-track{ fill: rgba(255,255,255,0.06); }
        .ait-conf-bg    { fill: rgba(37,99,235,0.06); stroke: rgba(37,99,235,0.2); }
        .dark .ait-conf-bg { fill: rgba(59,130,246,0.06); stroke: rgba(59,130,246,0.2); }
        .ait-conf-lbl   { fill: #1d4ed8; }
        .dark .ait-conf-lbl { fill: #93c5fd; }
        .ait-conf-pct   { fill: #1d4ed8; }
        .dark .ait-conf-pct { fill: #93c5fd; }
        .ait-conf-sub   { fill: rgba(0,0,0,0.3); }
        .dark .ait-conf-sub { fill: rgba(255,255,255,0.35); }
        .ait-reject-border { stroke: rgba(0,0,0,0.15); }
        .dark .ait-reject-border { stroke: rgba(255,255,255,0.15); }
        .ait-reject-txt { fill: rgba(0,0,0,0.4); }
        .dark .ait-reject-txt { fill: rgba(255,255,255,0.5); }
        .ait-note-border { stroke: rgba(0,0,0,0.06); }
        .dark .ait-note-border { stroke: rgba(255,255,255,0.06); }
        .ait-note-txt   { fill: rgba(0,0,0,0.25); }
        .dark .ait-note-txt { fill: rgba(255,255,255,0.25); }
        .ait-divider    { stroke: rgba(0,0,0,0.05); }
        .dark .ait-divider { stroke: rgba(255,255,255,0.05); }
        .ait-flow-line  { stroke: #3b82f6; }
        .ait-flow-txt   { fill: rgba(0,0,0,0.25); }
        .dark .ait-flow-txt { fill: rgba(255,255,255,0.2); }
      `}</style>
    </defs>

    {/* Background */}
    <rect width="480" height="290" className="ait-bg"/>

    {/* ── LEFT: Agent Queue ── */}
    <rect x="14" y="14" width="118" height="262" strokeWidth="1" className="ait-panel"/>
    <rect x="14" y="14" width="118" height="26" strokeWidth="0" className="ait-hdr"/>
    <text x="73" y="31" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="0.08em" fontFamily="sans-serif" className="ait-lbl">AGENT QUEUE</text>

    {[
      { label: 'Signal: Contract Rev.', confidence: 0.91, state: 'REVIEW',    color: '#3b82f6', stateLight: '#2563eb', y: 58,  active: true  },
      { label: 'Signal: Risk Flag',     confidence: 0.74, state: 'PENDING',   color: '#f59e0b', stateLight: '#d97706', y: 104, active: false },
      { label: 'Signal: Onboard',       confidence: 0.88, state: 'APPROVED',  color: '#22c55e', stateLight: '#16a34a', y: 150, active: false },
      { label: 'Signal: Anomaly',       confidence: 0.53, state: 'ESCALATED', color: '#ef4444', stateLight: '#dc2626', y: 196, active: false },
      { label: 'Signal: Summary',       confidence: 0.82, state: 'PENDING',   color: '#f59e0b', stateLight: '#d97706', y: 242, active: false },
    ].map(({ label, confidence, state, color, y, active }) => (
      <g key={label}>
        {active && (
          <>
            <rect x="14" y={y - 22} width="118" height="40" fill="rgba(37,99,235,0.06)" stroke="rgba(37,99,235,0.2)" strokeWidth="1" className="dark:fill-[rgba(59,130,246,0.07)] dark:stroke-[rgba(59,130,246,0.25)]"/>
            <rect x="14" y={y - 22} width="2.5" height="40" fill="#3b82f6"/>
          </>
        )}
        <text x={active ? 24 : 22} y={y - 8} fontSize="7.5" fontWeight={active ? '600' : '400'} fontFamily="sans-serif" className={active ? 'ait-txt' : 'ait-dim'}>{label}</text>
        <rect x={active ? 24 : 22} y={y + 1} width="72" height="3" rx="1" className="ait-track"/>
        <rect x={active ? 24 : 22} y={y + 1} width={72 * confidence} height="3" fill={color} rx="1" opacity={active ? 1 : 0.7}/>
        <text x="105" y={y + 5} textAnchor="end" fontSize="6.5" fontFamily="sans-serif" fill={color} fontWeight="600">{state}</text>
      </g>
    ))}

    {/* ── CENTER: Review Interface ── */}
    <rect x="144" y="14" width="192" height="262" strokeWidth="1" className="ait-panel"/>
    <rect x="144" y="14" width="192" height="26" strokeWidth="0" className="ait-hdr"/>
    <text x="240" y="31" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="0.08em" fontFamily="sans-serif" className="ait-lbl">OVERSIGHT REVIEW</text>

    <text x="156" y="56" fontSize="8.5" fontWeight="600" fontFamily="sans-serif" className="ait-txt">Contract Review — Acme Corp</text>
    <text x="156" y="69" fontSize="7" fontFamily="sans-serif" className="ait-sub">Agent action · Awaiting human approval · 3m ago</text>

    {/* Confidence panel */}
    <rect x="156" y="78" width="168" height="52" strokeWidth="1" className="ait-conf-bg"/>
    <rect x="156" y="78" width="3" height="52" fill="#3b82f6"/>
    <text x="167" y="93" fontSize="7" fontWeight="700" letterSpacing="0.06em" fontFamily="sans-serif" className="ait-conf-lbl">SIGNAL CONFIDENCE</text>
    <rect x="167" y="100" width="140" height="6" rx="1" className="ait-track"/>
    <rect x="167" y="100" width="128" height="6" fill="#3b82f6" rx="1" className="ait-pulse"/>
    <text x="313" y="106" textAnchor="end" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" className="ait-conf-pct">91%</text>
    <text x="167" y="120" fontSize="7" fontFamily="sans-serif" className="ait-conf-sub">High confidence · 3 signals corroborated · 1 flagged</text>

    {/* Pillar checks */}
    {[
      { label: 'Signal Architecture', pass: true,  y: 144 },
      { label: 'Human Oversight',     pass: true,  y: 160 },
      { label: 'Trust Architecture',  pass: true,  y: 176 },
      { label: 'Governance UX',       pass: false, y: 192, note: 'Audit log incomplete' },
    ].map(({ label, pass, y, note }) => (
      <g key={label}>
        <circle cx="163" cy={y - 2} r="3.5" fill={pass ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'} stroke={pass ? '#22c55e' : '#ef4444'} strokeWidth="1"/>
        <text x="163" y={y + 1} textAnchor="middle" fontSize="6" fontFamily="sans-serif" fill={pass ? '#22c55e' : '#ef4444'}>{pass ? '✓' : '!'}</text>
        <text x="174" y={y + 2} fontSize="7.5" fontFamily="sans-serif" className={pass ? 'ait-dim' : 'ait-txt'}>{label}</text>
        {note && <text x="174" y={y + 13} fontSize="6.5" fontFamily="sans-serif" fill="#dc2626" className="dark:fill-[#fca5a5]">{note}</text>}
      </g>
    ))}

    {/* Action buttons */}
    <rect x="156" y="218" width="80" height="22" fill="#2563EB"/>
    <text x="196" y="233" textAnchor="middle" fontSize="8" fontWeight="600" fontFamily="sans-serif" fill="#ffffff">Approve</text>

    <rect x="244" y="218" width="80" height="22" fill="none" strokeWidth="1" className="ait-reject-border"/>
    <text x="284" y="233" textAnchor="middle" fontSize="8" fontFamily="sans-serif" className="ait-reject-txt">Reject</text>

    <rect x="156" y="248" width="168" height="16" fill="none" strokeWidth="1" className="ait-note-border"/>
    <text x="240" y="260" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" className="ait-note-txt">Add override note before rejecting</text>

    {/* ── RIGHT: Governance Audit ── */}
    <rect x="348" y="14" width="118" height="262" strokeWidth="1" className="ait-panel"/>
    <rect x="348" y="14" width="118" height="26" strokeWidth="0" className="ait-hdr"/>
    <text x="407" y="31" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="0.08em" fontFamily="sans-serif" className="ait-lbl">AUDIT LOG</text>

    {[
      { time: '14:52', actor: 'Agent',  action: 'Submitted review',      cls: 'ait-faint',  y: 56  },
      { time: '14:51', actor: 'System', action: 'Confidence scored',     cls: 'ait-faint',  y: 82  },
      { time: '14:49', actor: 'Agent',  action: 'Signals corroborated',  cls: 'ait-faint',  y: 108 },
      { time: '14:47', actor: 'Human',  action: 'Approved: Onboard',     cls: '',           y: 134, fill: '#16a34a', darkFill: '#86efac' },
      { time: '14:38', actor: 'Human',  action: 'Rejected: Anomaly',     cls: '',           y: 160, fill: '#dc2626', darkFill: '#fca5a5' },
      { time: '14:21', actor: 'System', action: 'Policy check passed',   cls: 'ait-faint',  y: 186 },
    ].map(({ time, actor, action, cls, y, fill }) => (
      <g key={`${time}-${action}`}>
        <text x="358" y={y}      fontSize="6.5" fontFamily="sans-serif" className="ait-veryfaint">{time}</text>
        <text x="358" y={y + 11} fontSize="7"   fontWeight="600" fontFamily="sans-serif" className={cls || undefined} fill={fill}>{actor}</text>
        <text x="358" y={y + 22} fontSize="7"   fontFamily="sans-serif" className="ait-dim">{action}</text>
        {y < 186 && <line x1="358" y1={y + 28} x2="456" y2={y + 28} strokeWidth="1" className="ait-divider"/>}
      </g>
    ))}

    {/* Flow line */}
    <text x="14" y="284" fontSize="7" fontWeight="500" letterSpacing="0.5" fontFamily="sans-serif" className="ait-flow-txt">AI INPUT</text>
    <line x1="65" y1="281" x2="400" y2="281" strokeWidth="1" strokeDasharray="5 4" stroke="#3b82f6" opacity="0.4" className="ait-flow"/>
    <polyline points="397,278 402,281 397,284" stroke="#3b82f6" strokeWidth="1" opacity="0.4" fill="none"/>
    <text x="466" y="284" textAnchor="end" fontSize="7" fontWeight="600" letterSpacing="0.5" fontFamily="sans-serif" fill="#3b82f6" opacity="0.7">HUMAN TRUST</text>
  </svg>
);

export default AIATrustDashboardIllustration;
