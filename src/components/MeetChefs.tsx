import React from 'react';
import { CHEFS } from '../data/restaurantData';
import { motion } from 'motion/react';

export const MeetChefs: React.FC = () => {
  return (
    <section id="chefs" className="py-20 md:py-28 bg-[#F4F1E8] border-b border-[#CDD2C9] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto space-y-3 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            BEHIND THE KITCHEN
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Our Staff
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Dedicated culinary professionals bringing heart, skill, and creative passion to every dish served.
          </p>
        </motion.div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEFS.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[#E8E2D0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#CDD2C9] hover:border-[#B8A678] group flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-80 sm:h-96 overflow-hidden bg-[#2D3A1F]">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>

                  {/* Name & Role overlay on image bottom */}
                  <div className="absolute bottom-4 left-6 right-6 text-[#F4F1E8]">
                    <span className="text-xs font-heading font-bold uppercase text-[#B8A678] tracking-wider block">
                      {chef.role}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-[#F4F1E8]">
                      {chef.name}
                    </h3>
                  </div>
                </div>

                {/* Short Bio */}
                <div className="p-6">
                  <p className="font-sans text-sm text-[#2D3A1F]/80 leading-relaxed font-light">
                    {chef.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


