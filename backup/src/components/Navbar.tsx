import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const buttonClasses = "px-6 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all";

  const getLinkClasses = (page: string) => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors relative";
    const isActive = currentPage === page;
    
    return `${baseClasses} ${
      isActive
        ? "text-neutral-950 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neutral-950 dark:after:bg-white font-semibold"
        : "text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
    }`;
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
              <span className="text-xl font-bold mr-1 dark:text-white">GO</span>
              <span className="text-xl dark:text-white">Design</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a 
                  href="#services" 
                  className={getLinkClasses('services')}
                  onClick={() => setCurrentPage('services')}
                >
                  Services
                </a>
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
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                className={`ml-4 ${buttonClasses}`}
                onClick={() => setCurrentPage('contact')}
              >
                Let's Talk
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none mr-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg dark:bg-neutral-950">
            <a 
              href="#services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              onClick={() => {
                setCurrentPage('services');
                setIsMenuOpen(false);
              }}
            >
              Services
            </a>
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