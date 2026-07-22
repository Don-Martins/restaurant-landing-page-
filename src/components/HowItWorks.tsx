import React from 'react';
import { HOW_IT_WORKS } from '../data/restaurantData';
import { CalendarCheck, MapPin, UtensilsCrossed, Smile, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [CalendarCheck, MapPin, UtensilsCrossed, Smile];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-neutral-100 relative overflow-hidden">
      {/* Background Decorative Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            How Your Dining Experience Works
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
            From instant online table reservations to your final dessert bite, we ensure a seamless, luxurious culinary journey.
          </p>
        </motion.div>

        {/* Interactive Image-Based Journey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {HOW_IT_WORKS.map((item, idx) => {
            const IconComp = stepIcons[idx] || CalendarCheck;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-200/80 flex flex-col justify-between transform hover:-translate-y-2 hover:border-[#D4AF37]/60"
              >
                {/* Step Image Showcase Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Step Number Pill Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#111111] font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-white/40">
                    <span className="w-2 h-2 rounded-full bg-[#FF5B3E] animate-pulse"></span>
                    STEP {item.step}
                  </div>

                  {/* Icon Badge Overlay */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-[#D4AF37] text-white flex items-center justify-center shadow-lg group-hover:bg-[#FF5B3E] group-hover:rotate-6 transition-all duration-300">
                    <IconComp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Step Text Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#111111] group-hover:text-[#FF5B3E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-neutral-600 text-sm leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Progress Accent Indicator */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-heading uppercase tracking-wider">
                    <span>Phase {idx + 1} of 4</span>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

