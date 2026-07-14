import React from 'react';

const ClinicalWorkflowIllustration: React.FC = () => (
  <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <defs>
      <style>{`
        .cw-illus { --cw-fill:#F3EFE7; --cw-card:#ffffff; --cw-line:#E5DDD0; --cw-soft:#6B7280; --cw-ink:#1a1714; --cw-blue:#2563EB; --cw-red:#DC2626; --cw-amber:#D97706; --cw-green:#16A34A; }
        .dark .cw-illus { --cw-fill:#262626; --cw-card:#1c1c1c; --cw-line:rgba(255,255,255,0.12); --cw-soft:#9ca3af; --cw-ink:#f5f5f5; --cw-blue:#93C5FD; --cw-red:#FCA5A5; --cw-amber:#FCD34D; --cw-green:#86EFAC; }
        @keyframes cw-pulse{0%,100%{opacity:1;r:4}50%{opacity:0.4;r:6}}
        .cw-pulse{animation:cw-pulse 1.8s ease-in-out infinite}
        @keyframes cw-blink{0%,49%{opacity:1}50%,100%{opacity:0}}
        .cw-blink{animation:cw-blink 1.2s step-end infinite}
      `}</style>
      <linearGradient id="cw-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="1"/>
        <stop offset="15%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <mask id="cw-mask">
        <rect width="480" height="290" fill="white"/>
        <rect width="480" height="290" fill="url(#cw-fade)"/>
      </mask>
    </defs>

    <g className="cw-illus" mask="url(#cw-mask)">
      <rect width="480" height="290" style={{fill:'var(--cw-fill)'}}/>

      {/* ── PATIENT LIST (left sidebar) ── */}
      <rect x="24" y="18" width="108" height="254" style={{fill:'var(--cw-card)',stroke:'var(--cw-line)'}} strokeWidth="1"/>
      <rect x="24" y="18" width="108" height="30" style={{fill:'var(--cw-line)'}}/>
      <text x="78" y="37" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>PATIENT QUEUE</text>

      {/* Patient rows */}
      {[
        {name:'Torres, M.', status:'Critical', color:'var(--cw-red)', y:70, active:true},
        {name:'Chen, R.', status:'Pending', color:'var(--cw-amber)', y:108, active:false},
        {name:'Patel, S.', status:'Stable', color:'var(--cw-green)', y:146, active:false},
        {name:'Walsh, J.', status:'Pending', color:'var(--cw-amber)', y:184, active:false},
        {name:'Kim, A.', status:'Stable', color:'var(--cw-green)', y:222, active:false},
      ].map(({name,status,color,y,active})=>(
        <g key={name}>
          <rect x="24" y={y-20} width="108" height="34" style={{fill:active?'rgba(37,99,235,0.08)':'none', stroke:active?'var(--cw-blue)':'none'}} strokeWidth={active?1:0}/>
          <circle cx="36" cy={y-3} r="5" style={{fill:color}}/>
          {active && <circle cx="36" cy={y-3} r="4" className="cw-pulse" style={{fill:color,opacity:0.3}}/>}
          <text x="46" y={y-7} fontSize="8" fontWeight={active?'600':'400'} fontFamily="sans-serif" style={{fill:'var(--cw-ink)'}}>{name}</text>
          <text x="46" y={y+5} fontSize="7" fontFamily="sans-serif" style={{fill:color}}>{status}</text>
          {active && <rect x="24" y={y-20} width="3" height="34" style={{fill:'var(--cw-blue)'}}/>}
        </g>
      ))}

      {/* ── ALERT PRIORITY CENTER ── */}
      <rect x="140" y="18" width="196" height="254" style={{fill:'var(--cw-card)',stroke:'var(--cw-line)'}} strokeWidth="1"/>
      <rect x="140" y="18" width="196" height="30" style={{fill:'var(--cw-line)'}}/>
      <text x="238" y="33" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>TORRES, M. — ALERTS</text>
      <text x="150" y="42" fontSize="6.5" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>DOB 1958 · Room 4B · Cardiologist: Dr. Walsh</text>

      {/* Critical alert */}
      <rect x="150" y="58" width="176" height="44" style={{fill:'rgba(220,38,38,0.08)',stroke:'var(--cw-red)'}} strokeWidth="1.5"/>
      <rect x="150" y="58" width="4" height="44" style={{fill:'var(--cw-red)'}}/>
      <text x="162" y="72" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="sans-serif" style={{fill:'var(--cw-red)'}}>CRITICAL</text>
      <text x="162" y="84" fontSize="8" fontWeight="600" fontFamily="sans-serif" style={{fill:'var(--cw-ink)'}}>Troponin I: 2.4 ng/mL (↑↑↑)</text>
      <text x="162" y="95" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>Review required · 14 min ago</text>

      {/* High alert */}
      <rect x="150" y="110" width="176" height="40" style={{fill:'rgba(217,119,6,0.06)',stroke:'var(--cw-amber)'}} strokeWidth="1"/>
      <rect x="150" y="110" width="4" height="40" style={{fill:'var(--cw-amber)'}}/>
      <text x="162" y="123" fontSize="7.5" fontWeight="600" letterSpacing="0.06em" fontFamily="sans-serif" style={{fill:'var(--cw-amber)'}}>HIGH</text>
      <text x="162" y="134" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--cw-ink)'}}>BP 158/94 · HR 112 bpm</text>
      <text x="162" y="144" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>Trending 2h · Notify on-call</text>

      {/* Medium alert */}
      <rect x="150" y="158" width="176" height="38" style={{fill:'none',stroke:'var(--cw-line)'}} strokeWidth="1"/>
      <rect x="150" y="158" width="4" height="38" style={{fill:'var(--cw-blue)'}}/>
      <text x="162" y="171" fontSize="7.5" fontWeight="600" letterSpacing="0.06em" fontFamily="sans-serif" style={{fill:'var(--cw-blue)'}}>INFORMATIONAL</text>
      <text x="162" y="181" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--cw-ink)'}}>ECG ordered · Pending radiology</text>
      <text x="162" y="191" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>Est. 45 min</text>

      {/* Low items */}
      {[
        {label:'Aspirin 81mg — Due 14:00', y:210},
        {label:'Metoprolol — Due 18:00', y:224},
        {label:'Diet: Low sodium, 1800 kcal', y:238},
      ].map(({label,y})=>(
        <g key={label}>
          <circle cx="158" cy={y-2} r="2.5" style={{fill:'var(--cw-line)'}}/>
          <text x="166" y={y+1} fontSize="7.5" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>{label}</text>
        </g>
      ))}

      {/* ── RIGHT ACTION PANEL ── */}
      <rect x="344" y="18" width="128" height="254" style={{fill:'var(--cw-card)',stroke:'var(--cw-line)'}} strokeWidth="1"/>
      <rect x="344" y="18" width="128" height="30" style={{fill:'var(--cw-line)'}}/>
      <text x="408" y="37" textAnchor="middle" fontSize="7.5" fontWeight="700" letterSpacing="0.06em" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>ACTIONS</text>

      {/* Action buttons */}
      <rect x="354" y="58" width="108" height="24" style={{fill:'var(--cw-red)'}}/>
      <text x="408" y="74" textAnchor="middle" fontSize="8" fontWeight="600" fontFamily="sans-serif" style={{fill:'#ffffff'}}>Acknowledge Alert</text>

      <rect x="354" y="90" width="108" height="24" style={{fill:'none',stroke:'var(--cw-blue)'}} strokeWidth="1.5"/>
      <text x="408" y="106" textAnchor="middle" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--cw-blue)'}}>Order Labs</text>

      <rect x="354" y="122" width="108" height="24" style={{fill:'none',stroke:'var(--cw-line)'}} strokeWidth="1"/>
      <text x="408" y="138" textAnchor="middle" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>Notify Cardiologist</text>

      <line x1="344" y1="156" x2="472" y2="156" style={{stroke:'var(--cw-line)'}} strokeWidth="1"/>

      <text x="354" y="170" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>CLINICAL NOTES</text>
      <text x="354" y="183" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--cw-ink)'}}>14:22 — Dr. Walsh</text>
      <rect x="354" y="187" width="106" height="5" style={{fill:'var(--cw-line)'}}/>
      <rect x="354" y="196" width="88" height="5" style={{fill:'var(--cw-line)'}}/>
      <rect x="354" y="205" width="100" height="5" style={{fill:'var(--cw-line)'}}/>

      <text x="354" y="224" fontSize="7.5" fontFamily="sans-serif" style={{fill:'var(--cw-ink)'}}>13:58 — Nurse Chen</text>
      <rect x="354" y="228" width="90" height="5" style={{fill:'var(--cw-line)'}}/>
      <rect x="354" y="237" width="70" height="5" style={{fill:'var(--cw-line)'}}/>

      <text x="362" y="258" fontSize="7.5" fontFamily="sans-serif" style={{fill:'var(--cw-soft)'}}>Add note</text>
      <rect x="352" y="246" width="110" height="20" style={{fill:'none',stroke:'var(--cw-line)'}} strokeWidth="1"/>
      <line x1="410" y1="253" x2="410" y2="261" className="cw-blink" style={{stroke:'var(--cw-ink)'}} strokeWidth="1"/>
    </g>
  </svg>
);

export default ClinicalWorkflowIllustration;
