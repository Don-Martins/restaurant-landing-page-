import React, { useState } from 'react';
import { FAQS } from '../data/restaurantData';
import { ArrowDown01Icon, HelpCircleIcon } from 'hugeicons-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    { label: 'All Questions', value: 'all' },
    { label: 'Reservations', value: 'reservations' },
    { label: 'Parking & Valet', value: 'parking' },
    { label: 'Delivery & Takeaway', value: 'delivery' },
    { label: 'Dietary & Menu', value: 'dietary' },
    { label: 'Private Events', value: 'events' },
  ];

  const filteredFaqs = categoryFilter === 'all'
    ? FAQS
    : FAQS.filter((faq) => faq.category === categoryFilter);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] select-none">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Everything you need to know about dining, reservations, parking, and catering services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.value)}
              className={`font-heading text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                categoryFilter === cat.value
                  ? 'bg-[#2D3A1F] text-[#F4F1E8] shadow-md'
                  : 'bg-[#E8E2D0] text-[#2D3A1F] hover:bg-[#F4F1E8] border border-[#CDD2C9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#E8E2D0] rounded-2xl border border-[#CDD2C9] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-heading text-base md:text-lg font-bold text-[#2D3A1F] hover:text-[#B8A678] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen ? 'bg-[#2D3A1F] text-[#F4F1E8] rotate-180' : 'bg-[#F4F1E8] text-[#2D3A1F]'
                    }`}
                  >
                    <ArrowDown01Icon size={16} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-[#2D3A1F]/80 font-sans leading-relaxed border-t border-[#CDD2C9]/60 pt-4 animate-in fade-in duration-200 font-light">
                    {faq.answer}
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

