import React from 'react';
import { MonitorSmartphone, PaintBucket, Brain, BarChart3 } from 'lucide-react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { useTheme } from 'next-themes';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const LightHero = () => (
  <BackgroundGradientAnimation
    gradientBackgroundStart="rgb(190, 205, 255)"
    gradientBackgroundEnd="rgb(255, 195, 215)"
    firstColor="80, 125, 255"
    secondColor="200, 80, 255"
    thirdColor="75, 125, 255"
    fourthColor="110, 135, 255"
    fifthColor="120, 155, 255"
    blendingValue="soft-light"
    size="90%"
    interactive={false}
    containerClassName="absolute inset-0"
  />
);

const DarkHero = () => (
  <BackgroundGradientAnimation
    gradientBackgroundStart="rgb(30, 0, 60)"
    gradientBackgroundEnd="rgb(60, 0, 80)"
    firstColor="115, 70, 255"
    secondColor="195, 105, 255"
    thirdColor="90, 40, 200"
    fourthColor="115, 70, 255"
    fifthColor="195, 105, 255"
    blendingValue="soft-light"
    size="90%"
    interactive={false}
    containerClassName="absolute inset-0"
  />
);

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="relative pt-16 overflow-hidden">
      {resolvedTheme === 'dark' ? <DarkHero /> : <LightHero />}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-16">
          <div className="max-w-5xl">
            <h1 className="text-5xl md:text-9xl text-gray-900 dark:text-white tracking-tight">
              Human-Centered Design, Built for Results.
            </h1>
            
            <p className="mt-6 text-lg text-gray-700 dark:text-white/90 max-w-4xl">
              We specialize in <span className="font-medium">Experience Design</span> by applying responsible design practices that 
              enhance usability, accessibility, and visual appeal. We bring human-centered thinking, 
              creative problem-solving and technology together to create solutions for all types of challenges.
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-100 dark:bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <MonitorSmartphone className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Mobile + Web Design</h3>
                <p className="text-gray-700 dark:text-white/80">Design and develop professional websites</p>
              </div>
              
              <div className="p-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-100 dark:bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <PaintBucket className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">SaaS Product Design</h3>
                <p className="text-gray-700 dark:text-white/80">Design and iterate SaaS products</p>
              </div>
              
              <div className="p-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-100 dark:bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">AI Solutions</h3>
                <p className="text-gray-700 dark:text-white/80">AI Design and Integration Solutions</p>
              </div>
              
              <div className="p-6 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg">
                <div className="w-12 h-12 bg-gray-100 dark:bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-gray-900 dark:text-white" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Small Business Platforms</h3>
                <p className="text-gray-700 dark:text-white/80">Custom small business platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;