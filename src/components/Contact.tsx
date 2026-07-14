import React, { useState } from 'react';
import { Mail, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstname: formData.get('firstname') as string,
      lastname: formData.get('lastname') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      project_type: formData.get('project_type') as string,
      budget_range: formData.get('budget_range') as string,
      project_details: formData.get('project_details') as string,
    };

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
              Let's Create Something Together.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
              Ready to transform your digital presence? Tell us about your project, and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-xl font-semibold text-ink dark:text-white">Get in Touch</h2>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue dark:text-lavender" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink dark:text-white">Email Us</h3>
                  <p className="mt-1 text-sm text-muted dark:text-neutral-400">godesigngo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-blue dark:text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink dark:text-white">Phone</h3>
                  <p className="mt-1 text-sm text-muted dark:text-neutral-400">(773) 724-0473</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue dark:text-lavender" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink dark:text-white">Business Hours</h3>
                  <p className="mt-1 text-sm text-muted dark:text-neutral-400">Monday - Friday, 9am - 5pm CST</p>
                </div>
              </div>

              <div className="pt-6 border-t border-line dark:border-white/10">
                <a
                  href="https://cal.com/timothy-mcguire-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg w-full flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Meeting
                </a>
                <p className="mt-3 text-xs text-muted dark:text-neutral-500 text-center">
                  Prefer to talk? Book a free consultation call.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 border border-line dark:border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstname" className="block text-sm font-medium text-ink dark:text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                      className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastname" className="block text-sm font-medium text-ink dark:text-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                      className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="project_type" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors appearance-none cursor-pointer"
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
                  <label htmlFor="budget_range" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget_range"
                    name="budget_range"
                    className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors appearance-none cursor-pointer"
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
                  <label htmlFor="project_details" className="block text-sm font-medium text-ink dark:text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="project_details"
                    name="project_details"
                    rows={6}
                    required
                    placeholder="Tell us about your project, timeline, and any specific requirements."
                    className="w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-white/[0.03] text-ink dark:text-white placeholder:text-muted dark:placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue dark:focus:ring-lavender transition-colors resize-none"
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-tan dark:bg-white/[0.03] border border-line dark:border-white/10">
                    <p className="text-sm text-ink dark:text-white">
                      Thank you for your message. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 border border-red-300 dark:border-red-500/30">
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary btn-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
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
