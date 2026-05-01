import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import {
  BarChart3,
  Eye,
  Users,
  Clock,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Calendar,
  TrendingUp,
  FileText,
  ExternalLink,
} from 'lucide-react';

interface PageView {
  id: number;
  path: string;
  referrer: string;
  user_agent: string;
  screen_width: number;
  screen_height: number;
  language: string;
  session_id: string;
  created_at: string;
}

type DateRange = '24h' | '7d' | '30d' | '90d' | 'all';

const PAGE_LABELS: Record<string, string> = {
  '/': 'Home',
  '/services': 'Services',
  '/solutions': 'Solutions',
  '/about': 'About',
  '/contact': 'Contact',
  '/saas-product-design': 'SaaS Product Design',
  '/marketing-web-design': 'Marketing Web Design',
  '/mobile-web-design': 'Mobile App Design',
  '/fractional-saas-designer': 'Fractional SaaS Designer',
  '/case-study/1': 'Case Study: CoreTechs',
  '/case-study/2': 'Case Study: Accenture',
  '/case-study/3': 'Case Study: Jim Beam',
};

function getDateCutoff(range: DateRange): Date | null {
  const now = new Date();
  switch (range) {
    case '24h': return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case '7d': return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case '30d': return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case '90d': return new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
    default: return null;
  }
}

