import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../../types';

interface FaqAccordionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers about how we structure deliverables, cloud accounts, and team communication.',
}) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#FF4D00] block mb-2">
            Questions & Answers
          </span>
          <h2 className="text-fluid-h2 font-bold tracking-tight text-[#141210] mb-3 text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-[#5C554E] max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Clean list with + / - toggles matching screenshot 3 */}
        <div className="space-y-3">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-[#E6DFD5] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#141210] hover:text-[#FF4D00] transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D00]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="pr-4">{item.question}</span>
                  <span className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E6DFD5] flex items-center justify-center shrink-0 text-[#141210]">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#FF4D00]" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-6 pt-1 text-sm text-[#5C554E] leading-relaxed border-t border-[#F0EAE1]"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
