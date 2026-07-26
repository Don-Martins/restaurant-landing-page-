import React from 'react';
import { Leaf01Icon, Award01Icon, FlashIcon, FavouriteIcon, Shield01Icon, Restaurant01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
    Leaf: Leaf01Icon,
    Award: Award01Icon,
    Zap: FlashIcon,
    Heart: FavouriteIcon,
    ShieldCheck: Shield01Icon
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#E8E2D0] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            THE FLAVORIA DIFFERENCE
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Why People Love Dining Here
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Every plate is prepared fresh, seasoned with care, and served with the kind of hospitality that keeps guests coming back for generations.
          </p>
        </motion.div>

        {/* 6 Unique Image Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Restaurant01Icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F4F1E8] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#CDD2C9] hover:border-[#B8A678] group flex flex-col justify-between transform hover:-translate-y-2"
              >
                <div>
                  {/* Image Header with Gradient Overlay */}
                  <div className="relative h-48 overflow-hidden bg-[#2D3A1F]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-2xl bg-[#F4F1E8]/95 backdrop-blur-md text-[#B8A678] flex items-center justify-center shadow-xl group-hover:bg-[#2D3A1F] group-hover:text-[#F4F1E8] transition-all duration-300 border border-[#CDD2C9]">
                      <IconComponent size={32} />
                    </div>
                  </div>

                  {/* Title & Copy */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#2D3A1F] group-hover:text-[#B8A678] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#2D3A1F]/75 text-sm leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-[#CDD2C9]/60 flex items-center justify-between text-xs font-heading font-semibold text-[#2D3A1F]/60 group-hover:text-[#2D3A1F] transition-colors">
                  <span>EXCELLENCE GUARANTEED</span>
                  <span className="text-[#B8A678] font-bold">★ ★ ★ ★ ★</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


