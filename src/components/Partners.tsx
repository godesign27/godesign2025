import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Partner logos */}
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/Accenture-Logo-reverse%20(1).svg" alt="Accenture" className="h-8 object-contain hidden dark:block" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Accenture" className="h-8 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/TransUnion-logo-reverse.png" alt="TransUnion" className="h-8 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/transunion.svg" alt="TransUnion" className="h-8 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/sapient-white.svg" alt="Sapient Nitro" className="h-7 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/sapientnitro_logo%201.png" alt="Sapient Nitro" className="h-7 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/FCB-white.svg" alt="FCB" className="h-7 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/FCB_Logo_Black_RGB%201.svg" alt="FCB" className="h-7 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/Agate-white.svg" alt="Agate Software" className="h-8 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/Agate.svg" alt="Agate Software" className="h-8 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/ZS-white.svg" alt="ZS" className="h-8 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/ZS.svg" alt="ZS" className="h-8 object-contain dark:hidden" />
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