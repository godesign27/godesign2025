import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Partner logos */}
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Accenture" className="h-8 object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Transunion_Logo.svg" alt="TransUnion" className="h-8 object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Squarespace_Logo_2014.svg" alt="Squarespace" className="h-7 object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Logo_FCB_New.svg" alt="FCB" className="h-7 object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Agitate_Solutions_logo.svg" alt="Agitate" className="h-8 object-contain" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-8 w-auto" viewBox="0 0 36 36" fill="currentColor">
              <path d="M18 2L2 10v16l16 8 16-8V10L18 2zm0 4.3l10.6 5.3-4.3 2.2-6.3-3.2-6.3 3.2-4.3-2.2L18 6.3zm-12 8.5l4 2v4.4c0 1.6 3.1 3.8 8 3.8s8-2.2 8-3.8v-4.4l4-2v9.8L18 30l-12-6.1v-9.1z" />
            </svg>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">50%</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">INCREASED CONVERSION</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">20%</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">CONVERSION RATE INCREASE</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">65%</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">REDUCTION IN COSTS</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">40%</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">INCREASED ENGAGEMENT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;