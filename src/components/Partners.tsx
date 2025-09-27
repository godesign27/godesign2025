import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Partner logos */}
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-8 object-contain hidden dark:block" viewBox="0 0 200 40" fill="white">
              <text x="10" y="25" className="text-lg font-semibold">Accenture</text>
            </svg>
            <svg className="h-8 object-contain dark:hidden" viewBox="0 0 200 40" fill="currentColor">
              <text x="10" y="25" className="text-lg font-semibold">Accenture</text>
            </svg>
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-8 object-contain hidden dark:block" viewBox="0 0 200 40" fill="white">
              <text x="10" y="25" className="text-lg font-semibold">TransUnion</text>
            </svg>
            <svg className="h-8 object-contain dark:hidden" viewBox="0 0 200 40" fill="currentColor">
              <text x="10" y="25" className="text-lg font-semibold">TransUnion</text>
            </svg>
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-7 object-contain hidden dark:block" viewBox="0 0 200 40" fill="white">
              <text x="10" y="25" className="text-base font-semibold">Sapient Nitro</text>
            </svg>
            <svg className="h-7 object-contain dark:hidden" viewBox="0 0 200 40" fill="currentColor">
              <text x="10" y="25" className="text-base font-semibold">Sapient Nitro</text>
            </svg>
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-7 object-contain hidden dark:block" viewBox="0 0 120 40" fill="white">
              <text x="10" y="25" className="text-xl font-bold">FCB</text>
            </svg>
            <svg className="h-7 object-contain dark:hidden" viewBox="0 0 120 40" fill="currentColor">
              <text x="10" y="25" className="text-xl font-bold">FCB</text>
            </svg>
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-8 object-contain hidden dark:block" viewBox="0 0 200 40" fill="white">
              <text x="10" y="25" className="text-lg font-semibold">Agate Software</text>
            </svg>
            <svg className="h-8 object-contain dark:hidden" viewBox="0 0 200 40" fill="currentColor">
              <text x="10" y="25" className="text-lg font-semibold">Agate Software</text>
            </svg>
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <svg className="h-8 object-contain hidden dark:block" viewBox="0 0 80 40" fill="white">
              <text x="10" y="25" className="text-xl font-bold">ZS</text>
            </svg>
            <svg className="h-8 object-contain dark:hidden" viewBox="0 0 80 40" fill="currentColor">
              <text x="10" y="25" className="text-xl font-bold">ZS</text>
            </svg>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-32 bg-gray-50 dark:bg-gray-800 rounded-xl p-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
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
      </div>
    </section>
  );
};

export default Partners;