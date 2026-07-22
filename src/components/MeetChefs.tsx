import React from 'react';
import { CHEFS } from '../data/restaurantData';
import { Award, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const MeetChefs: React.FC = () => {
  return (
    <section id="chefs" className="py-20 md:py-28 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="font-heading text-xs font-bold text-[#FF5B3E] tracking-[0.25em] uppercase block">
            THE ARTISTS BEHIND THE FLAVOR
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#111111] tracking-tight">
            Meet Our Culinary Masters
          </h2>
          <p className="font-sans text-neutral-600 text-base md:text-lg">
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
              className="bg-[#FCFAF7] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-neutral-200/80 hover:border-[#D4AF37]/60 group flex flex-col justify-between transform hover:-translate-y-2"
            >
              <div>
                {/* Chef Image with Experience Pill */}
                <div className="relative h-80 sm:h-96 overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-white font-heading text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    {chef.experienceYears} Years Exp.
                  </div>

                  {/* Name & Role overlay on image bottom */}
                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="text-xs font-heading font-semibold uppercase text-[#FFD84D] tracking-wider block">
                      {chef.role}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {chef.name}
                    </h3>
                  </div>
                </div>

                {/* Chef Bio & Specialty */}
                <div className="p-6 space-y-4">
                  <div className="inline-block bg-[#FF5B3E]/10 text-[#FF5B3E] text-xs font-heading font-semibold px-3 py-1 rounded-md">
                    Specialty: {chef.specialty}
                  </div>

                  <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                    "{chef.bio}"
                  </p>
                </div>
              </div>

              {/* Awards List */}
              <div className="p-6 pt-0 border-t border-neutral-200/60 mt-4 space-y-2">
                <div className="text-[11px] font-heading font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> Accolades & Awards
                </div>
                <div className="space-y-1">
                  {chef.awards.map((award, idx) => (
                    <div key={idx} className="text-xs text-neutral-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
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

