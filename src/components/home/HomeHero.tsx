import React from 'react';
import { Button } from '../common/Button';
import { HeroStarburstGraphic } from '../common/HeroStarburstGraphic';
import { AppRoute } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HomeHeroProps {
  onNavigate: (route: AppRoute) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6 max-w-2xl">
            {/* Context kicker text (no pill badge) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#FF4D00]">
              <span>DevOps</span>
              <span aria-hidden="true">·</span>
              <span>Cloud Infrastructure</span>
              <span aria-hidden="true">·</span>
              <span>Web Development</span>
            </div>

            <h1 className="text-fluid-hero font-bold tracking-tight text-[#141210] text-balance">
              Reliable DevOps. Resilient Web Systems.
            </h1>

            <p className="text-base sm:text-lg text-[#5C554E] leading-relaxed">
              Solvera Technology Labs builds automated CI/CD pipelines, modern cloud infrastructure, and fast web products for startups and growing teams that cannot afford downtime.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('/contact')}
              >
                Book a free infrastructure review
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('/services')}
              >
                Explore our services
              </Button>
            </div>

            {/* Credibility highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5C554E]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00]" />
                Infrastructure as Code (Terraform)
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00]" />
                Sub-minute build caching
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D00]" />
                Zero vendor lock-in
              </span>
            </div>
          </div>

          {/* Right Column: 3D Amber Starburst Artwork matching design */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroStarburstGraphic />
          </div>
        </div>

        {/* Technology Partner / Toolset Monochrome Strip */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-[#E6DFD5]">
          <p className="text-xs font-medium text-center uppercase tracking-wider text-[#8A8177] mb-6">
            Production Tooling We Build and Automate With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {['AWS', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'React & Next.js', 'PostgreSQL'].map((tech) => (
              <span
                key={tech}
                className="font-display text-sm sm:text-base font-semibold tracking-tight text-[#5C554E] hover:text-[#141210] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
