import React from 'react';
import { ArrowRight } from 'lucide-react';
import Eyebrow from './Eyebrow';
import AIArchitectureIllustration from './AIArchitectureIllustration';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <section
      className="relative pt-16 min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F3EFE7 0%, #ffffff 55%, #e8f0fe 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue hidden dark:block" />
      <div className="absolute inset-0 bg-neutral-950 dark:block hidden" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow className="mb-6">Experience Design</Eyebrow>
            <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-semibold text-ink dark:text-tan-500 tracking-tight leading-[1.05] mb-8">
              Human-Centered Design, Built for Results.
            </h1>
            <p className="text-lg md:text-xl text-muted dark:text-neutral-400 max-w-xl leading-relaxed mb-10">
              We apply responsible design practices that enhance usability, accessibility, and visual appeal, bringing human-centered thinking, creative problem-solving, and technology together to solve real business challenges.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => navigate('contact')} className="btn-primary btn-lg inline-flex items-center gap-2">
                Let's Talk <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate('solutions')} className="btn-secondary btn-lg">
                View Our Work
              </button>
            </div>
          </div>
          <div className="hidden lg:block w-full">
            <AIArchitectureIllustration />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-line dark:bg-white/10" />
    </section>
  );
};

export default Hero;
