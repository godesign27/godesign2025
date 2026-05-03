import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, Bot, Globe, Box, Smartphone, Briefcase } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const SERVICE_PAGES = [
  'services',
  'agentic-experience',
  'marketing-web-design',
  'saas-product-design',
  'mobile-web-design',
  'fractional-saas-designer',
];

const serviceLinks = [
  {
    page: 'agentic-experience',
    title: 'Agentic Experience',
    description: 'AI-native product design and UX leadership.',
    Icon: Bot,
    iconBg: 'bg-amber-100 dark:bg-amber-900/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    page: 'marketing-web-design',
    title: 'Marketing Web Design',
    description: 'Conversion-focused websites that tell your story.',
    Icon: Globe,
    iconBg: 'bg-emerald-100 dark:bg-emerald-900/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    page: 'saas-product-design',
    title: 'SaaS Product Design',
    description: 'Scalable interfaces for software products.',
    Icon: Box,
    iconBg: 'bg-blue-100 dark:bg-blue-900/40',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    page: 'mobile-web-design',
    title: 'Mobile Web Design',
    description: 'Responsive experiences that shine on every device.',
    Icon: Smartphone,
    iconBg: 'bg-rose-100 dark:bg-rose-900/40',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    page: 'fractional-saas-designer',
    title: 'Fractional SaaS Designer',
    description: 'Senior design leadership on a flexible cadence.',
    Icon: Briefcase,
    iconBg: 'bg-teal-100 dark:bg-teal-900/40',
    iconColor: 'text-teal-600 dark:text-teal-400',
  },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const buttonClasses = "px-6 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all";

  const isServiceActive = SERVICE_PAGES.includes(currentPage);

  const getLinkClasses = (page: string, activeOverride?: boolean) => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors relative";
    const isActive = activeOverride ?? currentPage === page;

    return `${baseClasses} ${
      isActive
        ? "text-neutral-950 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neutral-950 dark:after:bg-white font-semibold"
        : "text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
    }`;
  };

  const handleServicesEnter = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimeout.current = window.setTimeout(() => setIsServicesOpen(false), 120);
  };

  const goToService = (page: string) => {
    setCurrentPage(page);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-neutral-950/90' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/go-new25.png"
                alt="GO Design"
                className="h-6 w-auto mr-1 dark:hidden"
              />
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/go-logo-new25-white.png"
                alt="GO Design"
                className="h-6 w-auto mr-1 hidden dark:block"
              />
              <span className="text-xl dark:text-white">Design</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                    onClick={() => setIsServicesOpen((open) => !open)}
                    className={`${getLinkClasses('services', isServiceActive)} inline-flex items-center gap-1`}
                  >
                    Services
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`absolute left-0 top-full pt-3 w-[420px] transition-all duration-200 ${
                      isServicesOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 p-3">
                      <button
                        onClick={() => goToService('services')}
                        className="w-full flex items-center justify-between px-3 py-2 mb-2 rounded-lg text-sm font-semibold text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <span>All Services</span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">Overview</span>
                      </button>
                      <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-2" />
                      <ul className="space-y-1">
                        {serviceLinks.map(({ page, title, description, Icon, iconBg, iconColor }) => {
                          const active = currentPage === page;
                          return (
                            <li key={page}>
                              <button
                                onClick={() => goToService(page)}
                                className={`w-full flex items-start gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                                  active
                                    ? 'bg-neutral-100 dark:bg-neutral-800'
                                    : 'hover:bg-neutral-50 dark:hover:bg-neutral-800'
                                }`}
                              >
                                <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${iconBg}`}>
                                  <Icon className={`w-4 h-4 ${iconColor}`} />
                                </span>
                                <span className="flex flex-col">
                                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                                    {title}
                                  </span>
                                  <span className="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                                    {description}
                                  </span>
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  href="#"
                  className={getLinkClasses('solutions')}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('solutions');
                  }}
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className={getLinkClasses('about')}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('about');
                  }}
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className={`ml-4 ${buttonClasses}`} onClick={() => setCurrentPage('contact')}>Let's Talk</button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none mr-2">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg dark:bg-neutral-950">
            <button
              type="button"
              aria-expanded={isMobileServicesOpen}
              onClick={() => setIsMobileServicesOpen((open) => !open)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isMobileServicesOpen && (
              <div className="pl-3 space-y-1">
                <button
                  onClick={() => goToService('services')}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
                >
                  All Services
                </button>
                {serviceLinks.map(({ page, title }) => (
                  <button
                    key={page}
                    onClick={() => goToService(page)}
                    className="block w-full text-left px-3 py-2 rounded-md text-sm text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
                  >
                    {title}
                  </button>
                ))}
              </div>
            )}
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('solutions');
                setIsMenuOpen(false);
              }}
            >
              Solutions
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('about');
                setIsMenuOpen(false);
              }}
            >
              About
            </a>
            <button
              className={`mt-4 w-full ${buttonClasses}`}
              onClick={() => {
                setCurrentPage('contact');
                setIsMenuOpen(false);
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