function classifyDevice(width: number): 'mobile' | 'tablet' | 'desktop' {
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

function parseBrowser(ua: string): string {
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome') && !ua.includes('Edg')) return 'Chrome';
  if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
  if (ua.includes('Opera') || ua.includes('OPR')) return 'Opera';
  return 'Other';
}

function parseOS(ua: string): string {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac OS')) return 'macOS';
  if (ua.includes('Linux') && !ua.includes('Android')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS';
  return 'Other';
}

function formatReferrer(ref: string): string {
  if (!ref) return 'Direct';
  try {
    const url = new URL(ref);
    return url.hostname.replace('www.', '');
  } catch {
    return ref;
  }
}

function StatCard({ icon: Icon, label, value, subValue, trend }: {
  icon: typeof Eye;
  label: string;
  value: string | number;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
}) {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-neutral-600" />
        </div>
        {trend && trend !== 'neutral' && (
          <div className={`flex items-center gap-1 text-xs font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
            {trend === 'up' ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-neutral-900 tracking-tight">{value}</div>
      <div className="text-sm text-neutral-500 mt-1">{label}</div>
      {subValue && <div className="text-xs text-neutral-400 mt-0.5">{subValue}</div>}
    </div>
  );
}

function BarRow({ label, count, maxCount, color = 'bg-neutral-800' }: {
  label: string;
  count: number;
  maxCount: number;
  color?: string;
}) {
  const pct = maxCount > 0 ? (count / maxCount) * 100 : 0;
  return (
    <div className="flex items-center gap-3 group">
      <div className="w-40 shrink-0 text-sm text-neutral-700 truncate" title={label}>{label}</div>
      <div className="flex-1 h-7 bg-neutral-50 rounded-md overflow-hidden relative">
        <div
          className={`h-full ${color} rounded-md transition-all duration-500 ease-out`}
          style={{ width: `${Math.max(pct, 1)}%` }}
        />
      </div>
      <div className="w-14 text-right text-sm font-medium text-neutral-800 tabular-nums">{count.toLocaleString()}</div>
    </div>
  );
}

function DailyChart({ views, range }: { views: PageView[]; range: DateRange }) {
  const buckets = new Map<string, number>();

  const cutoff = getDateCutoff(range);
  const filtered = cutoff ? views.filter(v => new Date(v.created_at) >= cutoff) : views;

  filtered.forEach(v => {
    const d = new Date(v.created_at);
    const key = range === '24h'
      ? `${d.getHours().toString().padStart(2, '0')}:00`
      : `${d.getMonth() + 1}/${d.getDate()}`;
    buckets.set(key, (buckets.get(key) || 0) + 1);
  });

  const entries = Array.from(buckets.entries());
  if (entries.length === 0) return <div className="text-sm text-neutral-400 py-8 text-center">No data for this period</div>;

  const maxVal = Math.max(...entries.map(e => e[1]), 1);

  return (
    <div className="flex items-end gap-1 h-44 px-1">
      {entries.map(([label, count]) => (
        <div key={label} className="flex-1 flex flex-col items-center gap-1 min-w-0">
          <div className="text-[10px] text-neutral-400 tabular-nums opacity-0 group-hover:opacity-100 transition-opacity">
            {count}
          </div>
          <div
            className="w-full bg-neutral-800 rounded-t-sm hover:bg-neutral-600 transition-colors cursor-default group relative min-h-[2px]"
            style={{ height: `${(count / maxVal) * 100}%` }}
            title={`${label}: ${count} views`}
          />
          <div className="text-[10px] text-neutral-400 truncate w-full text-center">{label}</div>
        </div>
      ))}
    </div>
  );
}

function LiveDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
    </span>
  );
}

export default function Analytics() {
  const [views, setViews] = useState<PageView[]>([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<DateRange>('7d');
  const [lastRefresh, setLastRefresh] = useState(new Date());

  const fetchData = useCallback(async () => {
    setLoading(true);
    const cutoff = getDateCutoff(range);
    let query = supabase
      .from('page_views')
      .select('*')
      .order('created_at', { ascending: false });

    if (cutoff) {
      query = query.gte('created_at', cutoff.toISOString());
    }

    const { data } = await query.limit(10000);
    setViews(data || []);
    setLastRefresh(new Date());
    setLoading(false);
  }, [range]);

  useEffect(() => { fetchData(); }, [fetchData]);

  useEffect(() => {
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [fetchData]);

  const totalViews = views.length;
  const uniqueSessions = new Set(views.map(v => v.session_id)).size;
  const viewsPerSession = uniqueSessions > 0 ? (totalViews / uniqueSessions).toFixed(1) : '0';

  const now = new Date();
  const recentViews = views.filter(v => (now.getTime() - new Date(v.created_at).getTime()) < 5 * 60 * 1000).length;

  const pageCounts = new Map<string, number>();
  views.forEach(v => pageCounts.set(v.path, (pageCounts.get(v.path) || 0) + 1));
  const topPages = Array.from(pageCounts.entries()).sort((a, b) => b[1] - a[1]);
  const topPageMax = topPages[0]?.[1] || 1;

  const referrerCounts = new Map<string, number>();
  views.forEach(v => {
    const ref = formatReferrer(v.referrer);
    referrerCounts.set(ref, (referrerCounts.get(ref) || 0) + 1);
  });
  const topReferrers = Array.from(referrerCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const topRefMax = topReferrers[0]?.[1] || 1;

  const deviceCounts = { mobile: 0, tablet: 0, desktop: 0 };
  views.forEach(v => deviceCounts[classifyDevice(v.screen_width)]++);

  const browserCounts = new Map<string, number>();
  views.forEach(v => {
    const b = parseBrowser(v.user_agent);
    browserCounts.set(b, (browserCounts.get(b) || 0) + 1);
  });
  const topBrowsers = Array.from(browserCounts.entries()).sort((a, b) => b[1] - a[1]);

  const osCounts = new Map<string, number>();
  views.forEach(v => {
    const os = parseOS(v.user_agent);
    osCounts.set(os, (osCounts.get(os) || 0) + 1);
  });
  const topOS = Array.from(osCounts.entries()).sort((a, b) => b[1] - a[1]);

  const langCounts = new Map<string, number>();
  views.forEach(v => {
    const lang = v.language ? v.language.split('-')[0] : 'Unknown';
    langCounts.set(lang, (langCounts.get(lang) || 0) + 1);
  });
  const topLangs = Array.from(langCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 6);

  const recentActivity = views.slice(0, 20);

  const ranges: { value: DateRange; label: string }[] = [
    { value: '24h', label: '24h' },
    { value: '7d', label: '7 days' },
    { value: '30d', label: '30 days' },
    { value: '90d', label: '90 days' },
    { value: 'all', label: 'All time' },
  ];

  const DeviceIcon = ({ type }: { type: string }) => {
    if (type === 'mobile') return <Smartphone className="w-4 h-4" />;
    if (type === 'tablet') return <Tablet className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-neutral-900 tracking-tight flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-neutral-700" />
              Analytics
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Last updated {lastRefresh.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
              <LiveDot />
              {recentViews} active now
            </div>
            <div className="flex bg-white border border-neutral-200 rounded-lg p-0.5">
              {ranges.map(r => (
                <button
                  key={r.value}
                  onClick={() => setRange(r.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    range === r.value
                      ? 'bg-neutral-900 text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <button
              onClick={fetchData}
              disabled={loading}
              className="p-2 border border-neutral-200 bg-white rounded-lg hover:bg-neutral-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 text-neutral-600 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Eye} label="Total Page Views" value={totalViews.toLocaleString()} />
          <StatCard icon={Users} label="Unique Visitors" value={uniqueSessions.toLocaleString()} />
          <StatCard icon={TrendingUp} label="Views / Visitor" value={viewsPerSession} />
          <StatCard icon={FileText} label="Pages Tracked" value={pageCounts.size} />
        </div>

        {/* Traffic Chart */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-neutral-500" />
              Traffic Over Time
            </h2>
          </div>
          <DailyChart views={views} range={range} />
        </div>

        {/* Two-column grids */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2 mb-5">
              <FileText className="w-4 h-4 text-neutral-500" />
              Top Pages
            </h2>
            <div className="space-y-2.5">
              {topPages.length === 0 && <div className="text-sm text-neutral-400 py-4 text-center">No data yet</div>}
              {topPages.map(([path, count]) => (
                <BarRow
                  key={path}
                  label={PAGE_LABELS[path] || path}
                  count={count}
                  maxCount={topPageMax}
                />
              ))}
            </div>
          </div>

          {/* Referrers */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2 mb-5">
              <ExternalLink className="w-4 h-4 text-neutral-500" />
              Top Referrers
            </h2>
            <div className="space-y-2.5">
              {topReferrers.length === 0 && <div className="text-sm text-neutral-400 py-4 text-center">No data yet</div>}
              {topReferrers.map(([ref, count]) => (
                <BarRow
                  key={ref}
                  label={ref}
                  count={count}
                  maxCount={topRefMax}
                  color="bg-neutral-600"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Three-column: Devices, Browsers, OS */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Devices */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2 mb-5">
              <Monitor className="w-4 h-4 text-neutral-500" />
              Devices
            </h2>
            <div className="space-y-4">
              {(['desktop', 'tablet', 'mobile'] as const).map(type => {
                const count = deviceCounts[type];
                const pct = totalViews > 0 ? ((count / totalViews) * 100).toFixed(1) : '0';
                return (
                  <div key={type} className="flex items-center gap-3">
                    <DeviceIcon type={type} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-neutral-700 capitalize">{type}</span>
                        <span className="text-sm font-medium text-neutral-900">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-neutral-800 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Browsers */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2 mb-5">
              <Globe className="w-4 h-4 text-neutral-500" />
              Browsers
            </h2>
            <div className="space-y-3">
              {topBrowsers.map(([browser, count]) => {
                const pct = totalViews > 0 ? ((count / totalViews) * 100).toFixed(1) : '0';
                return (
                  <div key={browser} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-700">{browser}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-400">{count}</span>
                      <span className="text-sm font-medium text-neutral-900 w-12 text-right">{pct}%</span>
                    </div>
                  </div>
                );
              })}
              {topBrowsers.length === 0 && <div className="text-sm text-neutral-400 py-4 text-center">No data</div>}
            </div>
          </div>

          {/* OS & Languages */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-neutral-500" />
              Operating Systems
            </h2>
            <div className="space-y-3 mb-6">
              {topOS.map(([os, count]) => {
                const pct = totalViews > 0 ? ((count / totalViews) * 100).toFixed(1) : '0';
                return (
                  <div key={os} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-700">{os}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-400">{count}</span>
                      <span className="text-sm font-medium text-neutral-900 w-12 text-right">{pct}%</span>
                    </div>
                  </div>
                );
              })}
              {topOS.length === 0 && <div className="text-sm text-neutral-400 py-4 text-center">No data</div>}
            </div>

            <h3 className="text-sm font-semibold text-neutral-900 mb-3">Languages</h3>
            <div className="space-y-2">
              {topLangs.map(([lang, count]) => (
                <div key={lang} className="flex items-center justify-between">
                  <span className="text-sm text-neutral-700 uppercase">{lang}</span>
                  <span className="text-sm font-medium text-neutral-900">{count}</span>
                </div>
              ))}
              {topLangs.length === 0 && <div className="text-sm text-neutral-400 text-center">No data</div>}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2 mb-5">
            <Clock className="w-4 h-4 text-neutral-500" />
            Recent Activity
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-100">
                  <th className="text-left py-2 pr-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Page</th>
                  <th className="text-left py-2 pr-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Referrer</th>
                  <th className="text-left py-2 pr-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Device</th>
                  <th className="text-left py-2 pr-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">Browser</th>
                  <th className="text-right py-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivity.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-neutral-400">No recent activity</td>
                  </tr>
                )}
                {recentActivity.map(v => (
                  <tr key={v.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                    <td className="py-2.5 pr-4 text-neutral-800 font-medium">{PAGE_LABELS[v.path] || v.path}</td>
                    <td className="py-2.5 pr-4 text-neutral-500">{formatReferrer(v.referrer)}</td>
                    <td className="py-2.5 pr-4 text-neutral-500 capitalize">{classifyDevice(v.screen_width)}</td>
                    <td className="py-2.5 pr-4 text-neutral-500">{parseBrowser(v.user_agent)}</td>
                    <td className="py-2.5 text-right text-neutral-400 tabular-nums whitespace-nowrap">
                      {new Date(v.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
