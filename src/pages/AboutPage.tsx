import React from 'react';
import { COMPANY_INFO, CORE_VALUES, TECH_STACK_CATEGORIES, TEAM_MEMBERS } from '../data/companyData';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';
import { AppRoute, SeoConfig } from '../types';
import { MapPin, Calendar, Users, Code, Terminal, CheckCircle2 } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: AppRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const aboutSeoConfig: SeoConfig = {
    title: 'About Solvera Technology Labs | Jakarta IT Solutions',
    description:
      'Founded in 2026 in Jakarta, Solvera Technology Labs partners with startups to deliver pragmatic DevOps engineering and resilient web software.',
    canonicalPath: '/about',
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
              name: 'About',
              item: 'https://solvera-tech.com/about',
            },
          ],
        },
        {
          '@type': 'AboutPage',
          name: 'About Solvera Technology Labs',
          description:
            'Company mission, values, engineering philosophy, and technology stack of Solvera Technology Labs.',
          mainEntity: {
            '@type': 'Organization',
            name: 'Solvera Technology Labs',
            foundingDate: '2026',
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

  return (
    <>
      <SEO config={aboutSeoConfig} />
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
              About
            </span>
          </nav>

          {/* Intro Story */}
          <div className="max-w-3xl mb-16 sm:mb-24">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
              Our Story & Philosophy
            </span>
            <h1 className="text-fluid-hero font-bold tracking-tight text-[#141210] mb-6 text-balance">
              Engineered in Jakarta for High-Growth Startups
            </h1>
            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed mb-6">
              Founded in {COMPANY_INFO.foundedYear} in {COMPANY_INFO.location}, Solvera Technology Labs was formed to address a clear problem: too many startups lose velocity to brittle infrastructure, flaky deployments, and messy web codebases.
            </p>
            <p className="text-base text-[#5C554E] leading-relaxed">
              We operate as a specialized technical partner. Instead of selling bloated retainers or throwing unvetted tools at problems, we design calm, maintainable systems that give your product team the confidence to ship continuously.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-[#5C554E]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF4D00]" />
                {COMPANY_INFO.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF4D00]" />
                Founded {COMPANY_INFO.foundedYear}
              </span>
              <span className="inline-flex items-center gap-2">
                <Code className="w-4 h-4 text-[#FF4D00]" />
                DevOps & Web Engineering
              </span>
            </div>
          </div>

          {/* Mission & How the Team Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E6DFD5] shadow-xs">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF4D00] block mb-3">
                Mission
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-[#141210] mb-4">
                Remove Deployment Friction So Builders Can Build
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed">
                Our mission is to give early-stage founders and engineering leads the same level of infrastructure discipline, automated release confidence, and web performance that top tech companies rely on, without requiring a permanent six-person platform engineering department.
              </p>
            </div>

            <div className="bg-[#141210] text-[#FAF8F5] p-8 sm:p-10 rounded-2xl border border-[#2B241E] shadow-xl">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF4D00] block mb-3">
                How We Work
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                Transparent Sprints with Continuous Code Reviews
              </h2>
              <p className="text-sm text-[#B3A89C] leading-relaxed">
                We work directly in your team Slack, submit PRs to your repositories, and document every architecture choice in markdown. You always know what is being deployed, why it was chosen, and how to operate it independently.
              </p>
            </div>
          </div>

          {/* Concrete Values */}
          <div className="mb-24">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
                Core Principles
              </span>
              <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-3 text-balance">
                How We Make Technical Decisions
              </h2>
              <p className="text-sm text-[#5C554E]">
                Practical engineering standards applied to every line of code and infrastructure module.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {CORE_VALUES.map((val) => (
                <div
                  key={val.number}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-[#E6DFD5]"
                >
                  <span className="text-xs font-mono font-bold text-[#FF4D00] block mb-2">
                    {val.number}
                  </span>
                  <h3 className="text-lg font-bold text-[#141210] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#5C554E] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div className="mb-24 bg-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#E6DFD5]">
            <div className="max-w-2xl mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
                Production Stack
              </span>
              <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-3 text-balance">
                Technologies We Work With Daily
              </h2>
              <p className="text-sm text-[#5C554E]">
                We choose battle-tested, active open-source technologies with extensive ecosystem support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECH_STACK_CATEGORIES.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-white p-6 rounded-xl border border-[#E6DFD5] shadow-xs"
                >
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#141210] pb-3 mb-3 border-b border-[#F0EAE1]">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2 text-xs text-[#5C554E]">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section with Placeholders */}
          <div className="mb-20">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
                Engineering Team
              </span>
              <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-3 text-balance">
                Senior Engineers Focused on Delivery
              </h2>
              <p className="text-sm text-[#5C554E]">
                Every engagement is staffed by practitioners with direct production system experience.
              </p>
            </div>

            {/* Team grid with [NAME] and [ROLE] placeholders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="bg-white p-6 rounded-xl border border-[#E6DFD5] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {/* Neutral Avatar Placeholder */}
                    <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center text-[#5C554E] font-mono text-sm font-semibold mb-4">
                      {member.name}
                    </div>
                    <span className="text-base font-bold text-[#141210] block mb-1">
                      {member.name}
                    </span>
                    <span className="text-xs font-medium text-[#FF4D00] block mb-3">
                      {member.role}
                    </span>
                    <p className="text-xs text-[#5C554E] leading-relaxed">
                      {member.focus}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F0EAE1] text-[11px] text-[#8A8177]">
                    Jakarta, Indonesia
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="bg-[#141210] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-white">
              Want to see if we are a good fit?
            </h3>
            <p className="text-sm text-[#B3A89C] max-w-md">
              Book a 15-minute introductory technical call with one of our lead engineers.
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate('/contact')}
            >
              Book an engineering review
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
