import React from 'react';
import { HOW_IT_WORKS } from '../data/restaurantData';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] relative overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header (Image 2 style) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-2 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            SIMPLE STEPS
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#2D3A1F] tracking-tight">
            How it works
          </h2>
          <p className="font-sans text-[#2D3A1F]/70 text-base md:text-lg font-light">
            No confusion or delays. Just seamless, warm, and memorable dining.
          </p>
        </motion.div>

        {/* 2-Column Split Layout with Equal Aligned Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Image with Floating Card Overlay (Matching Height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative flex flex-col h-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#CDD2C9] bg-[#E8E2D0] flex-1 min-h-[380px] sm:min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Flavoria Restaurant Dining Ambiance"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/40 via-transparent to-transparent"></div>

              {/* Floating Fast Reservation Badge */}
              <div className="absolute bottom-6 right-6 bg-[#F4F1E8] p-5 rounded-2xl shadow-2xl border border-[#CDD2C9] max-w-[220px] space-y-2 hidden sm:block">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-[#B8A678] block">
                  FAST RESERVATION
                </span>
                <p className="text-xs text-[#2D3A1F] font-medium leading-snug">
                  Instant confirmation for your preferred time & table.
                </p>
                <div className="h-1.5 w-full bg-[#CDD2C9]/40 rounded-full overflow-hidden">
                  <div className="h-full bg-[#B8A678] w-3/4"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vertical Steps (Matching Height & Spacing) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between pl-0 lg:pl-4"
          >
            <div className="relative border-l-2 border-[#CDD2C9] pl-8 space-y-8 my-auto">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="relative group">
                  
                  {/* Subtle Accent Indicator on Vertical Line */}
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#F4F1E8] border-2 border-[#B8A678] group-hover:bg-[#B8A678] transition-colors"></div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#B8A678]">
                      STEP {item.step}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#2D3A1F]/75 text-sm md:text-base leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
