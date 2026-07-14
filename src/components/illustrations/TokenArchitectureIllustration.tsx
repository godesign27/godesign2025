import React from 'react';

const TokenArchitectureIllustration: React.FC = () => (
  <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <defs>
      <style>{`
        .ta-illus { --ta-stroke:#1a1714; --ta-soft:#6B7280; --ta-line:#E5DDD0; --ta-fill:#F3EFE7; --ta-blue:#2563EB; --ta-label:#1a1714; --ta-card:#ffffff; --ta-hi:#EFF6FF; }
        .dark .ta-illus { --ta-stroke:#e5e5e5; --ta-soft:#9ca3af; --ta-line:rgba(255,255,255,0.12); --ta-fill:#262626; --ta-blue:#93C5FD; --ta-label:#f5f5f5; --ta-card:#1c1c1c; --ta-hi:rgba(147,197,253,0.08); }
        @keyframes ta-flow { 0%,100%{stroke-dashoffset:16}50%{stroke-dashoffset:0} }
        .ta-dash{animation:ta-flow 2.4s ease-in-out infinite}
        .ta-dash2{animation:ta-flow 2.4s ease-in-out infinite;animation-delay:0.6s}
        @keyframes ta-glow{0%,100%{opacity:0.5}50%{opacity:1}}
        .ta-glow{animation:ta-glow 2s ease-in-out infinite}
      `}</style>
      <linearGradient id="ta-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="1"/>
        <stop offset="15%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <mask id="ta-mask">
        <rect width="480" height="290" fill="white"/>
        <rect width="480" height="290" fill="url(#ta-fade)"/>
      </mask>
    </defs>

    <g className="ta-illus" mask="url(#ta-mask)">
      <rect width="480" height="290" style={{fill:'var(--ta-fill)'}}/>

      {/* ── PRIMITIVE COLUMN ── */}
      <rect x="26" y="18" width="116" height="254" style={{fill:'var(--ta-card)',stroke:'var(--ta-line)'}} strokeWidth="1"/>
      <text x="84" y="36" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.1em" fontFamily="monospace" style={{fill:'var(--ta-soft)'}}>PRIMITIVE</text>
      <line x1="26" y1="44" x2="142" y2="44" style={{stroke:'var(--ta-line)'}} strokeWidth="1"/>

      {/* Color swatches */}
      {[
        {color:'#2563EB', hex:'#2563EB', y:58},
        {color:'#1a1714', hex:'#1a1714', y:78},
        {color:'#6B7280', hex:'#6B7280', y:98},
        {color:'#F3EFE7', hex:'#F3EFE7', border:true, y:118},
      ].map(({color,hex,border,y})=>(
        <g key={hex}>
          <rect x="36" y={y-9} width="12" height="12" style={{fill:color, stroke:border?'var(--ta-line)':'none'}} strokeWidth="1"/>
          <text x="54" y={y} fontSize="7.5" fontFamily="monospace" style={{fill:'var(--ta-soft)'}}>{hex}</text>
        </g>
      ))}

      <line x1="26" y1="138" x2="142" y2="138" style={{stroke:'var(--ta-line)'}} strokeWidth="1"/>

      {/* Spacing tokens */}
      {['4px','8px','12px','16px','24px','32px'].map((v,i)=>(
        <g key={v}>
          <rect x="36" y={150+i*18-10} width={parseInt(v)*1.2} height="8" style={{fill:'var(--ta-blue)',opacity:0.25}}/>
          <text x="54" y={150+i*18} fontSize="7.5" fontFamily="monospace" style={{fill:'var(--ta-soft)'}}>{v}</text>
        </g>
      ))}

      {/* ── ARROW 1 ── */}
      <g className="ta-dash">
        <line x1="146" y1="100" x2="168" y2="100" style={{stroke:'var(--ta-blue)'}} strokeWidth="1.5" strokeDasharray="4 3"/>
      </g>
      <polygon points="170,97 176,100 170,103" style={{fill:'var(--ta-blue)'}}/>
      <g className="ta-dash">
        <line x1="146" y1="170" x2="168" y2="170" style={{stroke:'var(--ta-blue)'}} strokeWidth="1.5" strokeDasharray="4 3"/>
      </g>
      <polygon points="170,167 176,170 170,173" style={{fill:'var(--ta-blue)'}}/>

      {/* ── SEMANTIC COLUMN ── */}
      <rect x="178" y="18" width="126" height="254" style={{fill:'var(--ta-hi)',stroke:'var(--ta-blue)'}} strokeWidth="1.5"/>
      <text x="241" y="36" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.1em" fontFamily="monospace" style={{fill:'var(--ta-blue)'}}>SEMANTIC</text>
      <line x1="178" y1="44" x2="304" y2="44" style={{stroke:'var(--ta-blue)',opacity:0.3}} strokeWidth="1"/>

      {/* Semantic token pills */}
      {[
        {name:'color.primary',y:60},
        {name:'color.ink',y:80},
        {name:'color.muted',y:100},
        {name:'color.surface',y:120},
      ].map(({name,y})=>(
        <g key={name}>
          <rect x="188" y={y-11} width="106" height="16" style={{fill:'var(--ta-card)',stroke:'var(--ta-line)'}} strokeWidth="1"/>
          <text x="241" y={y} textAnchor="middle" fontSize="7.5" fontFamily="monospace" style={{fill:'var(--ta-label)'}}>{name}</text>
        </g>
      ))}

      <line x1="178" y1="138" x2="304" y2="138" style={{stroke:'var(--ta-blue)',opacity:0.3}} strokeWidth="1"/>

      {[
        {name:'space.2xs',y:152},
        {name:'space.xs',y:170},
        {name:'space.sm',y:188},
        {name:'space.md',y:206},
        {name:'space.lg',y:224},
        {name:'space.xl',y:242},
      ].map(({name,y})=>(
        <g key={name}>
          <rect x="188" y={y-11} width="106" height="16" style={{fill:'var(--ta-card)',stroke:'var(--ta-line)'}} strokeWidth="1"/>
          <text x="241" y={y} textAnchor="middle" fontSize="7.5" fontFamily="monospace" style={{fill:'var(--ta-label)'}}>{name}</text>
        </g>
      ))}

      {/* Pulse on semantic highlight */}
      <circle cx="241" cy="65" r="3" className="ta-glow" style={{fill:'var(--ta-blue)'}}/>

      {/* ── ARROW 2 ── */}
      <g className="ta-dash2">
        <line x1="308" y1="100" x2="330" y2="100" style={{stroke:'var(--ta-blue)'}} strokeWidth="1.5" strokeDasharray="4 3"/>
      </g>
      <polygon points="332,97 338,100 332,103" style={{fill:'var(--ta-blue)'}}/>
      <g className="ta-dash2">
        <line x1="308" y1="170" x2="330" y2="170" style={{stroke:'var(--ta-blue)'}} strokeWidth="1.5" strokeDasharray="4 3"/>
      </g>
      <polygon points="332,167 338,170 332,173" style={{fill:'var(--ta-blue)'}}/>

      {/* ── COMPONENT COLUMN ── */}
      <rect x="340" y="18" width="130" height="254" style={{fill:'var(--ta-card)',stroke:'var(--ta-line)'}} strokeWidth="1"/>
      <text x="405" y="36" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.1em" fontFamily="monospace" style={{fill:'var(--ta-soft)'}}>COMPONENT</text>
      <line x1="340" y1="44" x2="470" y2="44" style={{stroke:'var(--ta-line)'}} strokeWidth="1"/>

      {/* Button */}
      <rect x="352" y="56" width="80" height="22" style={{fill:'var(--ta-blue)'}}/>
      <text x="392" y="71" textAnchor="middle" fontSize="8" fontWeight="600" fontFamily="sans-serif" style={{fill:'#ffffff'}}>Primary Button</text>

      {/* Ghost button */}
      <rect x="352" y="86" width="80" height="22" style={{fill:'none',stroke:'var(--ta-blue)'}} strokeWidth="1.5"/>
      <text x="392" y="101" textAnchor="middle" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--ta-blue)'}}>Secondary</text>

      {/* Input */}
      <text x="352" y="126" fontSize="7" fontWeight="600" style={{fill:'var(--ta-soft)'}} fontFamily="sans-serif">Label</text>
      <rect x="352" y="130" width="106" height="22" style={{fill:'var(--ta-fill)',stroke:'var(--ta-line)'}} strokeWidth="1.5"/>
      <text x="360" y="145" fontSize="8" fontFamily="sans-serif" style={{fill:'var(--ta-soft)'}}>Placeholder text…</text>

      {/* Badges */}
      <rect x="352" y="164" width="40" height="16" style={{fill:'var(--ta-hi)',stroke:'var(--ta-blue)'}} strokeWidth="1"/>
      <text x="372" y="175" textAnchor="middle" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--ta-blue)'}}>Badge</text>
      <rect x="398" y="164" width="44" height="16" style={{fill:'rgba(107,114,128,0.1)',stroke:'var(--ta-line)'}} strokeWidth="1"/>
      <text x="420" y="175" textAnchor="middle" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--ta-soft)'}}>Neutral</text>

      {/* Card */}
      <rect x="352" y="192" width="106" height="66" style={{fill:'var(--ta-fill)',stroke:'var(--ta-line)'}} strokeWidth="1"/>
      <rect x="352" y="192" width="106" height="20" style={{fill:'var(--ta-line)'}}/>
      <text x="405" y="206" textAnchor="middle" fontSize="7" style={{fill:'var(--ta-soft)'}} fontFamily="sans-serif">Card header</text>
      <rect x="360" y="220" width="55" height="5" style={{fill:'var(--ta-line)'}}/>
      <rect x="360" y="230" width="38" height="5" style={{fill:'var(--ta-line)'}}/>
      <rect x="360" y="244" width="52" height="10" style={{fill:'var(--ta-blue)'}}/>
      <text x="386" y="252" textAnchor="middle" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'#ffffff'}}>Action</text>
    </g>
  </svg>
);

export default TokenArchitectureIllustration;
