import React, { useState } from 'react';
import { Mail, Phone, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mrbykyqe', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl pt-32 pb-20">
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Let's Create<br />Something Together.
            </h1>
            <p className="text-xl text-white/90">
              Ready to transform your digital presence? We're here to help bring your vision to life. Tell us about your project, and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Us</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">godesigngo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">(773) 724-0473</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Business Hours</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Monday - Friday, 9am - 5pm CST</p>
                </div>
              </div>

              <a
                href="https://cal.com/timothy-mcguire-27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule a Meeting</span>
              </a>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="project_type" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a project type</option>
                    <option value="Marketing Website Design">Marketing Website Design</option>
                    <option value="Mobile/Web App Design">Mobile/Web App Design</option>
                    <option value="SaaS Product Design">SaaS Product Design</option>
                    <option value="E-commerce Design">E-commerce Design</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget_range" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget_range"
                    name="budget_range"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a budget range</option>
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="project_details" className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="project_details"
                    name="project_details"
                    rows={6}
                    required
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;