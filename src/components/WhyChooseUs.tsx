import React from 'react';
import { Leaf, Award, Zap, Heart, ShieldCheck, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../data/restaurantData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Leaf: Leaf,
    Award: Award,
    Zap: Zap,
    Heart: Heart,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FCFAF7] border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#FF5B3E] tracking-[0.25em] uppercase block">
            THE FLAVORIA DIFFERENCE
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Why People Love Dining Here
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
            Every plate is prepared fresh, seasoned with care, and served with the kind of hospitality that keeps guests coming back for generations.
          </p>
        </motion.div>

        {/* 6 Unique Image Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Utensils;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-200/80 hover:border-[#D4AF37] group flex flex-col justify-between transform hover:-translate-y-2"
              >
                <div>
                  {/* Image Header with Gradient Overlay */}
                  <div className="relative h-48 overflow-hidden bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md text-[#D4AF37] flex items-center justify-center shadow-lg group-hover:bg-[#FF5B3E] group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Copy */}
                  <div className="p-6 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#111111] group-hover:text-[#FF5B3E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between text-xs font-heading font-semibold text-neutral-400 group-hover:text-[#111111] transition-colors">
                  <span>EXCELLENCE GUARANTEED</span>
                  <span className="text-[#D4AF37] font-bold">★ ★ ★ ★ ★</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

