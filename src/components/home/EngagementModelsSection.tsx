import React from 'react';
import { Button } from '../common/Button';
import { AppRoute } from '../../types';
import { Check } from 'lucide-react';

interface EngagementModelsSectionProps {
  onNavigate: (route: AppRoute) => void;
}

export const EngagementModelsSection: React.FC<EngagementModelsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#141210] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
            Pricing & Engagement
          </span>
          <h2 className="text-fluid-h2 font-bold tracking-tight text-white mb-4 text-balance">
            Transparent Engineering Engagement Models
          </h2>
          <p className="text-sm sm:text-base text-[#B3A89C]">
            Predictable costs with clear milestones. No hidden fees or locked contracts.
          </p>
        </div>

        {/* Two Structured Cards matching screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Standard Sprint */}
          <div className="bg-[#1C1814] border border-[#2E2721] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF4D00] block mb-2">
                Fixed-Scope Deliverable
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                Standard Sprint
              </h3>
              <p className="text-sm text-[#8A8177] mb-6">
                For focused infrastructure setup or complete web projects
              </p>

              <div className="mb-8 pb-6 border-b border-[#2E2721]">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                  Fixed Scope
                </span>
                <span className="text-xs text-[#A89F95] block mt-1">
                  Priced per milestone with verified handover criteria
                </span>
              </div>

              <ul className="space-y-3.5 text-sm text-[#D8CFBF] mb-8">
                {[
                  'Complete architectural specification before coding',
                  'Turnaround in 2 to 4 weeks depending on scope',
                  'Automated GitHub Actions CI/CD or Terraform build',
                  '1 weekly engineering sync + direct Slack thread',
                  '100 percent repository and cloud credential transfer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#FF4D00]/20 text-[#FF4D00] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => onNavigate('/contact')}
              >
                Schedule sprint scoping call
              </Button>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="text-xs text-[#A89F95] hover:text-white transition-colors text-center py-1"
              >
                or ask a question about scope
              </button>
            </div>
          </div>

          {/* Card 2: Dedicated Pod (Featured) */}
          <div className="bg-white text-[#141210] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative border-2 border-[#FF4D00]">
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-8 bg-[#141210] text-[#FF4D00] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border border-[#2E2721]">
              Recommended for Teams
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF4D00] block mb-2">
                Continuous Partnership
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#141210] mb-1">
                Dedicated Pod
              </h3>
              <p className="text-sm text-[#5C554E] mb-6">
                Ongoing DevOps infrastructure maintenance and web feature delivery
              </p>

              <div className="mb-8 pb-6 border-b border-[#E6DFD5]">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#141210] font-mono">
                  Monthly Retainer
                </span>
                <span className="text-xs text-[#5C554E] block mt-1">
                  Adjust hours or cancel with 14-day notice
                </span>
              </div>

              <ul className="space-y-3.5 text-sm text-[#38332D] mb-8">
                {[
                  'Continuous Kubernetes and cloud environment upkeep',
                  'Full-stack React / TypeScript application development',
                  'Guaranteed priority Slack response during business hours',
                  '2 weekly architecture syncs + pull request reviews',
                  'Incident triage and automated rollback assistance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#141210] text-[#FF4D00] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Button
                variant="dark"
                size="md"
                className="w-full"
                onClick={() => onNavigate('/contact')}
              >
                Inquire about a dedicated pod
              </Button>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className="text-xs text-[#5C554E] hover:text-[#141210] transition-colors text-center py-1 font-medium"
              >
                or review sample agreement
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-[#8A8177] mt-12">
          Need a custom scope or single infrastructure audit? Book a free discovery call today.
        </p>
      </div>
    </section>
  );
};
