import React from 'react';
import { CHEFS } from '../data/restaurantData';
import { Award01Icon, StarIcon } from 'hugeicons-react';
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
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#B8A678] tracking-[0.25em] uppercase block">
            THE ARTISTS BEHIND THE FLAVOR
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-normal text-[#2D3A1F] tracking-tight">
            Meet Our Culinary Masters
          </h2>
          <p className="font-sans text-[#2D3A1F]/80 text-base md:text-lg font-light">
            Our kitchen is led by world-class chefs passionate about artisanal ingredients and flavor perfection.
          </p>
        </motion.div>

        {/* Chefs Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHEFS.map((chef, index) => (
            <motion.div
              key={chef.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-[#E8E2D0] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#CDD2C9] hover:border-[#B8A678] group flex flex-col justify-between transform hover:-translate-y-2"
            >
              <div>
                {/* Chef Image with Experience Pill */}
                <div className="relative h-80 sm:h-96 overflow-hidden bg-[#2D3A1F]">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A1F]/80 via-[#2D3A1F]/20 to-transparent"></div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-[#B8A678] text-[#2D3A1F] font-heading text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 border border-[#2D3A1F]/10">
                    <StarIcon size={14} className="fill-current" />
                    {chef.experienceYears} Years Exp.
                  </div>

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

                {/* Chef Bio & Specialty */}
                <div className="p-6 space-y-4">
                  <div className="inline-block bg-[#2D3A1F]/10 text-[#2D3A1F] text-xs font-heading font-bold px-3 py-1 rounded-full border border-[#2D3A1F]/20">
                    Specialty: {chef.specialty}
                  </div>

                  <p className="font-sans text-sm text-[#2D3A1F]/80 leading-relaxed font-light">
                    "{chef.bio}"
                  </p>
                </div>
              </div>

              {/* Awards List */}
              <div className="p-6 pt-0 border-t border-[#CDD2C9]/60 mt-4 space-y-2">
                <div className="text-[11px] font-heading font-bold text-[#2D3A1F]/60 uppercase tracking-wider flex items-center gap-1.5">
                  <Award01Icon size={14} className="text-[#B8A678]" /> Accolades & Awards
                </div>
                <div className="space-y-1">
                  {chef.awards.map((award, idx) => (
                    <div key={idx} className="text-xs text-[#2D3A1F] font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B8A678]"></span>
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};


