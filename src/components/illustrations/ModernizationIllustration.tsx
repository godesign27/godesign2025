import React from 'react';

const ModernizationIllustration: React.FC = () => (
  <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <defs>
      <style>{`
        .mod-illus { --mod-fill:#F3EFE7; --mod-card:#ffffff; --mod-line:#E5DDD0; --mod-soft:#6B7280; --mod-ink:#1a1714; --mod-blue:#2563EB; --mod-muted:#9CA3AF; --mod-old:#E8E0D4; }
        .dark .mod-illus { --mod-fill:#262626; --mod-card:#1c1c1c; --mod-line:rgba(255,255,255,0.12); --mod-soft:#9ca3af; --mod-ink:#f5f5f5; --mod-blue:#93C5FD; --mod-muted:#6B7280; --mod-old:#2a2520; }
        @keyframes mod-slide{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:translateX(0)}}
        .mod-slide{animation:mod-slide 0.5s ease-out 0.8s forwards;opacity:0}
        @keyframes mod-arrow{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}
        .mod-arrow{animation:mod-arrow 1.4s ease-in-out infinite}
      `}</style>
      <linearGradient id="mod-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="1"/>
        <stop offset="15%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <mask id="mod-mask">
        <rect width="480" height="290" fill="white"/>
        <rect width="480" height="290" fill="url(#mod-fade)"/>
      </mask>
    </defs>

    <g className="mod-illus" mask="url(#mod-mask)">
      <rect width="480" height="290" style={{fill:'var(--mod-fill)'}}/>

      {/* Labels */}
      <text x="109" y="14" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="0.1em" fontFamily="sans-serif" style={{fill:'var(--mod-muted)'}}>LEGACY</text>
      <text x="371" y="14" textAnchor="middle" fontSize="7" fontWeight="700" letterSpacing="0.1em" fontFamily="sans-serif" style={{fill:'var(--mod-blue)'}}>MODERN</text>

      {/* ═══════════ LEFT: LEGACY PANEL ═══════════ */}
      <rect x="24" y="20" width="200" height="260" style={{fill:'var(--mod-old)',stroke:'var(--mod-muted)',opacity:0.8}} strokeWidth="1"/>

      {/* Legacy nav - cramped */}
      <rect x="24" y="20" width="200" height="18" style={{fill:'var(--mod-muted)',opacity:0.6}}/>
      <text x="30" y="32" fontSize="7" fontFamily="monospace" style={{fill:'var(--mod-card)',opacity:0.8}}>LEGACY SYSTEM v4.2.1 — Internal Portal</text>

      {/* Cramped sidebar */}
      <rect x="24" y="38" width="50" height="242" style={{fill:'rgba(0,0,0,0.06)'}}/>
      {['Home','Clients','Reports','Admin','Settings','Help','Log Out','Archive'].map((t,i)=>(
        <g key={t}>
          <text x="28" y={52+i*18} fontSize="6.5" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.7}}>{t}</text>
          <line x1="24" y1={56+i*18} x2="74" y2={56+i*18} style={{stroke:'var(--mod-muted)',opacity:0.2}} strokeWidth="0.5"/>
        </g>
      ))}

      {/* Main content - cluttered */}
      <rect x="78" y="42" width="138" height="16" style={{fill:'rgba(0,0,0,0.05)'}}/>
      <text x="82" y="54" fontSize="7" fontWeight="700" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.7}}>CLIENT RECORD MANAGEMENT</text>

      {/* Dense table headers */}
      <rect x="78" y="62" width="138" height="10" style={{fill:'var(--mod-muted)',opacity:0.4}}/>
      {['ID','Name','Acct','Bal','Sts','Dt'].map((h,i)=>(
        <text key={h} x={80+i*22} y="70" fontSize="5.5" fontWeight="700" fontFamily="monospace" style={{fill:'var(--mod-ink)'}}>{h}</text>
      ))}

      {/* Dense table rows - 12 rows of cramped data */}
      {Array.from({length:12}).map((_,i)=>(
        <g key={i}>
          <rect x="78" y={72+i*14} width="138" height="14" style={{fill:i%2===0?'rgba(255,255,255,0.4)':'none'}}/>
          <text x="80" y={82+i*14} fontSize="5.5" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.8}}>{1000+i}</text>
          <text x="94" y={82+i*14} fontSize="5.5" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.8}}>Smith,{String.fromCharCode(65+i)}</text>
          <text x="128" y={82+i*14} fontSize="5.5" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.8}}>3940{i}</text>
          <text x="154" y={82+i*14} fontSize="5.5" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.8}}>${(1200+i*340).toLocaleString()}</text>
          <circle cx="188" cy={77+i*14} r="3" style={{fill:i%3===0?'#ef4444':i%3===1?'#f59e0b':'#22c55e',opacity:0.7}}/>
          <text x="194" y={82+i*14} fontSize="5" fontFamily="monospace" style={{fill:'var(--mod-ink)',opacity:0.6}}>0{i+1}/26</text>
        </g>
      ))}

      {/* Warning dialogs cluttering screen */}
      <rect x="90" y="190" width="120" height="36" style={{fill:'var(--mod-card)',stroke:'#f59e0b'}} strokeWidth="1.5"/>
      <text x="150" y="204" textAnchor="middle" fontSize="6" fontFamily="monospace" style={{fill:'var(--mod-ink)'}}>⚠ Session expires in 5:00</text>
      <text x="150" y="216" textAnchor="middle" fontSize="5.5" fontFamily="monospace" style={{fill:'var(--mod-muted)'}}>Click OK to continue</text>
      <rect x="130" y="221" width="22" height="8" style={{fill:'var(--mod-muted)'}}/>
      <text x="141" y="228" textAnchor="middle" fontSize="5.5" fontFamily="monospace" style={{fill:'var(--mod-card)'}}>OK</text>

      {/* ═══════════ CENTER ARROW ═══════════ */}
      <g className="mod-arrow">
        <rect x="228" y="126" width="26" height="40" rx="0" style={{fill:'var(--mod-blue)'}}/>
        <polygon points="218,138 228,131 228,145" style={{fill:'var(--mod-blue)',opacity:0.4}}/>
        <polygon points="254,146 268,138 254,130" style={{fill:'var(--mod-blue)'}}/>
        <text x="241" y="151" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.05em" fontFamily="sans-serif" style={{fill:'var(--mod-blue)'}}>REFACTOR</text>
      </g>

      {/* ═══════════ RIGHT: MODERN PANEL ═══════════ */}
      <g className="mod-slide">
        <rect x="272" y="20" width="200" height="260" style={{fill:'var(--mod-card)',stroke:'var(--mod-blue)'}} strokeWidth="1.5"/>

        {/* Modern nav */}
        <rect x="272" y="20" width="200" height="28" style={{fill:'var(--mod-fill)',stroke:'var(--mod-line)'}} strokeWidth="1"/>
        <text x="284" y="32" fontSize="9" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--mod-ink)'}}>ClientHub</text>
        <rect x="438" y="24" width="26" height="18" style={{fill:'var(--mod-blue)'}}/>
        <text x="451" y="36" textAnchor="middle" fontSize="7" fontWeight="600" fontFamily="sans-serif" style={{fill:'#ffffff'}}>+ New</text>

        {/* Search bar */}
        <rect x="282" y="56" width="180" height="20" style={{fill:'var(--mod-fill)',stroke:'var(--mod-line)'}} strokeWidth="1"/>
        <text x="292" y="69" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--mod-muted)'}}>Search clients…</text>

        {/* Section label */}
        <text x="282" y="92" fontSize="7" fontWeight="700" letterSpacing="0.08em" fontFamily="sans-serif" style={{fill:'var(--mod-blue)'}}>RECENT CLIENTS</text>
        <line x1="282" y1="96" x2="462" y2="96" style={{stroke:'var(--mod-line)'}} strokeWidth="1"/>

        {/* Clean client cards - 3 rows */}
        {[
          {name:'Alice Smith', acct:'394001', bal:'$12,400', status:'Active', statusColor:'var(--mod-blue)', y:106},
          {name:'Bob Johnson', acct:'394002', bal:'$8,920', status:'Review', statusColor:'#D97706', y:142},
          {name:'Carol Wu', acct:'394003', bal:'$31,200', status:'Active', statusColor:'var(--mod-blue)', y:178},
        ].map(({name,acct,bal,status,statusColor,y})=>(
          <g key={name}>
            <rect x="282" y={y} width="180" height="30" style={{fill:'var(--mod-fill)',stroke:'var(--mod-line)'}} strokeWidth="1"/>
            <circle cx="298" cy={y+15} r="8" style={{fill:'rgba(37,99,235,0.12)'}}/>
            <text x="298" y={y+19} textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--mod-blue)'}}>{name[0]}</text>
            <text x="312" y={y+12} fontSize="8.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'var(--mod-ink)'}}>{name}</text>
            <text x="312" y={y+23} fontSize="7" fontFamily="sans-serif" style={{fill:'var(--mod-muted)'}}>Acct {acct} · {bal}</text>
            <rect x="424" y={y+8} width="32" height="14" style={{fill:'none',stroke:statusColor}} strokeWidth="1"/>
            <text x="440" y={y+18} textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" style={{fill:statusColor}}>{status}</text>
          </g>
        ))}

        {/* Summary stats */}
        <line x1="282" y1="222" x2="462" y2="222" style={{stroke:'var(--mod-line)'}} strokeWidth="1"/>
        {[
          {label:'Total Clients', val:'248', x:282},
          {label:'Active', val:'211', x:342},
          {label:'Avg Balance', val:'$14.2k', x:402},
        ].map(({label,val,x})=>(
          <g key={label}>
            <text x={x+10} y="238" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--mod-muted)'}}>{label}</text>
            <text x={x+10} y="252" fontSize="11" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--mod-ink)'}}>{val}</text>
          </g>
        ))}
      </g>
    </g>
  </svg>
);

export default ModernizationIllustration;
