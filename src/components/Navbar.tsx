import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, Bot, Box, Building2, Users, Target, Mic2, BookOpen, Workflow, PenLine, Palette, Heart, BarChart3, RefreshCcw, Briefcase } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const solutionPages = [
  { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.', icon: Building2 },
  { id: 'solutions-ai-native-products', label: 'AI-Native Products', description: 'Designing products where AI is foundational.', icon: Bot },
  { id: 'solutions-design-systems', label: 'Design Systems', description: 'Scalable component and pattern libraries.', icon: Palette },
  { id: 'solutions-healthcare-ux', label: 'Healthcare UX', description: 'Clinical and patient-facing experiences.', icon: Heart },
  { id: 'solutions-fintech-ux', label: 'Fintech UX', description: 'Trustworthy, compliant financial product design.', icon: BarChart3 },
  { id: 'solutions-product-modernization', label: 'Product Modernization', description: 'Redesigning legacy products and interfaces.', icon: RefreshCcw },
  { id: 'case-studies', label: 'Case Studies', description: 'Work samples and results across industries.', icon: Briefcase },
];

const perspectivePages = [
  { id: 'perspectives-our-philosophy', label: 'Our Philosophy', description: 'Principles guiding every design decision.', icon: BookOpen },
  { id: 'perspectives-how-we-work', label: 'How We Work', description: 'Our process, tools, and collaboration style.', icon: Workflow },
  { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How we think about designing for AI products.', icon: Bot },
  { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design and systems.', icon: PenLine },
  { id: 'speaking-workshops', label: 'Speaking', description: 'Conference talks and panel appearances.', icon: Mic2 },
];

const workWithMePages = [
  { id: 'service-offerings', label: 'Service Offerings', description: 'Compare scoped engagements for AI products and design systems.', icon: Box },
  { id: 'enterprise-ux-consulting', label: 'Enterprise Consulting', description: 'Senior AI experience strategy for enterprise products.', icon: Building2 },
  { id: 'fractional-saas-designer', label: 'Fractional Leadership', description: 'Senior design leadership on a flexible cadence.', icon: Users },
  { id: 'strategy-sessions', label: 'Strategy Sessions', description: 'Focused advisory engagements with a senior design mind.', icon: Target },
  { id: 'speaking-workshops', label: 'Speaking & Workshops', description: 'Talks and workshops for design teams and conferences.', icon: Mic2 },
];

type DropdownKey = 'solutions' | 'perspectives' | 'work-with-me' | null;

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [colorTheme, setColorTheme] = useState<'editorial' | 'graphite'>('editorial');
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const stored = localStorage.getItem('color-theme');
    const initial = stored === 'graphite' ? 'graphite' : 'editorial';
    setColorTheme(initial);
    if (initial === 'graphite') {
      document.documentElement.setAttribute('data-color-theme', 'graphite');
    }
    setMounted(true);
  }, []);

  const toggleColorTheme = () => {
    const next = colorTheme === 'editorial' ? 'graphite' : 'editorial';
    setColorTheme(next);
    localStorage.setItem('color-theme', next);
    if (next === 'graphite') {
      document.documentElement.setAttribute('data-color-theme', 'graphite');
    } else {
      document.documentElement.removeAttribute('data-color-theme');
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openDropdown = (key: DropdownKey) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const isSolutionsPage = currentPage === 'solutions' || solutionPages.some(s => s.id === currentPage);
  const isPerspectivePage = currentPage === 'perspectives' || perspectivePages.some(s => s.id === currentPage);
  const isWorkWithMePage = currentPage === 'work-with-me' || currentPage.startsWith('offering-') || workWithMePages.some(s => s.id === currentPage);

  const getNavLinkClasses = (active: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors relative inline-flex items-center gap-1 ${
      active
        ? 'text-black dark:text-white font-semibold'
        : 'text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white'
    }`;

  const renderItem = (item: { id: string; label: string; description: string; icon: React.ElementType }) => {
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        onClick={() => navigate(item.id)}
        className={`flex items-center gap-3 w-full text-left px-4 py-3 transition-colors ${
          currentPage === item.id
            ? 'bg-neutral-100 dark:bg-white/[0.06]'
            : 'hover:bg-neutral-50 dark:hover:bg-white/[0.04]'
        }`}
      >
        <div className="w-8 h-8 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-muted dark:text-neutral-400" />
        </div>
        <div>
          <div className="text-sm font-medium text-black dark:text-white">
            {item.label}
          </div>
          <div className="text-xs text-muted dark:text-neutral-500 leading-snug">
            {item.description}
          </div>
        </div>
      </button>
    );
  };

  const renderDropdown = (
    key: DropdownKey,
    overviewPage: string,
    overviewLabel: string,
    items: { id: string; label: string; description: string; icon: React.ElementType }[],
  ) => (
    <div
      className={`absolute top-full left-0 mt-2 w-80 bg-white dark:bg-neutral-950 border border-line dark:border-white/[0.1] rounded-none transition-all duration-200 origin-top ${
        activeDropdown === key
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted dark:text-neutral-500">{overviewLabel}</span>
        <button
          onClick={() => navigate(overviewPage)}
          className="text-xs font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Overview
        </button>
      </div>
      <div className="py-1 pb-3">
        {items.map(renderItem)}
      </div>
    </div>
  );

  const renderMobileSection = (
    key: DropdownKey,
    label: string,
    overviewPage: string,
    items: { id: string; label: string; description: string; icon: React.ElementType }[],
  ) => (
    <div key={key}>
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]"
        onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === key ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === key ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center justify-between pl-6 pr-4 py-2">
          <span className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-wider">{label}</span>
          <button
            className="text-xs font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            onClick={() => navigate(overviewPage)}
          >
            Overview
          </button>
        </div>
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );

  if (!mounted) return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-[color-mix(in_srgb,var(--color-neutral-950)_95%,transparent)] backdrop-blur-sm border-b border-line dark:border-white/[0.1]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                {/* Ring */}
                <circle cx="16" cy="16" r="8" fill="none" strokeWidth="3.5" className="stroke-ink dark:stroke-white" />
                {/* Blue square */}
                <rect x="12.2" y="12.2" width="7.6" height="7.6" fill="#2563EB" />
              </svg>
              <span className="text-xl font-semibold text-black dark:text-white">GO Design</span>
            </div>

            <div className="hidden lg:block">
              <div className="ml-8 flex items-baseline space-x-0">
                <button className={getNavLinkClasses(currentPage === 'home')} onClick={() => navigate('home')}>Home</button>

                <button className={getNavLinkClasses(currentPage === 'services')} onClick={() => navigate('services')}>Services</button>

                <button className={getNavLinkClasses(currentPage === 'ai-experience-architecture')} onClick={() => navigate('ai-experience-architecture')}>
                  AI Experience Architecture™
                </button>

                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('solutions')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isSolutionsPage)} onClick={() => navigate('solutions')}>
                    Solutions
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('solutions', 'solutions', 'Solutions', solutionPages)}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('perspectives')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isPerspectivePage)} onClick={() => navigate('perspectives')}>
                    Perspectives
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'perspectives' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('perspectives', 'perspectives', 'Perspectives', perspectivePages)}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('work-with-me')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isWorkWithMePage)} onClick={() => navigate('work-with-me')}>
                    Work With Us
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'work-with-me' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('work-with-me', 'work-with-me', 'Work With Us', workWithMePages)}
                </div>

                <button className={getNavLinkClasses(currentPage === 'about')} onClick={() => navigate('about')}>About</button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleColorTheme}
              title={colorTheme === 'editorial' ? 'Switch to Graphite theme' : 'Switch to Editorial theme'}
              className="p-2 rounded-none text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] transition-colors"
            >
              <Palette size={18} />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-none text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="btn-primary btn-sm" onClick={() => navigate('contact')}>
              Let's Talk
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleColorTheme}
              title={colorTheme === 'editorial' ? 'Switch to Graphite theme' : 'Switch to Editorial theme'}
              className="p-2 rounded-none text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              <Palette size={18} />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-none text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-none text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-neutral-950 border-t border-line dark:border-white/[0.1] max-h-screen overflow-y-auto">
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('home')}>Home</button>
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('services')}>Services</button>
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('ai-experience-architecture')}>AI Experience Architecture™</button>
            {renderMobileSection('solutions', 'Solutions', 'solutions', solutionPages)}
            {renderMobileSection('perspectives', 'Perspectives', 'perspectives', perspectivePages)}
            {renderMobileSection('work-with-me', 'Work With Us', 'work-with-me', workWithMePages)}
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('about')}>About</button>
            <div className="px-4 pt-4">
              <button className="btn-primary w-full" onClick={() => navigate('contact')}>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
