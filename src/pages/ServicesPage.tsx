import React from 'react';
import { SERVICES_DATA, FAQS_DATA } from '../data/companyData';
import { Button } from '../components/common/Button';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { SEO } from '../components/common/SEO';
import { AppRoute, SeoConfig } from '../types';
import { Server, Globe, Check, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [devopsService, webDevService] = SERVICES_DATA;

  const servicesSeoConfig: SeoConfig = {
    title: 'DevOps & Web Development Services | Solvera',
    description:
      'Cloud infrastructure, Kubernetes consulting, CI/CD automation, and custom web application development tailored for startups and growing engineering teams.',
    canonicalPath: '/services',
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
              name: 'Services',
              item: 'https://solvera-tech.com/services',
            },
          ],
        },
        {
          '@type': 'Service',
          serviceType: 'DevOps and Cloud Infrastructure Consulting',
          provider: {
            '@type': 'Organization',
            name: 'Solvera Technology Labs',
          },
          areaServed: 'Worldwide',
          description:
            'CI/CD pipeline automation, Terraform infrastructure as code, containerization, and Kubernetes cluster management.',
        },
        {
          '@type': 'Service',
          serviceType: 'Custom Web Application Development',
          provider: {
            '@type': 'Organization',
            name: 'Solvera Technology Labs',
          },
          areaServed: 'Worldwide',
          description:
            'Production React and Next.js applications, performant marketing websites, and headless e-commerce builds.',
        },
        {
          '@type': 'FAQPage',
          mainEntity: FAQS_DATA.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    },
  };

  return (
    <>
      <SEO config={servicesSeoConfig} />
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
              Services
            </span>
          </nav>

          {/* Page Intro Header */}
          <div className="max-w-3xl mb-16 sm:mb-24">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
              Our Capabilities
            </span>
            <h1 className="text-fluid-hero font-bold tracking-tight text-[#141210] mb-6 text-balance">
              Two Specialized Practices. One Unified Standard.
            </h1>
            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
              We do not try to do everything. We focus exclusively on what we do best: stabilizing infrastructure through DevOps and engineering resilient web software for high-growth businesses.
            </p>
          </div>

          {/* SERVICE 1: DEVOPS */}
          <section id="devops" className="scroll-mt-24 mb-24 lg:mb-32">
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#E6DFD5] shadow-xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#141210] text-[#FF4D00] flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF4D00]">
                  Practice 01 · DevOps & Cloud
                </span>
              </div>

              <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-4 text-balance">
                {devopsService.headline}
              </h2>
              <p className="text-base text-[#5C554E] leading-relaxed max-w-3xl mb-12">
                {devopsService.overview}
              </p>

              {/* Who it is for & Typical Outcomes Split */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#141210] mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF4D00]" />
                    Who This Is For
                  </h3>
                  <ul className="space-y-3 text-sm text-[#5C554E]">
                    {devopsService.whoItIsFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#141210] mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FF4D00]" />
                    Measurable Outcomes
                  </h3>
                  <ul className="space-y-3 text-sm text-[#5C554E]">
                    {devopsService.typicalOutcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141210] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables Grid */}
              <div className="mb-12">
                <h3 className="text-lg font-bold tracking-tight text-[#141210] mb-6">
                  What We Deliver in DevOps
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {devopsService.deliverables.map((del) => (
                    <div
                      key={del.title}
                      className="p-6 rounded-xl border border-[#E6DFD5] bg-[#FFFFFF] hover:border-[#FF4D00]/40 transition-colors"
                    >
                      <h4 className="text-base font-bold text-[#141210] mb-2">
                        {del.title}
                      </h4>
                      <p className="text-xs text-[#5C554E] leading-relaxed">
                        {del.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold text-[#141210] block">
                    Have an upcoming cloud migration or slow build pipeline?
                  </span>
                  <span className="text-xs text-[#8A8177]">
                    We review your configuration and present an actionable improvement roadmap.
                  </span>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('/contact')}
                >
                  {devopsService.ctaLabel}
                </Button>
              </div>
            </div>
          </section>

          {/* SERVICE 2: WEB DEVELOPMENT */}
          <section id="web-development" className="scroll-mt-24 mb-24 lg:mb-32">
            <div className="bg-[#141210] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#2E2721] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#2A231C] text-[#FF4D00] flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF4D00]">
                  Practice 02 · Web Development
                </span>
              </div>

              <h2 className="text-fluid-h2 font-bold tracking-tight text-white mb-4 text-balance">
                {webDevService.headline}
              </h2>
              <p className="text-base text-[#B3A89C] leading-relaxed max-w-3xl mb-12">
                {webDevService.overview}
              </p>

              {/* Who it is for & Outcomes Split */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 p-6 sm:p-8 rounded-2xl bg-[#1C1814] border border-[#2E2721]">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FF4D00]" />
                    Who This Is For
                  </h3>
                  <ul className="space-y-3 text-sm text-[#D8CFBF]">
                    {webDevService.whoItIsFor.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#FF4D00]" />
                    Measurable Outcomes
                  </h3>
                  <ul className="space-y-3 text-sm text-[#D8CFBF]">
                    {webDevService.typicalOutcomes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5E5CC] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables Grid */}
              <div className="mb-12">
                <h3 className="text-lg font-bold tracking-tight text-white mb-6">
                  What We Deliver in Web Engineering
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {webDevService.deliverables.map((del) => (
                    <div
                      key={del.title}
                      className="p-6 rounded-xl border border-[#2E2721] bg-[#1A1612] hover:border-[#FF4D00]/50 transition-colors"
                    >
                      <h4 className="text-base font-bold text-white mb-2">
                        {del.title}
                      </h4>
                      <p className="text-xs text-[#A89F95] leading-relaxed">
                        {del.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#2E2721] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-sm font-semibold text-white block">
                    Planning a new product interface or web application?
                  </span>
                  <span className="text-xs text-[#A89F95]">
                    We translate your product roadmap into production code with clean architecture.
                  </span>
                </div>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('/contact')}
                >
                  {webDevService.ctaLabel}
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <div id="faq" className="scroll-mt-24">
            <FaqAccordion items={FAQS_DATA} />
          </div>
        </div>
      </main>
    </>
  );
};
