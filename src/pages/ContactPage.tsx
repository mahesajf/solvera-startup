import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { AppRoute, SeoConfig, ContactFormData } from '../types';
import { Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactSeoConfig: SeoConfig = {
    title: 'Contact Solvera | Book an Engineering Review',
    description:
      'Get in touch with Solvera Technology Labs. Inquire about DevOps architecture or web application engineering. We respond within 24 business hours.',
    canonicalPath: '/contact',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://solvera-tech.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Contact',
              item: 'https://solvera-tech.com/contact',
            },
          ],
        },
        {
          '@type': 'ContactPage',
          name: 'Contact Solvera Technology Labs',
          description:
            'Direct inquiry form for DevOps architecture and web application development consulting.',
          mainEntity: {
            '@type': 'Organization',
            name: 'Solvera Technology Labs',
            email: 'hello@solvera-tech.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Jakarta',
              addressCountry: 'ID',
            },
          },
        },
      ],
    },
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Work email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company or project name is required.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a core service area.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief overview of your technical requirements.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message should be at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementById(`field-${firstErrorKey}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    /* 
      =============================================================================
      PRODUCTION BACKEND INTEGRATION NOTE:
      Plug in your email service or form webhook here:
      - Formspree: await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(formData) })
      - Resend: POST to /api/send-contact-email (server.ts with RESEND_API_KEY)
      - Slack/Discord Webhook: send formatted payload to internal team channel
      =============================================================================
    */
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch {
      setErrors({ message: 'Submission failed. Please email us directly at ' + COMPANY_INFO.email });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO config={contactSeoConfig} />
      <main id="main-content" className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#8A8177] mb-8" aria-label="Breadcrumb">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="hover:text-[#141210] transition-colors"
            >
              Home
            </a>
            <span aria-hidden="true">/</span>
            <span className="text-[#141210] font-semibold" aria-current="page">
              Contact
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info & Guarantees */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
                  Direct Inquiries
                </span>
                <h1 className="text-fluid-hero font-bold tracking-tight text-[#141210] mb-4 text-balance">
                  Let's Discuss Your Architecture
                </h1>
                <p className="text-base text-[#5C554E] leading-relaxed">
                  Whether you need an urgent CI/CD pipeline overhaul, a cloud cost and security audit, or a high-performance web product, our engineering leads are ready to review your goals.
                </p>
              </div>

              {/* Direct Info Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#8A8177] tracking-wider block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-bold text-[#141210] hover:text-[#FF4D00] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-[#5C554E] block mt-0.5">
                      Direct inbox checked by lead engineers daily
                    </span>
                  </div>
                </div>

                {/* LinkedIn Link Card */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <svg className="w-5 h-5 fill-[#FF4D00]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#8A8177] tracking-wider block">
                      LinkedIn Page
                    </span>
                    <a
                      href={COMPANY_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#141210] hover:text-[#FF4D00] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>Solvera Technology Labs</span>
                    </a>
                    <span className="text-xs text-[#5C554E] block mt-0.5">
                      Connect with our engineering leadership
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#8A8177] tracking-wider block">
                      Expected Response Time
                    </span>
                    <span className="text-base font-bold text-[#141210]">
                      {COMPANY_INFO.turnaroundEstimate}
                    </span>
                    <span className="text-xs text-[#5C554E] block mt-0.5">
                      Technical response with concrete questions or meeting link
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#FF4D00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-[#8A8177] tracking-wider block">
                      Location
                    </span>
                    <span className="text-base font-bold text-[#141210]">
                      {COMPANY_INFO.location}
                    </span>
                    <span className="text-xs text-[#5C554E] block mt-0.5">
                      Collaborating with clients across all timezones
                    </span>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#141210] text-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#2B241E]">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#FF4D00] mb-3">
                  What Happens Next
                </h3>
                <ol className="space-y-3 text-xs text-[#B3A89C]">
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-white shrink-0">1.</span>
                    <span>We read your message and conduct a high-level review of your current stack or public domain.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-white shrink-0">2.</span>
                    <span>We send a calendar invite for a 15-minute engineering scoping conversation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-white shrink-0">3.</span>
                    <span>You receive a clear, fixed-scope proposal with concrete timeline and deliverables.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right Column: Accessible Form with Client-Side Validation */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12 rounded-3xl border border-[#E6DFD5] shadow-sm">
              {isSubmitted ? (
                <div
                  className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300"
                  role="status"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF4D00]/15 text-[#FF4D00] flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-[#141210]">
                    Inquiry Received
                  </h2>
                  <p className="text-sm text-[#5C554E] max-w-md leading-relaxed">
                    Thank you for reaching out to Solvera Technology Labs. An engineering lead will review your submission and respond to <span className="font-semibold text-[#141210]">{formData.email}</span> within 24 business hours.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="dark"
                      size="md"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          service: '',
                          budget: '',
                          message: '',
                        });
                      }}
                    >
                      Submit another inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-[#141210] mb-1">
                      Project Inquiry Form
                    </h2>
                    <p className="text-xs text-[#8A8177]">
                      Fields marked with <span className="text-[#FF4D00]">*</span> are required.
                    </p>
                  </div>

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="field-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141210] mb-2"
                    >
                      Your Name <span className="text-[#FF4D00]">*</span>
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00] ${
                        errors.name
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E6DFD5] bg-[#FAF8F5] focus:bg-white focus:border-[#FF4D00]'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'err-name' : undefined}
                    />
                    {errors.name && (
                      <p id="err-name" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="field-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141210] mb-2"
                    >
                      Work Email <span className="text-[#FF4D00]">*</span>
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00] ${
                        errors.email
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E6DFD5] bg-[#FAF8F5] focus:bg-white focus:border-[#FF4D00]'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                    />
                    {errors.email && (
                      <p id="err-email" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="field-company"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141210] mb-2"
                    >
                      Company / Organization <span className="text-[#FF4D00]">*</span>
                    </label>
                    <input
                      id="field-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Systems"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00] ${
                        errors.company
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E6DFD5] bg-[#FAF8F5] focus:bg-white focus:border-[#FF4D00]'
                      }`}
                      aria-invalid={!!errors.company}
                      aria-describedby={errors.company ? 'err-company' : undefined}
                    />
                    {errors.company && (
                      <p id="err-company" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="field-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141210] mb-2"
                    >
                      Service of Interest <span className="text-[#FF4D00]">*</span>
                    </label>
                    <select
                      id="field-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value as ContactFormData['service'] })
                      }
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00] ${
                        errors.service
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E6DFD5] bg-[#FAF8F5] focus:bg-white focus:border-[#FF4D00]'
                      }`}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? 'err-service' : undefined}
                    >
                      <option value="">Select a core service</option>
                      <option value="DevOps">DevOps & Cloud Infrastructure</option>
                      <option value="Web Development">Web Application Development</option>
                      <option value="Both">Both (Infrastructure + Web Engineering)</option>
                    </select>
                    {errors.service && (
                      <p id="err-service" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Budget Range (Optional) */}
                  <div>
                    <label
                      htmlFor="field-budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141210] mb-2"
                    >
                      Estimated Budget Range <span className="text-[#8A8177] font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="field-budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E6DFD5] bg-[#FAF8F5] text-sm focus:bg-white focus:border-[#FF4D00] focus-visible:outline-2 focus-visible:outline-[#FF4D00]"
                    >
                      <option value="">Select estimated budget</option>
                      <option value="under-5k">Under $5,000 (Small sprint / review)</option>
                      <option value="5k-15k">$5,000 to $15,000 (Standard project sprint)</option>
                      <option value="15k-30k">$15,000 to $30,000 (Multi-stage architecture)</option>
                      <option value="monthly-retainer">Monthly Engineering Retainer</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="field-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#141210] mb-2"
                    >
                      Project Details & Technical Goals <span className="text-[#FF4D00]">*</span>
                    </label>
                    <textarea
                      id="field-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current infrastructure, pain points, or web application timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00] ${
                        errors.message
                          ? 'border-red-500 bg-red-50/20'
                          : 'border-[#E6DFD5] bg-[#FAF8F5] focus:bg-white focus:border-[#FF4D00]'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'err-message' : undefined}
                    />
                    {errors.message && (
                      <p id="err-message" className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting inquiry...' : 'Send technical inquiry'}
                    </Button>
                    <p className="text-[11px] text-[#8A8177] text-center mt-3">
                      We respect your privacy. No marketing lists or third-party sharing.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
