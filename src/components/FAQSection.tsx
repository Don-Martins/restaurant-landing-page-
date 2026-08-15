import React, { useState } from 'react';
import { FAQS } from '../data/restaurantData';
import { ArrowDown01Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12 max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-2xl md:text-4xl font-semibold text-[#2D3A1F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light max-w-2xl mx-auto">
            Find quick answers about reservations, opening hours, delivery, and dietary options.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-[#E8E2D0] rounded-2xl border border-[#CDD2C9] shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-heading text-base md:text-lg font-semibold text-[#2D3A1F] hover:text-[#B8A678] transition-colors">
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

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-sm sm:text-base text-[#2D3A1F]/80 font-sans leading-relaxed border-t border-[#CDD2C9]/60 pt-4 font-light"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
