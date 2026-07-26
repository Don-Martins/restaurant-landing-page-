import React from 'react';
import { HOW_IT_WORKS } from '../data/restaurantData';
import { Calendar01Icon, Location01Icon, Restaurant01Icon, FavouriteIcon, ArrowRight01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

export const HowItWorks: React.FC = () => {
  const stepIcons = [Calendar01Icon, Location01Icon, Restaurant01Icon, FavouriteIcon];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#E8E2D0] border-b border-[#CDD2C9] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            How Your Dining Experience Works
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            From instant online table reservations to your final dessert bite, we ensure a seamless, luxurious culinary journey.
          </p>
        </motion.div>

        {/* Interactive Image-Based Journey Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {HOW_IT_WORKS.map((item, idx) => {
            const IconComp = stepIcons[idx] || Calendar01Icon;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#F4F1E8] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#CDD2C9] flex flex-col justify-between transform hover:-translate-y-2 hover:border-[#B8A678]"
              >
                {/* Step Image Showcase Header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-[#2D3A1F]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>

                  {/* Top Step Number Pill Badge */}
                  <div className="absolute top-4 left-4 bg-[#F4F1E8]/90 backdrop-blur-md text-[#2D3A1F] font-heading font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#CDD2C9]">
                    <span className="w-2 h-2 rounded-full bg-[#B8A678] animate-pulse"></span>
                    STEP {item.step}
                  </div>

                  {/* Icon Badge Overlay */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 rounded-2xl bg-[#B8A678] text-[#2D3A1F] flex items-center justify-center shadow-xl group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] group-hover:rotate-6 transition-all duration-300 border border-[#2D3A1F]/10">
                    <IconComp size={32} />
                  </div>
                </div>

                {/* Step Text Body */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between bg-[#F4F1E8]">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#2D3A1F]/75 text-sm leading-relaxed mt-2 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Progress Accent Indicator */}
                  <div className="pt-4 border-t border-[#CDD2C9]/60 flex items-center justify-between text-xs text-[#2D3A1F]/60 font-heading uppercase tracking-wider">
                    <span>Phase {idx + 1} of 4</span>
                    <ArrowRight01Icon size={16} className="text-[#B8A678] group-hover:translate-x-1.5 transition-transform" />
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


