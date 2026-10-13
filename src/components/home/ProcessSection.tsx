import React from 'react';
import { Terminal, ShieldCheck, GitBranch, Check, Layers, Cpu, Server } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dark container with rounded-3xl corners matching design screenshot 1 */}
        <div className="bg-[#141210] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          {/* Subtle warm background flourish */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#FF4D00]/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
              Engineering Workflow
            </span>
            <h2 className="text-fluid-h2 font-bold tracking-tight text-white mb-4 text-balance">
              A Structured, Predictable Delivery Partner
            </h2>
            <p className="text-sm sm:text-base text-[#B3A89C]">
              We work in clear, documented milestones. No ambiguous handoffs, no undocumented cloud scripts, and no surprises on your cloud bill.
            </p>
          </div>

          {/* 3 Step White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-white text-[#141210] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-[#E6DFD5]/40 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="text-xs font-mono font-semibold text-[#FF4D00] uppercase tracking-wider block mb-2">
                  Phase 01
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#141210] mb-3">
                  Audit & Architecture
                </h3>
                <p className="text-sm text-[#5C554E] leading-relaxed mb-6">
                  We inspect your current cloud setup, repository structure, and deployment pain points to define a fixed-scope technical roadmap.
                </p>
              </div>

              {/* Wireframe Mockup UI */}
              <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E6DFD5] text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E6DFD5]">
                  <span className="font-semibold text-[#141210]">Audit Checklist</span>
                  <span className="text-[11px] font-medium text-[#141210] bg-[#F5E5CC] px-2 py-0.5 rounded">
                    Phase 1
                  </span>
                </div>
                <div className="space-y-2 text-[#5C554E]">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#FF4D00]/15 text-[#FF4D00] flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span>IAM Policy & Security Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#FF4D00]/15 text-[#FF4D00] flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span>CI/CD Duration Profiling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#FF4D00]/15 text-[#FF4D00] flex items-center justify-center text-[10px] font-bold">✓</span>
                    <span>Cost Optimization Map</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white text-[#141210] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-[#E6DFD5]/40 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="text-xs font-mono font-semibold text-[#FF4D00] uppercase tracking-wider block mb-2">
                  Phase 02
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#141210] mb-3">
                  Build & Automate
                </h3>
                <p className="text-sm text-[#5C554E] leading-relaxed mb-6">
                  We write modular Terraform scripts, containerize workloads, and configure GitHub Actions with automated linting and rollbacks.
                </p>
              </div>

              {/* Terminal Pipeline Run UI */}
              <div className="bg-[#141210] text-[#FAF8F5] rounded-xl p-4 font-mono text-xs border border-[#26201B]">
                <div className="flex items-center gap-2 pb-2 mb-2 border-b border-[#2A231C] text-[11px] text-[#A89F95]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D00]" />
                  <span>deploy-production.yml</span>
                </div>
                <div className="space-y-1.5 text-[11px]">
                  <div className="text-[#8AD177]">✓ terraform plan: 0 to destroy</div>
                  <div className="text-[#8AD177]">✓ docker build: 48s (cached)</div>
                  <div className="text-[#FFB085]">▶ e2e smoke tests running...</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white text-[#141210] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-md border border-[#E6DFD5]/40 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="text-xs font-mono font-semibold text-[#FF4D00] uppercase tracking-wider block mb-2">
                  Phase 03
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#141210] mb-3">
                  Verify & Handover
                </h3>
                <p className="text-sm text-[#5C554E] leading-relaxed mb-6">
                  We conduct live failover tests, deliver repository documentation, and transfer all cloud credentials directly to your team.
                </p>
              </div>

              {/* Handover Status UI */}
              <div className="bg-[#FAF8F5] rounded-xl p-4 border border-[#E6DFD5] text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E6DFD5]">
                  <span className="font-semibold text-[#141210]">Deliverable State</span>
                  <span className="text-[11px] font-semibold text-[#141210] bg-[#8AD177]/30 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <div className="space-y-2 text-[#5C554E]">
                  <div className="flex items-center justify-between">
                    <span>Zero Downtime Rollout</span>
                    <span className="font-mono font-semibold text-[#141210]">100%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Git Documentation</span>
                    <span className="font-mono font-semibold text-[#141210]">Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Account Ownership</span>
                    <span className="font-mono font-semibold text-[#141210]">Client Direct</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
