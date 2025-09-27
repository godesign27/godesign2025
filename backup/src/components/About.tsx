import React from 'react';
import { Brain, Users, Lightbulb, Sparkles, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 dark:from-pink-900 dark:via-purple-900 dark:to-indigo-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl pt-32 pb-20">
            <h1 className="text-5xl md:text-7xl text-gray-900 dark:text-white mb-6">
              Transforming Ideas into<br />Digital Experiences
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Welcome to GO Design, where creativity and strategy come together to transform ideas into seamless digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm Timothy McGuire, an Experience Designer with over 12 years of experience helping businesses solve complex challenges through thoughtful, user-centered design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At GO Design, I believe great design is about more than just aesthetics—it's about creating solutions that resonate with users, simplify workflows, and deliver measurable results. From redesigning SaaS platforms to crafting mobile-first experiences, I've worked with businesses of all sizes to turn their vision into reality.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                What sets us apart is our process. I dive deep into understanding your unique goals, leveraging research, data-driven insights, and innovative design principles to create impactful solutions. Collaboration is at the heart of everything I do, ensuring every step aligns with your vision and needs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Whether you're looking to reimagine a digital product, enhance your brand's online presence, or tackle a new challenge, I'm here to help you create designs that inspire and succeed.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://img1.wsimg.com/isteam/ip/8750adee-7fef-47ca-9c3a-3982c0b9d811/Timothy-McGuire.png/:/rs=w:740,cg:true,m" 
                alt="Timothy McGuire" 
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Core Values & Philosophy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            At GO Design, every project starts with a simple question: How can we make this better for the user? This guiding principle drives our approach to design, ensuring every solution we create is impactful, intuitive, and meaningful.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Human-Centered Thinking</h3>
              <p className="text-gray-600 dark:text-gray-300">We prioritize understanding the people behind the screens. By listening, researching, and testing, we design experiences that resonate with real users.</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation Through Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">Great ideas are born from teamwork. We work closely with clients, stakeholders, and developers to craft solutions that align with your vision.</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Design for Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">Good design isn't just about aesthetics—it's about creating results. We measure success by the value we bring to your users and business.</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Simplicity with Purpose</h3>
              <p className="text-gray-600 dark:text-gray-300">We believe in the power of clean, functional design. By focusing on what matters, we create experiences that are easy to navigate and enjoyable to use.</p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accessibility & Inclusion</h3>
              <p className="text-gray-600 dark:text-gray-300">Design should be for everyone. That's why we follow best practices to ensure our solutions are accessible, inclusive, and welcoming to all users.</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl italic text-gray-600 dark:text-gray-300">
              "At GO Design, we're not just creating digital products; we're crafting experiences that connect, inspire, and endure."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;