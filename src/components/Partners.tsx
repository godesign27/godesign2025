import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium text-muted dark:text-neutral-500 uppercase tracking-widest mb-10 text-center">
          Trusted by leading organizations
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center">
          <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/Accenture-Logo-reverse%20(1).svg" alt="Accenture" className="h-8 object-contain hidden dark:block" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" alt="Accenture" className="h-8 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/TransUnion-logo-reverse.png" alt="TransUnion" className="h-8 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/transunion.svg" alt="TransUnion" className="h-8 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/sapient-reverse.png" alt="Sapient Nitro" className="h-7 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/sapientnitro_logo%201.png" alt="Sapient Nitro" className="h-7 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/fcb-reverse.png" alt="FCB" className="h-7 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/FCB_Logo_Black_RGB%201.svg" alt="FCB" className="h-7 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/agate-logo-reverse.png" alt="Agate Software" className="h-8 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/Agate.svg" alt="Agate Software" className="h-8 object-contain dark:hidden" />
          </div>
          <div className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/client-logos-reverse/ZS.svg" alt="ZS" className="h-8 object-contain hidden dark:block" />
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/logo%20assets/ZS.svg" alt="ZS" className="h-8 object-contain dark:hidden" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10">
          <div className="text-center p-6 bg-white dark:bg-neutral-950">
            <p className="text-3xl font-semibold text-ink dark:text-white">50%</p>
            <p className="mt-2 text-xs text-muted dark:text-neutral-500 uppercase tracking-wide">Increased conversion</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-950">
            <p className="text-3xl font-semibold text-ink dark:text-white">20%</p>
            <p className="mt-2 text-xs text-muted dark:text-neutral-500 uppercase tracking-wide">Conversion rate increase</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-950">
            <p className="text-3xl font-semibold text-ink dark:text-white">65%</p>
            <p className="mt-2 text-xs text-muted dark:text-neutral-500 uppercase tracking-wide">Reduction in costs</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-neutral-950">
            <p className="text-3xl font-semibold text-ink dark:text-white">40%</p>
            <p className="mt-2 text-xs text-muted dark:text-neutral-500 uppercase tracking-wide">Increased engagement</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
