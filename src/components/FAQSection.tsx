import React, { useState } from 'react';
import { FAQS } from '../data/restaurantData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

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
    <section id="faq" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
            Everything you need to know about dining, reservations, parking, and catering services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategoryFilter(cat.value)}
              className={`font-heading text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all cursor-pointer ${
                categoryFilter === cat.value
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
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
                className="bg-white rounded-2xl border border-neutral-200/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-heading text-base md:text-lg font-bold text-[#111111] hover:text-[#FF5B3E] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen ? 'bg-[#FF5B3E] text-white rotate-180' : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-600 font-sans leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in duration-200">
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
