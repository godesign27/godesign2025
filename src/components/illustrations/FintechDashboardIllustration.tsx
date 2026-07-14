import React from 'react';

const FintechDashboardIllustration: React.FC = () => (
  <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <defs>
      <style>{`
        .fd-illus { --fd-fill:#F3EFE7; --fd-card:#ffffff; --fd-line:#E5DDD0; --fd-soft:#6B7280; --fd-ink:#1a1714; --fd-blue:#2563EB; --fd-green:#16A34A; --fd-red:#DC2626; }
        .dark .fd-illus { --fd-fill:#262626; --fd-card:#1c1c1c; --fd-line:rgba(255,255,255,0.12); --fd-soft:#9ca3af; --fd-ink:#f5f5f5; --fd-blue:#93C5FD; --fd-green:#86EFAC; --fd-red:#FCA5A5; }
        @keyframes fd-draw{from{stroke-dashoffset:200}to{stroke-dashoffset:0}}
        .fd-line-anim{stroke-dasharray:200;animation:fd-draw 2s ease-out forwards}
        @keyframes fd-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
        .fd-fade{animation:fd-fade 0.6s ease-out forwards}
        .fd-fade-d1{animation:fd-fade 0.6s ease-out 0.2s forwards;opacity:0}
        .fd-fade-d2{animation:fd-fade 0.6s ease-out 0.4s forwards;opacity:0}
      `}</style>
      <linearGradient id="fd-fade-mask" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="1"/>
        <stop offset="15%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
      <mask id="fd-mask">
        <rect width="480" height="290" fill="white"/>
        <rect width="480" height="290" fill="url(#fd-fade-mask)"/>
      </mask>
      <linearGradient id="fd-chart-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2"/>
        <stop offset="100%" stopColor="#2563EB" stopOpacity="0"/>
      </linearGradient>
    </defs>

    <g className="fd-illus" mask="url(#fd-mask)">
      <rect width="480" height="290" style={{fill:'var(--fd-fill)'}}/>

      {/* ── TOP NAV ── */}
      <rect x="24" y="18" width="448" height="26" style={{fill:'var(--fd-card)',stroke:'var(--fd-line)'}} strokeWidth="1"/>
      <text x="36" y="34" fontSize="8.5" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--fd-ink)'}}>FinancePro</text>
      {['Overview','Accounts','Transactions','Analytics'].map((t,i)=>(
        <text key={t} x={110+i*72} y="34" fontSize="7.5" fontFamily="sans-serif" style={{fill:i===0?'var(--fd-blue)':'var(--fd-soft)'}}>{t}</text>
      ))}
      <rect x="432" y="22" width="32" height="18" style={{fill:'var(--fd-blue)'}}/>
      <text x="448" y="34" textAnchor="middle" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'#ffffff'}}>+ New</text>

      {/* ── METRIC CARDS ROW ── */}
      {[
        {label:'Portfolio Value', value:'$284,192', sub:'+$4,230 today', pos:true, x:24},
        {label:'Monthly Return', value:'+3.2%', sub:'vs +1.8% last mo.', pos:true, x:185},
        {label:'Risk Score', value:'62 / 100', sub:'Moderate', pos:null, x:346},
      ].map(({label,value,sub,pos,x})=>(
        <g key={label} className="fd-fade">
          <rect x={x} y="52" width="152" height="56" style={{fill:'var(--fd-card)',stroke:'var(--fd-line)'}} strokeWidth="1"/>
          <text x={x+10} y="68" fontSize="7" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>{label}</text>
          <text x={x+10} y="84" fontSize="14" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--fd-ink)'}}>{value}</text>
          <text x={x+10} y="99" fontSize="7.5" fontFamily="sans-serif" style={{fill:pos===true?'var(--fd-green)':pos===false?'var(--fd-red)':'var(--fd-soft)'}}>{sub}</text>
        </g>
      ))}

      {/* ── SPARKLINE CHART ── */}
      <rect x="24" y="116" width="290" height="94" style={{fill:'var(--fd-card)',stroke:'var(--fd-line)'}} strokeWidth="1"/>
      <text x="34" y="131" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>PORTFOLIO PERFORMANCE — 6 MONTHS</text>

      {/* Chart grid lines */}
      {[0,1,2,3].map(i=>(
        <line key={i} x1="46" y1={145+i*18} x2="308" y2={145+i*18} style={{stroke:'var(--fd-line)'}} strokeWidth="0.5"/>
      ))}

      {/* Chart area fill */}
      <path d="M46,196 L86,180 L126,172 L166,163 L206,155 L246,148 L286,140 L286,202 L46,202 Z" fill="url(#fd-chart-grad)"/>

      {/* Chart line */}
      <path d="M46,196 L86,180 L126,172 L166,163 L206,155 L246,148 L286,140"
        className="fd-line-anim"
        style={{stroke:'var(--fd-blue)'}} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Data point dots */}
      {[[46,196],[86,180],[126,172],[166,163],[206,155],[246,148],[286,140]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="3" style={{fill:'var(--fd-card)',stroke:'var(--fd-blue)'}} strokeWidth="1.5"/>
      ))}

      {/* Tooltip on last point */}
      <rect x="260" y="126" width="48" height="20" style={{fill:'var(--fd-blue)'}}/>
      <text x="284" y="134" textAnchor="middle" fontSize="6.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'#ffffff'}}>$284,192</text>
      <text x="284" y="142" textAnchor="middle" fontSize="6" fontFamily="sans-serif" style={{fill:'rgba(255,255,255,0.7)'}}>+3.2% MoM</text>
      <polygon points="276,146 284,152 292,146" style={{fill:'var(--fd-blue)'}}/>

      {/* X axis labels */}
      {['Jan','Feb','Mar','Apr','May','Jun'].map((m,i)=>(
        <text key={m} x={46+i*48} y="212" fontSize="6.5" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>{m}</text>
      ))}

      {/* ── TRUST PANEL (right of chart) ── */}
      <rect x="322" y="116" width="150" height="94" style={{fill:'var(--fd-card)',stroke:'var(--fd-line)'}} strokeWidth="1"/>
      <text x="332" y="131" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>SECURITY STATUS</text>
      <line x1="322" y1="136" x2="472" y2="136" style={{stroke:'var(--fd-line)'}} strokeWidth="1"/>

      {/* Trust indicators */}
      {[
        {label:'2-factor auth', ok:true, y:152},
        {label:'Last login verified', ok:true, y:166},
        {label:'Session encrypted', ok:true, y:180},
        {label:'Unusual activity', ok:false, y:194},
      ].map(({label,ok,y})=>(
        <g key={label}>
          <circle cx="336" cy={y-3} r="5" style={{fill:ok?'rgba(22,163,74,0.15)':'rgba(220,38,38,0.1)',stroke:ok?'var(--fd-green)':'var(--fd-red)'}} strokeWidth="1"/>
          <text x="336" y={y} textAnchor="middle" fontSize="8" fontWeight="700" style={{fill:ok?'var(--fd-green)':'var(--fd-red)'}}>{ok?'✓':'!'}</text>
          <text x="348" y={y} fontSize="7.5" fontFamily="sans-serif" style={{fill:'var(--fd-ink)'}}>{label}</text>
        </g>
      ))}

      {/* ── TRANSACTION TABLE ── */}
      <rect x="24" y="218" width="448" height="54" style={{fill:'var(--fd-card)',stroke:'var(--fd-line)'}} strokeWidth="1"/>
      <rect x="24" y="218" width="448" height="18" style={{fill:'var(--fd-line)'}}/>
      <text x="34" y="230" fontSize="7" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>DESCRIPTION</text>
      <text x="200" y="230" fontSize="7" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>DATE</text>
      <text x="320" y="230" fontSize="7" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>CATEGORY</text>
      <text x="462" y="230" textAnchor="end" fontSize="7" fontWeight="700" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>AMOUNT</text>

      {/* Transaction rows */}
      {[
        {desc:'VNGRD S&P 500 ETF', date:'Jul 1, 2026', cat:'Investment', amt:'+$1,240.00', pos:true, y:246, confirmed:true},
        {desc:'TransUnion API · Monthly', date:'Jun 30, 2026', cat:'Subscription', amt:'-$299.00', pos:false, y:260},
      ].map(({desc,date,cat,amt,pos,y,confirmed})=>(
        <g key={desc} className="fd-fade-d1">
          <text x="34" y={y} fontSize="8" fontFamily="sans-serif" style={{fill:'var(--fd-ink)'}}>{desc}</text>
          {confirmed && (
            <g>
              <circle cx="178" cy={y-4} r="5" style={{fill:'rgba(22,163,74,0.15)'}}/>
              <text x="178" y={y} textAnchor="middle" fontSize="8" style={{fill:'var(--fd-green)'}}>✓</text>
            </g>
          )}
          <text x="200" y={y} fontSize="7.5" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>{date}</text>
          <text x="320" y={y} fontSize="7.5" fontFamily="sans-serif" style={{fill:'var(--fd-soft)'}}>{cat}</text>
          <text x="462" y={y} textAnchor="end" fontSize="8" fontWeight="600" fontFamily="sans-serif" style={{fill:pos?'var(--fd-green)':'var(--fd-ink)'}}>{amt}</text>
        </g>
      ))}
    </g>
  </svg>
);

export default FintechDashboardIllustration;
