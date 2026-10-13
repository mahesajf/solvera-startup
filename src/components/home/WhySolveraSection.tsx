import React from 'react';
import { CORE_VALUES } from '../../data/companyData';

export const WhySolveraSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
            Why Solvera
          </span>
          <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-4 text-balance">
            Concrete Engineering Standards, Not Buzzwords
          </h2>
          <p className="text-sm sm:text-base text-[#5C554E]">
            We operate with clear technical rules designed to keep your systems stable, maintainable, and cost-efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CORE_VALUES.map((item) => (
            <div
              key={item.number}
              className="bg-white p-8 rounded-2xl border border-[#E6DFD5] shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-[#FF4D00] block mb-3">
                  Principle {item.number}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#141210] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5C554E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
