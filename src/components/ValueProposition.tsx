import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white dark:bg-brand-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Big Ideas. Small Studio. <span className="text-purple-700 dark:text-purple-400">Better Results</span>.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Discover why partnering with a boutique digital studio gives you the agility, 
            creativity, and focus that big firms can't deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="group bg-gray-50 dark:bg-brand-900 p-8 rounded-lg transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Personalized Attention
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your success directly impacts us positive. We take time to deeply understand your business, customers, challenges, and vision, ensuring a tailored approach from start to finish.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-gray-50 dark:bg-brand-900 p-8 rounded-lg transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="13 2 13 9 20 9"></polyline>
                <path d="M13 14V9L8.5 4.5"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="3" y1="19" x2="9" y2="13"></line>
                <line x1="13" y1="14" x2="9" y2="13"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Agility and Speed
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our nimble team turns ideas into beautiful, working products quickly. Without layers of bureaucracy, we meet your goals more efficiently, and deliver results at a pace larger firms can't match.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-gray-50 dark:bg-brand-900 p-8 rounded-lg transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Direct Collaboration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              You'll work with senior talent every step of the process. No layers of account managers or junior intermediaries. We maintain direct communication and true creative partnership.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-gray-50 dark:bg-brand-900 p-8 rounded-lg transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Focused Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We specialize in what we do best: creating exceptional digital experiences. Our focused approach means you get experts who are passionate about your project's success, not generalists.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-gray-50 dark:bg-brand-900 p-8 rounded-lg transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-6 text-yellow-600 dark:text-yellow-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Cost-Effective Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Small doesn't mean less. In fact, we deliver more value. With lower overhead costs, 90% of your budget goes directly into the big creative minds working on your project—not corporate infrastructure.
            </p>
          </div>

          {/* Card 6 */}
          <div className="group bg-gray-50 dark:bg-brand-900 p-8 rounded-lg transition-all hover:shadow-md">
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6 text-pink-600 dark:text-pink-400">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Creative Flexibility
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Innovation thrives here. We're free to think boldly, explore unexpected approaches, and adapt quickly to your needs with maximum flexibility for process and execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;