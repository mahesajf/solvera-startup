import React from 'react';
import { Button } from '../common/Button';
import { AppRoute } from '../../types';

interface CtaBannerProps {
  onNavigate: (route: AppRoute) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-12 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large rounded callout banner matching screenshot 3 */}
        <div className="bg-[#141210] text-[#FAF8F5] rounded-3xl p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle warm glow background */}
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FF4D00]/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00]">
              Get Started
            </span>

            <h2 className="text-fluid-h2 font-bold tracking-tight text-white text-balance">
              Ready for a 15-minute engineering intro?
            </h2>

            <p className="text-sm sm:text-base text-[#B3A89C] leading-relaxed max-w-xl">
              Tell us about your cloud infrastructure or web development roadmap. We respond within 24 business hours with concrete recommendations.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('/contact')}
              >
                Book a free infrastructure review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
