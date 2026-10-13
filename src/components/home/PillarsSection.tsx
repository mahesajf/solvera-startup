import React from 'react';
import { Video, Sliders, Plug } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
            Engineering Collaboration
          </span>
          <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-4 text-balance">
            Simple, Disciplined, and Built for Product Teams
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E]">
            We integrate cleanly with your engineers. No corporate layers, no ticket ping-pong, and no delays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pillar 1 */}
          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D00] text-[#141210] flex items-center justify-center mb-6 shadow-sm">
              <Video className="w-6 h-6 text-[#141210]" />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-[#141210] mb-2">
              In Sync
            </h3>
            <p className="text-sm text-[#5C554E] leading-relaxed">
              We join your daily standups or weekly sprint planning. Need to review a complex architectural question? Quick 15-minute video calls are always welcome.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D00] text-[#141210] flex items-center justify-center mb-6 shadow-sm">
              <Sliders className="w-6 h-6 text-[#141210]" />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-[#141210] mb-2">
              Toolset Alignment
            </h3>
            <p className="text-sm text-[#5C554E] leading-relaxed">
              We work inside your existing GitHub, GitLab, Jira, or Linear workspaces. We adapt to your code review conventions without forcing unfamiliar tools.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-[#FF4D00] text-[#141210] flex items-center justify-center mb-6 shadow-sm">
              <Plug className="w-6 h-6 text-[#141210]" />
            </div>
            <h3 className="text-lg font-bold tracking-tight text-[#141210] mb-2">
              Team Integration
            </h3>
            <p className="text-sm text-[#5C554E] leading-relaxed">
              Solvera acts as an extension of your engineering team. Your developers learn best practices alongside our engineers during every pull request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
