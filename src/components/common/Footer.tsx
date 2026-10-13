import React from 'react';
import { AppRoute } from '../../types';
import { COMPANY_INFO } from '../../data/companyData';
import { Logo } from './Logo';
import { Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, route: AppRoute) => {
    e.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141210] text-[#FAF8F5] pt-16 pb-12 border-t border-[#26211C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#2B2520]">
          {/* Col 1 & 2: Brand Lockup & Direct Contact */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Logo size="sm" variant="orange" showText={true} />
            </div>

            <p className="text-sm text-[#A89F95] max-w-sm leading-relaxed">
              IT solutions company delivering dependable DevOps infrastructure and production-grade web systems for startups and SMEs.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#C8BFB5] pt-1">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 hover:text-[#FF4D00] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#FF4D00] transition-colors"
              >
                <svg className="w-4 h-4 fill-[#FF4D00] shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
                <span>LinkedIn / Solvera Technology Labs</span>
              </a>

              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF4D00] shrink-0" />
                <span>Response time: {COMPANY_INFO.turnaroundEstimate}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00]">
              Services
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-[#A89F95]">
              <li>
                <a
                  href="/services#devops"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-white transition-colors"
                >
                  DevOps & Cloud
                </a>
              </li>
              <li>
                <a
                  href="/services#web-development"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services#cicd"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-white transition-colors"
                >
                  CI/CD Pipeline Setup
                </a>
              </li>
              <li>
                <a
                  href="/services#kubernetes"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-white transition-colors"
                >
                  Kubernetes Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigation (Portfolio removed) */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00]">
              Company
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-[#A89F95]">
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services#faq"
                  onClick={(e) => handleNav(e, '/services')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Trust Signals & Program */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00]">
              Standards
            </span>
            <p className="text-xs text-[#A89F95] leading-relaxed">
              Engineered with strict TypeScript, WCAG AA compliance, and modular Infrastructure as Code. Built in Jakarta, Indonesia.
            </p>
            <div className="mt-2 p-3 rounded-lg bg-[#1F1B16] border border-[#2E2721] text-xs text-[#D8CFBF]">
              <span className="block font-medium text-white mb-0.5">Anthropic Claude Program</span>
              Early-stage technology company application candidate.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#80766C]">
          <p>© {COMPANY_INFO.foundedYear} Solvera Technology Labs. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={COMPANY_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF4D00] transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <span>Jakarta, ID</span>
            <span>·</span>
            <span>WCAG AA Tested</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
