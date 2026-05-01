import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <span className="text-xl font-bold mr-1">GO</span>
              <span className="text-xl">Design</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 max-w-xs">
              We specialize in <span className="font-medium">Experience Design</span> by applying responsible design practices that enhance usability, accessibility, and visual appeal. We bring human-centered thinking, creative problem-solving and technology together to create solutions for all types of digital challenges.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('solutions')}
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('about')}
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  About
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  UX/UI Design
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Mobile App Design
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  SaaS Product Design
                </a>
              </li>
              <li>
                <Link to="/fractional-saas-designer" className="text-base text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                  Fractional SaaS Designer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Contact</h3>
            <div className="mt-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; 2025 GO Design, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
